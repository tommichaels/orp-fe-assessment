<template>
  <div class="" style="z-index: 10;">
    <q-header bordered class="q-header bg-white text-grey">
      <q-toolbar class="toolbar">
        <q-toolbar-title class="text-logo text-primary">
          <strong>Paypay.</strong>
        </q-toolbar-title>
        <q-separator dark vertical inset></q-separator>
        <div no-caps class="toolbar-btns gt-sm">
          <q-btn
            no-caps
            @click="
              toggleColor(1);
              $router.replace('/');
            "
            flat
            :to="{ name: '/' }"
            :class="{ active: $route.name === '/', secondary: color === 1 }"
            icon="dashboard"
            label="Dashboard"
            active-class="border"
          ></q-btn>
          <q-btn
            no-caps
            @click="
              toggleColor(2);
              $router.replace('invoice');
            "
            flat
            :to="{ name: 'invoice' }"
            :class="{
              active: $route.name === 'invoice',
              secondary: color === 2,
            }"
            icon="receipt"
            label="Invoice"
            active-class="border"
          ></q-btn>
          <q-btn
            no-caps
            @click="
              toggleColor(3);
              $router.replace('/wallet');
            "
            flat
            :to="{ name: '/wallet' }"
            :class="{
              active: $route.name === '/wallet',
              secondary: color === 3,
            }"
            icon="wallet"
            label="Wallet"
            active-class="border"
          ></q-btn>
          <q-btn
            no-caps
            @click="
              toggleColor(4);
              $router.replace('/activity');
            "
            flat
            :to="{ name: '/activity' }"
            :class="{
              active: $route.name === '/activity',
              secondary: color === 4,
            }"
            icon="work"
            label="Activity"
            active-class="border"
          ></q-btn>
          <q-btn
            no-caps
            @click="
              toggleColor(5);
              $router.replace('/help');
            "
            flat
            :to="{ name: '/help' }"
            :class="{ active: $route.name === '/help', secondary: color === 5 }"
            icon="phone"
            label="Help"
            active-class="border"
          ></q-btn>
        </div>
        <div class="lt-md">
          <q-btn
            flat
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            color="primary"
            icon="menu"
          ></q-btn>
        </div>

        <div>
          <q-drawer v-model="leftDrawerOpen">
            <q-list>
              <q-item clickable>
                <q-btn
                  no-caps
                  @click="
                    toggleColor(1);
                    $router.replace('/');
                  "
                  flat
                  :to="{ name: '/' }"
                  :class="{
                    active: $route.name === '/',
                    secondary: color === 1,
                  }"
                  icon="dashboard"
                  label="Dashboard"
                  active-class="border"
                ></q-btn>
              </q-item>
              <q-item clickable>
                <q-btn
                  no-caps
                  @click="
                    toggleColor(2);
                    $router.replace('invoice');
                  "
                  flat
                  :to="{ name: 'invoice' }"
                  :class="{
                    active: $route.name === 'invoice',
                    secondary: color === 2,
                  }"
                  icon="receipt"
                  label="Invoice"
                  active-class="border"
                ></q-btn>
              </q-item>
              <q-item clickable>
                <q-btn
                  no-caps
                  @click="
                    toggleColor(3);
                    $router.replace('/wallet');
                  "
                  flat
                  :to="{ name: '/wallet' }"
                  :class="{
                    active: $route.name === '/wallet',
                    secondary: color === 3,
                  }"
                  icon="wallet"
                  label="Wallet"
                  active-class="border"
                ></q-btn>
              </q-item>
              <q-item clickable>
                <q-btn
                  no-caps
                  @click="
                    toggleColor(4);
                    $router.replace('/activity');
                  "
                  flat
                  :to="{ name: '/activity' }"
                  :class="{
                    active: $route.name === '/activity',
                    secondary: color === 4,
                  }"
                  icon="work"
                  label="Activity"
                  active-class="border"
                ></q-btn>
              </q-item>
              <q-item clickable>
                <q-btn
                  no-caps
                  @click="
                    toggleColor(5);
                    $router.replace('/help');
                  "
                  flat
                  :to="{ name: '/help' }"
                  :class="{
                    active: $route.name === '/help',
                    secondary: color === 5,
                  }"
                  icon="phone"
                  label="Help"
                  active-class="border"
                ></q-btn>
              </q-item>
            </q-list>
          </q-drawer>
        </div>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style lang="scss">
.toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  padding-right: 8%;

  .text-logo {
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

  .toolbar-btns {
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

  .q-table__label {
    font-size: 14px;
  }

  @media only screen and (max-width: 640px) {
    padding: 0 5%;

    .q-table__label {
      font-size: 11px;
    }
  }
}

.secondary {
  color: #4038a4;
  border-bottom: 2px solid #4038a4;
}
</style>
