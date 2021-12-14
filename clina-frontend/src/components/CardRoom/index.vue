<template>
  <div class="room">
    <div class="image">
      <img :src="room.images[0]" :alt="room.name">
    </div>

    <div class="title">
      {{ room.name }}
      <span>
        Em {{ room.address.city }}, {{ room.address.state }}.
      </span>
    </div>

    <div class="price">
      A partir de <br/>
      <span>R$ {{ room.price }}</span>/h
    </div>

    <router-link :to="`schedule/${room._id}`">
      Reservar
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CardRoom',
  props: {
    room: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
