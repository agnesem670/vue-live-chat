import { ref } from "vue"
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from '../firebase/config'

const error = ref(null)

const login = async (email, password, displayName) => {
    error.value = null

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        error.value = null
        /* console.log(res) */
        return res

    } catch (err) {
        console.log(err.message)
        error.value = 'Incorect login credentials'
    }
}

const useLogin = () => {
    return { error, login }
}

export default useLogin