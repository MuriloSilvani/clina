<template>
  <ul :class="['menu', { active }]">
    <li @click="logout">
      <font-awesome-icon icon="sign-out-alt" />
      Sair
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    active: {
      type: Boolean
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
