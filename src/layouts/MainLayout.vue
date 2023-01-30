<template>
  <q-layout class="layout" view="lHr Lpr lfr">
    <q-header bordered class="q-header bg-white text-primary">
      <q-toolbar class="toolbar" >
        <q-toolbar-title class="text-logo">
           <strong>Paypay.</strong>
        </q-toolbar-title>
      <q-separator dark vertical inset></q-separator>
      <div no-caps class="gt-sm">
        <q-btn no-caps flat color="primary" icon="mail" label="Dashboard"></q-btn>

      <q-btn no-caps @click="$router.replace('/invoice')" flat :to="{name: '/invoice'}" :class="{active: $route.name==='/invoice'}" color="primary" icon="receipt" label="Invoice"></q-btn>

      <q-btn no-caps flat color="primary" icon="wallet" label="Invoice"></q-btn>
      <q-btn no-caps flat color="primary" icon="work" label="Activity"></q-btn>
      <q-btn no-caps flat color="primary" icon="phone" label="Help"></q-btn>
    </div>
    <div class="lt-md">
      <q-btn
      flat
      round
      @click="leftDrawerOpen = !leftDrawerOpen"
      color="primary"
      icon="menu"></q-btn>
    </div>
    <div >
      <q-drawer v-model="leftDrawerOpen">
        <q-list>
          <q-item clickable v-ripple>
            <q-btn no-caps @click="$router.replace('/')" flat :to="{name: '/'}" :class="{active: $route.name==='/'}" color="primary" icon="mail" label="Dashboard"></q-btn>
      </q-item>
      <q-item clickable v-ripple>
        <q-btn no-caps @click="$router.replace('/invoice')" flat :to="{name: '/invoice'}" :class="{active: $route.name==='/invoice'}" color="primary" icon="receipt" label="Invoice"></q-btn>
      </q-item>
      <q-item clickable v-ripple>
        <q-btn no-caps flat color="primary" icon="wallet" label="Wallet"></q-btn>

      </q-item>
      <q-item clickable v-ripple>
        <q-btn no-caps flat color="primary" icon="work" label="Activity"></q-btn>

</q-item>
<q-item clickable v-ripple>
  <q-btn no-caps flat color="primary" icon="phone" label="Help"></q-btn>

</q-item>

        </q-list>
      </q-drawer>
    </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <RouterView />
    </q-page-container>

  </q-layout>
</template>

<script src="../main.js"></script>

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

.q-toolbar__title {
  flex: none;
  padding-right: 4rem;

  @media only screen and (max-width: 1024px) {
   flex: 1 1 0%;

  }


}
// padding: 0 25%;

// @media only screen and (max-width: 2000px) {
//   padding: 0 27%;

// }
// @media only screen and (max-width: 1760px) {
//   padding: 0 23%;

// }

// @media only screen and (max-width: 1760px) {
//   padding: 0 23%;

// }

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
</style>
