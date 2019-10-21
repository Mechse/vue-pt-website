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
        { href: '#', display: 'Team' },
        { href: '#', display: 'About' },
        { href: '#', display: 'Vienna' }
      ]
    }
  }
}
</script>

<style>
</style>
