let loginEmail1 = document.getElementById("loginEmail1");
let loginPassword = document.getElementById("loginPassword");
let login = document.getElementById("login");
let userObjLogin;
var userLogin = false;


let userObj = localStorage.getItem("userObjLocal");
userObj = JSON.parse(userObj)
console.log(userObj)
// function logIn(){
//     let email=document.getElementById("email").value;
//       let password=document.getElementById("password").value;
//   let flag=false
//   if(email==="" || password===""){
//     alert("Please fill the Field")
//   }
//   else{
//       for(let j=0;j<window.localStorage.length;j++)
//   {
    
  
//   let i=window.localStorage.key(j)
  
//     let item =JSON.parse( window.localStorage.getItem(i))
  
//     if(email===item.email && password===item.password)
//     {
       
//    flag=true
//   break
//   }
  
  
  
//   }
//   if(flag===true){
//     alert("Login Successfull")
//     window.location.href="teams.html"
//   }
//   else{
//     alert("Incorrect Email or Password")
//   } }
//   }
  

login.addEventListener('click', () => {

    for (let i = 0; i < userObj.length; i++) {
        
        if (userObj[i].email === loginEmail1.value && userObj[i].password === loginPassword.value) {
            userLogin = true;
            userObjLogin = userObj[i];
            LoginHelp.innerHTML = ``
        } else if (userObj[i].password !== loginPassword.value) {
            LoginHelp.innerHTML = `<p>Email or Password is incorrect.</p>`
        }

    }
    userObjLogin = JSON.stringify(userObjLogin)
    localStorage.setItem("userObjLoginLocal", userObjLogin)
    console.log(userObjLogin, userLogin)
    

    


    if (userLogin) {
        window.location = "././main.html"

    }

})