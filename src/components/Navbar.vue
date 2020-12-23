<template>
  <nav class="nav">
    <div class="nav__burger">
      <button @click="changeNavClassOpen()">
        <img :src='require("@/assets/img/icons/menu.svg")' alt="" />
      </button>
    </div>
    <div v-bind:class="navmenu">
      <div class="nav__tabs">
        <button class="nav__close-menu" @click="changeNavClassClose()" id="close_menu">
          <img :src='require("@/assets/img/icons/right-arrow.svg")' alt="">
        </button>
        <router-link to="/">
          <a class="nav__link nav__link_title">RASS</a>
        </router-link>
        <router-link to="/customerlist">
        <a class="nav__link">Клиенты</a>
        </router-link>

        <button class="nav__link" @click.self="openModal">Сканировать</button>

          <div v-if="show"  class="modal danger <!-- info --> hide" id="modal">
            <div class="modal__block">
              <h2 class="modal__title">Идентификация</h2>
              <div class="modal__content">Приложите вашу карту к устройству</div>
              <div class="modal__footer">
                <button @click="closeModal">ОК</button>
              </div>
            </div>
          </div>
      </div>
      <div class="nav__profile">
        <!-- <a href="login.html" class="nav__link nav__link_login">Войти <img src="img/icons/login.svg" alt=""></a> -->
        <span class="nav__username">{{ getLogin() }}</span>
        <div class="nav__avatar"><img :src="require('@/assets/img/avatar_neutral.png')" alt=""></div>
        <a @click="logout" class="nav__link nav__link_logout">Выйти <img :src="require('@/assets/img/icons/login.svg')" alt=""></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      navmenu: "nav__menu closed",
      show: false,
    }
  },
  methods: {
    logout() {
      console.log('SignOut')
      this.$router.push('/signin')
      localStorage.setItem("email", "")
    },
    changeNavClassOpen: function () {
      this.navmenu = "nav__menu"
    },
    changeNavClassClose: function () {
      this.navmenu = "nav__menu closed"
    },
    openModal: function () {
      this.show = true
      console.log('эта функция отработалоа')
    },
    closeModal: function () {
      this.show = false
    },
    getLogin: function () {
      return localStorage.getItem("email")
    }
  }
}
</script>
