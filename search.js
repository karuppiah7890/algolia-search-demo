const index = require('./getContactsIndex');

index.search('michal', (err, content) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(content.hits.length);
  console.log(content);
})
