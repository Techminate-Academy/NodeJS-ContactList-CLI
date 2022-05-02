class Information {
    information = []

    create(name, age, phone, address){
        let info = {
            'name' : name,
            'age' : age,
            'phone' : phone,
            'address' : address
        }

        this.information.push(info)
    }

    view_admin(){
        for (let i = 0; i < this.admin.length; i++) {
            console.log(this.admin)
        }
    }

    view_information(){
        for (let i = 0; i < this.information.length; i++) {
            console.log(this.information[i])
        }
    }

    view_last_inserted_data(){
        console.log(this.information[this.information.length - 1])
    }
   
}

module.exports = Information;