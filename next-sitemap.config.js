/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.example.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
  additionalPaths: async (config) => {
    const result = [];

    return result;
  },
};
