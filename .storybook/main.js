module.exports = {
  stories: ['../stories/**/*.stories.{js,mdx}'],

  addons: [
    'storybook-prebuilt/addon-actions/register.js',
    'storybook-prebuilt/addon-knobs/register.js',
    'storybook-prebuilt/addon-a11y/register.js',
    'storybook-prebuilt/addon-docs/register.js',
  ],

  esDevServer: {
    // custom es-dev-server options
  },
};
