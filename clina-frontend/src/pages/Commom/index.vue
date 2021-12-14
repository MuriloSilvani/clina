<template>
  <div class="commom">
    <Header />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Commom',
  components: {
    Header
  },
  beforeMount () {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Usuário não autenticado')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
