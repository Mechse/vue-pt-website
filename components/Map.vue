<template>
  <div id="map" class="shadow-lg" style="height: 75%; width: 100%;"></div>
</template>

<script>
export default {
  data() {
    return {
      url:
        'https://api.mapbox.com/styles/v1/maxleo2000/ck2ja6iik2v9r1ct5lamejj09/tiles/512/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWF4bGVvMjAwMCIsImEiOiJjazJocWZpenUwZDFpM25tbGM5ZXVzMmJlIn0.cVVpLhJKDzP16W9Xufti0A',
      zoom: 7,
      center: [48.210033, 16.363449],
      bounds: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      const attributes = `© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`
      const myMap = L.map('map').setView([48.21, 16.36], 11)
      myMap.scrollWheelZoom.disable()
      const tiles = L.tileLayer(this.url, {
        tileSize: 512,
        zoomOffset: -1,
        attributes
      }).addTo(myMap)
    })
  }
}
</script>

<style>
</style>