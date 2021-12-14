<template>
  <div class="rooms">
    <PageTitle title="Nossas salas disponíves agora." />
    <ListRooms />
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import ListRooms from '@/components/ListRooms'

export default {
  name: 'Rooms',
  components: {
    PageTitle,
    ListRooms
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />