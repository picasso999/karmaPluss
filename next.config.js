const withImages = require('next-images')
module.exports = {
  withImages();
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.karmapluss.in/',
        permanent: true,
      },
    ]
  },
}
