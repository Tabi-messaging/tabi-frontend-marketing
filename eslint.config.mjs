import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts', 'scripts/**'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
  {
    files: [
      'src/components/marketing/anima/sections/hero-messaging-section.tsx',
      'src/components/marketing/anima/sections/platform-capabilities-section.tsx',
    ],
    rules: {
      'jsx-a11y/role-supports-aria-props': 'off',
      'jsx-a11y/alt-text': 'off',
    },
  },
];

export default config;
