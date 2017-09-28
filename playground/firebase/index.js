import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBEASISopv9ebMXNyywthy1nHc6_5hFkYo",
    authDomain: "erick-todo-app.firebaseapp.com",
    databaseURL: "https://erick-todo-app.firebaseio.com",
    projectId: "erick-todo-app",
    storageBucket: "erick-todo-app.appspot.com",
    messagingSenderId: "773623565459"
  };

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: 1
  },
  isRunning: true,
  user: {
    name: 'Erick',
    age: 27
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.push({
  text: 'walk the dog!'
});

todosRef.push({
  text: 'film video'
});

todosRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val());
});

// notesRef.on('child_changed', (snapshot) => {
//   console.log('child changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'walk the dog!'
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('got entire db', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('unable to fetch value', e);
// });

// var logData = (snapshot) => {
//   console.log('got value', snapshot.val());
// };
//
// firebaseRef.on('value', logData);
//
// firebaseRef.off();
//
// firebaseRef.update({
//   isRunning: false
// });
//
// firebaseRef.child('app').on('value', (snapshot) => {
//   console.log('got value', snapshot.val());
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo App 1'
// });
//
// firebaseRef.child('user').update({
//   name: 'Martin'
// });


// firebaseRef.child('user/age').remove();

// firebaseRef.child('app/name').remove();
//
// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Ram'
// });

// firebaseRef.child('app').update({
//   name: 'My todo app'
// });
//
// firebaseRef.child('user').update({
//   name: 'Martin'
// });

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('Worked');
// }, () => {
//   console.log('Failed');
// });
