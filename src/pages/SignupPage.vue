<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h6">Signup</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="signup" class="q-gutter-md q-px-lg">
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
          <q-btn type="submit" color="primary" label="Signup" />
        </q-form>
      </q-card-section>

      <q-card-actions>
        <q-btn flat label="Already have an account?" @click="goToLogin" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(); // Initialize Firebase Auth directly
const router = useRouter();
const email = ref("");
const password = ref("");

const signup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push("/");
  } catch (error) {
    console.error(error);
  }
};

function goToLogin() {
  router.push("/login");
}
</script>
