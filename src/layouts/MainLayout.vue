<template>
  <q-layout class="layout" view="lHr Lpr lfr">
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
