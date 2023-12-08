<template>
  <div class="doctor-entry-create-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="new-entries">Новая запись</button>
        <button class="save-btn">Сохранить</button>
        <button @click="cancelCreate" class="cancel-btn">Отменить</button>
      </div>
    </div>
    <div class="component-wrapper">
      <div class="info-form-wrapper">
        <span>Номер записи</span>
        <input class="input entries-number" type="text" />
      </div>
      <div>
        <input class="input name" type="search" />
        <button class="new-patient">Новый пациент?</button>
      </div>
      <div class="payment-info">
        <div class="payment">
          <input type="radio" name="radio1" id="answer1" value="yes" />
          <label for="answer1">Без страховки (ТМТ)</label>
        </div>
        <div class="payment">
          <input type="radio" name="radio1" id="answer2" value="no" />
          <label for="answer2">Со страховкой (ТМТ)</label>
        </div>
        <div class="payment">
          <input type="radio" name="radio1" id="answer3" value="yes" />
          <label for="answer3">Иностранец ($)</label>
        </div>

        <div class="payment">
          <input type="radio" name="radio1" id="answer4" value="no" />
          <label for="answer4">Дипломат (ТМТ)</label>
        </div>
      </div>
      <div class="horizont-line" />
      <div class="select-box-wrapper">
        <div>
          <span>Кабинет</span>
          <select name="" id="" class="input" type="text">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <span>Доктор</span>
          <select name="" id="" class="input" type="text">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
      </div>
      <div class="receptions-wrapper">
        <p>Проводимые приемы, обследования, диагностика</p>
        <select class="input" name="" id="">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div>
          <button class="add-receptions-btn">Добавить</button>
        </div>
      </div>
      <div class="date-input-wrapper">
        <div>
          <span>Дата</span>
          <input class="input" name="trip-start" type="date" />
        </div>
        <div>
          <span>Время</span>
          <input class="input" name="trip-start" type="time" />
        </div>
      </div>
      <div class="note-wrapper">
        <span>Примечание</span>
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="horizont-line" />

      <div class="additional-payment-wrapper">
        <span class="additional-payment-title">Дополнительная оплата</span>
        <p>Сумма</p>
        <div class="sum-input-wrapper">
          <input class="sum-input input" type="text" />
          <div class="choose-currency-wrapper">
            <div class="radio-input-wrapper">
              <input type="radio" name="radio1" id="tmt" value="no" />
              <label for="tmt">TMT</label>
            </div>
            <div class="radio-input-wrapper">
              <input type="radio" name="radio1" id="dollar" value="no" />
              <label for="dollar">$</label>
            </div>
          </div>
        </div>
      </div>

      <div class="note-wrapper">
        <span>Примечание</span>
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    cancelCreate() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
.doctor-entry-create-wrapper {
  .new-entries {
    padding: 12px 150px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
  }
  .component-wrapper {
    row-gap: 40px;
    padding: 30px 50px;
  }
  .info-form-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .payment-info {
    display: flex;
    column-gap: 60px;
    margin-top: 6px;
    .payment {
      display: flex;
      column-gap: 12px;
    }
    label {
      font-weight: $bold-weight;
    }
  }
  .chaeckbox-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    column-gap: 12px;
  }
  .input {
    height: 42px;
    background-color: $input-bg-color;
    border: none;
    border-radius: 10px;
    padding: 5px 12px;
  }
  .entries-number {
    width: 20%;
  }
  .name {
    background-image: url("@/assets/images/magnifyingGlass.png");
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: right;
    background-color: $input-bg-color;
    &:focus {
      background-image: none;
      transform: 0.8s;
    }
    width: 40%;
  }

  .save-btn,
  .cancel-btn {
    padding: 12px 40px;
    border: none;
    border-radius: 10px;
    background-color: $custom-main-color;
    font-weight: $bold-weight;
    cursor: pointer;
  }
  .btn-wrapper {
    display: flex;
    column-gap: 10px;
  }
  .info-btn-wrapper {
    display: flex;
    column-gap: 30px;
  }
  .panel-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .new-patient {
    font-weight: $bold-weight;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    margin-left: 20px;
    cursor: pointer;
  }
  .select-box-wrapper {
    display: flex;
    column-gap: 54px;
    div {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      width: 100%;
    }
  }
  .receptions-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    p {
      font-weight: $bold-weight;
    }
    .add-receptions-btn {
      padding: 12px 42px;
      border: none;
      border-radius: 10px;
      font-weight: $bold-weight;
      cursor: pointer;
    }
  }
  .date-input-wrapper {
    display: flex;
    column-gap: 50px;
    div {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      width: 18%;
    }
  }
  .note-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    textarea {
      padding: 10px 16px;
      min-height: 180px;
      resize: none;
    }
  }
  .additional-payment-wrapper {
    display: flex;
    flex-direction: column;

    .additional-payment-title {
      margin-bottom: 20px;
    }
    .sum-input-wrapper {
      display: flex;
      align-items: center;
      column-gap: 50px;
      .sum-input {
        width: 18%;
      }
      .choose-currency-wrapper {
        display: flex;
        column-gap: 30px;
      }
      .radio-input-wrapper {
        display: flex;
        column-gap: 10px;
      }
    }
      p {
        margin-bottom: 10px;
        font-weight: $bold-weight;
      }
  }
  input[type=radio], label {
    font-weight: $bold-weight;
    cursor: pointer;
  }
}
</style>
