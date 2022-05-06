const prompt = require('prompt-sync')({sigint: true});
const menu = require('./menu.js');
const contact = require('./contact.js');

let menu_welcome = true
let menu_main = true
let menu_contact = true

function choice_menu_welcome(admin){
    while(menu_welcome){
        menu.menu_welcome()
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
        menu.menu_main()
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
                
                break;
            default:
                menu_main = false
        }
    }
}

function choice_menu_user(){
    menu.menu_user()
}

function choice_menu_contact(){
    while(menu_contact){
        menu.menu_contact()
        var choice = prompt("enter your choice :");
    
        switch(choice) {
            case '0':
                menu_welcome = true
                menu_contact = false
                break;
            case '1':
                contact.contact_create()
                break;
            case '2':
                contact.contact_view()
                break;
            case '3':
                contact.contact_update()
                break;
            case '4':
                contact.contact_delete()
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