<template>
    <header>
        <div class="container">
            <img class="logo" src="../../assets//logo-rachi.png" alt="Rachi">
            <nav class="navbar">
                <div class="desktop-menu">
                    <ul class="items-menu">
                        <li v-for="item in menuItems" :key="item.id">
                            <a :href="item.url">
                                {{ item.name }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mobile-menu">
                    <button class="navbar-toggler" @click="toggleMenu">
                        <img src="@/assets/icons/menu-icon.svg" alt="Menu">
                    </button>
                    <div class="navbar-collapse" :class="{'show': isMenuOpen}">
                        <ul v-if="isMenuOpen">
                            <li v-for="item in menuItems" :key="item.id">
                                <a :href="item.url">
                                    {{ item.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'AppHeader',
        data () {
            return {
                menuItems: [
                    { id: 1, name: 'Funcionalidades', url: '#'},
                    { id: 2, name: 'App', url: '#'},
                    { id: 3, name: 'Planos', url: '#'},
                    { id: 4, name: 'Contatos', url: '#'}
                ],
                isMenuOpen: false
            }
        },
        methods: {
            toggleMenu () {
                this.isMenuOpen = !this.isMenuOpen
            }
        }
    }
</script>
<style src="./styles.scss" scoped lang="scss"></style>