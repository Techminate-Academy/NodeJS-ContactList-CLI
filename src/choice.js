const prompt = require('prompt-sync')({sigint: true});
const instruction = require('./instruction.js');

let menu_welcome = true
let menu_main = true
let menu_contact = true

function choice_menu_welcome(admin){
    while(menu_welcome){
        instruction.menu_welcome()
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
                    choices.choice_menu_main()
                }      
                break;
            default:
                menu_main = false
                menu_welcome = false
        }
    }
}
function choice_menu_main(){
    while(menu_main){
        instruction.menu_main()
        var choice = prompt("enter you choice :");
    
        switch(choice) {
            case '0':
                menu_main = false
                break;
            case '1':
                choice_menu_user()
                break;
            case '2':
                choice_menu_contact()
                menu_main = false
                menu_welcome = false
                break;
            default:
                menu_main = false
        }
    }
}

function choice_menu_user(){
    instruction.menu_user()
}

function choice_menu_contact(){
    while(menu_contact){
        instruction.menu_contact()
        var choice = prompt("enter you choice :");
    
        switch(choice) {
            case '0':
                menu_main = false
                break;
            case '1':
                console.log('add contact')
                break;
            case '2':
                console.log('view contact')
                break;
            case '3':
                console.log('update contact')
                break;
            case '4':
                console.log('delete contact')
                break;
            default:
                menu_main = false
        }
    }
}

module.exports = {
    choice_menu_welcome,
    choice_menu_main,
    choice_menu_user,
    choice_menu_contact
}