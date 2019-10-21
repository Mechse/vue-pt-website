<template>
  <footer
    class="w-full flex flex-row items-center pin-b py-8 px-4 bg-gblue text-white md:px-24 px-12"
  >
    <div class="flex flex-row mr-16">
      <div class="h-20 w-1 bg-white mr-2"></div>
      <div class="flex flex-col">
        <a v-for="(link, index) in links" :key="index" :href="link.href">{{ link.display }}</a>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="h-20 w-1 bg-white mr-2"></div>
      <div class="flex flex-col">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
    </div>
    <div class="flex justify-end w-full">
      <img src="@/assets/img/logos/logoW.svg" class="w-56" alt />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: ['links']
}
</script>

<style>
</style>