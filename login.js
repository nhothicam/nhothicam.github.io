function login(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username==""|password==""|username.trim()==""|password.trim()==""){
    alert("Input not null!");}
    else {
    alert("Login Success!");}
    }
function loginWithEmail(){
}

function loginWithGoogle(){
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
firebase.auth().languageCode = 'pt';
// To apply the default browser preference instead of explicitly setting it.
//firebase.auth().useDeviceLanguage();
firebase.auth().signInWithPopup(provider).then(function(result){
alert("login");
}).catch(function(erro){
alert(erro.message);
});
}
