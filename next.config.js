/** @type {import('next').NextConfig} */

//  Remove all css styles from all packages in node_modules
// you will need to manually load css from node_module

//https://github.com/vercel/next.js/issues/9607
const removeImports = require('next-remove-imports')()
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
}

module.exports = (phase, { defaultConfig }) => {
   return removeImports({
      defaultConfig,
   })
}

// module.exports = nextConfig
