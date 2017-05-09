const algoliasearch = require('algoliasearch');

const client = algoliasearch(process.env.ALGOLIA_APPLICATION_ID,process.env.ALGOLIA_ADMIN_API_KEY);

const index = client.initIndex('contacts');

module.exports = index;
