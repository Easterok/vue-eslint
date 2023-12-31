module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: [
    'dist/*',
    '**/dist/*',
    'node_modules/*',
    '**/node_modules/*',
    'coverage/*',
    '**/coverage/*',
    'build/*',
    '**/build/*',
  ],
  plugins: ['simple-import-sort', 'unused-imports'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    module: 'readonly',
    T: 'readonly',
    U: 'readonly',
    defineSlots: 'readonly',
    defineOptions: 'readonly',
    defineProps: 'readonly',
    defineExpose: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
  rules: {
    curly: 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^vue'],
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
        singleQuote: true,
        printWidth: 80,
        trailingComma: 'es5',
        arrowParens: 'always',
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'CONDITIONALS',
          'LIST_RENDERING',
          'RENDER_MODIFIERS',
          'TWO_WAY_BINDING',
          'CONTENT',
          'OTHER_DIRECTIVES',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'DEFINITION',
          'OTHER_ATTR',
          'EVENTS',
        ],
        alphabetical: false,
      },
    ],
    'vue/attribute-hyphenation': ['error'],
    'vue/multi-word-component-names': 'off',
    'vue/require-name-property': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: false,
        afterBlockComment: false,
        beforeLineComment: false,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
        applyDefaultIgnorePatterns: true,
      },
    ],
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true, exceptAfterOverload: true },
    ],
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'block' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: '*', next: ['interface', 'type'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'export'],
        next: ['const', 'let', 'var', 'export'],
      },
      { blankLine: 'any', prev: '*', next: ['case', 'default'] },
      { blankLine: 'any', prev: ['case', 'default'], next: '*' },
      { blankLine: 'any', prev: '*', next: 'class' },
      { blankLine: 'any', prev: 'class', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
    ],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
};
