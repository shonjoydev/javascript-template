import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import * as eslintPluginImport from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import n from 'eslint-plugin-n';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
  {
    ignores: [
      '*.config.*',
      '**/dist/**',
      '**/build/**',
      '**/node_modules/**',
      '**/coverage/**',
      '**/docs/**',
    ],
  },

  // Base configs
  js.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  jsdoc.configs['flat/recommended'],

  // JavaScript files configuration
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },

  // Plugins and rules
  {
    plugins: {
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      jsdoc,
      n,
      'unused-imports': unusedImports,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs'],
        },
        alias: {
          map: [['@', './']],
          extensions: ['.js', '.mjs'],
        },
      },
      jsdoc: {
        mode: 'typescript',
        tagNamePreference: {
          returns: 'returns',
          return: 'returns',
        },
      },
    },
    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // Console
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // Basic rules
      'no-unused-vars': 'off', // Disabled in favor of unused-imports
      'no-undef': 'off',

      // Node.js specific rules
      'n/prefer-node-protocol': 'error',

      // Unused Imports Plugin
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // JSDoc rules
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
            FunctionExpression: true,
          },
          contexts: [
            'VariableDeclaration > VariableDeclarator > ArrowFunctionExpression',
          ],
        },
      ],
      'jsdoc/require-param': 'warn',
      'jsdoc/require-param-type': 'warn',
      'jsdoc/require-returns': 'warn',
      'jsdoc/require-returns-type': 'warn',
      'jsdoc/require-description': 'off',
      'jsdoc/check-param-names': 'error',
      'jsdoc/check-types': 'error',
      'jsdoc/valid-types': 'error',
      'jsdoc/no-undefined-types': 'off',

      // Airbnb Style Guide Rules

      // Variables
      'no-var': 'error',
      'prefer-const': 'error',
      'no-multi-assign': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'one-var': ['error', 'never'],

      // Strings
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never'],
      'no-useless-concat': 'error',

      // Functions
      'func-style': ['error', 'expression'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'arrow-spacing': ['error', { before: true, after: true }],
      'arrow-parens': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'no-confusing-arrow': 'error',
      'implicit-arrow-linebreak': 'off',
      // 'implicit-arrow-linebreak': ['error', 'beside'],

      // Classes & Constructors
      'no-useless-constructor': 'error',
      'no-dupe-class-members': 'error',
      'class-methods-use-this': 'off',

      // Modules
      'no-duplicate-imports': 'error',
      'import/no-mutable-exports': 'error',
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'off',

      // Iterators and Generators
      'no-iterator': 'error',
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message:
            'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'LabeledStatement',
          message:
            'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message:
            '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],

      // Properties
      'dot-notation': 'error',
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      // Comparison Operators & Equality
      eqeqeq: ['error', 'always'],
      'no-case-declarations': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'no-mixed-operators': [
        'error',
        {
          groups: [
            ['%', '**'],
            ['%', '+'],
            ['%', '-'],
            ['%', '*'],
            ['%', '/'],
            ['/', '*'],
            ['&', '|', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!=='],
            ['&&', '||'],
          ],
          allowSamePrecedence: false,
        },
      ],

      // Blocks
      curly: ['error', 'multi-line'],
      'nonblock-statement-body-position': ['error', 'beside'],

      // Control Statements
      'no-else-return': ['error', { allowElseIf: false }],

      // Comments
      'spaced-comment': [
        'error',
        'always',
        {
          line: {
            markers: ['/'],
            exceptions: ['-', '+'],
          },
          block: {
            markers: ['!'],
            exceptions: ['*'],
            balanced: true,
          },
        },
      ],
      'multiline-comment-style': ['error', 'starred-block'],

      // Whitespace
      indent: 'off', // Handled by Prettier
      'space-before-blocks': ['error', 'always'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-infix-ops': 'error',
      'eol-last': ['error', 'always'],
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
      'no-whitespace-before-property': 'error',
      'padded-blocks': ['error', 'never'],
      'space-in-parens': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'max-len': [
        'error',
        {
          code: 100,
          tabWidth: 2,
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'block-spacing': ['error', 'always'],
      'comma-spacing': ['error', { before: false, after: true }],
      'computed-property-spacing': ['error', 'never'],
      'func-call-spacing': ['error', 'never'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-trailing-spaces': 'error',

      // Commas
      'comma-style': ['error', 'last'],
      'comma-dangle': ['error', 'always-multiline'],

      // Semicolons
      semi: ['error', 'always'],
      'semi-spacing': ['error', { before: false, after: true }],

      // Naming Conventions
      camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],

      // Import rules
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          mjs: 'never',
          json: 'always',
        },
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-duplicates': 'error',
      'import/no-useless-path-segments': 'error',
      'import/newline-after-import': 'error',
      'import/first': 'error',
    },
  },
];
