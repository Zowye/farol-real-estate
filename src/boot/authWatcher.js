import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "../stores/user";

export function setupAuthListener() {
  const auth = getAuth();
  const userStore = useUserStore();

  onAuthStateChanged(auth, (user) => {
    console.log("user logged?", user);
    if (user) {
      console.log("tsetsets");
      userStore.setUser(user);
      console.log("getUser", userStore.getUser);
    } else {
      userStore.clearUser();
    }
  });
}
