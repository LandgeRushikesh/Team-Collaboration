import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Config/Firebase-Config";

const ResetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email)
        alert("password reset link is sent to your email... ")

    }
    catch (err) {
        console.log(err.message);
    }
}

export default ResetPassword