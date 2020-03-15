<template>
  <v-app>
    <v-content transition="slide-x-transition">
      <v-btn to="/">Home</v-btn>|
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/contact">Contact</router-link>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>



export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
};
</script>
