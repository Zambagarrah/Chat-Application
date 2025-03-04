const express = require('express');
const firebase = require('firebase-admin');

const app = express();

// Initialize Firebase
firebase.initializeApp({
  // Your Firebase configuration
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  firebase.auth().createUser({ email, password })
    .then(() => res.status(201).send('User created'))
    .catch((error) => res.status(500).send(error.message));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => res.status(200).send(userCredential.user.uid))
    .catch((error) => res.status(500).send(error.message));
});