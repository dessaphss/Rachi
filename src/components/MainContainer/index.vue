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
          <custom-button
            button-size="normal"
            buttonText="Cadastra-se"
          />
        </div>
        <custom-title title-text="Como funciona" />
        <div class="card-container">
          <CardItem 
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
          />
        </div>
    </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import CustomButton from "@/components/CustomButton";
import CustomTitle from "@/components/CustomTitle";
import CardItem from "@/components/CardItem"

export default {
  name: 'MainContainer',
  data () {
    return {
      cards: [
        {
          title: "Crie conexões",
          description: "Lorem ipsum dolor sit amet, consecteteu.",
          image: require("@/assets/icons/connections.svg")
        },
        {
          title: "100% gratuito",
          description: "Lorem ipsum dolor sit amet, consecteteu.",
          image: require("@/assets/icons/security.svg")
        },
        {
          title: "Compartilhamento",
          description: "Lorem ipsum dolor sit amet, consecteteu.",
          image: require("@/assets/icons/happy.svg")
        }
      ]
    }
  },
  components: {
    AppHeader,
    CustomButton,
    CustomTitle,
    CardItem
  }
};
</script>
<style src="./styles.scss" scoped lang="scss"></style>
