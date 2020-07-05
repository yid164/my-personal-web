<template>
  <v-app>
    <NavBarComp></NavBarComp>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import NavBarComp from "./components/NavBarComp";
  export default {
    name: 'App',

    provide(){
      return{
        reload: this.reload,
      }

    },

    components: {
      NavBarComp
    },

    data(){
      return{
        isRouterAlive: true
      }
    },

    methods:{
      reload(){
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      }
    },
  };
</script>
