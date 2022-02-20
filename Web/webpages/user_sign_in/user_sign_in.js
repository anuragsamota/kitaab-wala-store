const usr_name_inp = document.getElementById('user-name')
const psw_inp = document.getElementById('password')
const login_btn = document.getElementById("login-btn")


login_btn.onclick = ()=>{
    localStorage.setItem('user-login',usr_name_inp.value)
}
