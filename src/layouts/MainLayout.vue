<template>
  <q-layout class="layout" view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar class="toolbar" >

        <q-toolbar-title class="text-logo">
           <strong>Paypay.</strong>
        </q-toolbar-title>

        <q-tabs inline-label no-caps active-color="primary" class="tabs text-grey" v-model="currentTab">
          <q-tab name="dashboard" icon="location_on" label="Dashboard" class="tab"></q-tab>
          <q-tab name="invoices" icon="wallet" label="Invoices" class="tab"></q-tab>
          <q-tab name="wallet" icon="location_on" label="Wallet" class="tab"></q-tab>
          <q-tab name="activity" icon="wallet" label="Activity" class="tab"></q-tab>
          <q-tab name="help" icon="phone" label="Help" class="tab"></q-tab>
        </q-tabs>
        <!-- <pre>{{ currentTab }}</pre> -->
      </q-toolbar>
    </q-header>

   <q-page-container>
    <q-page padding>
      <q-tab-panels v-model="currentTab" animated style="background-color:#f5f5f5;">
          <q-tab-panel name="dashboard">
            <q-input filled v-model="text" label="Filled"></q-input>            <q-banner class="bg-positive text-white q-mt-md">
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
              Invoices
            <q-card>
              <q-card>
                <q-banner inline-actions class="text-white bg-red">
      Dipa inhouse
      <template v-slot:action>
        You have lost connection to the internet. This app is offline.
      </template>
    </q-banner>
              </q-card>
              <br >
              <q-card>
                <q-banner inline-actions class="text-white bg-red">
      Invoice Number
      <template v-slot:action>
        You have lost connection to the internet. This app is offline.
      </template>
    </q-banner>
              </q-card>
              <br>
              <q-banner inline-actions class="text-white bg-red">
     Item Detail
      <template v-slot:action>
        <q-btn color="primary" icon="mail" label="Customize"></q-btn>
      </template>
    </q-banner>
              <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-right">Item Name</th>
          <th class="text-right">Hours</th>
          <th class="text-right">Rate/hr</th>
          <th class="text-right">Tax</th>
          <th class="text-right">Line Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-right">
            <q-input filled v-model="text" label="Filled"></q-input></td>
          <td class="text-right"><q-input filled v-model="text" label="Filled"></q-input></td>
          <td class="text-right"><q-input filled v-model="text" label="Filled"></q-input></td>

          <td class="text-right"><q-input filled v-model="text" label="Filled"></q-input></td>

          <td class="text-right"><q-input filled v-model="text" label="Filled"></q-input></td>

        </tr>
      </tbody>
    </q-markup-table>
  </div>
          </q-card>
            <q-card>
            <q-input filled v-model="text" label="Filled"></q-input>
          </q-card>
            <!--<q-tree :nodes="nodes" node-key="label" default-expand-all></q-tree>-->
            <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Dessert (100g serving)</th>
          <th class="text-right">Calories</th>
          <th class="text-right">Fat (g)</th>
          <th class="text-right">Carbs (g)</th>
          <th class="text-right">Protein (g)</th>
          <th class="text-right">Sodium (mg)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
          <td class="text-right">87</td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
          <td class="text-right">129</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
          <td class="text-right">337</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">4.3</td>
          <td class="text-right">413</td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">49</td>
          <td class="text-right">3.9</td>
          <td class="text-right">327</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
          </q-tab-panel>
        </q-tab-panels>
    </q-page>
  </q-page-container>


  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';




export default defineComponent({
  name: 'MainLayout',



  setup () {


    return {
      currentTab : ref('dashboard'),
      dashboard: ref(),
      invoices: ref(),
      options: ref(),


    }
  }
})
</script>

<style lang="scss">
.tab{
  padding: 1rem 1rem;
}
  .toolbar{
    margin-left: 3rem;
    padding-right: 20%;
  }

</style>
