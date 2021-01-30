<template>
  <div class="profile">
    <div class="user-list">
      <div class="search"></div>
      <div class="user-grid">
        <div class="grid-item"
             v-for="(user, index) in usersList"
             :key="index">
          <div class="gravatar-wrapper">
            <div class="gravatar-image"></div>
          </div>
          <div class="user-info">
            <span class="title">{{ user.fullName }}</span>
            <span class="subtitle">{{ `PARENT: ${user.parent}` }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="user-details">
      <div class="header"></div>
      <div class="menu"></div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',
  computed: {
    ...mapGetters([
      'usersList',
    ]),
  },
};
</script>

<style lang="scss">
  .profile {
    width: 100%;
    height: 100%;
    display: flex;
    .user-list {
      width: 35%;
      height: 100%;
      border-right: 1px solid rgba(207, 198, 201, 0.41);

      .search {
        padding: 20px 0 0 0;
      }
      .user-grid {
        display: flex;
        flex-direction: column;

        .grid-item {
          cursor: pointer;
          height: 100px;
          padding: 20px;
          border-bottom: 1px solid rgba(207, 198, 201, 0.41);

          .gravatar-wrapper {
            float: left;
            .gravatar-image {
              width: 55px;
              height: 55px;
              border-radius: 50%;
              background: #FB8375;
            }
          }

          .user-info {
            float: left;
            width: calc(100% - 55px);
            position: relative;
            padding: 0 15px;
            font-family: 'Lato', sans-serif;
            line-height: 1.5;

            .title {
              font-size: 18px;
              font-weight: 400;
            }

            .subtitle {
              font-size: 16px;
              opacity: .5;
            }

            .title, .subtitle {
              width: 100%;
              float: left;
            }
          }
        }
      }
    }
    .user-details {
      width: 65%;
      height: 100%;
    }
  }
</style>
