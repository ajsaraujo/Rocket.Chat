// i18next-parser.config.js

module.exports = {
  namespace: 'client',
  writeOld: false,

  contextSeparator: '_',
  // Key separator used in your translation keys

  createOldCatalogs: true,
  // Save the \_old files

  defaultNamespace: 'translation',
  // Default namespace used in your i18next config

  defaultValue: '',
  // Default value to give to empty keys
  // You may also specify a function accepting the locale, namespace, and key as arguments

  indentation: 2,
  // Indentation of the catalog files

  keepRemoved: true,
  // Keep keys from the catalog that are no longer in code

  keySeparator: '.',
  // Key separator used in your translation keys
  // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

  // see below for more details
  lexers: {
    hbs: ['HandlebarsLexer'],
    handlebars: ['HandlebarsLexer'],

    htm: ['HTMLLexer'],
    html: ['HTMLLexer'],

    mjs: ['JavascriptLexer'],
    
    js: [{
      lexer: 'JavascriptLexer',
      functions:['t', 'TAPi18n.__', '__']
    }], // if you're writing jsx inside .js files, change this to JsxLexer

    ts: [{
      lexer: 'JavascriptLexer',
      functions: ['t', 'TAPi18n.__', '__']
    }],

    jsx: [{ lexer: 'JsxLexer', functions: ['t', 'TAPi18n.__', '__']}],
    tsx: [{ lexer: 'JsxLexer', functions: ['t', 'TAPi18n.__', '__']}],

    default: ['JavascriptLexer']
  },

  lineEnding: 'auto',
  // Control the line ending. See options at https://github.com/ryanve/eol

  locales: [
    //'af',
    //'ar',
    //'az',
    //'bas-CM',
    //'be-BY',
    //'bg',
    //'bn-BD',
    //'bn-IN',
    //'bs',
    //'ca',
    //'cs',
    //'cy',
    //'da',
    //'de',
    //'de-AT',
    //'de-IN',
    //'echo',
    //'el',
    'en',
    //'eo',
    //'es',
    //'et',
    //'eu',
    //'fa',
    //'fi',
    //'fr',
    //'gl',
    //'he',
    //'hi-IN',
    //'hr',
    //'hu',
    //'id',
    //'it',
    //'ja',
    //'ka-GE',
    //'kg',
    //'km',
    //'ko',
    //'ku',
    //'ln',
    //'lo',
    //'lt',
    //'lv',
    //'mn',
    //'ms-MY',
    //'nl',
    //'no',
    //'pl',
    //'pt',
    'pt-BR',
    //'ro',
    //'ru',
    //'si',
    //'sk-SK',
    //'sl-SI',
    //'sq',
    //'sr',
    //'sv',
    //'ta-IN',
    //'th-TH',
    //'tr',
    //'ug',
    //'uk',
    //'vi-VN',
    //'zh',
    //'zh-HK',
    //'zh-TW',
  ],
  // An array of the locales in your applications

  namespaceSeparator: ':',
  // Namespace separator used in your translation keys
  // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.

  output: 'locales/$LOCALE/$NAMESPACE.json',
  // Supports $LOCALE and $NAMESPACE injection
  // Supports JSON (.json) and YAML (.yml) file formats
  // Where to write the locale files relative to process.cwd()

  pluralSeparator: '_',
  // Plural separator used in your translation keys
  // If you want to use plain english keys, separators such as `_` might conflict. You might want to set `pluralSeparator` to a different string that does not occur in your keys.

  input: [
    'app/**/*.{js,html,jsx,tsx,ts}',
    'client/**/*.{js,html,jsx,tsx,ts}',
    'definition/**/*.{js,html,jsx,tsx,ts}',
    'ee/**/*.{js,html,jsx,tsx,ts}',
    'imports/**/*.{js,html,jsx,tsx,ts}',
    'packages/**/*.{js,html,jsx,tsx,ts}',
    'private/**/*.{js,html,jsx,tsx,ts}',
    'public/**/*.{js,html,jsx,tsx,ts}',
    'server/**/*.{js,html,jsx,tsx,ts}',
    'test/**/*.{js,html,jsx,tsx,ts}'
  ],
  // An array of globs that describe where to look for source files
  // relative to the location of the configuration file

  sort: true,
  // Whether or not to sort the catalog

  skipDefaultValues: false,
  // Whether to ignore default values
  // You may also specify a function accepting the locale and namespace as arguments

  useKeysAsDefaultValue: false,
  // Whether to use the keys as the default value; ex. "Hello": "Hello", "World": "World"
  // This option takes precedence over the `defaultValue` and `skipDefaultValues` options
  // You may also specify a function accepting the locale and namespace as arguments

  verbose: true,
  // Display info about the parsing including some stats

  failOnWarnings: false,
  // Exit with an exit code of 1 on warnings

  customValueTemplate: null
  // If you wish to customize the value output the value as an object, you can set your own format.
  // ${defaultValue} is the default value you set in your translation function.
  // Any other custom property will be automatically extracted.
  //
  // Example:
  // {
  //   message: "${defaultValue}",
  //   description: "${maxLength}", // t('my-key', {maxLength: 150})
  // }
}
