function menu_welcome(){
    console.log('========= Welcome =========')
    console.log('select 0 to exit')
    console.log('select 1 to login')
}

function menu_main(){
    console.log('========= You are logged in =========')
    console.log('select 0 to exit')
    console.log('select 1 to view user menu')
    console.log('select 2 to view contact menu')
}

function menu_user(){
    console.log('========= User Menu =========')
    console.log('select 0 to exit')
    console.log('select 1 to user create')
    console.log('select 2 to view user list')
}

function menu_contact(){
    console.log('========= Contact Menu =========')
    console.log('select 0 to exit')
    console.log('select 1 to add new contact')
    console.log('select 2 to view contact list')
    console.log('select 3 to update a contac')
    console.log('select 4 to delete a contact')
}

module.exports = {
    menu_welcome, 
    menu_main,
    menu_user,
    menu_contact
};