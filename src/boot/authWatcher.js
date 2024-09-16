import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "../stores/user";

export function setupAuthListener() {
  const auth = getAuth();
  const userStore = useUserStore();

  onAuthStateChanged(auth, (user) => {
    console.log("onAuthStateChanged called", user);
    if (user) {
      userStore.setUser(user);
      const userEmail = user.providerData[0].email;
      userStore.setUserEmail(userEmail);
    } else {
      userStore.clearUser();
    }
  });
}
