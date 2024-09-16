<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar v-if="userStore.isAuthenticated" class="row justify-between">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <div>
          Hello,
          <q-badge class="q-mx-lg" color="white" text-color="black">{{
            userStore.getEmail
          }}</q-badge>
          <q-btn flat dense round icon="info" aria-label="info" to="/info" />
          <q-btn
            flat
            dense
            round
            icon="logout"
            aria-label="Logout"
            @click="logout"
          />
          <q-btn
            flat
            dense
            round
            icon="add"
            aria-label="create_property"
            to="/register_property"
          />
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <q-btn flat dense round icon="close" @click="toggleLeftDrawer" />
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const leftDrawerOpen = ref(false);

onMounted(() => {
  leftDrawerOpen.value = false;
});

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
