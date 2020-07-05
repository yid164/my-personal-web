<template>
  <div class="home">
    <Banner></Banner>
    <MoreBanner></MoreBanner>
    <GoalBanner></GoalBanner>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner";
import MoreBanner from "../components/MoreBanner";
import GoalBanner from "../components/GoalBanner";

export default {
  name: 'Home',
  components: {
    Banner,
    MoreBanner,
    GoalBanner
  }
}
</script>
