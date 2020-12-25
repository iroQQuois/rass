<template>
  <div class="container">
    <div class="main customer-list">
      <div class="customer-list__topbar">
        <input @click.self="openThirdModal" type="text" class="customer-list__search" placeholder="Поиск">
          <div v-if="thirdModal"  class="modal info <!-- info --> hide" id="thirdmodal">
            <div class="modal__block">
              <h2 class="modal__title">Поиск в базе</h2>
              <form action="#" >
                <input
                    id="clientName"
                    type="text"
                    class="modal__input_mp"
                    v-model.trim="clientSearch"
                    placeholder="ФИО">
                <br />
                <div v-if="clientName.status" class="modal__title">
                  <br />
                  Найдено совпадение
                  <br />
                  <br />
                  ID: {{ clientName.name.id }}
                  <br />
                  ФИО: {{ clientName.name.fullName }}
                  <br />
                  Телефон:{{ clientName.name.phone }}
                  <br />
                  EMAIL: {{ clientName.name.email }}
                  <br />
                  Комната: {{ clientName.name.room }}
                  <br />
                  ID карты: {{ clientName.name.cardId }}
                </div>
                <br />
                <hr class="modal__jr" />
              </form>
              <div class="modal__footer">
                <button @click="closeThirdModal">Выйти</button>
                <button @click="findClientModal">Отправить</button>
              </div>
            </div>
          </div>
        <button class="customer-list__link link" @click.self="openSecondModal">
          Добавить посетителя +
        </button>
        <div v-if="secondModal"  class="modal info <!-- info --> hide" id="secondmodal">
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
            <th style="width: 20%" class="list__column list__column_settings"></th>
          </tr>
          <tr v-for="customer in customerArray" :key="customer" class="list__row">
            <td class="list__column list__column_id">{{ customer.id }}</td>
            <td class="list__column">{{ customer.fullName }}</td>
            <td class="list__column">{{ customer.phone }}</td>
            <td class="list__column">{{ customer.email }}</td>
            <td class="list__column">{{ customer.room }}</td>
            <td class="list__column">{{ customer.cardId }}</td>
            <td class="list__column" ><button @click.self="openFourthModal(customer.id)">Редактировать</button></td>
          </tr>
        </table>
      </div>
      <div v-if="fourthModal"  class="modal info <!-- info --> hide">
        <div class="modal__block">
          <h2 class="modal__title">Введите данные</h2>
          <form action="#" >
            <input
                type="text"
                class="modal__input_mp"
                v-model.trim="redactFullName"
                value="asd"
                placeholder="ФИО">
            <hr class="modal__jr" />
            <br />
            <input
                type="text"
                value=""
                class="modal__input_mp"
                v-model.trim="redactPhone"
                placeholder="Телефон">
            <hr class="modal__jr" />
            <br />
            <input
                type="text"
                class="modal__input_mp"
                v-model.trim="redactEmail"
                placeholder="Почта">
            <hr class="modal__jr" />
            <br />
            <input
                type="text"
                class="modal__input_mp"
                v-model.trim="redactRoom"
                placeholder="Комната">
            <hr class="modal__jr" />
            <br />
            <input
                type="text"
                class="modal__input_mp"
                v-model.trim="redactCardId"
                placeholder="Номер карты">
            <hr class="modal__jr" />
            <div class="modal__footer">
              <button @click="closeSecondModal">Выйти</button>
              <button @click="updateClientData">Отправить</button>
            </div>
            <br />
          </form>
        </div>
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
      thirdModal: false,
      fourthModal: false,
      redactClient: '',
      id: 0,
      clientSearch: '',
      clientName: { status: "", name: 'не найден' },
      customerArray: []
    }
  },
  methods: {
    openSecondModal: function () {
      this.secondModal = true
    },
    openThirdModal: function () {
      this.thirdModal = true
    },
    closeSecondModal: function () {
      this.secondModal = false
    },
    closeThirdModal: function () {
      this.thirdModal = false
    },
    closeFourthModal: function () {
      this.fourthModal = false
    },
    openFourthModal: function (id) {
      this.fourthModal = true
      for (let client of this.customerArray) {
        if (id === client.id) {
          this.redactClient = client
        }
      }
    },
    sendDataFromModal: function () {
      this.customerArray.push({
        id: this.id,
        fullName: this.fullName,
        phone: this.phone,
        email: this.email,
        room: this.room,
        cardId: this.cardId
      })
      this.id++;
      this.closeSecondModal()
    },
    findClientModal: function () {
      for (let customer of this.customerArray) {
        console.log(customer)
        if (this.clientSearch === customer.fullName){
          this.clientName.status = true;
          this.clientName.name = customer;
        } else {
          this.clientName.status = false
        }
      }
    },
    updateClientData: function () {
      this.redactClient.fullName = this.redactFullName;
      this.redactClient.phone = this.redactPhone;
      this.redactClient.email = this.redactEmail;
      this.redactClient.room = this.redactRoom;
      this.redactClient.cardId = this.redactCardId;
      for (let client of this.customerArray) {
        if (this.redactClient.id === client.id) {
          this.customerArray.client = this.redactClient;
        }
      }
    }
  }
}
</script>
<style scoped>
</style>