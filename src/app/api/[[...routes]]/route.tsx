/** @jsxImportSource frog/jsx */
import { Button, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
import { APP_URL, OPENSEA_COLLECTION } from '../../utils/shared'

const app = new Frog({
  basePath: '/api',
  browserLocation: '/:path',
})


console.log("ENV", APP_URL, process.env.VERCEL_URL)

app.frame('/', (c) => {
  return c.res({
    title: 'SupaBald Jesse | Onchain Summer Buildathon',
    image: `${APP_URL}/nft-fc.gif`,
    intents: [
      <Button.Link key={1} href={APP_URL}>Mint your NFT</Button.Link>,
      <Button.Link key={2} href={OPENSEA_COLLECTION}>View Collection</Button.Link>,
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
