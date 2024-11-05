<script setup lang="ts">
</script>

<template>
  <header>
    <div class="bg-gray-800 text-white p-6">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img src="https://lanista.com.tr/logo.svg" alt="Luiyo Logo" class="w-24 h-auto">
          <h1 class="text-2xl font-bold ml-2">Lanista Nuxt Layer</h1>
        </div>
        <nav>
          <ul class="flex space-x-4">
            <li>
              <NuxtLink to="#" class="text-white">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-white">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-white">Contact</NuxtLink>
            </li>
          </ul>
        </nav>
        <div>
          <LuiButton>
            Login
          </LuiButton>
        </div>
      </div>
    </div>
  </header>
</template>