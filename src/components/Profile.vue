<template>
  <div class="profile">
    <div class="user-list">
      <div class="user-grid">
        <div class="search">
          <input type="text" placeholder="Search"/>
        </div>
        <div class="grid-item"
             :class="{ active: index === selectedUser.id }"
             @click="showUserDetails(user)"
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
      <div class="header">
        <div class="gravatar-wrapper large">
          <div class="gravatar-image"></div>
        </div>
        <div class="user-info">
          <span class="title">{{ selectedUser.fullName }}</span>
          <span class="subtitle">{{ `PARENT: ${selectedUser.parent}` }}</span>
        </div>
        <div class="menu">
          <ul>
            <li class="menu-item"
                @click="selectUserDetailsMenuItem(item)"
                :class="{ active: index === selectedUserMenu.id }"
                v-for="(item, index) in userDetailsMenu"
                :key="index">
              {{ item.value }}
            </li>
          </ul>
        </div>
      </div>
      <div class="content">
        <component :is="playerDetailsComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PlayerDetailsSessions from './PlayerDetailsSessions';
import PlayerDetailsInfo from './PlayerDetailsInfo';
import PlayerDetailsFirstReview from './PlayerDetailsFirstReview';
import PlayerDetailsInvoices from './PlayerDetailsInvoices';
import PlayerDetailsNotes from './PlayerDetailsNotes';

export default {
  name: 'Profile',
  components: {
    PlayerDetailsSessions,
    PlayerDetailsInfo,
    PlayerDetailsFirstReview,
    PlayerDetailsInvoices,
    PlayerDetailsNotes,
  },
  data() {
    return {
      playerDetailsComponent: 'PlayerDetailsSessions',
      selectedUserMenu: {},
      selectedUser: {},
    };
  },
  computed: {
    ...mapGetters([
      'usersList',
      'userDetailsMenu',
    ]),
  },
  methods: {
    showUserDetails(user) {
      this.selectedUser = user;
    },
    selectUserDetailsMenuItem(item) {
      this.playerDetailsComponent = item.key;
      this.selectedUserMenu = item;
    },
  },
  created() {
    [this.selectedUser] = this.usersList;
    [this.selectedUserMenu] = this.userDetailsMenu;
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
        margin-bottom: 20px;
        padding: 20px 20px 0 20px;
        height: 55px;

        input {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background-color: #EBECF3;
          border: none;
          outline: none;
          padding-left: 10px;
        }
      }
      .user-grid {
        display: flex;
        flex-direction: column;

        .grid-item {
          cursor: pointer;
          height: 100px;
          padding: 20px;
          border-bottom: 1px solid rgba(207, 198, 201, 0.41);
          border-left: 3px solid transparent;

          &.active {
            border-left: 3px solid #5246d2;
            background-color: #EBECF3;
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
      padding: 20px;

      .header {
        float: left;
        width: 100%;

        .user-info {
          float: left;
          position: relative;
          padding: 0 15px;
          font-family: 'Lato', sans-serif;
          line-height: 1.5;
          width: calc(100% - 75px);

          .title {
            font-size: 32px;
            font-weight: 700;
            font-family: 'Roboto', sans-serif;
          }

          .subtitle {
            font-size: 16px;
            opacity: .5;
            font-family: 'Lato', sans-serif;
          }

          .title, .subtitle {
            width: 100%;
            float: left;
          }
        }

        .menu {
          float: left;
          width: 100%;
          margin-top: 30px;

          ul {
            list-style: none;
          }

          .menu-item {
            float: left;
            margin-right: 20px;
            border-radius: 30px;
            border: 1px solid #e2e2e2;
            padding: 6px;
            text-align: center;
            cursor: pointer;
            font-size: 14px;
            min-width: 15%;
            max-width: 20%;

            &.active {
              background-color: #5246d2;
              color: #fff;
            }
          }
        }
      }
    }
    .gravatar-wrapper {
      float: left;
      .gravatar-image {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: #FB8375;
      }

      &.large {
        .gravatar-image {
          width: 75px;
          height: 75px;
        }
      }
    }
  }
</style>
