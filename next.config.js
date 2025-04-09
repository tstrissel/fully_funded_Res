module.exports = {
  images: {
    domains: ['prod-files-secure.s3.us-west-2.amazonaws.com']
  },
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    SPACE_ID: process.env.SPACE_ID
  }
}
