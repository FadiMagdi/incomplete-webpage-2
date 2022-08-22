alert("this is the log in page");
let c=0;
function redirect(e) {
    window.location.href = 'index.html';
}
alert(++c);
function strcpr(s1, s2){
    if(s1.length!=s2.length)
        return false
    for(var i = 0 ; i < s1.length; i++){
        if(s1[i] != s2[i])
            return false;
    }
    return true;
}
/*function recollectAccounts(){


    num = Number(localStorage.getItem('num')) || 0

    if (num == 0)
        return;

    for(let i = 0; i < num ;i++){
        userNames[i] =  localStorage.getItem('username'+Number(i))
        passwords[i]=localStorage.getItem('password'+Number(i)) 
        emails[i] =  localStorage.getItem('email'+Number(i)) 
    } }*/
    alert(++c);
function checkinput(input){
    alert(++c);
    let test = document.getElementById(input).value;
   // let inputtype = toString(input);
    let num = Number(localStorage.getItem('num'));
   let inputarr=[];
for(let i=0;i<num ; i++){
inputarr[i]= localStorage.getItem(`${inputtype}`+Number(i));
}
alert(++c);

for(let k =0 ; k<num ; k++)
{
    if(strcpr(inputarr[k] , test)){
        return true;
    }
    
}
alert(++c);

return false;
}
const signin = e =>
{
    let correctemail=false;
    let correctusename=false;
    let correctpasword=false;
    if(checkinput('E-mail')){
correctemail=true;
    }
    if(checkinput('username')){
correctpassword=true;
    }
    if(checkinput('password')){
        correctpassword=true;
    }
    if(correctemail ==false){
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
