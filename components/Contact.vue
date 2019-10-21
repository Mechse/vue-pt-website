<template>
  <div class="w-full bg-lblue flex flex-wrap items-center justify-center px-12 md:px-24 py-16">
    <img class="w-2/4 md:w-1/4" :src="getImg('leo_peters.png')" alt />
    <div class="flex flex-col md:ml-16 text-white justify-center text-center md:text-left">
      <h5 class="text-4xl">Leo Peters</h5>
      <a class="text-lg mt-2" href="tel:+499123456789">Tel.: 09123 456789</a>
      <a class="text-lg mt-2" href="email:office@passion-tours.at">Email.: office@passion-tours.at</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    getImg(img) {
      return require(`@/assets/img/${img}`)
    }
  }
}
</script>

<style scoped>
</style>