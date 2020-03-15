<template>
  <v-app>
    <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-title class="title">
          Ken
        </v-list-item-title>
        <v-list-item-subtitle class="subtitle-2">
          A job seeker
        </v-list-item-subtitle>
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

      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
        app-bar
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>

      <v-footer>

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
      items: [
        {title: 'Home', icon: 'mdi-view-dashboard', to: '/'},
        {title: 'Profile', icon: 'mdi-view-dashboard', to: '/profile'},
        {title: 'Skills', icon: 'mdi-view-dashboard', to: '/skills'},
        {title: 'Projects', icon: 'mdi-view-dashboard', to: '/project'},
        {title: 'Experience', icon: 'mdi-view-dashboard', to: '/experience'},
        {title: 'Contacts', icon: 'mdi-view-dashboard', to: '/contact'}

      ]
    }
  }
}
</script>
