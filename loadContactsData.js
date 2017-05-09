const index = require('./getContactsIndex');

const contactsJSON = require('./contacts.json');

index.addObjects(contactsJSON, function(err, content) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(content);
});
