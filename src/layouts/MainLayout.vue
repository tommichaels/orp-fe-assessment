<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Paypay
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
        <div>Quasar v{{ $q.version }}</div>
        <div>Quasar v{{ $q.version }}</div>
        <div>Quasar v{{ $q.version }}</div>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>


  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'



export default defineComponent({
  name: 'MainLayout',



  setup () {
    const leftDrawerOpen = ref(false)

    return {

    }
  }
})
</script>
