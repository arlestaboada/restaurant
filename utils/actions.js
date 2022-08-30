import {firebaseApp} from "./firebase"
import firebase from 'firebase/compat/app'
import "firebase/firestore"

export const isUserLogged=()=>{
    let isLogged=false
    firebase.auth().onAuthStateChanged((user)=>{
        user!==null && (isLogged=true)
    })

    return isLogged



}