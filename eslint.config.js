import globals from 'globals';
import tseslint from 'typescript-eslint';
import next from 'eslint-plugin-next';

export default tseslint.config(
  { ignores: ['dist', '.next', 'out', 'build'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: ['plugin:next/recommended', 'plugin:next/core-web-vitals'],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      next,
    },
  }
);
