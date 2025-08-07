<template>
  <div :class="['w-full', marginBottom]">
    <label :for="id" class="block text-sm font-medium mb-2">{{ label }}</label>
    <IconField>
      <InputIcon>
        <Icon :name="iconName" />
      </InputIcon>
      <InputText
        :type="type"
        :id="id"
        :model-value="modelValue"
        @update:model-value="(value) => $emit('update:modelValue', value || '')"
        :placeholder="placeholder"
        :required="required"
        class="w-full"
      />
    </IconField>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  label: string;
  iconName: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  modelValue: string;
  marginBottom?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false,
  marginBottom: 'mb-4',
});

defineEmits<{
  'update:modelValue': [value: string];
}>();
</script>
