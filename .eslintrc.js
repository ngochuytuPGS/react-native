module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-shadow': 'off',
        'no-undef': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
      },
    },
  ],
};
