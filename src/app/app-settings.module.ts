import { AuthProviders, AuthMethods } from 'angularfire2';

export const FirebaseAuthConfig = {
  provider: AuthProviders.Github,
  method: AuthMethods.Popup
};

export const FirebaseConfig = {
  apiKey: 'AIzaSyBOfR3VVMOJstKuar19gIshoU1dCTylXa4',
  authDomain: 'bloc-chat-ng2.firebaseapp.com',
  databaseURL: 'https://bloc-chat-ng2.firebaseio.com/',
  storageBucket: 'bloc-chat-ng2.appspot.com'
};
