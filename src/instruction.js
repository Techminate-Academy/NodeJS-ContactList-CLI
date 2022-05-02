function menu_welcome(){
    console.log('========= Welcome =========')
    console.log('select 0 to exit')
    console.log('select 1 to login')
}

function menu_main(){
    console.log('========= You are logged in =========')
    console.log('select 0 to exit')
    console.log('select 1 to user')
}

function menu_user(){
    console.log('========= User Menu =========')
    console.log('select 0 to exit')
    console.log('select 1 to user create')
}

module.exports = {
    welcome_menu, 
    main_menu
};