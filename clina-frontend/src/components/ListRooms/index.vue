<template>
  <div class="list-rooms">
    <Filters
      :date="date"
      :period="period"
      @change="e => {
        date = e.date
        period = e.period
      }"
    />

    <span class="subtitle">
      {{
        rooms.length
        ? `Encontramos ${ rooms.length } salas disponíveis`
        : `Nenhuma sala disponível`
      }}
    </span>

    <div class="scroll">
      <CardRoom
        v-for="room in rooms"
        :key="room._id"
        :room="room"
      />
    </div>
  </div>
</template>

<script>
import CardRoom from '@/components/CardRoom'
import Filters from '@/components/Filters'
import api from '@/services/api'

export default {
  name: 'ListRooms',
  components: {
    CardRoom,
    Filters
  },
  data () {
    return {
      rooms: [],
      date: '',
      period: ''
    }
  },
  methods: {
    async loadRooms () {
      const response = await api.get('rooms')

      this.rooms = response.data
    }
  },
  async mounted () {
    this.loadRooms()
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
