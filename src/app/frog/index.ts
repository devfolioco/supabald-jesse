import { createSystem, defaultVars } from 'frog/ui';

// Read the fonts from local file system (Not working in Production)

// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const nyghtSerifMedium = fs.readFileSync(
//   path.join(fileURLToPath(import.meta.url), '../../fonts/NyghtSerif-Medium.ttf')
// );
// const nyghtSerifBold = fs.readFileSync(path.join(fileURLToPath(import.meta.url), '../../fonts/NyghtSerif-Bold.ttf'));

const nyghtSerifMedium = await fetch(
  'https://assets-devrel.s3.ap-south-1.amazonaws.com/OCS/NyghtSerif-Medium.ttf'
).then(res => res.arrayBuffer());

const nyghtSerifBold = await fetch('https://assets-devrel.s3.ap-south-1.amazonaws.com/OCS/NyghtSerif-Bold.ttf').then(
  res => res.arrayBuffer()
);

export const { Box, Columns, Column, Divider, Heading, HStack, Icon, Image, Rows, Row, Spacer, Text, VStack, vars } =
  createSystem({
    colors: {
      ...defaultVars.colors,
      text: '#F3F3F3',
      background: '#638596',
      castBackground: '#1B1423',
      castColor: '#C848FF',
      castGrey: '#8B99A4',
    },
    fonts: {
      default: [
        {
          name: 'Inter',
          source: 'google',
          weight: 300,
        },
        {
          name: 'Inter',
          source: 'google',
          weight: 600,
        },
      ],
      nyght: [
        {
          name: 'NyghtSerif-Medium',
          data: nyghtSerifMedium,
          source: 'buffer',
          weight: 400,
        },
        {
          name: 'NyghtSerif-Bold',
          data: nyghtSerifBold,
          source: 'buffer',
          weight: 700,
        },
      ],
    },
  });
