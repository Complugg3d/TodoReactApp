import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyBEASISopv9ebMXNyywthy1nHc6_5hFkYo",
      authDomain: "erick-todo-app.firebaseapp.com",
      databaseURL: "https://erick-todo-app.firebaseio.com",
      projectId: "erick-todo-app",
      storageBucket: "erick-todo-app.appspot.com",
      messagingSenderId: "773623565459"
    };

  firebase.initializeApp(config);
} catch (e) {

} finally {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
