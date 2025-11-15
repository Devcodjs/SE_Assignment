import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function signUser(email: string, password: string) {
  let user: any;
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    user = userCred.user;
  } catch (error) {
    console.log("Error Signing in", error);
    return error;
  }
  return user;
}
