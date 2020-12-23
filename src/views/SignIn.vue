<template>
    <div class="main">
      <div class="container">
        <form class="login" @submit.prevent="submitHandler">
          <h2 class="login__title">Авторизация</h2>
          <input
          id="email"
          type="text"
          v-model.trim="email"
          class="login__input"
          placeholder="Email"
          >
          <small
              class="helper-text invalid"
              v-if="$v.email.$dirty && !$v.email.required"
          >
            Поле не заполнено
          </small>
          <small
              class="helper-text invalid"
              v-else-if="$v.email.$dirty && !$v.email.email"
          >
            Введите корректный Email
          </small>
          <input
              id="password"
              type="password"
              v-model.trim="password"
              class="login__input"
              placeholder="Пароль"
          >
          <small
              class="helper-text invalid"
              v-if="$v.password.$dirty && !$v.password.required"
          >
            Поле не заполнено
          </small>
          <small
              class="helper-text invalid"
              v-else-if="$v.password.$dirty && !$v.password.minLength"
          >
            Пароль слишком короткий, минимальная длина {{$v.password.$params.minLength.min}} символов. (сейчас {{password.length}})
          </small>
          <input type="submit" name="submit" class="login__submit" value="Войти">
        </form>
      </div>
    </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

export default {
  name: "signin",
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(7) }
  },
  methods: {
    submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      localStorage.setItem('email', this.email)
      this.$router.push('/')
    }
  }
}
</script>
