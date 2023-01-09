document.querySelector('.login-user > button').addEventListener('click',function(){
    this.closest('.login-user').classList.toggle('login-user-menus-active');
})