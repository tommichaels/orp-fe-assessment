<template>
  <q-layout class="layout" view="lHh Lpr lFf">
    <q-header bordered class="bg-white text-primary">
      <q-toolbar class="toolbar" >

        <q-toolbar-title class="text-logo">
           <strong>Paypay.</strong>
        </q-toolbar-title>

        <q-tabs inline-label no-caps active-color="primary" class="q-layout-padding text-grey" v-model="currentTab">
          <q-tab name="dashboard" icon="dashboard" label="Dashboard" class="tab"></q-tab>
          <q-tab name="invoices" icon="receipt" label="Invoices" class="tab"></q-tab>
          <q-tab name="wallet" icon="wallet" label="Wallet" class="tab"></q-tab>
          <q-tab name="activity" icon="work" label="Activity" class="tab"></q-tab>
          <q-tab name="help" icon="phone" label="Help" class="tab"></q-tab>
        </q-tabs>
        <!-- <pre>{{ currentTab }}</pre> -->
      </q-toolbar>
    </q-header>

   <q-page-container style="background-color: #FAFAFA;">
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
               <div class="page-heading text-primary text-subtitle2">
                Invoices
                <span class="text-grey text-normal">
                  /edit invoice(INV-2022-010)
                </span>
              </div>
              <section>
                <div class="dipa-column">
                  <div class="dipa-details">
                    <img src="../assets/dipa.png"/>
                    <span>
                      Dipa Inhouse
                      <p>hello@dipainhouse.com</p>
                    </span>
                  </div>
                  <div class="dipa-address">
                        <span><p>Ijen Boulevard street 101</p>
                        <p>Manga City,65115</p>
                        <p>East Java, Ind0nesia</p></span>
                  </div>
                </div>
              <br >
              <q-card class="bg-accent text-white">
                <div class="invoice-card">
                  <div class="invoice-card-left">
                    <span>
                      <p class="text-bold">Invoice Number</p>
                      <p>INV-2022-010</p>
                      <p>Issued Date: 11 Jan 2022</p>
                      <p>Due Date: 18 Jan 2022</p>
                    </span>
                  </div>
                  <div class="invoice-card-right">
                  <span>
                    <p class="text-bold">Billed to</p>
                      <p>Zaky Grizzly</p>
                      <p>Moonlight agency LTD</p>
                      <p>New York, USA</p>
                    </span>
                  </div>
                </div>

                <!-- <q-banner inline-actions class="invoice-q-card text-white bg-accent display-flex">
      Invoice Number

        <div>
          You have lost connection to the internet. This app is offline.
        You have lost connection to the internet. This app is offline.
        You have lost connection to the internet. This app is offline
        </div>
        <div>
          You have lost connection to the internet. This app is offline.
        You have lost connection to the internet. This app is offline.
        You have lost connection to the internet. This app is offline
        </div>
         <template v-slot:action>
        <span>You have lost connection to the internet. This app is offline.
        You have lost connection to the internet. This app is offline.
        You have lost connection to the internet. This app is offline.</span>
        <span>You have lost connection to the internet. This app is offline.
        You have lost connection to the internet. This app is offline.
        You have lost connection to the internet. This app is offline.</span>
      </template>
    </q-banner> -->

              </q-card>
              <br>
              <div class="item-column">
                  <div class="item-details">
                    <span>
                      Item Detail
                      <p>Item Type for Hours Item</p>
                    </span>
                  </div>
                  <div class="customize-button">
                    <q-btn
                    style="background: #F5F5FD;
                    color: #4038A4"
                    icon="settings"
                    label="Customize"></q-btn>
                    <font-awesome-icon icon="fa-solid fa-sliders-simple" />
                  </div>
                </div>
                  <!-- <table class="content-table">
  <thead>
    <tr>
      <th style="width:50%">Item Name</th>
      <th>Hours</th>
      <th>Rate/hr</th>
      <th>Tax</th>
      <th>Line Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="text" placeholder="Item name"></td>
      <td><input type="text" placeholder="Your name"></td>
      <td><input type="text" placeholder="Your name"></td>
      <td><input type="text" placeholder="Your name"></td>
      <td><input type="text" placeholder="total"></td>
    </tr>
    <tr>
      <td><input type="text" placeholder="Your name"></td>
    </tr>
  </tbody>
</table> -->
              <div class="item-table">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left" style="width:40%">Item Name</th>
          <th class="text-left">Hours</th>
          <th class="text-left">Rate/hr</th>
          <th class="text-left" style="max-width: 100px">Tax</th>
          <th class="text-left" style="max-width: 100px">Line Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left"><q-input filled v-model="text" placeholder="Item name" style="max-width: 700px"></q-input></td>
          <td class="text-left"><q-input filled v-model="number" placeholder="hr" style="max-width: 100px"></q-input></td>
          <td class="text-left"><q-input filled v-model="number" prefix="$" style="max-width: 100px"></q-input></td>
          <td class="text-left"><q-input filled v-model="number" prefix="$" style="max-width: 100px"></q-input></td>
          <td class="text-left"><q-input filled v-model="number" placeholder="total" style="max-width: 100px"></q-input></td>
          <td class="text-left"> <q-btn round style="font-size: 10px" color="primary" icon="add"></q-btn></td>
        </tr>
        <tr>
          <td class="text-left"><q-input filled v-model="text" placeholder="Description" style="max-width: 700px"></q-input></td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>


        <div class="payment-section">
        <div class="account-card-layout">
          <div class="card-headers">
              <p>Payment Methods</p>
              <p>Select Payment</p>
          </div>
          <div class="account-card">
              <div class="card-details">
                <p>Wire Transfer</p>
                <p>Account Name: <span>Barly Vallendito</span></p>
                <p>Account Number: <span>4683 8628 4834</span></p>
                <p>Routing Number: <span>67389747834</span></p>
              </div>
              <div class="payment-img">
                  <img src="../assets/wise.png" />
              </div>
          </div>
        </div>
          <!-- <div class="account-details">
            <table class="content-table">
  <thead>
    <tr>
      <th>Wire Transfer</th>
      <th>Payment Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width:60%">Account Name</td>
      <td>88,110</td>
    </tr>
    <tr class="active-row">
      <td>Account Number</td>
      <td>72,400</td>
    </tr>
    <tr>
      <td>Routing Number</td>
      <td>52,300</td>
    </tr>
  </tbody>
</table>
          </div> -->
          <div class="payment-details">
            <div class="item-table">
              <q-markup-table>
      <thead>
        <tr>
          <th class="text-left" style="width:50%">Payment Method</th>
          <th class="text-left">Select Payment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Sub Total</td>
          <td class="text-left">$4,200.00</td>
        </tr>
        <tr>
          <td class="text-left">Discount</td>
          <td class="text-left">$0.00</td>
        </tr>
        <tr>
          <td class="text-left"></td>
          <td class="text-left"></td>
        </tr>
        <tr>
          <td class="text-left">Total Discount</td>
          <td class="text-left">$0.00</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
          </div>


        </div>

      </section>
            <!-- <q-card>
            <q-input filled v-model="text" label="Filled"></q-input>
          </q-card> -->
            <!--<q-tree :nodes="nodes" node-key="label" default-expand-all></q-tree>-->
            <!-- <div class="payment-table">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">Dessert (100g serving)</th>
          <th class="text-right">Calories</th>
          <th class="text-right">Fat (g)</th>
          <th class="text-right">Carbs (g)</th>
          <th class="text-right">Sodium (mg)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">87</td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">129</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">337</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">413</td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">49</td>
          <td class="text-right">327</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div> -->
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
    padding: 0 20%;
  }
  .q-layout-padding{
    padding: 0;
  }
  .page-heading{
    padding: 0rem 1.5rem 1rem 0rem;
  }
  section{
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    background-color: #FFFFFF;
  }
  .q-card{
    border-radius: 1rem;
    height: max-content;
  }

  .dipa-column, .item-column{
    display: flex;
    justify-content: space-between;
    // align-items: center;

    .dipa-details, .item-details{
      display: flex;
      justify-content: center;
      align-items: center;

      span{
        font-weight: 600;

        p{
          margin-top: 3px;
          color: grey;
          font-weight: 500;
        }
      }

      img{
        margin-right: 1rem;
        max-width: 4rem;
        border-radius: 3rem;
      }
    }

    .dipa-address{
      span{
        color: grey;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        padding-top: 10px;

        p{
          line-height: 7px;
        }
      }
    }
  }

  .invoice-card{
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    .invoice-card-left {
      padding-top: 1rem;
      padding-left: 1rem;

      span{

        p{
          line-height: 7px;
        }
      }
}

    .invoice-card-right{
        padding-top: 1rem;
        padding-right: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        text-align: end;

        span{
        p{
          line-height: 7px;
        }
        }
    }
  }

  .customize-button{

  }

.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  width: 100%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);


}

.content-table thead tr {
  background-color: transparent;
  color: grey;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;

  // input[type=text]{
  //   width:100%;
  //   border:2px solid #aaa;
  //   border-radius:4px;
  //   margin:8px 0;
  //   outline:none;
  //   padding:8px;
  //   box-sizing:border-box;
  //   transition:.3s;
  // }

  // input[type=text]:focus{
  //   border-color:dodgerBlue;
  //   box-shadow:0 0 8px 0 dodgerBlue;
  // }

}

.content-table tbody tr {
  border: none;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

// .content-table tbody tr:last-of-type {
//   border-bottom: 2px solid #009879;
// }

// .content-table tbody tr.active-row {
//   font-weight: bold;
//   color: #009879;
// }
.item-table{
  margin-bottom: 1rem;
}

.payment-section{
  display: flex;
  justify-content: space-between;

  .account-details{
    width: 600px;

    table{
      border: none;
    }
  }

  .payment-details{
    width: 400px;
    margin: 25px 0;
  }
}

.account-card-layout{
  width: 350px;
  margin: 25px 0;
  .card-headers{
    display: flex;
    justify-content: space-between;
  }
  .account-card{
    display: flex;
      justify-content: space-between;
      margin: 0px 0px 0px 15px;
    .card-details{
      // p{
      //   line-height: 10px;
      // }
    }
    img{
      margin-right: 1rem;
      max-width: 4rem;
    }
  }
}
.q-table th, .q-table td {
  border: none;
}

  // .q-card{
  //   background-color: transparent;
  // }

</style>
