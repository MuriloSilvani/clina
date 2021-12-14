<template>
  <form class="filters">
    <div class="filter">
      <label for="date">
        Precisa para quais dias?
      </label>
      <input
        :value="date"
        @change="e => $emit('change', {
          date: e.target.value,
          period
        })"
        type="date"
        id="date"
      >
    </div>
    <div class="filter">
      <label for="period">
        Período do dia
      </label>
      <select
        :value="period"
        @change="e => $emit('change', {
          period: e.target.value,
          date
        })"
        id="period"
      >
        <option value="" checked>Todos</option>
        <option value="morning">Manhã</option>
        <option value="evening">Tarde</option>
        <option value="night">Noite</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Filters',
  props: {
    date: [Object, String],
    period: [Object, String]
  }
}
</script>

<style lang="scss" scoped src="./style.scss" />
