<template>
  <q-layout view="lHh Lpr lFf">

    <q-drawer class="aside" v-model="leftDrawerOpen" show-if-above bordered style="width: 250px;" >
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <q-item clickable v-for="nav in navs" :key="nav.id" :to="nav.to">
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>Todo App</q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer class="footer">
      <q-tabs>
        <q-route-tab :icon="nav.icon" :label="nav.label" to="/" v-for="nav in navs" :key="nav.id" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    const navs = ref([
      {
        label: 'Todo',
        icon: 'list',
        to: '/',
        id: 1,
      },
      {
        label: 'Settings',
        icon: 'settings',
        to: '/settings',
        id: 2,
      },
    ])

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return {
      leftDrawerOpen,
      navs,
      toggleLeftDrawer,
    }
  },

  mounted() {
    console.log(1)
  },
};
</script>

<style lang="scss">
 @media screen and (min-width: 767px) {
  .footer {
    display: none;
  }
 }

 @media screen and (max-width: 768px) {
  .aside {
    display: none;
  }
 }
</style>
