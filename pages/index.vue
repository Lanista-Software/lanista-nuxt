<script setup lang="ts">
import { LuiButton, LuiInput } from '@lui-ui/lui-vue'
const changeTheme = ref('dark')
</script>

<template>
  <div
    class=" bg-secondary-50 min-w-full min-h-screen p-12"
    :class="changeTheme ==='dark' ? 'bg-primary-900': 'bg-primary-50'"
  >
    <LuiButton
      type="outline"
      variant="secondary"
      rounded
      size="md"
      @click="changeTheme === 'dark' ? changeTheme= 'light' : changeTheme='dark'"
    >
      This is the Test Button
    </LuiButton>
    <h1 class="text-2xl mt-4">
      This is test tet
    </h1>
    <LuiInput
      size="md"
      class="mt-4 placeholder-primary-200 text-themeColor"
      prepend="search"
      rounded
      type="text"
      placeholder="Test input"
      description="test test"
      :state="false"
    />
  </div>
</template>
