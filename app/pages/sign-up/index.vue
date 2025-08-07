<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="handleSignUp" class="w-full max-w-lg px-6">
      <h1 class="text-2xl font-bold text-center mb-8">Cadastro</h1>

      <IconInput
        id="name"
        label="Nome"
        icon-name="heroicons:user"
        v-model="name"
        placeholder="Seu nome completo"
        :required="true"
      />

      <IconInput
        id="email"
        label="Email"
        icon-name="heroicons:envelope"
        type="email"
        v-model="email"
        placeholder="seu@email.com"
        :required="true"
      />

      <IconInput
        id="cpf"
        label="CPF"
        icon-name="heroicons:identification"
        v-model="cpf"
        placeholder="000.000.000-00"
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
      />

      <IconInput
        id="confirmPassword"
        label="Confirmar Senha"
        icon-name="heroicons:lock-closed"
        type="password"
        v-model="confirmPassword"
        placeholder="Confirme sua senha"
        :required="true"
        margin-bottom="mb-8"
      />

      <div class="w-full mb-4">
        <Button type="submit" color="primary" class="w-full">
          <Icon name="heroicons:user-plus" class="mr-2 w-5 h-5" />
          Cadastrar
        </Button>
      </div>

      <div class="text-center">
        <p class="text-sm text-gray-600">
          Já tem uma conta?
          <NuxtLink
            to="/sign-in"
            class="text-primary-600 hover:text-primary-700 font-medium"
          >
            Faça login
          </NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const cpf = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleSignUp = () => {
  if (password.value !== confirmPassword.value) {
    alert("As senhas não coincidem!");
    return;
  }

  console.log("Cadastrando com:", {
    name: name.value,
    email: email.value,
    cpf: cpf.value,
    password: password.value,
  });
};
</script>
