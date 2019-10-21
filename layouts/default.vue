<template>
  <div>
    <Navbar :links="Links"></Navbar>
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
      Links: [
        { href: '#hero', display: 'Home' },
        { href: '#about-us h2', display: 'About Us' },
        { href: '#places', display: 'Orte' },
        { href: '#tours', display: 'Touren' }
      ]
    }
  }
}
</script>

<style>
</style>
