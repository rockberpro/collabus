<template>
  <div>
    <!-- Top Navigation Bar -->
    <nav
      :class="[
        'shadow-sm border-b px-6 py-4 transition-colors',
        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200',
      ]"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <Icon name="heroicons:truck" class="w-8 h-8 text-primary-600 mr-3" />
          <h1
            :class="[
              'text-xl font-bold',
              isDarkMode ? 'text-white' : 'text-gray-900',
            ]"
          >
            Collabus
          </h1>
        </div>
        <Button
          variant="text"
          @click="toggleDarkMode"
          :class="[
            'p-2 rounded-full transition-colors',
            isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
          ]"
        >
          <Icon
            :name="isDarkMode ? 'heroicons:sun' : 'heroicons:moon'"
            :class="['w-6 h-6', isDarkMode ? 'text-gray-300' : 'text-gray-600']"
          />
        </Button>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark-mode");
};
</script>
