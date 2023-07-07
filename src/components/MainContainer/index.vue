<template>
    <div class="main-app-container">
      <app-header />
        <div class="container-bg">
          <div class="container-bg">
            <div class="title">
              <h1>Rachi, <br> é tudo que você <br>precisa em um só lugar.</h1>
              <img src="@/assets/icons/working.svg" alt="">
            </div>
          </div>
          <button class="btn-signup">Cadastrar-se</button>
        </div>
        <h2 class="sub-title">Como funciona</h2>
    </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: 'MainContainer',
  components: {
    AppHeader
  }
};
</script>
<style src="./styles.scss" scoped lang="scss"></style>
