<template lang="html">
  <div class=" board text-center">
    <div class="row title ">
      <h1 class="">{{boardTitle}}</h1>
    </div>
    <div v-for="tab in tabs" :key="tab.id">
      <Tab :title="tab.title1" :description="tab.description"></Tab>
    </div>
    <div class="row footer">
      <BoardFooter :boardId="boardId" class="mx-auto"></BoardFooter>
    </div>
  </div>
</template>

<script>


import BoardFooter from '@/components/BoardFooter.vue'
import Tab from '@/components/Tab.vue'
export default {
  name : 'Board',
  components : {
    BoardFooter,
    Tab
  },
  props : {
    boardId : String,
    boardTitle : String,
    data : Array
  },
  data : function(){
    return {
        tabs : [{
         id:1,
         title1 : "No Tab",
         description : ""
       }
     ]
    };
  },
  created : function(){
  }
}
</script>

<style lang="css" scoped>
.board{
  border-radius: 5px;
  margin : 16px;
  border-style: solid;
  border-width: thin;
  min-height: 100px;
  min-width: 200px;
  width: fit-content;
  background-color: #ebecf0;
}
.row{
  margin : 8px
}

.title{

}

.footer{
  border-top-style: solid;
  border-top-width: thin;
}
</style>
