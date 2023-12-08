<template>
  <div class="patient-card-wrapper">
    <div class="panel-items">
      <div class="btn-wrapper">
        <button class="padtient-id">MK000000</button>
        <button @click="backHandler" class="save-btn">Назад</button>
      </div>
      <div class="complaint-btn-wrapper">
        <button @click="showComplaints" class="complaint-btn">Жалобы</button>
        <button @click="showEntries" class="entries-btn">Записи</button>
        <button class="edit-btn" />
      </div>
    </div>
    <div class="component-wrapper">
      <div class="medical-card-wrapper">
        <span>Номер мед.карты</span>
        <input class="medical-card-number input" type="text" name="" id="" />
      </div>
      <div class="patient-info">
        <div class="info-form-wrapper">
          <div>
            <span>Ф.И.О пациента</span>
          </div>
          <input class="input" type="text" />
        </div>
        <input class="input" type="text" />
        <input class="input" type="text" />
      </div>
      <div class="gender-wrapper">
        <div>
          <span>Пол</span>
          <select class="choose-gender input" name="" id="">
            <option value="">Мужчина</option>
            <option value="">Женщина</option>
          </select>
        </div>
        <div>
          <span>Дата рождения</span>
          <input class="birthday input" type="date" />
        </div>
        <div>
          <span>Паспорт №</span>
          <input class="passport-number input" type="text" />
        </div>
      </div>
      <div class="insurance-wrapper">
        <div>
          <span>Страховой полис №</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Номер телефона 1</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Номер телефона 2</span>
          <input class="input" type="text" />
        </div>
      </div>

      <div class="horizont-line" />

      <div class="polyclinic-list-wrapper">
        <p>
          <span>Поликлиника</span>
        </p>
        <div class="choose-polyclinic">
          <select class="input" name="" id="">
            <option value="">Поликлиника 1</option>
            <option value="">Поликлиника 2</option>
            <option value="">Поликлиника 3</option>
            <option value="">Поликлиника 4</option>
            <option value="">Поликлиника 5</option>
          </select>
          <button class="polyclinic-list-btn">Нет в списке?</button>
        </div>
      </div>

      <div class="horizont-line" />

      <div class="group-wrapper">
        <span>Группа</span>
        <select class="group-select-box" name="" id="">
          <option value="">Группа 1</option>
          <option value="">Группа 2</option>
          <option value="">Группа 3</option>
          <option value="">Группа 4</option>
        </select>
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="horizont-line" />

      <div class="region-wrapper">
        <div>
          <span>Регион</span>
          <input class="region input" type="text" />
        </div>
        <div>
          <span>Город</span>
          <input class="city input" type="text" />
        </div>
        <div>
          <span>Район</span>
          <input class="area input" type="text" />
        </div>
      </div>
      <div class="address-wrapper">
        <div>
          <span>Улица</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Дом</span>
          <input class="input" type="text" />
        </div>
        <div>
          <span>Квартира/Офис</span>
          <input class="input" type="text" />
        </div>
      </div>
      <div class="note-wrapper">
        <textarea class="input" name="" id="" cols="30" rows="10"></textarea>
      </div>

      <div class="horizont-line" />
      <div class="active-checkbox-wrapper">
        <div>
          <input type="checkbox" />
          <span>Не активный</span>
        </div>
        <div>
          <input type="checkbox" />
          <span>VIP</span>
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
    showComplaints(e: string) {
      this.$router.push(`/patients/complaint`);
    },
    showEntries(e: string) {
      this.$router.push(`/patients/entries`);
    },
  },
});
</script>
<style lang="scss" scoped>
.component-wrapper {
  row-gap: 40px;
}
.padtient-id {
  padding: 12px 150px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  cursor: pointer;
}
.complaint-btn-wrapper {
  display: flex;
  column-gap: 10px;
}
.entries-btn,
.complaint-btn,
.save-btn {
  padding: 12px 40px;
  border: none;
  border-radius: 10px;
  background-color: $custom-main-color;
  font-weight: $bold-weight;
  cursor: pointer;
}
.edit-btn {
  margin-left: 20px;
}
.btn-wrapper {
  display: flex;
  column-gap: 10px;
}
.panel-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.patient-info {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.info-form-wrapper {
  div {
    margin-bottom: 10px;
  }
}
.input {
  width: 42%;
  height: 42px;
  background-color: $input-bg-color;
  border: none;
  border-radius: 10px;
  padding: 5px 12px;
}
.medical-card-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.medical-card-number {
  width: 26%;
}
.gender-wrapper {
  display: flex;
  column-gap: 50px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
  }
  .choose-gender,
  .birthday,
  .passport-number {
    width: 100%;
  }
}
.insurance-wrapper {
  display: flex;
  column-gap: 50px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    input {
      width: 100%;
    }
  }
}
.polyclinic-list-wrapper {
  p {
    margin-bottom: 10px;
  }
  .choose-polyclinic {
    display: flex;
    column-gap: 20px;
  }
  .polyclinic-list-btn {
    padding: 12px 30px;
    border: none;
    border-radius: 10px;
    background-color: $input-bg-color;
    font-weight: $bold-weight;
  }
}
.group-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  textarea {
    width: 100%;
    padding: 10px 16px;
    min-height: 180px;
    resize: none;
    margin-top: 20px;
  }
  .group-select-box {
    width: 31%;
    height: 42px;
    background-color: $input-bg-color;
    border: none;
    border-radius: 10px;
    padding: 5px 12px;
  }
}
.region-wrapper {
  display: flex;
  column-gap: 50px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
  }
  .region,
  .city,
  .area {
    width: 100%;
  }
}
.address-wrapper {
  display: flex;
  column-gap: 50px;
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    input {
      width: 100%;
    }
  }
}
.note-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  textarea {
    width: 100%;
    padding: 10px 16px;
    min-height: 180px;
    resize: none;
  }
}
.active-checkbox-wrapper {
  display: flex;
  column-gap: 20px;
  div {
    display: flex;
    column-gap: 10px;
    input {
      cursor: pointer;
    }
  }
}
</style>
