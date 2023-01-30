import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { Server } from 'miragejs';

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
    axios.get('/api/accounts')
      .then(response => {
          this.accounts = response.data
      })
  },

  data() {
    return {
      accounts:[]
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
