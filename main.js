const prompt = require('prompt-sync')({sigint: true});

const user = require('./src/user.js');
const contact = require('./src/contact.js');
const choices = require('./src/choice.js');

contact.contact_create()
contact.contact_view()
contact.contact_delete()
contact.contact_view()
// let admin = new user()

// choices.choice_menu_welcome(admin)
