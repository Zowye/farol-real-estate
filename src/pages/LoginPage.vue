<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="login" class="q-gutter-md q-px-lg">
          <q-input
            filled
            v-model="email"
            label="Email"
            type="email"
            :rules="[
              (val) => !!val || 'Email is required',
              (val) => /.+@.+\..+/.test(val) || 'Email must be valid',
            ]"
          />
          <q-input
            filled
            v-model="password"
            label="Password"
            type="password"
            :rules="[(val) => !!val || 'Password is required']"
          />
          <q-btn type="submit" color="primary" label="Login" />
        </q-form>
      </q-card-section>

      <q-card-actions>
        <q-btn flat label="Don't have an account?" @click="goToSignup" />
        {{ userStore.isAuthenticated }}
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();

const auth = getAuth(); // Initialize Firebase Auth directly
const router = useRouter();
const email = ref("");
const password = ref("");

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/");
  } catch (error) {
    console.error(error);
  }
};

const goToSignup = () => {
  router.push("/signup");
};
</script>
