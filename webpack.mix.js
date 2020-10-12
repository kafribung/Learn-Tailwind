const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
require("laravel-mix-purgecss");

mix
  .js("src/js/min.js", "dist")
  .sass("src/scss/min.scss", "dist")
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")],
  }).purgeCss({
    content: [path.join(__dirname, '*.html')],
    whitelistPatterns: [/hljs/],
  });