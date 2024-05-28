/** @jsxImportSource frog/jsx */
import { Button, FrameResponse, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'
import { neynar as neynarMiddleware, NeynarUser as NeynarMiddlewareUser } from 'frog/middlewares'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'

import { NeynarAPIClient } from '@neynar/nodejs-sdk'
import type { User as NeynarUserV1 } from '@neynar/nodejs-sdk/build/neynar-api/v1'
import type { User as NeynarUserV2 } from '@neynar/nodejs-sdk/build/neynar-api/v2'

import { Box, Heading, Text, VStack, vars } from "../../frog"

import { APP_URL, OPENSEA_COLLECTION, isNumeric } from '../../utils/shared'

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY ?? ""
const NEYNAR_SIGNER = process.env.NEYNAR_SIGNER ?? ""

const neynarClient = new NeynarAPIClient(NEYNAR_API_KEY);

type State = {
  confirm: {
    interactor: NeynarMiddlewareUser,
    devfolio: NeynarUserV1,
    searchUser: NeynarUserV2,
  } | null
}

const app = new Frog<{ State: State }>({
  basePath: '/api',
  browserLocation: '/:path',
  ui: { vars },
  initialState: {}
}).use(
  neynarMiddleware({
    apiKey: NEYNAR_API_KEY,
    features: ['interactor'],
  }),
)

// COMPONENTS START

const ErrorResponse = (error: string): FrameResponse => {
  return {
    title: 'Error',
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="background"

      >
        <Heading>🛑 Error</Heading>
        <Text color="text200" size="18">
          {error}
        </Text>
      </Box>
    ),
    intents: [
      <Button.Reset key={1}>Try again</Button.Reset>
    ]
  }
}

// COMPONENTS END

// FRAMES

app.frame('/', (c) => {
  return c.res({
    title: 'SupaBald Jesse',
    // image: `/nft-fc.gif`,
    image: `${APP_URL}/nft-fc.gif`,
    intents: [
      <Button.Link key={1} href={APP_URL}>Mint your NFT</Button.Link>,
      <Button key={2} action={'/nominate'}>Nominate a fren</Button>,
      <Button.Link key={3} href={OPENSEA_COLLECTION}>View collection</Button.Link>,
    ]
  })
})

app.frame('/nominate', (c) => {
  return c.res({
    title: 'SupaBald Jesse | Nominate',
    image: (
      <Box
        grow
        alignVertical="center"
        alignHorizontal='center'
        backgroundColor="background"
        padding="32"
      >
        <VStack gap="8">
          <Heading>Nominate a fren</Heading>
          <Text color="text200" size="20">
            Search by username or FID, and invite them to participate in the Onchain Summer Buildathon and mint their SupaBald Jesse NFT.
          </Text>
        </VStack>
      </Box>
    ),
    intents: [
      <TextInput key={1} placeholder="Farcaster username or FID" />,
      <Button.Reset key={2}>Back</Button.Reset>,
      <Button key={3} action='/confirm'>Search</Button>,
    ]
  })
})

app.frame('/confirm', async (c) => {
  const interactor = c.var.interactor
  if (!interactor) {
    // @todo Update Error Message
    return c.res(ErrorResponse('Invalid Interactor'))
  }

  const devfolioLookupResponse = await neynarClient.lookupUserByUsername('devfolio').catch(() => false)
  if (typeof devfolioLookupResponse === 'boolean') {
    return c.res(ErrorResponse('Invalid Devfolio'))
  }
  const devfolio = devfolioLookupResponse.result.user

  let searchUser: NeynarUserV2 | undefined;

  if (!c.inputText) {
    // @todo Update Error Message
    return c.res(ErrorResponse('Empty Input'))
  }

  const isSearchInputNumber = isNumeric(c.inputText)

  if (isSearchInputNumber) {
    const searchUserByFIDResult = await neynarClient.fetchBulkUsers([Number(c.inputText)]).catch(() => false)

    if (typeof searchUserByFIDResult != 'boolean' && searchUserByFIDResult.users.length > 0) {
      searchUser = searchUserByFIDResult.users?.[0]
    }
  } else {
    const searchUserByUsernameResult = await neynarClient.searchUser(c.inputText).catch(() => false)

    if (typeof searchUserByUsernameResult != 'boolean' && searchUserByUsernameResult?.result?.users?.length > 0) {
      searchUser = searchUserByUsernameResult?.result?.users?.[0]
    }
  }

  if (!searchUser) {
    return c.res(ErrorResponse(`We could not find @${c.inputText} on Farcaster. Please double check the username and try again.`))
  }

  // Set the state
  const state = c.deriveState((previousState) => {
    previousState.confirm = {
      devfolio: devfolio,
      interactor,
      searchUser
    }
  })

  const confirmState = state.confirm

  if (!confirmState) {
    return c.res(ErrorResponse('Invalid State'))
  }

  return c.res({
    title: 'SupaBald Jesse | Preview Cast',
    image: (
      <Box
        grow
        alignVertical="center"
        alignHorizontal='center'
        backgroundColor="background"
        padding="32"
      >
        <VStack gap="8">
          {/* <Heading>🛠️ Cast from {state.confirm?.devfolio.username} on behalf of {state.confirm?.interactor.username} to {state.confirm?.searchUser?.username} 🛠️</Heading> */}
          <Heading >Preview Cast (from @{confirmState.devfolio.username})</Heading>
          <VStack gap={'4'}>
            <Text size={'20'} color={"text200"}>🔵 gm @{confirmState.searchUser.username}. @{confirmState.interactor.username} thinks {"you're"} a super based builder, and has nominated you for the Onchain Summer Buildathon.</Text>
            <Text size={'20'} color={"text200"}>Hop in, mint your SupaBald Jesse NFT, and just build it. LFG</Text>
          </VStack>
        </VStack>
      </Box>
    ),
    intents: [
      <Button key={1} action='/nominate'>Back</Button>,
      <Button key={2} action='/cast'>Cast!</Button>,
    ]
  })
})

app.frame('/cast', (c) => {
  const state = c.previousState
  const confirmState = state.confirm;

  if (!confirmState) {
    return c.res(ErrorResponse('Invalid State'))
  }

  const cast =
    `🔵 gm @${confirmState.searchUser.username}. @${confirmState.interactor.username} thinks you're a super based builder, and has nominated you for the Onchain Summer Buildathon.

Hop in, mint your SupaBald Jesse NFT, and just build it. LFG

https://letsgetjessebald.com/`

  neynarClient.publishCast(NEYNAR_SIGNER, cast, {
    embeds: [{ url: 'https://letsgetjessebald.com/' }]
  })

  return c.res({
    title: 'SupaBald Jesse | Cast Sent',
    image: (
      <Box
        grow
        alignHorizontal="center"
        alignVertical="center"
        backgroundColor="background"

      >
        <Heading>✅</Heading>
      </Box>
    ),
    intents: [
      <Button.Reset key={1}>👍</Button.Reset>,
      <Button key={2} action='/nominate'>Nominate another fren</Button>,
    ]
  })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
