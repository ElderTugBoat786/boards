import Vue from 'vue'
import Vuex from 'vuex'

import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const base_url = 'http://localhost/api-simple/'


export default new Vuex.Store({
  state: {
    count : 0,
    boards : [],
    modal : {
      state : false,
      currentComponent : ''
    },
  },
  getters : {
    boards : state => {
      return state.boards
    },
    modal : state => {
      return state.modal
    }
  },
  mutations: {
    increment (state){
      state.count++;
      state.init = true;
    },
    initState (state){
      axios.
        get(base_url+'/boards/get.php')
        .then( response => (state.boards = response.data.boards))
    },
    deleteBoard( state, boardId ){
      axios.
        get(base_url+'/boards/delete.php?board_id='+boardId)
        .then( function(){
          state.boards = state.boards.filter( (item) =>  { return item.id !== boardId })
        })
    },
    createBoard( state, boardName ){
      axios.
        get(base_url+'/boards/create.php?board_name='+boardName)
        .then( function(response){
          axios.
            get(base_url+'/boards/get.php?board_id='+response.data.id)
            .then(function(response){
              state.boards.push(response.data.boards[0])
              state.modal.state = false;
            })
        })
    },
    showModal(state, payload){
      state.modal.state = payload.modalState;
      state.modal.currentComponent = payload.componentName
    },

    hideModal(state){
      state.modal.state = false;
    }
  },
  actions: {
    increment(context){
      context.commit('increment')
    },
    initState(context){
      context.commit('initState')
    },
    deleteBoard(context,payload){
      context.commit('deleteBoard',payload.boardId)
    },
    showModal(context,payload){
      context.commit('showModal',payload)
    },
    hideModal(context){
      context.commit('hideModal')
    },
    createBoard(context,payload){
      context.commit('createBoard',payload.boardName)
    }
  },
  modules: {
  }
})
