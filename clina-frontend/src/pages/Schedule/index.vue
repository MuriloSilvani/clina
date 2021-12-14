<template>
  <div class="schedule">
    <div class="title">
      <router-link class="back" to="/rooms">
        <font-awesome-icon icon="chevron-left" />
      </router-link>
      <PageTitle title="Horários disponíveis para escolher" />
    </div>
    <div
      class="scroll"
      v-if="room"
    >
      <div>
        <div
          v-for="schedule in room.schedule"
          :key="schedule.date"
          class="schedule"
        >
          <div class="title">
            <span>
              {{ schedule.date | getDay }}
            </span>
            {{ schedule.date | getMonth }}
          </div>
          <div>
            <div
              v-for="period in schedule.periods"
              :key="period.name"
              class="period"
            >
              <div class="subtitle">
                No período da - <span>{{ period.name }}</span>
              </div>
              <div
                class="availabilities"
              >
                <div
                  v-for="(availability, index) in period.available"
                  :key="index"
                  class="availability"
                >
                  {{ availability.start }} - {{ availability.end }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="card"
        >
          <span class="value">
            Valor total: R$ {{ room.price * schedule.length }}/h
          </span>
  
          <span class="name">
            {{ room.name }}
          </span>
  
          <div class="features">
            <span class="head">
              Comodidades da sala incluídas
            </span>
          </div>

          <div class="availabilities">
            <span class="head">
              Data e horário escolhido
            </span>
          </div>

          <button>
            Finalizar reserva
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle'
import api from '@/services/api'
import { DateTime } from 'luxon'

export default {
  name: 'Rooms',
  components: {
    PageTitle
  },
  data () {
    return {
      room: {},
      schedule: []
    }
  },
  async mounted () {
    const response = await api.get(`rooms/${this.$route.params._id}`)
    this.room = response.data
  },
  filters: {
    getDay (date) {
      return DateTime.fromISO(date).day
    },
    getMonth (date) {
      return DateTime.fromISO(date).monthLong
    }
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />