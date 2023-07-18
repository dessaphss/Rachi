<template>
  <div class="card">
    <div class="card-image">
      <img
        :src="card.image"
        alt="Card Image"
      />
    </div>
    <div class="card-content">
      <h3>{{ card.title }}</h3>
      <p> {{ card.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardItem',
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style src="./styles.scss" scoped lang="scss"></style>