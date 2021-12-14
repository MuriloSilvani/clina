<template>
  <div class="login-page">
    <div class="login">
      <img src="@/assets/logo.png" alt="Logo clina" />

      <span>
        Bem-vindo de volta!
      </span>

      <form @submit.prevent="login">
        <div class="input">
          <label for="email">Endereço de e-mail</label>
          <input v-model="email" required type="email" id="email" placeholder="Digite seu e-mail" />
        </div>

        <div class="input">
          <label for="password">Senha</label>
          <input v-model="password" required type="password" id="password" placeholder="Digite sua senha" />
        </div>

        <button type="submit">
          Entrar
        </button>
      </form>

      <router-link to="forgot-password">Esqueci minha senha</router-link>

    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'Login',
  data () {
    return {
      email: 'email@teste.com',
      password: 'teste'
    }
  },
  methods: {
    async login () {
      let token = null

      try {
        const response = await api.post('auth', {
          email: this.email,
          password: this.password
        })
        token = response.data.token
      } catch (error) {
        console.log(error)
      }

      if (token) {
        localStorage.setItem('token', token)
        this.$router.replace('/rooms')
      } else {
        alert('Login inválido')
      }
    }
  },
  mounted () {
    const token = localStorage.getItem('token')
    if (token) {
      this.$router.replace('/rooms')
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />