<template>
  <v-app>
    <NavBarComp></NavBarComp>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import NavBarComp from "./components/NavBarComp";
  import Footer from "./components/Footer";
  import aplayer from "vue-aplayer"
  export default {
    name: 'App',

    provide(){
      return{
        reload: this.reload,
      }

    },

    components: {
      NavBarComp,
      Footer,
      aplayer
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
