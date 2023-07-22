<template>
  <div>
    <container-item data-aos="fade-down">
      <app-header />
    </container-item>
    <container-item containerClass="max-full">
      <container-item data-aos="fade-right">
        <div class="bg-style">
          <h1>Rachi, <br> é tudo que você <br>precisa em um só lugar.</h1>
          <img src="@/assets/icons/working.svg" alt="">
        </div>
        <custom-button
          button-size="normal"
          buttonText="Cadastra-se"
        />
      </container-item>
    </container-item>   
    <container-item> 
        <custom-title title-text="Como funciona" />
        <div class="card-container">
          <CardItem 
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
          />
        </div>
    </container-item>
    <container-item containerClass="max-full">
      <container-item>
        <div class="app">
          <div class="app-description">
            <h4>Baixe nosso app para desfrutar mais!</h4>
            <p class="subtitle">Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.</p>
            <div class="store">
              <img src="@/assets/icons/google-play.svg" alt="">
              <img src="@/assets/icons/app-store.svg" alt="">
            </div>
          </div>
          <img src="@/assets/icons/notifications.svg" alt="">
        </div>
      </container-item>
    </container-item>
    <custom-title
      title-text="Nossos Planos"
      sub-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices."
    />
  </div>
</template>
<script>
import AppHeader from "@/components/AppHeader";
import CustomButton from "@/components/CustomButton";
import CustomTitle from "@/components/CustomTitle";
import CardItem from "@/components/CardItem"
import ContainerItem from "@/components/ContainerItem"
import AOS from 'aos'
import 'aos/dist/aos.css'

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
    CardItem,
    ContainerItem,
  },
  mounted () {
    AOS.init()
  }
}
</script>
<style src="./styles.scss" scoped lang="scss"></style>
