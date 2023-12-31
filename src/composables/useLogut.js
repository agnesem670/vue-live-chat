import { ref } from "vue"
import { signOut } from "firebase/auth"
import { auth } from '../firebase/config'

const error = ref(null)

const logout = async () => {
    error.value = null
    try {
        await signOut(auth)
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useLogout = () => {
    return { logout, error }
}

export default useLogout