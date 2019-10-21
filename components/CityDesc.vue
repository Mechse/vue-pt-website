<template>
  <div class="mt-2">
    <!-- Desktop -->
    <div class="hidden md:flex w-full flex-wrap items-center">
      <!-- left -->
      <div v-if="direction" class="w-1/2">
        <h2 class="text-4xl m-2">{{ city }}</h2>
        <div class="bg-gblue h-2 w-16 ml-2"></div>
        <p class="mt-4 text-lg mx-2 font-body font-light">
          <slot></slot>
        </p>
      </div>
      <!-- -->
      <img class="w-1/2 px-12" :src="getImg(city)" alt />
      <!-- right -->
      <div v-if="!direction" class="w-1/2">
        <h2 class="text-4xl m-2">{{ city }}</h2>
        <div class="bg-gblue h-2 w-16 ml-2"></div>
        <p class="mt-4 text-lg mx-2 font-body font-light">
          <slot></slot>
        </p>
      </div>
      <!-- -->
    </div>
    <!-- Mobile -->
    <div class="md:hidden flex w-full flex-wrap items-center">
      <img :src="getImg(city)" alt />
      <div>
        <h2 class="text-4xl">{{ city }}</h2>
        <div class="bg-gblue h-2 w-16"></div>
        <p class="mt-4 text-lg font-body font-light">
          <slot></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityDesc',
  props: ['city', 'direction'],
  methods: {
    getImg(img) {
      return require(`@/assets/img/${img}.png`)
    }
  }
}
</script>

<style>
</style>