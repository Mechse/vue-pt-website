<template>
  <div class="text-gblue">
    <div id="hero" class="flex md:px-24 px-12 flex-col justify-center">
      <h1 class="text-4xl md:text-6xl font-semibold leading-none">Passion Tours</h1>
      <p class="text-2xl md:text-4xl mt-6">
        Airport transfer
        <br />and customized Tours.
      </p>
      <div class="mt-12 flex flex-wrap">
        <button
          class="w-48 max-w-md mt-4 sm:mt-0 btn-filled bg-lblue hover:border-lblue hover:text-lblue flex justify-center"
          href="#"
          @click.prevent="scrollTo('#contact')"
        >Kontakt</button>

        <button
          class="hidden mt-4 w-64 sm:mt-0 sm:ml-4 btn-filled bg-gblue hover:border-gblue hover:text-gblue flex justify-center"
        >Anfrage</button>
      </div>
    </div>
    <div
      id="about-us"
      class="my-16 md:px-24 px-12 py-12 w-full bg-gblue text-white flex flex-col items-center"
    >
      <h2 class="text-4xl">Über uns</h2>
      <p class="text-lg text-center mt-4 font-body font-light my-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Officia, voluptatibus ad alias fugit corporis tenetur perferendis illum mollitia exercitationem consequatur, quod sint.
        Dolorem blanditiis eligendi minima vero libero assumenda id.
      </p>
    </div>
    <div id="places" class="md:px-24 px-12 mt-24">
      <CityDesc city="Salzburg" direction="true">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Impedit temporibus distinctio harum!
        Magnam iure id quas a deserunt consectetur laboriosam ratione repellat optio adipisci,
        ullam dolorem aspernatur, magni necessitatibus? Eius!
      </CityDesc>
      <CityDesc city="Wien">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Impedit temporibus distinctio harum!
        Magnam iure id quas a deserunt consectetur laboriosam ratione repellat optio adipisci,
        ullam dolorem aspernatur, magni necessitatibus? Eius!
      </CityDesc>
      <CityDesc city="Bratislava" direction="true">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Impedit temporibus distinctio harum!
        Magnam iure id quas a deserunt consectetur laboriosam ratione repellat optio adipisci,
        ullam dolorem aspernatur, magni necessitatibus? Eius!
      </CityDesc>
    </div>
    <div id="tours" class="w-full flex flex-col bg-gray-200 md:px-24 p-12 mt-12">
      <div class="md:mt-8"></div>
      <!---->
      <div class="my-4 mr-6 flex flex-col justify-center">
        <h3 class="text-4xl font-semibold">Unsere Touren</h3>
      </div>
      <!-- -->
      <Carousel id="tours" v-bind:tours="toursInfo"></Carousel>
    </div>
    <Contact id="contact"></Contact>
  </div>
</template>

<script>
import CityDesc from '../components/CityDesc'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import * as Tours from '../static/tours'

export default {
  name: 'Home',
  components: {
    CityDesc,
    Carousel,
    Contact
  },
  methods: {
    getImg(img) {
      return require(`@/assets/img/${img}`)
    },
    scrollTo(selector) {
      let el = document.querySelector(selector).offsetTop - 150
      window.scroll({ top: el, behavior: 'smooth' })
    }
  },
  data() {
    return {
      toursInfo: Tours
    }
  }
}
</script>

<style scoped>
#hero {
  height: 90vh;
}
#tours {
  height: 60vh;
}

#carousel div.glide__track,
div.glide__track ul {
  height: 100% important;
}
</style>