// TODO impressum, turning text, english version, transfers google analytics, basic seo, lazy loading, vuex state management, arabic version, map
<template>
  <div class="text-gblue">
    <CookieBanner></CookieBanner>
    <div :class="{hidden: modalHideClass}" v-if="activeTour">
      <Modal v-on:hide-tour="hideModal()" :activeTour="activeTour"></Modal>
    </div>
    <div id="hero" class="flex md:px-24 px-12 flex-col justify-center">
      <h1 class="text-4xl md:text-6xl font-semibold leading-none">Passion Tours</h1>
      <p class="text-2xl md:text-4xl mt-6">{{$t("index.hero-text")}}</p>
      <div class="mt-12 flex flex-wrap">
        <button
          class="w-48 max-w-md mt-4 sm:mt-0 btn-filled bg-lblue hover:border-lblue hover:text-lblue flex justify-center"
          href="#"
          @click.prevent="scrollTo('#contact')"
        >{{$t("global.contact-btn")}}</button>
        <button
          class="hidden mt-4 w-64 sm:mt-0 sm:ml-4 btn-filled bg-gblue hover:border-gblue hover:text-gblue flex justify-center"
        >Anfrage</button>
      </div>
    </div>
    <div
      id="about-us"
      class="my-16 md:px-24 px-12 py-12 w-full bg-gblue text-white flex flex-col items-center"
    >
      <h2 class="text-4xl">{{$t("index.about-us-headline")}}</h2>
      <p class="text-lg text-center mt-4 font-body font-light my-6">{{$t("index.about-us-text")}}</p>
    </div>
    <div id="places" class="md:px-24 px-12 mt-24">
      <CityDesc
        city="Salzburg"
        direction="true"
        img="Salzburg.png"
        :desc="$t('index.salzburg-text')"
      ></CityDesc>
      <CityDesc city="Wien" img="Wien.png" :desc="$t('index.wien-text')" direction></CityDesc>
      <CityDesc
        city="Bratislava"
        direction="true"
        img="Bratislava.png"
        :desc="$t('index.bratislava-text')"
      ></CityDesc>
    </div>
    <div id="tours" class="w-full flex flex-col bg-gray-200 md:px-24 p-12 mt-12">
      <div class="md:mt-8"></div>
      <!---->
      <div class="my-4 mr-6 flex flex-col justify-center">
        <h3 class="text-4xl font-semibold">Unsere Touren</h3>
      </div>
      <!-- -->
      <!-- -->
      <Carousel
        :key="carouselComponentKey"
        id="tours"
        @show-tour="showModal($event)"
        :tours="toursInfo"
      ></Carousel>
    </div>
    <Contact id="contact"></Contact>
  </div>
</template>

<script>
import CityDesc from '../components/CityDesc'
import Carousel from '../components/Carousel'
import Contact from '../components/Contact'
import Modal from '../components/Modal'
import CookieBanner from '../components/CookieBanner'
import * as deTours from '../static/touren'
import * as enTours from '../static/tours'

// this.$i18n.locale

export default {
  name: 'Home',
  components: {
    CityDesc,
    Carousel,
    Contact,
    CookieBanner,
    Modal
  },
  data() {
    return {
      enTourInfo: enTours,
      deTourInfo: deTours,
      activeTour: {},
      modalHideClass: true,
      carouselComponentKey: 0
    }
  },
  methods: {
    getImg(img) {
      return require(`@/assets/img/${img}`)
    },
    scrollTo(selector) {
      let el = document.querySelector(selector).offsetTop - 150
      window.scroll({ top: el, behavior: 'smooth' })
    },
    showModal(tour) {
      this.modalHideClass = false
      this.activeTour = tour
    },
    hideModal() {
      this.modalHideClass = true
      this.activeTour = {}
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    },
    toursInfo() {
      if (this.lang === 'en') {
        return this.enTourInfo
      } else if (this.lang === 'de') {
        return this.deTourInfo
      } else {
        return this.enTourInfo
      }
    }
  },
  watch: {
    lang: function() {
      console.log('WATCHER')
      this.carouselComponentKey += 1
    }
  }
}
</script>

<style scoped>
#hero {
  height: 90vh;
}
#tours {
  height: 70vh;
}
#carousel div.glide__track,
div.glide__track ul {
  height: 100% important;
}
</style>