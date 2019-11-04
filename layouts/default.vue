<template>
  <div>
    <Navbar :links="Links" :key="navbarComponentKey"></Navbar>
    <nuxt />
    <Footer :links="Links"></Footer>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      navbarComponentKey: 0
    }
  },
  computed: {
    Links() {
      return [
        { href: '#hero', display: this.$t('nav.home-text') },
        { href: '#about-us h2', display: this.$t('nav.about-us-text') },
        { href: '#places', display: this.$t('nav.places-text') },
        { href: '#tours', display: this.$t('nav.tours-text') }
      ]
    }
  }
}
</script>

<style>
</style>
