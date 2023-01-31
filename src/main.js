import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { Server } from 'miragejs';
import { mapState, mapMutations } from 'vuex'

new Server({
  routes() {
    this.get('/api/accounts', ()=>{
      return [
        { id: 1,
          name:'Barly Vallendito',
          accnumber: '4683 8628 4834', //very wrong, shouldn't work but i guess vue allows nonesense sometimes or...
          routingnum: 673897478,
        }
      ]
    })
  }
})
export default defineComponent({
  name: 'MainLayout',

  created() {
    this.isLoading = true
    axios.get('/api/accounts')
      .then(response => {
          this.accounts = response.data
          this.isLoading = false
      })
  },
  computed: {
    ...mapState(['inputValue'])
  },
  methods: {
    ...mapMutations(['updateInputValue'])
  },

  data() {
    return {
      accounts:[],
      leftDrawerOpen : false,
      color: 0,
      isLoading: false,
    }
  },

  methods: {
    toggleColor (num) {
      this.color = num
    }
  },

  setup () {


    return {
      currentTab : ref('dashboard'),
      dashboard: ref(''),
      invoices: ref(''),
      options: ref(''),
      text:'',
      number:'',
    }
  }
})

// console.log('Hello main')
