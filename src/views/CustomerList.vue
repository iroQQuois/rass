<template>
  <div class="container">
    <div class="main customer-list">
      <div class="customer-list__topbar">
        <input type="text" class="customer-list__search" placeholder="Поиск">
        <button class="customer-list__link link" @click.self="openSecondModal">
          Добавить посетителя +
        </button>
        <div v-if="secondModal"  class="modal danger <!-- info --> hide" id="secondmodal">
          <div class="modal__block">
            <h2 class="modal__title">Введите нового пользователя в базу данных</h2>
            <form action="#" >
              <input
                  id="fullName"
                  type="text"
                  class="modal__input_mp"
                  v-model.trim="fullName"
                  value="asd"
                  placeholder="ФИО">
              <hr class="modal__jr" />
              <br />
              <input
                  id="phone"
                  type="text"
                  value=""
                  class="modal__input_mp"
                  v-model.trim="phone"
                  placeholder="Телефон">
              <hr class="modal__jr" />
              <br />
              <input
                  id="email"
                  type="text"
                  class="modal__input_mp"
                  v-model.trim="email"
                  placeholder="Почта">
              <hr class="modal__jr" />
              <br />
              <input
                  id="room"
                  type="text"
                  class="modal__input_mp"
                  v-model.trim="room"
                  placeholder="Комната">
              <hr class="modal__jr" />
              <br />
              <input
                  id="cardId"
                  type="text"
                  class="modal__input_mp"
                  v-model.trim="cardId"
                  placeholder="Номер карты">
              <hr class="modal__jr" />
              <br />
            </form>
            <div class="modal__footer">
              <button @click="closeSecondModal">Выйти</button>
              <button @click="sendDataFromModal">Отправить</button>
            </div>
          </div>
        </div>
      </div>
      <div class="customer-list__list">
        <table class="list">
          <tr class="list__row">
            <th class="list__column list__column_id">ID</th>
            <th style="width: 20%" class="list__column">ФИО</th>
            <th style="width: 20%" class="list__column">Телефон</th>
            <th style="width: 20%" class="list__column">Почта</th>
            <th style="width: 20%" class="list__column">Комната</th>
            <th style="width: 20%" class="list__column list__column_settings">ID карты</th>
          </tr>
          <tr class="list__row">
            <td class="list__column list__column_id">0</td>
            <td class="list__column">Зыз Никита Максимович</td>
            <td class="list__column">+7 (123) 456-78-90</td>
            <td class="list__column">tester3@gmail.ru</td>
            <td class="list__column">28</td>
            <td class="list__column">M2P1-SAL2-K102-192F</td>
          </tr>
          <tr class="list__row">
            <td class="list__column list__column_id">1</td>
            <td class="list__column">Луа Игорь Коинфлипович</td>
            <td class="list__column">+7 (123) 456-78-90</td>
            <td class="list__column">tester2@gmail.ru</td>
            <td class="list__column">28</td>
            <td class="list__column">M2P1-SAL2-K102-192F</td>
          </tr>
          <tr class="list__row">
            <td class="list__column list__column_id">2</td>
            <td class="list__column">Питонский Али Рудольфович</td>
            <td class="list__column">+7 (123) 456-78-90</td>
            <td class="list__column">tester1@gmail.ru</td>
            <td class="list__column">28</td>
            <td class="list__column">M2P1-SAL2-K102-192F</td>
          </tr>
          <tr class="list__row">
            <td class="list__column list__column_id">3</td>
            <td class="list__column">Вьюшер Вадим Пхпевченко</td>
            <td class="list__column">+7 (123) 456-78-90</td>
            <td class="list__column">nikita.zyz16@gmail.com</td>
            <td class="list__column">28</td>
            <td class="list__column">M2P1-SAL2-K102-192F</td>
          </tr>
          <tr class="list__row">
            <td class="list__column list__column_id">4</td>
            <td class="list__column">Джавист Андрей Спрингович</td>
            <td class="list__column">+7 (123) 456-78-90</td>
            <td class="list__column">nikita.zyz16@gmail.com</td>
            <td class="list__column">28</td>
            <td class="list__column">M2P1-SAL2-K102-192F</td>
          </tr>
          <tr class="list__row">
            <td class="list__column list__column_id">5</td>
            <td class="list__column">Калатушкин Матвей Андреевич</td>
            <td class="list__column">+7 (123) 456-78-90</td>
            <td class="list__column">tester4@gmail.ru</td>
            <td class="list__column">28</td>
            <td class="list__column">M2P1-SAL2-K102-192F</td>
          </tr>
          <tr class="list__row">
            <td class="list__column list__column_id">6</td>
            <td class="list__column">Ватрушкин Петя Александрович</td>
            <td class="list__column">+7 (123) 456-78-90</td>
            <td class="list__column">tester5@gmail.ru</td>
            <td class="list__column">28</td>
            <td class="list__column">M2P1-SAL2-K102-192F</td>
          </tr>
          <tr v-for="customer in customerArray" :key="customer" class="list__row">
            <td class="list__column list__column_id">{{ customer.id }}</td>
            <td class="list__column">{{ customer.fullName }}</td>
            <td class="list__column">{{ customer.phone }}</td>
            <td class="list__column">{{ customer.email }}</td>
            <td class="list__column">{{ customer.room }}</td>
            <td class="list__column">{{ customer.cardId }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "customer-list",
  data: () => {
    return {
      secondModal: false,
      ID: 0,
      customerArray: []
    }
  },
  methods: {
    openSecondModal: function () {
      this.secondModal = true
      console.log('эта функция отработалоа')
    },
    closeSecondModal: function () {
      this.secondModal = false
    },
    sendDataFromModal: function () {
      this.customerArray.push({
        id: this.customerArray.length,
        fullName: this.fullName,
        phone: this.phone,
        email: this.email,
        room: this.room,
        cardId: this.cardId
      })
      this.closeSecondModal()
    },
  }
}
</script>
<style scoped>
</style>