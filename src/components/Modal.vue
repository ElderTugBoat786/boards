<template>
  <div>
    <b-modal ref="my-modal" hide-footer title="Titolo" @close="hideModal">
      <keep-alive>
        <component v-bind:is="currentComponent" ></component>
      </keep-alive>
    </b-modal>
  </div>
</template>

<script>

  import CreateBoard from '@/components/CreateBoard';

  export default {
    name: 'Modal',
    props:{
      modalContent : String,
      activeCompoment : String
    },
    components:{
      CreateBoard,
    },
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        //this.$refs['my-modal'].hide()
        this.$store.dispatch('hideModal')

      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden

        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    },
    computed: {
      modalState : {
        get : function(){
          return this.$store.getters.modal.state
        },
        set : function(){}
      },
      currentComponent : {
        get : function(){
          return this.$store.getters.modal.currentComponent
        },
        set : function(){}
      }
    },
    watch : {
      modalState : function(val){
       if (val) {
         this.$refs['my-modal'].show();
       }else {
         this.$refs['my-modal'].hide();
       }
       this.modalState = val;
      }
    }
  }
</script>
