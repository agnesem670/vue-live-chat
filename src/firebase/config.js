import { initializeApp } from "firebase/app";
import { getFirestore, collection, orderBy, query, limit } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

import { firebaseData } from "./firebaseData";

const firebaseConfig = firebaseData

//init firebase
const app = initializeApp(firebaseConfig)

//init services
const projectFirestore = getFirestore()
const auth = getAuth()

//collection ref
const colRef = collection(projectFirestore, 'posts')

//query with timestamp
const q = query(colRef, orderBy('createdAt', 'asc'), limit(10))


export { colRef, auth }