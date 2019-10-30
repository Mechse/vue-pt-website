<template>
  <div class="modal-backdrop z-20">
    <div class="modal w-5/6 p-4 rounded-lg" v-if="activeTour">
      <div
        v-if="activeTour.img"
        class="w-full h-64 bg-cover bg-center rounded-lg"
        :style="{
                backgroundImage: `url(${getImg(activeTour.img)})`,
            }"
      ></div>
      <h3 class="text-gblue text-3xl mt-4">{{ activeTour.title }}</h3>
      <p class="font-body mt-4">{{ activeTour.desc }}</p>
      <p
        class="text-lblue italic text-xl mt-4"
        v-for="price in activeTour.priceList"
        :key="price"
      >{{ price }} €</p>
      <button
        class="mt-4 btn-filled w-2/3 md:w-1/3 bg-lblue hover:border-lblue hover:text-lblue"
        @click="$emit('hide-tour')"
      >Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['activeTour'],
  methods: {
    getImg(img) {
      return require(`@/assets/img/${img}`)
    }
  }
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>