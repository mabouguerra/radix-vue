const index = `<script setup lang="ts">
import { Label } from 'radix-vue'
import './styles.css'
<\/script>

<template>
  <div :style="{ display: 'flex', padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center' }">
    <Label class="LabelRoot" for="firstName"> First name </Label>
    <input
      id="firstName"
      class="Input"
      type="text"
      value="Pedro Duarte"
    >
  </div>
</template>
`;
export {
  index as default
};
