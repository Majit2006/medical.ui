<template>
  <div class="form-card-wrapper">
    <div class="wrapper-panel">
      <button class="back-btn" @click="backHandler">Назад</button>
      <div class="conditional-btn">
        <p>Görnüşiň şertli belligi</p>
        <input type="text" />
        <p>Görnüşiň şertli belligi</p>
        <input type="text" />
      </div>
      <button class="print-btn">
        <img src="@/assets/images/printer.png" />
      </button>
    </div>
    <div class="component-wrapper">
      <div class="grid-container">
        <div class="col">
          <span>
            Türkmenistanyň Saglygy goraýyş we derman senagaty ministrligi</span
          >
          <br />
          <span class="title">Şikesleri bejeriş Halkara merkezi</span>
        </div>
        <div class="col">
          <img src="@/assets/images/Medical_logo.png" class="form-logo" />
        </div>
        <div class="col">
          <span
            >499/h görnüşli saglygy goraýyş resminamasy Türkmenistanyň SD we DS
            ministrligi tarapyndan 18.11.2006ý. №230-njy buýruk esasynda
            tassyklanan</span
          >
        </div>
      </div>
      <div class="form-container">
        <div class="form-blog">
          <span>ELLERIŇ ARTERIÝALARYNYŇ DUPLEKS SKAN BARLAGYNYŇ BEÝANY</span>
          <input type="text" />
        </div>
        <div class="form-blog">
          <input
            type="text"
            placeholder="01 - ÝANWAR - 1990"
            class="form-date"
          />
        </div>
      </div>
      <div class="cabinet-payment">
        <div class="payment-select">
          <span>Töleg belligi</span>
          <select class="payment-select-option">
            <option selected disabled>Saýlaň</option>
          </select>
        </div>
        <div class="cabinet-name">
          <span>kabinet</span>
          <input type="text" placeholder="Название кабинета" />
        </div>
        <div class="patient-search">
          <span>Näsag</span>
          <input type="search" placeholder="Näsag gözlegi" />
        </div>
      </div>

      <div class="new-container">
        <div class="form-group">
          <div class="form-row">
            <div class="form-item">
              <div class="">
                <span>Aşaky boş wenasy</span>
              </div>
              <div class="right">
                <div class="">
                  <span>Sag geçirijiligi</span>
                </div>
                <input type="text" />
              </div>
              <div class="left">
                <div class="">
                  <span> Çep geçirijiligi </span>
                </div>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    backHandler() {
      this.$router.go(-1);
    },
  },
});
</script>

<style lang="scss">
.form-card-wrapper {
  .component-wrapper {
    margin-top: 10px;
  }
  .wrapper-panel {
    display: flex;
    column-gap: 20px;
    .back-btn {
      width: 150px;
      height: 42px;
      color: #000;
      background: #fff;
      border: 0;
      padding: 10px;
      border-radius: 10px;
    }
    .conditional-btn {
      display: flex;
      column-gap: 20px;
      p {
        font-family: "Roboto";
        text-align: center;
        padding-top: 10px;
      }
      input {
        width: 200px;
        height: 42px;
        border: 0;
        border-radius: 10px;
      }
    }
    .print-btn {
      width: 62px;
      height: 42px;
      border: 0 !important;
      background: #fff;
      border-radius: 10px;
    }
  }
  .grid-container {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr 1fr;
    // grid-template-rows: 1.1fr 0.9fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      ". . ."
      ". . .";
    .col:nth-child(1) {
      text-align: center;

      .title {
        line-height: 40px;
      }
    }
    .col:nth-child(2) {
      .form-logo {
        margin-left: 39px;
      }
    }
  }
  .form-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    .form-blog {
      display: flex;
      justify-content: space-around;
      input[type="text"] {
        background: #f3f3f3;
        border-radius: 5px;
        margin-left: 10px;
        border: none;
        padding-left: 10px;
      }
      .form-date {
        width: 330px;
        padding-left: 10px;
      }
      .form-date::placeholder {
        color: #c5c5c5;
        padding-left: 10px;
      }
    }
  }
  .cabinet-payment {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .payment-select-option {
      display: flex;
      flex-direction: column;
      width: 500px;
      height: 42px;
      padding-top: 14px;
      padding-left: 10px;
      background: #f3f3f3;
      border: 0;
      border-radius: 10px;
    }
    span {
      line-height: 10px;
    }
    .cabinet-name {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      span {
        padding-left: 5px;
      }
      input {
        width: 450px;
        height: 42px;
        margin-top: 7px;
        background: #f3f3f3;
        border: 0;
        border-radius: 10px;
      }
      input::placeholder {
        color: #fe5151;
        padding-left: 10px;
      }
    }
    .patient-search {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      input[type="search"]::-webkit-search-cancel-button {
        display: none;
      }
      input {
        width: 500px;
        height: 40px;
        background: #f3f3f3;
        border: 0;
        border-radius: 10px;
        padding-left: 10px;
      }

      span {
        padding-bottom: 5px;
      }
    }
  }

  input {
    width: 330px;
    height: 42px;
    background: #f3f3f3;
    border: 0;
    border-radius: 10px;
    padding-left: 10px;
  }

  input:focus {
    outline: none;
    border: none;
  }

  .form-row .form-item {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 70px;
    .text {
      padding-top: 10px;
    }
  }
}
</style>
