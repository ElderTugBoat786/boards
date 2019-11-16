<template lang="html">
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="boardName-group"
        label="Nome Board"
        label-for="boardName"
        description="Inserisci il titolo della board."
      >
        <b-form-input
          id="boardName"
          v-model="form.boardName"
          type="text"
          required
          placeholder="Board Name"
          :state="boardNameValidation"

        ></b-form-input>
        <b-form-invalid-feedback :state="boardNameValidation">
          Il nome deve avere più di 3 caratteri
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="boardNameValidation">
          Ottimo!
        </b-form-valid-feedback>
      </b-form-group>
      <div class="text-right mr-3">
        <b-button type="submit" variant="primary" >Crea</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name : 'CreateBoard',
  data() {
      return {
        form: {
          boardName: '',
        },
        show: true
      }
    },
    computed : {
      boardNameValidation(){
        return this.form.boardName.length > 3
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$store.dispatch('createBoard',{boardName : this.form.boardName})
        this.form.boardName = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onReset(){

      }
    }
}
</script>

<style lang="css" scoped>
</style>
