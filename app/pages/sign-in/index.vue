<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="handleLogin" class="w-full max-w-lg px-6">
      <IconInput
        id="username"
        label="Usuário"
        icon-name="heroicons:user"
        v-model="username"
        placeholder="Seu usuário"
        :required="true"
      />

      <IconInput
        id="password"
        label="Senha"
        icon-name="heroicons:lock-closed"
        type="password"
        v-model="password"
        placeholder="Sua senha"
        :required="true"
        margin-bottom="mb-8"
      />

      <div class="w-full mb-4">
        <Button type="submit" color="primary" class="w-full">
          <Icon
            name="heroicons:arrow-right-end-on-rectangle"
            class="mr-2 w-5 h-5"
          />
          Login
        </Button>
      </div>

      <div class="text-center">
        <p class="text-sm text-gray-600">
          Não tem conta?
          <NuxtLink
            to="/sign-up"
            class="text-primary-600 hover:text-primary-700 font-medium"
          >
            Cadastre-se
          </NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Logging in with", username.value, password.value);
};
</script>
