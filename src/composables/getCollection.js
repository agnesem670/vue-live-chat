import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { collection, orderBy, query, limit, onSnapshot } from "firebase/firestore"

const getCollection = (colName) => {
    const documents = ref(null)
    const error = ref(null)

    let colRef = collection(projectFirestore, colName)
    const q = query(colRef, orderBy('createdAt', 'asc'), limit(10))

    onSnapshot(q, (snap) => {
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err)=> {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'
    })

    return { documents, error}

}

export default getCollection