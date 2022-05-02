const prompt = require('prompt-sync')({sigint: true});

const user = require('./src/user.js');

const instruction = require('./src/instruction.js');

let admin = new user()
let menu_welcome = true
let menu_main = true

while(menu_welcome){
    instruction.menu_welcome()
    //user input choice
    var choice = prompt("enter you choice :");

    switch(choice) {
        case '0':
            menu_main = false
            menu_welcome = false
            break;
        case '1':
            var email = prompt("enter email :");
            var password = prompt("enter password :");

            let result = admin.login(email, password)
            if(result){
                choice_menu_main()
                menu_welcome = false
            }      
            break;
        default:
            menu_main = false
            menu_welcome = false
    }
}

function choice_menu_main(){
    instruction.menu_main()
}

function choice_menu_user(){
    instruction.menu_user()
}

function choice_menu_contact(){
    instruction.menu_user()
}




