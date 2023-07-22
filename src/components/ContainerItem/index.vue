<template>
  <div :class="containerClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ContainerItem',
  props: {
    containerClass: {
      type: String,
      default: 'max'
    }
  }
}
</script>
<style scoped lang="scss">
  .max {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.2rem 0 1.2rem;
    &.max-full {
      max-width: 100%;
      padding: 0 1.2rem 0 1.2rem;
    }
  }
</style>