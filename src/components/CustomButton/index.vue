<template>
  <button :class="['btn-signup', buttonSizeClass]">
    {{ buttonText }}
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'CustomButton',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    buttonSize: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    buttonSizeClass () {
      return this.buttonSize === 'large' ? 'button-large' : ''
    }
  }
}
</script>
<style src="./styles.scss" scoped lang="scss"></style>
