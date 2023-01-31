<template>
   <q-layout class="layout" view="lHr Lpr lfr">
    <q-header bordered class="q-header bg-white text-grey">
      <q-toolbar class="toolbar" >
        <q-toolbar-title class="text-logo text-primary">
           <strong>Paypay.</strong>
        </q-toolbar-title>
          <q-separator dark vertical inset></q-separator>
            <div no-caps class="toolbar-btns gt-sm">
            <q-btn no-caps @click="toggleColor(1); $router.replace('/')" flat :to="{name: '/'}" :class="{active: $route.name==='/', 'secondary': color === 1}" icon="dashboard" label="Dashboard" active-class="border"></q-btn>
            <q-btn no-caps @click="toggleColor(2); $router.replace('invoice')" flat :to="{name: 'invoice'}" :class="{active: $route.name==='invoice', 'secondary': color === 2}" icon="receipt" label="Invoice" active-class="border"></q-btn>
            <q-btn no-caps @click="toggleColor(3); $router.replace('/')" flat :to="{name: '/'}" :class="{active: $route.name==='/', 'secondary': color === 3}"  icon="wallet" label="Wallet" active-class="border"></q-btn>
            <q-btn no-caps @click="toggleColor(4); $router.replace('/')" flat :to="{name: '/'}" :class="{active: $route.name==='/', 'secondary': color === 4}"  icon="work" label="Activity" active-class="border"></q-btn>
            <q-btn no-caps @click="toggleColor(5); $router.replace('/')" flat :to="{name: '/'}" :class="{active: $route.name==='/', 'secondary': color === 5}"  icon="phone" label="Help" active-class="border"></q-btn>
            </div>
            <div class="lt-md">
              <q-btn
              flat
              round
              @click="leftDrawerOpen = !leftDrawerOpen"
              color="primary"
              icon="menu"></q-btn>
            </div>

            <div>
              <q-drawer v-model="leftDrawerOpen">
                <q-list>
                  <q-item clickable>
                    <q-btn no-caps @click="toggleColor(1); $router.replace('/')" flat :to="{name: '/'}" :class="{active: $route.name==='/', 'secondary': color === 1}" icon="dashboard" label="Dashboard" active-class="border"></q-btn>
                  </q-item>
                <q-item clickable>
                  <q-btn no-caps @click="toggleColor(2); $router.replace('invoice')" flat :to="{name: 'invoice'}" :class="{active: $route.name==='invoice', 'secondary': color === 2}" icon="receipt" label="Invoice" active-class="border"></q-btn>
                </q-item>
                <q-item clickable>
                  <q-btn no-caps @click="toggleColor(3); $router.replace('/')" flat :to="{name: '/'}" :class="{active: $route.name==='/', 'secondary': color === 3}"  icon="wallet" label="Wallet" active-class="border"></q-btn>
                </q-item>
                <q-item clickable >
                  <q-btn no-caps @click="toggleColor(4); $router.replace('/')" flat :to="{name: '/'}" :class="{active: $route.name==='/', 'secondary': color === 4}"  icon="work" label="Activity" active-class="border"></q-btn>
                </q-item>
                <q-item clickable>
                  <q-btn no-caps @click="toggleColor(5); $router.replace('/')" flat :to="{name: '/'}" :class="{active: $route.name==='/', 'secondary': color === 5}"  icon="phone" label="Help" active-class="border"></q-btn>
                </q-item>
                </q-list>
              </q-drawer>
            </div>
      </q-toolbar>
    </q-header>

    <q-page-container style="padding-top: 25px;">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
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
  name: 'App',

  created() {
    axios.get('/api/accounts')
      .then(response => {
          this.accounts = response.data
      })
  },

  data() {
    return {
      accounts:[],
      leftDrawerOpen : false,
      color: 0,
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

</script>

<style lang="scss">

.toolbar{

display: flex;
justify-content: center;
align-items: center;
justify-items: center;
padding-right: 8%;

.text-logo{
  @media only screen and (max-width: 1024px) {
   padding-left: 42px;

  }

  @media only screen and (max-width: 720px) {
   padding-left: 10px;

  }

  @media only screen and (max-width: 480px) {
   padding-left: 8px;

  }

  @media only screen and (max-width: 280px) {
   padding-left: 2px;

  }
}

.toolbar-btns{

  .q-btn {
    // background-color: red;
    padding: 12px 15px;
    border-radius: 0px;


  }
  // .q-btn--flat:before {


  // }
}

.q-toolbar__title {
  flex: none;
  padding-right: 4rem;

  @media only screen and (max-width: 1024px) {
   flex: 1 1 0%;

  }


}

.q-table__label{
  font-size: 14px;
}

@media only screen and (max-width: 640px) {
  padding: 0 5%;

  .q-table__label{
  font-size: 11px;
}

}
}

.secondary{
    color: #4038A4;
    border-bottom: 2px solid #4038A4;
  }
</style>
