<template>
  <div id="tours" class="glide">
    <div class="glide__track h-full py-2" data-glide-el="track">
      <ul class="glide__slides h-full">
        <li class="glide__slide" v-for="tour in tours" :key="tour.title">
          <div
            class="border-red-500 active:bg-blue-100 shadow-xl rounded-lg h-full relative bg-cover bg-center"
            :style="{
                backgroundImage: `url(${getImg(tour.img)})`
            }"
          >
            <div></div>
            <div class="absolute bottom-0 left-0 ml-4 mb-8">
              <h5 class="text-2xl text-white font-semibold">{{ tour.title }}</h5>
              <p class="text-xl text-white italic">{{ tour.desc }}</p>
              <button class="btn-filled bg-lblue hover:border-lblue hover:text-lblue mt-2">Anfrage</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div data-glide-el="controls[nav]" class="w-full flex justify-center">
      <button
        v-for="(tour, index) in tours"
        :key="index"
        :data-glide-dir="`=${index}`"
        class="text-xl"
      >o</button>
    </div>
  </div>
</template>

<script>
import '@glidejs/glide/dist/css/glide.core.min.css'
import Glide from '@glidejs/glide'
export default {
  name: 'Carousel',
  props: ['tours'],
  data() {
    return {}
  },
  methods: {
    getImg(img) {
      return require(`@/assets/img/${img}`)
    }
  },
  mounted() {
    var glide = new Glide('#tours', {
      focusAt: 'center',
      type: 'carousel',
      perView: 3,
      breakpoints: {
        1024: {
          perView: 2,
          peek: 0
        },
        600: {
          perView: 1
        }
      },
      startAt: 0,
      gap: 25
    })

    glide.mount()
  }
}
</script>

<style>
.glide__bullet--active {
  color: #4dccbd;
}
</style>