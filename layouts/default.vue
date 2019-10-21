<template>
  <div>
    <Navbar :links="navLinks"></Navbar>
    <nuxt />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar: Navbar
  },
  data() {
    return {
      navLinks: [
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
