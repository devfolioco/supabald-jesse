# SupaBald Jesse

![Preview GIF](https://letsgetjessebald.com/nft-fc.gif)

This repository contains the website and frame for the "Let's get Jesse Bald" campaign by [Devfolio](https://devfolio.co/) for the [Onchain Summer Buildathon](https://onchain-summer.devfolio.co/)

[![Deployment](https://img.shields.io/website?url=https%3A%2F%2Fletsgetjessebald.com%2F&up_message=https%3A%2F%2Fletsgetjessebald.com%2F&logo=curl&label=Deployment)](https://letsgetjessebald.com/)

[![Build Status](https://img.shields.io/github/deployments/devfolioco/supabald-jesse/production?logo=github&label=Build%20Status)](https://github.com/devfolioco/supabald-jesse/deployments/Production)

# Getting Started

### Prerequisites

- Node 18 +
- Yarn

### Environment Variables

- Create .env.local from .env.example
- Get Neynar API Keys from https://docs.neynar.com

### Installation

```bash
# Using yarn (Recommended)
yarn
yarn dev
```

# Tech Stack

- NextJS with the App Router - https://nextjs.org/
- Frog.JS for Farcaster Frames - https://frog.fm/
- TailwindCSS - tailwindcss.com/
- Framer Motion - https://framer.com/motion/
- Prettier / ESlint - https://prettier.io/  https://eslint.org/

# Project Structure

```bash
├── .next/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── api/ # Endpoints for the farcaster frames
│   │   ├── components/ # all resuable small components
│   │   ├── fonts/
│   │   ├── frog/ # contains frog ui for farcaster frames
│   │   ├── hooks/ # common components logic as hooks
│   │   ├── sections/ # Landing page sections
│   │   ├── styles/ # all css
│   │   ├── utils/ # common helper methods
│   │   ├── globals.css
│   │   ├── layout.tsx # html layout
│   │   ├── page.tsx # main page
├── .env.local # local env
├── .eslintrc.json
├── .gitignore
├── .prettierrc.js
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── yarn.lock

```

# Contributing

Feel free to open [issues](https://github.com/devfolioco/supabald-jesse/issues/new/choose) and [pull requests](https://github.com/devfolioco/supabald-jesse/pulls)!

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


## License

[![License](https://img.shields.io/github/license/devfolioco/supabald-jesse#reload)](https://github.com/devfolioco/supabald-jesse/blob/main/LICENSE)
