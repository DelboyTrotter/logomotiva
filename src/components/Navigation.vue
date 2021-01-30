<template>
  <div class="navigation-wrapper">
    <ul class="navigation">
      <li class="nav-item"
          :class="{active: selected === index}"
          v-for="(nav, index) in navigation"
          :key="index" @click="selectNav(nav)">
        {{ nav.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Navigation',
  data() {
    return {
      selected: 0,
    };
  },
  computed: {
    ...mapGetters([
      'navigation',
    ]),
  },
  methods: {
    selectNav(nav) {
      this.selected = nav.id;
      this.$emit('selectNav', nav.value);
    },
  },
};
</script>

<style lang="scss">
  .navigation-wrapper {
    width: 20%;
    position: absolute;
    top: 50%;
    .navigation {
      list-style: none;
      .nav-item {
        color: #242324;
        margin-bottom: 25px;
        font-size: 18px;
        cursor: pointer;
        position: relative;

        &.active {
          color: #000;
          font-weight: 700;

          &:after {
            content: "";
            width: 20px;
            height: 2px;
            background: red;
            position: absolute;
            left: -30px;
            top: 6px
          }
        }
      }
    }
  }
</style>
