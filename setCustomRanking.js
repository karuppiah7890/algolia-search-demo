const index = require('./getContactsIndex');

index.setSettings({
  customRanking : ['desc(followers)']
}, (err, content) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(content);
})
