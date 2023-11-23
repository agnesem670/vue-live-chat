import { ref } from 'vue'
import { projectFirestore } from '@/firebase/config'
import { doc, setDoc, collection } from "firebase/firestore"

const useCollection = (colName) => {
    const error = ref(null)
    const colRef = collection(projectFirestore, colName)

    const addChat = async (objSch) => {
        error.value = null

        try {
            await setDoc(doc(colRef), objSch)
            console.log('message was sent')
        } catch (err) {
            console.log(err.message)
            error.value = 'could not send the message'
        }
    }
    return { error, addChat }
}

export default useCollection