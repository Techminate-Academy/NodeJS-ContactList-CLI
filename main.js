const prompt = require('prompt-sync')({sigint: true});

const user = require('./src/user.js');

const instruction = require('./src/instruction.js');

let admin = new user()
let program_end = false
let login_session = false

while(!program_end){
    instruction.welcome_menu()
    //user input choice
    var choice = prompt("enter you choice :");

    switch(choice) {
        case '0':
            login_session = true
            program_end = true
            break;
        case '1':
            var email = prompt("enter email :");
            var password = prompt("enter password :");

            let result = admin.login(email, password)
            if(result){
                program_end = true
            }      
            break;
        default:
            login_session = true
            program_end = true
    }
}

while(!login_session){
    instruction.main_menu()

    var choice = prompt("enter you choice :");

    switch(choice) {
        case '0':
            console.log('exit')
            break;
        case '1':
            console.log('continue')
            break;
        default:
          console.log('exit')
    }
}

