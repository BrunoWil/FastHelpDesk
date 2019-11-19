//Troca de telas (não deu certo)
function initApp() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        
        document.getElementById("user_div").style.display = "block";
        document.getElementById("login_div").style.display = "none";
        document.getElementById("register_div").style.display = "none";
  
        var user = firebase.auth().currentUser;
        if(user != null){
          
          var email_id = user.email;
          document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
        }
      } else {
        
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";
        document.getElementById("register_div").style.display = "block";
      }
    });
  }
  
  window.onload = function() {
    initApp();
  };
  
  
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  };
    window.onload = function() {
      initApp();
    };
    
  
  
  function logout(){
    firebase.auth().signOut();
  }
  
  function register(){
    var email = document.getElementById("newEmail_field").value;
    var password = document.getElementById("newPassword_field").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
  
      window.alert("Error : " + errorMessage);
  
    });
  
    window.alert(" Usuário: " + email + " Foi Cadastrado Com Sucesso! ");
   
    };