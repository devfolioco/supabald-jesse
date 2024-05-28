import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { createSystem, defaultVars } from 'frog/ui';

const nyghtSerifMedium = fs.readFileSync(
  path.join(fileURLToPath(import.meta.url), '../../fonts/NyghtSerif-Medium.ttf')
);
const nyghtSerifBold = fs.readFileSync(path.join(fileURLToPath(import.meta.url), '../../fonts/NyghtSerif-Bold.ttf'));

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
