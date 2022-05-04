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

    list(){
        for (let i = 0; i < this.contact.length; i++) {
            console.log(this.contact[i])
        }
    }

    get_by_id(id){
        let info = this.contact.find(cont => cont.id == id)
        console.log(info)
    }

    update(id, name, phone, address){
        for (let i = 0; i < this.contact.length; i++) {
            if(this.contact[i].id == id){
                if(name !== ''){
                    this.contact[i].name = name
                }
                if(phone !== ''){
                    this.contact[i].phone = phone
                }
                if(address !== ''){
                    this.contact[i].address = address
                }

                break;
            }
        }
    }

    delete(id){
        for (let i = 0; i < this.contact.length; i++) {
            if(this.contact[i].id == id){
                // delete this.contact[i]
                this.contact.splice(3, 1)
                break
            }
        }
    }

    last_inserted_contact(){
        console.log(this.contact[this.contact.length - 1])
    }
   
}

let contact = new Contact
function contact_create(){
    // var name = prompt("enter your name :");
    // var phone = prompt("enter your phone :");
    // var address = prompt("enter your address :");


    contact.create('sazid', '01212', 'uttara')
    contact.create('ahmed', '00000', 'uttara')
    contact.create('sadia', '22222', 'uttara')
}

function contact_view(){
  contact.list()
}

function contact_update(){
    var id = prompt("enter the id :");
    contact.get_by_id(id)
    var name = prompt("enter your name :");
    var phone = prompt("enter your phone :");
    var address = prompt("enter your address :");

    contact.update(id, name, phone, address)
}

function contact_delete(){
    var id = prompt("enter the id :");
    // contact.get_by_id(id)
    contact.delete(id)
}

module.exports = {
    contact_create,
    contact_view,
    contact_update,
    contact_delete
}