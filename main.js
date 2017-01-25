/**
* Helper function to target a moving server during development
*/
function route(url) {
   return 'http://192.168.1.9:3000' + url;
}

var profile; // google user profile
var authResponse; // google user auth response

function onSignIn(googleUser) {
   profile = googleUser.getBasicProfile();
   authResponse = googleUser.getAuthResponse();

   var login = {
       'id': profile.getId(),
       'name': profile.getName(),
       'givenName': profile.getGivenName(),
       'familyName': profile.getFamilyName(),
       'imageUrl': profile.getImageUrl(),
       'email': profile.getEmail(),
       'hostedDomain': googleUser.getHostedDomain()
   }

   post('/login', login);

   $('.g-signin2').hide();
   $('#email').html('<p>' + profile.getEmail() + '</p>');
   $('#photo').html('<img src="' + profile.getImageUrl() + '">');
}

function signOut() {
   gapi.auth2.getAuthInstance().signOut();
   $('.g-signin2').show();
   $('#email').html('');
   $('#photo').html('');
}

function disconnect() {
   gapi.auth2.getAuthInstance().disconnect();
   $('.g-signin2').show();
   $('#email').html('');
   $('#photo').html('');
}