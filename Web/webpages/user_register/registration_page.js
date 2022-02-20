const name_inp = document.getElementById('name-inp')
const email_inp = document.getElementById('email')
const psw_inp = document.getElementById('psw')
const psw_repeat_inp = document.getElementById('psw-repeat')
const register_btn = document.getElementById('registerbtn')


class User{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

register_btn.onclick = ()=>{
    let name;
    let email;
    let password;


    if(name_inp.value != ""){
        name = name_inp.value
    }
    if(email_inp.value != ""){
        email = email_inp.value
    }
    if(psw_inp.value != "" && psw_inp.value === psw_repeat_inp.value){
        password = psw_inp.value
    }
    let user = new User(name,email,password)
    localStorage.setItem('user',user)
    let json = JSON.stringify(user)
    console.log(json)
    alert('user registered')
    window.location.replace('/')
}