/** @jsxImportSource frog/jsx */
import { Button, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'

import { Box, Heading, VStack, vars } from "../../frog"

import { APP_URL, OPENSEA_COLLECTION } from '../../utils/shared'

const app = new Frog({
  basePath: '/api',
  browserLocation: '/:path',
  ui: { vars }
})

app.frame('/', (c) => {
  return c.res({
    title: 'SupaBald Jesse',
    image: `${APP_URL}/nft-fc.gif`,
    intents: [
      <Button.Link key={1} href={APP_URL}>Mint your NFT</Button.Link>,
      <Button key={2} action={'/nominate'}>Nominate a fren</Button>,
      <Button.Link key={3} href={OPENSEA_COLLECTION}>View Collection</Button.Link>,
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
        <VStack gap="4">
          <Heading>🛠️ WIP 🛠️</Heading>
        </VStack>
      </Box>
    ),
    intents: [
      <Button.Reset key={1}>Back</Button.Reset>,
    ]
  })
})

// app.frame('/test', (c) => {
//   const { buttonValue, status } = c
//   return c.res({
//     image: (
//       <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
//         {status === 'initial' ? (
//           'Select your fruit!'
//         ) : (
//           `Selected: ${buttonValue}`
//         )}
//       </div>
//     ),
//     intents: [
//       <Button key={1} value="apple">Apple</Button>,
//       <Button key={2} value="banana">Banana</Button>,
//       <Button key={3} value="mango">Mango</Button>
//     ]
//   })
// })

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
