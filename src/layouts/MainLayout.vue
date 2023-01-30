<template>
  <q-layout class="layout" view="lHr Lpr lfr">
    <q-header bordered class="q-header bg-white text-primary">
      <q-toolbar class="toolbar" >
        <q-toolbar-title class="text-logo">
           <strong>Paypay.</strong>
        </q-toolbar-title>
        <div class="q-tabs">
        <q-tabs inline-label no-caps active-color="primary" class="q-layout-padding text-grey" v-model="currentTab">
          <q-tab name="dashboard" icon="dashboard" label="Dashboard" class="tab"></q-tab>
          <q-tab name="invoices" icon="receipt" label="Invoices" class="tab"></q-tab>
          <q-tab name="wallet" icon="wallet" label="Wallet" class="tab"></q-tab>
          <q-tab name="activity" icon="work" label="Activity" class="tab"></q-tab>
          <q-tab name="help" icon="phone" label="Help" class="tab"></q-tab>
        </q-tabs>
      </div>
      </q-toolbar>
    </q-header>

   <q-page-container style="background-color: #FAFAFA;">
    <q-page padding>
      <q-tab-panels v-model="currentTab" animated style="background-color:#f5f5f5;">
          <q-tab-panel name="dashboard">
            <q-input filled v-model="text" label="Filled"></q-input>
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
                      <p>Moonlight Agency LTD</p>
                      <p>New York, USA</p>
                    </span>
                  </div>
                </div>

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
                    <q-btn no-caps style="background: #F5F5FD; color: #4038A4"
                    icon="settings"
                    label="Customize"></q-btn>
                  </div>
                </div>
              <div class="item-table">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left" style="width:45%; color: #808080;">Item Name</th>
          <th class="text-left" style="color: #808080;">Hours</th>
          <th class="text-left" style="color: #808080;">Rate/hr</th>
          <th class="text-left" style="max-width: 100px; color: #808080;">Tax</th>
          <th class="text-left" style="max-width: 100px; color: #808080;">Line Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left"><q-input filled v-model="text" placeholder="Item name" style="max-width: 700px"></q-input></td>
          <td class="text-left"><q-input filled v-model="number" placeholder="hr" style="max-width: 100px"></q-input></td>
          <td class="text-left"><q-input filled v-model="number" prefix="$" style="max-width: 100px"></q-input></td>
          <td class="text-left"><q-input filled v-model="number" prefix="$" style="max-width: 100px"></q-input></td>
          <td class="text-left"><q-input filled v-model="number" prefix="$" style="max-width: 100px"></q-input></td>
          <td class="text-left"><q-btn round style="font-size: 10px" color="primary" icon="add"></q-btn></td>
        </tr>
        <tr>
          <td class="text-left"><q-input filled v-model="text" placeholder="Description" style="max-width: 700px; padding-bottom: 1rem;"></q-input></td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>


        <div class="payment-section">
        <div class="account-card-layout">
          <div class="card-headers">
              <p class="text-bold">Payment Method</p>
              <p class="text-primary text-bold">Select Payment</p>
          </div>
          <div class="account-card">
              <div class="card-details" v-for="account in accounts" :key="account.id">
                <p style="font-weight: 600;">Wire Transfer</p>
                <p>Account Name: <span >{{ account['name'] }}</span></p>
                <p>Account Number: <span>{{ account['accnumber'] }}</span></p>
                <p>Routing Number: <span>{{ account['routingnum'] }}</span></p>
              </div>
              <div class="payment-img">
                  <img src="../assets/wise.png" />
              </div>
          </div>
        </div>
          <div class="payment-details">
            <div class="payment-table">
              <q-markup-table>
      <thead>
        <tr>
          <th class="text-left text-bold" style="width:50%; font-weight: 600;">Sub Total</th>
          <th class="text-right" style="font-weight: 600;">$4,800.00</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Discount</td>
          <td class="text-right" style="font-weight: 600;">$0.00</td>
        </tr>
        <tr>
          <td class="text-left">Total Tax</td>
          <td class="text-right" style="font-weight: 600;">$0.00</td>
        </tr>
        <tr>
          <td class="text-left"  style="border-bottom-width: 1px;"></td>
          <td class="text-left" style="border-bottom-width: 1px;"></td>
        </tr>
        <tr>
          <td class="text-left">Total Amount</td>
          <td class="text-right" style="font-weight: 600;">$4,800.00</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
          </div>
        </div>
      </section>
          </q-tab-panel>
        </q-tab-panels>
    </q-page>
  </q-page-container>


  </q-layout>
</template>

<script src="../main.js"></script>

<style lang="scss">

  .tab{
  padding: 1rem 1rem;
  }

  .toolbar{

    display: flex;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding-right: 8%;

    .q-toolbar__title {
      flex: none;
      padding-right: 4rem;
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
  .q-layout-padding{
    padding: 0;

    @media only screen and (max-width: 2000px) {
      // padding-right: 6rem;

    }
  }
  section{
    border-radius: 1rem;
    padding: 1.5rem 2rem;
    background-color: #FFFFFF;

@media only screen and (max-width: 540px) {
  font-size: 11px;
  padding: .75rem 1rem;
}
  }
  .q-card{
    border-radius: 1rem;
    height: max-content;
  }

  .q-tab-panel {
    padding: 24px;
}

  .dipa-column, .item-column{
    display: flex;
    justify-content: space-between;
    // align-items: center;


    .q-btn--rectangle {
    // font-size: 40px;

    @media only screen and (max-width: 840px) {
      font-size: 12px;

    }

    @media only screen and (max-width: 640px) {
      font-size: 10px;

    }

    @media only screen and (max-width: 440px) {
      font-size: 8px;

    }
}

    .dipa-details, .item-details{
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;

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

        @media only screen and (max-width: 840px) {
          max-width: 3rem;

    }
    @media only screen and (max-width: 540px) {
          max-width: 2rem;
          margin-right: .5rem;

    }
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

    @media only screen and (max-width: 640px) {
      padding: 8px;
    }

    @media only screen and (max-width: 540px) {
      padding: 5px;
    }

    .invoice-card-left {
      padding-top: 1rem;
      padding-left: 1rem;

      @media only screen and (max-width: 640px) {
          padding-top: 10px;
        padding-left: 10px;
    }

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

        @media only screen and (max-width: 640px) {
          padding-top: 10px;
        padding-right: 10px;
    }

        span{
        p{
          line-height: 7px;
        }
        }
    }
  }

.item-table{
  margin-bottom: 1rem;

  th{
    border-bottom: 1px solid #ccc;
  }

  @media only screen and (max-width: 640px) {
    .q-field__native{
    width: auto;
  }
    }


  .q-table__card {
    box-shadow: none;
    border-radius: 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;

}

.q-field--filled .q-field__control {
border-radius: 12px;
height: 3rem;
}

}

.payment-section{
  display: flex;
  justify-content: space-between;
  font-size: 13px;

  @media only screen and (max-width: 540px) {
      display: block;

    }

    @media only screen and (max-width: 640px) {
      font-size: 11px;

    }


  .payment-details{
    width: 270px;
    margin: 0px 0;

    @media only screen and (max-width: 840px) {
      width: 250px;
  }

  @media only screen and (max-width: 740px) {
      width: 100%;
    }

    .payment-table {

      .q-table tbody td {
        @media only screen and (max-width: 540px) {
      font-size: 11px;

    }
}
      .q-table__card {
    box-shadow: none;

}
    }
  }
}

.account-card-layout{
  width: 350px;
  margin: 15px 0;

  @media only screen and (max-width: 740px) {
      width: 100%;
    }
  .card-headers{
    display: flex;
    justify-content: space-between;

  }
  .account-card{
    display: flex;
    justify-content: space-between;
    margin: 0px 0px 0px 15px;
    background-color: #F5F5F5;
    padding: 10px 15px;
    border-radius: 1rem;

    @media only screen and (max-width: 840px) {
      margin: 0px 0px 0px 5px;
      padding: 5px 0px 0px 5px;
  }


    .card-details{
      // p{
      //   line-height: 10px;
      // }

      span{
        font-weight: 600;
      }
    }
    img{
      margin-right: 1rem;
      max-width: 4rem;
    }
  }
}


.q-table--horizontal-separator thead th, .q-table--horizontal-separator tbody tr:not(:last-child) > td, .q-table--cell-separator thead th, .q-table--cell-separator tbody tr:not(:last-child) > td {
    border-bottom-width: 0px;
}

.page-heading{
  padding-bottom: 24px;
}

.customize-button{
  .q-btn{
    border-radius: 8px;
  }
  .q-btn:before {
    box-shadow: none;

  // background-color: red;

  }
}
// .q-table th, .q-table td {
//   border: none;
// }



  // .q-card{
  //   background-color: transparent;
  // }

</style>
