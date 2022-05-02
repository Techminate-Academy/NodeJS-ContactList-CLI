class Contact {
    contact = []

    create(name, phone, address){
        let info = {
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

module.exports = Contact;