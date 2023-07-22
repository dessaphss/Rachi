<template>
  <div class="custom-title">
    <h2 class="title-text">{{ titleText }}</h2>
    <p>{{ subTitle }}</p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CustomTitle',
  props: {
    titleText: {
      type: String,
      required: true
    },
    subTitle: {
      type: String
    }
  }
}
</script>
<style src="./styles.scss" scoped lang="scss"></style>