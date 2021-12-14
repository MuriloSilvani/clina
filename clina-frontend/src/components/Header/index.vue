<template>
  <div class="header">
    <img src="@/assets/logo.png" alt="Logo clina" />

    <router-link to="/rooms" class="title">
      <font-awesome-icon icon="clock" />
      <span>
        Salas disponíveis
      </span>
    </router-link>


    <div
      class="user"
      @click="menu = !menu"
    >
      <div class="avatar">
        <font-awesome-icon icon="user" />
      </div>
      <font-awesome-icon icon="chevron-down" />
      <Menu :active="menu" />
    </div>

  </div>
</template>

<script>
import Menu from './Menu'

export default {
  name: 'Header',
  components: {
    Menu
  },
  data () {
    return {
      menu: false
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
