# Onchain Summer Jesse Campaign

This repository contains the website and frame for the "Let's get Jesse Bald" campaign by devfolio for the [Onchain Summer Buildathon](https://onchain-summer.devfolio.co/)

Deployed at https://letsgetjessebald.com/

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

- NextJS with the App Router
- Frog.JS for Farcaster Frames
- TailwindCSS
- Prettier / ESlint

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

Feel free to open [issues](https://github.com/devfolioco/onchain-summer-jesse-campaign/issues/new/choose) and [pull requests](https://github.com/devfolioco/onchain-summer-jesse-campaign/pulls)!

## License

[![NPM](https://img.shields.io/npm/l/react-otp-input)](https://github.com/devfolioco/react-otp-input/blob/master/LICENSE)

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
