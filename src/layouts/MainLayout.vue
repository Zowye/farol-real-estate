<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>
          isAuthenticated {{ isAuthenticated }}
          <p v-if="isAuthenticated">Welcome, {{ username }}!</p>
          <p v-else>Please log in.</p>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref, computed, onMounted } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();

const isAuthenticated = computed(() => userStore.isAuthenticated);
const username = computed(() => userStore.getUser);

onMounted(() => {
  console.log("mouted", userStore.getUser);
});
</script>
