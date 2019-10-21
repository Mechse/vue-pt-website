<template>
  <nav :class="navClass" class="w-full flex items-center text-gblue">
    <div class="hidden md:flex items-center font-display">
      <img class="w-48 ml-8 my-4" src="~assets/img/logos/logo.svg" alt />

      <div class="ml-6 hover:text-lblue" v-for="(link, index) in links" :key="index">
        <a
          class="text-lg font-semibold"
          :href="link.href"
          @click.prevent="scrollTo(link.href)"
        >{{ link.display }}</a>
      </div>
      <!-- Contact Button -->
      <div
        class="ml-6 py-1 px-2 border border-gblue rounded-lg shadow-lg hover:shadow-blg hover:text-lblue hover:border-lblue"
      >
        <a
          class="text-lg font-semibold"
          href="#contact"
          @click.prevent="scrollTo('#contact')"
        >Kontakt</a>
      </div>
    </div>

    <!-- MOBILE -->
    <div class="md:hidden flex flex-col w-full z-10">
      <div class="full-w flex flex-row justify-between bg-white">
        <img class="w-48 ml-4 my-4" src="~assets/img/logos/logo.svg" alt />
        <!-- burger toogle part-->
        <div @click="navToggle" class="ml-4 flex items-center flex-shrink-0 text-white">
          <svg
            id="menu"
            class="h-8 mr-4"
            :class="menuControl === 'flex' ? 'hidden' : 'block'"
            style="fill: #4DCCBD;"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"
            />
          </svg>

          <svg
            id="cross"
            style="transform: rotate(45deg); fill: #4F6272;"
            class="h-8 mr-4"
            :class="menuControl"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"
            />
          </svg>
        </div>
      </div>

      <!-- menu part -->
      <div
        id="menu-links"
        class="w-full bg-gray-200 flex flex-wrap text-bgray"
        :class="menuControl"
      >
        <div
          class="pl-4 py-4 w-full cursor-pointer active:bg-blue-200"
          v-for="(link, index) in links"
          :key="index"
          @click.prevent="scrollTo(link.href)"
        >
          <a class="text-lg" :href="link.href">{{ link.display }}</a>
        </div>
        <div class="pl-4 py-4 w-full cursor-pointer active:bg-blue-200">
          <a class="text-lg" href="#">Kontakt</a>
        </div>
      </div>
      <!-- -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navClass: {
        'bg-white': false,
        'bg-transparent': true,
        'z-0': true,
        'z-10': false,
        'shadow-lg': false,
        fixed: false
      },
      menuControl: 'hidden'
    }
  },
  props: ['links'],
  methods: {
    onScroll() {
      if (window.scrollY > 50) {
        this.navClass['bg-transparent'] = false
        this.navClass['bg-white'] = true
        this.navClass['z-10'] = true
        this.navClass['z-0'] = false
        this.navClass.fixed = true
        this.navClass['shadow-lg'] = true
      } else {
        this.navClass['bg-transparent'] = true
        this.navClass['bg-white'] = false
        this.navClass['z-10'] = false
        this.navClass['z-0'] = true
        this.navClass.fixed = true
        this.navClass['shadow-lg'] = false
      }
    },
    navToggle() {
      this.menuControl = this.menuControl === 'hidden' ? 'flex' : 'hidden'
    },
    scrollTo(selector) {
      this.menuControl = 'hidden'
      let el = document.querySelector(selector).offsetTop - 150
      window.scroll({ top: el, behavior: 'smooth' })
    }
  },
  mounted() {},
  beforeMount() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style>
</style>