const path = require('path');
const resolver = require('postcss-import-alias-resolver');

module.exports = {
    plugins: [
      "postcss-flexbugs-fixes",
      [
        "postcss-preset-env",
        {
          autoprefixer: {
            flexbox: "no-2009"
          },
          stage: 3,
          features: {
            "custom-properties": false
          }
        }
      ],
      [
        "postcss-import",
        {
          resolve: resolver({
            alias: {
              '@/styles': path.resolve(__dirname, 'src/styles')
            }
          })
        }
      ],
    ]
  }
  