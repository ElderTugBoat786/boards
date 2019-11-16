<template lang="html">
  <div class="">
    <NavBar></NavBar>
    <div id="board-container" class="row">
      <div class="" v-for="board in boards" :key="board.id">
        <div class="col-md-6">
          <board :boardTitle = "board.name" :boardId="board.id"></board>
        </div>
      </div>
    </div>
    <div class="content">
      <Modal></Modal>
    </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import Board from '@/components/Board.vue'
import Modal from '@/components/Modal.vue'

export default {
  name : 'Home',
  components : {
    NavBar,
    Board,
    Modal,
  },
  data : function(){
    return {
    }
  },
  created: function(){
    this.$store.dispatch('initState');
    
  },
  computed : {
    boards : function(){
      return this.$store.getters.boards;
    }
  }

}
</script>

<style lang="css" scoped>
</style>
