import React from 'react';
import Fire from './firebase.jsx'

exports.signUp = (user, pass, cb) => {
  Fire.auth().createUserWithEmailAndPassword(user, pass)
  .then((user) => {
    cb(undefined, user)
  })
  .catch((error) => {
    cb(error)
  });
}
exports.signIn = (user, pass, cb) => {
  Fire.auth().signInWithEmailAndPassword(user, pass)
  .then((win) => {
    cb(undefined, win)
  })
  .catch((error) => {
    cb(error)
  });
}
exports.signOut = (cb) => {
  Fire.auth().signOut()
  .then(() => {
    cb(undefined, null)
  })
  .catch((error) => {
    cb(error)
  });
}