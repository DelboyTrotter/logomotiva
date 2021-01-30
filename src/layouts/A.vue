<template>
  <div class="a-layout">
    <div class="side-content">
      <div class="header">
        <img src="../assets/img/logo.png" alt="Speech Therapy">
      </div>
      <Navigation @selectNav="selectNavigation"></Navigation>
    </div>
    <div class="main-content">
      <component :is="selectedNav"></component>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import Profile from '@/components/Profile';
import Calendar from '@/components/Calendar';

export default {
  name: 'A',
  components: {
    Navigation,
    Profile,
    Calendar,
  },
  data() {
    return {
      selectedNav: 'Profile',
    };
  },
  methods: {
    selectNavigation(event) {
      this.selectedNav = event;
    },
  },
};
</script>

<style scoped lang="scss">
.a-layout {
  background: #E6E9F1;
  float: left;
  width: 100%;
  height: 100vh;
  padding-left: 30px;
  padding-top: 23px;
  display: flex;

  .side-content {
    width: 13%;
  }
  .main-content {
    width: 87%;
    background: #fff;
    border-radius: 20px;
    position: relative;
    padding: 40px;
    margin-top: 45px;
  }
}
</style>
