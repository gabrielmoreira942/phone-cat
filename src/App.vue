<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <img src="./assets/logo.png">
      <h1>PhoneCat - App</h1>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  img {
    max-width: 50px;
    max-height: 50px;
  }
</style>
