<template lang="html">
  <div class="mt-3">
    <b-button-group>
      <b-button variant="success">+Tab</b-button>
      <b-button variant="danger" v-on:click="deleteBoard">Cancella</b-button>
    </b-button-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props : {
    boardId : String
  },
  name : 'BoardFooter',
  methods:{
    ...mapActions({
        add: 'increment'
      }),
    incrementStore : function(){
      this.add();
    },
    deleteBoard : function(){
      this.$store.dispatch('deleteBoard',{boardId : this.boardId});
    }
  }


}
</script>

<style lang="css" scoped>
</style>
