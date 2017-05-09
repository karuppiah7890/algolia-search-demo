const index = require('./getContactsIndex');

index.setSettings({
  searchableAttributes : [
    'firstname',
    'lastname',
    'company',
    'email',
    'lol'
  ]
}, (err, content) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(content);
})
