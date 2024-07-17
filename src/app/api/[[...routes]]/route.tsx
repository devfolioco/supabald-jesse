/** @jsxImportSource frog/jsx */
import { Button, FrameResponse, Frog, TextInput } from 'frog';
import { handle } from 'frog/next';
import { neynar as neynarMiddleware, NeynarUser as NeynarMiddlewareUser } from 'frog/middlewares';
import { devtools } from 'frog/dev';
import { serveStatic } from 'frog/serve-static';
import { v4 } from 'uuid';

import { NeynarAPIClient } from '@neynar/nodejs-sdk';
import type { User as NeynarUserV1 } from '@neynar/nodejs-sdk/build/neynar-api/v1';
import type { User as NeynarUserV2 } from '@neynar/nodejs-sdk/build/neynar-api/v2';

import { Box, Heading, Text, VStack, vars } from '../../frog';

import { APP_URL, isNumeric } from '../../utils/shared';
import { OPENSEA_COLLECTION, BLOG_URL, PROJECTS_URL } from '@/app/constants/urls';

const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY ?? '';
const NEYNAR_SIGNER = process.env.NEYNAR_SIGNER ?? '';

const neynarClient = new NeynarAPIClient(NEYNAR_API_KEY);

type State = {
  confirm: {
    interactor: NeynarMiddlewareUser;
    devfolio: NeynarUserV1;
    searchUser: NeynarUserV2;
  } | null;
};

const app = new Frog<{ State: State }>({
  basePath: '/api',
  browserLocation: '/:path',
  ui: { vars },
  initialState: {},
  headers: {
    'cache-control': 'max-age=0',
  },
}).use(
  neynarMiddleware({
    apiKey: NEYNAR_API_KEY,
    features: ['interactor'],
  })
);

// COMPONENTS START

const ErrorResponse = (error: string): FrameResponse => {
  return {
    title: 'Error',
    image: (
      <Box grow alignVertical="center" backgroundColor="background" padding="32" position="relative">
        <VStack gap="16">
          <Heading size={'48'} weight="500" font={'nyght'}>
            Error occured :/
          </Heading>

          <Text color="text" weight="300" size="24">
            {error}
          </Text>
        </VStack>
      </Box>
    ),
    intents: [<Button.Reset key={1}>Try again</Button.Reset>],
  };
};

// COMPONENTS END

// FRAMES

app.frame('/', c => {
  return c.res({
    title: 'SupaBald Jesse',
    image: `${APP_URL}/nft-fc.gif`,
    intents: [
      <Button.Link key={1} href={APP_URL}>
        Mint your NFT
      </Button.Link>,
      <Button key={2} action={`/nominate/${v4()}`}>
        Nominate a fren
      </Button>,
      <Button.Link key={3} href={OPENSEA_COLLECTION}>
        View collection
      </Button.Link>,
    ],
  });
});

// Disable Nomination
app.frame('/nominate/:id', c => {
  return c.res({
    title: 'SupaBald Jesse | Nominate',
    image: (
      <Box grow alignVertical="center" backgroundColor="background" padding="32" position="relative">
        <VStack gap="16">
          <Heading size={'48'} weight="500" font={'nyght'}>
            Buildathon has ended
          </Heading>

          <Text color="text" weight="300" size="24">
            Here&apos;s how based it was
          </Text>
          {/*
          // @ts-expect-error Ignore the error with <br/> */}
          <Text color="text" weight="300" size="24">
            Builders: 10,000+
            <br />
            Projects built: 1200+
            <br />
            SupaBald Jesse&apos;s claimed: 8851
          </Text>
        </VStack>
      </Box>
    ),
    intents: [
      <Button.Redirect key={1} location={PROJECTS_URL}>
        🛠 View projects
      </Button.Redirect>,
      <Button.Link key={3} href={BLOG_URL}>
        📖 Read more
      </Button.Link>,
    ],
  });
});

// app.frame('/nominate/:id', c => {
//   return c.res({
//     title: 'SupaBald Jesse | Nominate',
//     image: (
//       <Box grow alignVertical="center" backgroundColor="background" padding="32" position="relative">
//         <VStack gap="16">
//           <Heading size={'48'} weight="500" font={'nyght'}>
//             Nominate a fren
//           </Heading>

//           <Text color="text" weight="300" size="24">
//             Frens don’t let frens miss out on opportunities. Ask a fren to join you at the Onchain Summer Buildathon.
//           </Text>
//         </VStack>
//       </Box>
//     ),
//     intents: [
//       <TextInput key={1} placeholder="Farcaster username or FID" />,
//       <Button.Reset key={2}>Back</Button.Reset>,
//       <Button key={3} action={`/confirm/${v4()}`}>
//         Send Cast
//       </Button>,
//     ],
//   });
// });

app.frame('/confirm/:id', async c => {
  const interactor = c.var.interactor;
  if (!interactor) {
    return c.res(ErrorResponse('Interactor is not set!'));
  }

  const devfolioLookupResponse = await neynarClient.lookupUserByUsername('devfolio').catch(() => false);
  if (typeof devfolioLookupResponse === 'boolean') {
    return c.res(ErrorResponse('Devfolio profile not found!'));
  }
  const devfolio = devfolioLookupResponse.result.user;

  let searchUser: NeynarUserV2 | undefined;

  if (!c.inputText) {
    return c.res(ErrorResponse('Farcaster username is required!'));
  }

  const isSearchInputNumber = isNumeric(c.inputText);

  if (isSearchInputNumber) {
    const searchUserByFIDResult = await neynarClient.fetchBulkUsers([Number(c.inputText)]).catch(() => false);

    if (typeof searchUserByFIDResult != 'boolean' && searchUserByFIDResult.users.length > 0) {
      searchUser = searchUserByFIDResult.users?.[0];
    }
  } else {
    const searchUserByUsernameResult = await neynarClient.searchUser(c.inputText).catch(() => false);

    if (typeof searchUserByUsernameResult != 'boolean' && searchUserByUsernameResult?.result?.users?.length > 0) {
      searchUser = searchUserByUsernameResult?.result?.users?.[0];
    }
  }

  if (!searchUser) {
    return c.res(
      ErrorResponse(`We could not find @${c.inputText} on Farcaster. Please double check the username and try again.`)
    );
  }

  // Set the state
  const state = c.deriveState(previousState => {
    previousState.confirm = {
      devfolio: devfolio,
      interactor,
      searchUser,
    };
  });

  const confirmState = state.confirm;

  if (!confirmState) {
    return c.res(ErrorResponse('Invalid State'));
  }

  const cast = `🔵 gm @${confirmState.searchUser.username}. @${confirmState.interactor.username} thinks you're a super based builder, and has nominated you for the Onchain Summer Buildathon.

Hop in, mint your SupaBald Jesse NFT, and just build it. LFG

https://letsgetjessebald.com/`;

  await neynarClient.publishCast(NEYNAR_SIGNER, cast, {
    embeds: [{ url: 'https://letsgetjessebald.com/' }],
  });

  return c.res({
    title: 'SupaBald Jesse | Cast Sent',
    image: (
      <Box grow alignVertical="center" backgroundColor="background" padding="32" position="relative">
        <VStack gap="16">
          <Heading size={'48'} weight="500" font={'nyght'}>
            Cast sent!
          </Heading>

          <Text color="text" weight="300" size="24">
            You’re based.
          </Text>
        </VStack>
      </Box>
    ),
    intents: [
      <Button.Reset key={1}>👍</Button.Reset>,
      <Button key={2} action={`/nominate/${v4()}`}>
        Nominate another fren
      </Button>,
    ],
  });
});

app.frame('/cast', c => {
  const state = c.previousState;
  const confirmState = state.confirm;

  if (!confirmState) {
    return c.res(ErrorResponse('Invalid State'));
  }

  const cast = `🔵 gm @${confirmState.searchUser.username}. @${confirmState.interactor.username} thinks you're a super based builder, and has nominated you for the Onchain Summer Buildathon.

Hop in, mint your SupaBald Jesse NFT, and just build it. LFG

https://letsgetjessebald.com/`;

  neynarClient.publishCast(NEYNAR_SIGNER, cast, {
    embeds: [{ url: 'https://letsgetjessebald.com/' }],
  });

  return c.res({
    title: 'SupaBald Jesse | Cast Sent',
    image: (
      <Box grow alignVertical="center" backgroundColor="background" padding="32" position="relative">
        <VStack gap="16">
          <Heading size={'48'} weight="500" font={'nyght'}>
            Cast sent!
          </Heading>

          <Text color="text" weight="300" size="24">
            You’re based.
          </Text>
        </VStack>
      </Box>
    ),
    intents: [
      <Button.Reset key={1}>👍</Button.Reset>,
      <Button key={2} action="/nominate">
        Nominate another fren
      </Button>,
    ],
  });
});

devtools(app, { serveStatic });

export const GET = handle(app);
export const POST = handle(app);
