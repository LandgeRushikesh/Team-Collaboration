import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/Firebase-Config";

const CheckRole = async (userId) => {
    try {
        const userRef = doc(db, "users", userId)
        const userData = await getDoc(userRef)

        if (userData.exists()) {
            const role = userData.data().role
            const name = userData.data().name
            return { role, name }
        }
        else {
            return null
        }

    }
    catch (err) {
        alert(err.message)
    }

}

export default CheckRole