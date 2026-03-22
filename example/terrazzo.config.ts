import { defineConfig } from '@terrazzo/cli';
import css from '@terrazzo/plugin-css';

const brandThemes = [
  { brand: 'brand-a', theme: 'light' },
  { brand: 'brand-a', theme: 'dark' },
  { brand: 'brand-b', theme: 'light' },
  { brand: 'brand-b', theme: 'dark' },
] as const;

const themePermutations = brandThemes.flatMap(({ brand, theme }) => [
  {
    input: { brandTheme: `${brand}-${theme}` },
    include: ['color.**'],
    prepare: (stylesheet: string) =>
      `[data-brand="${brand}"][data-theme="${theme}"] {\n  color-scheme: ${theme};\n  ${stylesheet}\n}`,
  },
  {
    input: { brandTheme: `${brand}-${theme}` },
    include: ['color.**'],
    prepare: (stylesheet: string) =>
      `@media (prefers-color-scheme: ${theme}) {\n  [data-brand="${brand}"]:not([data-theme]) {\n    color-scheme: ${theme};\n    ${stylesheet}\n  }\n}`,
  },
]);

export default defineConfig({
  tokens: ['./tokens.resolver.json'],
  outDir: './dist/',
  plugins: [
    css({
      filename: 'tokens.css',
      exclude: [],
      permutations: [
        {
          input: {},
          prepare: (stylesheet) => `:root {\n  ${stylesheet}\n}`,
        },
        ...themePermutations,
        {
          input: { size: 'desktop' },
          include: ['spacing.**', 'font-size.**'],
          prepare: (stylesheet) => `@media (width >= 600px) {\n  :root {\n    ${stylesheet}\n  }\n}`,
        },
        {
          input: { size: 'mobile' },
          include: ['spacing.**', 'font-size.**'],
          prepare: (stylesheet) => `@media (width < 600px) {\n  :root {\n    ${stylesheet}\n  }\n}`,
        },
      ],
    }),
  ],
  lint: {
    rules: {
      'core/consistent-naming': ['error', { format: 'kebab-case' }],
      "a11y/min-font-size": ["error", { minSizeRem: 1 }],
      'core/valid-color': ['error', { legacyFormat: false, ignoreRanges: false }],
      'core/valid-font-family': 'error',
      'core/valid-font-weight': 'error',
      'core/duplicate-values': 'off',
    },
  },
});
