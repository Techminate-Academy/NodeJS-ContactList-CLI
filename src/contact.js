const prompt = require('prompt-sync')({sigint: true});

class Contact {
    contact = []

    create(name, phone, address){
        let info = {
            'id' : this.contact.length + 1,
            'name' : name,
            'phone' : phone,
            'address' : address
        }

        this.contact.push(info)
    }

    view(){
        for (let i = 0; i < this.contact.length; i++) {
            console.log(this.contact[i])
        }
    }

    last_inserted_contact(){
        console.log(this.contact[this.contact.length - 1])
    }
   
}

let contact = new Contact
function contact_create(){
    var name = prompt("enter your name :");
    var phone = prompt("enter your phone :");
    var address = prompt("enter your address :");

    contact.create(name, phone, address)
}

function contact_view(){
  contact.view()
}

module.exports = {
    contact_create,
    contact_view
}