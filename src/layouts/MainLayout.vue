<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar v-if="userStore.isAuthenticated">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        Hello,
        <q-badge class="q-mx-lg" color="white" text-color="black">{{
          userStore.getEmail
        }}</q-badge>
        <q-btn
          flat
          dense
          round
          icon="logout"
          aria-label="Logout"
          @click="logout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref, computed } from "vue";
import { useUserStore } from "../stores/user";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function logout() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      userStore.clearUser();
      router.push("/login");
    })
    .catch((error) => {
      console.error("Erro ao fazer logout:", error);
    });
}
</script>
