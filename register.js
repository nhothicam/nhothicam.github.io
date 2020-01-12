function register(){
    var username=document.getElementById("rgusername").value;
    var password=document.getElementById("rgpassword").value;
    if(username==""|password==""|username.trim()==""|password.trim()==""){
    alert("Input not null!");}
    else {
    var database=firebase.database();
    var ref=database.ref("User/"+username);
    ref.set({username:username,password:password});
    alert("Register Success!");}
    }
function registerWithEmail(){
    var email=document.getElementById("rgEmailWithEmail").value;
    var password=document.getElementById("rgPasswordWithEmail").value;
    //alert(email+password);
if(email.length<4){
alert("Email is wrong!");
return;}
if(password.length<4){
alert("Password is wrong!");
return;}
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(result){
alert("Success!");}).catch(function(erro){
var erroCode=erro.code;
var erroMessage=erro.message;
if(erroCode=="auth/weak-password"){
alert("Password is weak!");}
else{
alert(erroMessage);}
console.log(erro);
});
}
