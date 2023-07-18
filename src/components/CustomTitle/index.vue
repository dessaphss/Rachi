<template>
  <div>
    <h2 class="sub-title">{{ titleText }}</h2>
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
    }
  }
}
</script>
<style src="./styles.scss" scoped lang="scss"></style>