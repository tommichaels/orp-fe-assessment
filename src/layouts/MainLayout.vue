<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Paypay.
        </q-toolbar-title>

        <q-tabs v-model="currentTab">
          <q-tab name="dashboard" icon="location_on" label="Dashboard"></q-tab>
          <q-tab name="invoices" icon="wallet" label="Invoices"></q-tab>
          <q-tab name="wallet" icon="location_on" label="Wallet"></q-tab>
          <q-tab name="activity" icon="wallet" label="Activity"></q-tab>
          <q-tab name="help" icon="location_on" label="Help"></q-tab>
        </q-tabs>
        <!-- <pre>{{ currentTab }}</pre> -->
      </q-toolbar>
    </q-header>

   <q-page-container>
    <q-page>
      <q-tab-panels v-model="currentTab" animated style="background-color:#f5f5f5;">
          <q-tab-panel name="dashboard">
            <q-input type="tel" outlined label="NPA-NXX" mask="(###) ###" v-model="npaNxx"></q-input>
            <q-banner class="bg-positive text-white q-mt-md">
              <template v-slot:avatar>
                <q-icon name="check" color="white"></q-icon>
              </template>
              BTC may be available for this NPA-NXX (not portable).
            </q-banner>
            <q-banner class="bg-negative text-white q-mt-md">
              <template v-slot:avatar>
                <q-icon name="close" color="white"></q-icon>
              </template>
              BTC is not available for this NPA-NXX (not portable).
            </q-banner>
          </q-tab-panel>
          <q-tab-panel name="invoices">
            <q-select outlined v-model="address" :options="options" label="Address"></q-select>
            <q-banner class="bg-positive text-white q-mt-md">
              <template v-slot:avatar>
                <q-icon name="check" color="white"></q-icon>
              </template>
              BTC may be available at this address.
            </q-banner>
            <q-banner class="bg-negative text-white q-mt-md">
              <template v-slot:avatar>
                <q-icon name="close" color="white"></q-icon>
              </template>
              BTC is not available at this address.
            </q-banner>
            <!--<q-tree :nodes="nodes" node-key="label" default-expand-all></q-tree>-->
            <q-card class="q-mt-md">
              <q-card-section>
                <span class="text-h6">Address Details</span>
              </q-card-section>
              <q-card-section horizontal>
                <q-card-section class="col-6">
                  <p>Latitude: -123.123</p>
                  <p>Longitude: 123.123</p>
                  <p>Bell fiber: Yes</p>
                  <p>Bell copper: Yes</p>
                </q-card-section>
                <q-card-section class="col-6">
                  <p>Latitude: -123.123</p>
                  <p>Longitude: 123.123</p>
                  <p>Bell fiber: Yes</p>
                  <p>Bell copper: Yes</p>
                </q-card-section>
              </q-card-section>
            </q-card>
          </q-tab-panel>
        </q-tab-panels>
    </q-page>
  </q-page-container>


  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',



  setup () {


    return {
      currentTab : ref('dashboard')

    }
  }
})
</script>
