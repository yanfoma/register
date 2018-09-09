window.fbAsyncInit = function() {
    FB.init({
      appId      : '1815281125222404',
     cookie     : true,  // enable cookies to allow the server to access 
      xfbml      : true,  // parse social plugins on this page
      version    : 'v3.1' //  version 3.1
    });
    FB.getLoginStatus(function(response) {
			statusChangeCallback(response);
  });
  };
  // Load the SDK asynchronously
	  (function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'));
	  
  function statusChangeCallback(response){
			 if (response.status === 'connected') {
				 //document.getElementById('fb-btn').style.visibility= 'hidden';  //cacher le bouton lorsqu il connecté déjà
				console.log('Vous êtes conneté');
				//appel de la fonction testAPI 
				testAPI();
			}else{
						document.getElementById('status').innerHTML = '';		
						console.log('Vous n êtes pas connecté.');
					}
		   }
		      
	function login(){
	   FB.login(function(response) {
		   statusChangeCallback(response); 
	  });
	}

 //La fonction de recuperation des donnees 
	function testAPI(){
		FB.api('/me','GET',{"fields":"id,name,email,birthday,gender,location,picture.width(50).height(50)"},
	  function(response) {
		  //Appel de la fonction builtProfile
		  builtProfile(response);
		  //console.log(response);	  
	  });
	}
	function builtProfile(user){
		let profile = "ID: "+user.id+ "\n Nom: "+user.name+"\n email: "+user.email+ "\n Bithday: "+user.birthday+" \n Genre: "+user.gender+" \n Localité: "+user.location.name+" \n picture: <img scr=' "+ user.picture.data.url +" '></img>";
		//document.getElementById('status').innerHTML= profile;
		console.log(profile);
	}
