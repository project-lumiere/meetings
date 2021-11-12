const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [[require('remark-emoji'), { emoticon: true }]],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: true,
  },
});
