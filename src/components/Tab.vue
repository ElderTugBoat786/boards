<template lang="html">
  <b-card
      :title="title"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2 customCard text-left"
      v-on:click="modalOpen"
    >
      <b-card-text>
        <i>{{description}}</i>
      </b-card-text>
    </b-card>
</template>

<script>
export default {
  name : 'Tab',
  props : {
    title : String,
    description : String,
  },
  methods: {
    modalOpen: function(){ // add param event
    }
  }
}
</script>

<style lang="css" scoped>
.customCard{
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
