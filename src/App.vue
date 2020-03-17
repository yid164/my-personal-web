<template>
  <v-app>
    <v-navigation-drawer app
                         v-model="drawer"
                         :expand-on-hover="expandOnHover"
                         :mini-variant="miniVariant"
                         dark
                         right
                          >
      <v-list-item :class="miniVariant && 'pa-2'">
        <v-list-item-avatar>
            <img src="./assets/myPic.png">
        </v-list-item-avatar>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">Ken Dong</v-list-item-title>
            <v-list-item-subtitle>yinsheng.dong@usask.ca</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.to">
          <v-list-item-icon>
            <v-icon :to=item.to>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title> {{ item.title }} </v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        <v-divider></v-divider>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>

      <v-footer dark padless>
        Written by Yinsheng Dong @ 2020
      </v-footer>
    </v-content>
  </v-app>

</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return{
      drawer: true,
      items: [
        {title: 'Home', icon: 'mdi-home', to: '/'},
        {title: 'Profile', icon: 'mdi-account', to: '/profile'},
        {title: 'Skills', icon: 'mdi-code-braces-box', to: '/skills'},
        {title: 'Projects', icon: 'mdi-codepen', to: '/projects'},
        {title: 'Experience', icon: 'mdi-bike', to: '/experience'},
        {title: 'Contacts', icon: 'mdi-mail', to: '/contact'}

      ],
      color: 'primary',
      colors: [
              'primary',
              'blue',
              'success',
              'read',
              'teal'
      ],
      miniVariant: true,
      expandOnHover: true
    }
  }
}
</script>
