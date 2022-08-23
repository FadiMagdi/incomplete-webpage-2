function redirect(e) {
    window.location.href = 'index.html';
}

function strcpr(s1, s2){
    if(s1.length!=s2.length)
        return false
    for(var i = 0 ; i < s1.length; i++){
        if(s1[i] != s2[i])
            return false;
    }
    return true;
}

    
function checkinput(input){
    
    let test = document.getElementById(input).value;
   let inputtype = input;
    let num = Number(localStorage.getItem('num'));
   let inputarr=[];
for(let i=0;i<num ; i++){
inputarr[i]= localStorage.getItem(`${inputtype}`+Number(i));
}


for(let k =0 ; k<num ; k++)
{
    if(strcpr(inputarr[k] , test)){
        return true;
    }
    
}


return false;
}
const signin = e =>
{
    e.preventDefault();
    let correctemail=false;
    let correctusername=false;
     let correctpassword=false;
   
    if(checkinput('email')){
correctemail=true;
    }
    if(checkinput('username')){
correctusername=true;
    }
    if(checkinput('password')){
        correctpassword=true;
    }
    if(correctemail==false && correctusername==false){
alert("this account does not exist");
    }else if(correctemail ==false){
        alert("Incorrect E-mail");
        document.getElementById('E-mail').reset();
        document.getElementById('E-mail').focus();
    }else if (correctusername==false){
        alert("Incorrect username");
        document.getElementById('username').reset();
        document.getElementById('username').focus();
    }else if(correctpassword==false){
        alert("Incorrect password");
        document.getElementById('password').reset();
        document.getElementById('password').focus();

    }else 
    {
        alert("logged in successfully");
        redirect(e);
    }
}
