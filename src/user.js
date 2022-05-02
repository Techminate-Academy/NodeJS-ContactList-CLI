class User {
    userList = []

    constructor() {
        this.email = 'admin';
        this.password = '123';

        this.user_create(this.email, this.password)
    }

    user_create(email, password){
        let info = {
            'email' : email,
            'password' : password,
        }
        this.userList.push(info)
    }

    user_list(){
        for (let i = 0; i < this.userList.length; i++) {
            console.log(this.userList[i])
        }
    }

    user_update(){
        //
    }

    user_delete(){
        //
    }

    login(email, password){
        for (let i = 0; i < this.userList.length; i++) {
            if(this.userList[i].email == email && this.userList[i].password == password){
                return true
            }else{
                return false
            }
        }
    }
}

module.exports = User;