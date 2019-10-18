<template>
  <div class="pt-48 md:px-24 px-12 text-gblue">
    <div id="hero" class="flex flex-col justify-center py-12">
      <h1 class="text-4xl md:text-6xl font-semibold leading-none">Passion Tours</h1>
      <p class="text-2xl md:text-4xl mt-6">
        Airport transfer
        <br />and customized Tours.
      </p>
      <div class="mt-12 flex flex-wrap">
        <button
          class="w-48 max-w-md mt-4 sm:mt-0 btn-filled bg-lblue hover:border-lblue hover:text-lblue flex justify-center"
          href="#"
        >Kontakt</button>

        <button
          class="mt-4 w-64 sm:mt-0 sm:ml-4 btn-filled bg-gblue hover:border-gblue hover:text-gblue flex justify-center"
        >
          <a href="#">Anfrage</a>
        </button>
      </div>
    </div>

    <div id="about-us" class>
      <div class="w-full flex items-center">
        <div>
          <h2 class="text-4xl m-2">Salzburg</h2>
          <div class="bg-gblue h-2 w-16 ml-2"></div>
          <p class="mt-4 text-lg mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vero maiores architecto soluta officia quia fugiat perferendis, perspiciatis error placeat.
            Commodi amet doloremque tempora non nobis animi earum dolore aut sit!
          </p>
        </div>
        <img class="w-1/2" src="~assets/img/img1.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#hero,
#about-us {
  height: 50vh;
}
</style>