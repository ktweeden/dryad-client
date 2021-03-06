import { auth } from './firebase'

// Sign Up
export const doCreateUserWithEmailAndPassword = function(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
}

// Sign In
export const doSignInWithEmailAndPassword = function(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

// Sign out
export const doSignOut = function() {
    return auth.signOut()
}

// Password Reset
export const doPasswordReset = (email) => {
    return auth.sendPasswordResetEmail(email)
}

// Password Change
export const doPasswordUpdate = (password) => {
    return auth.currentUser.updatePassword(password)
}