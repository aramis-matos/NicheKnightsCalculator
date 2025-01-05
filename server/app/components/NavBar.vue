<script setup lang="ts">
// import { Menu } from "lucide-vue-next";
</script>

<template>
  <div class="navbar bg-base-100 mb-4 shadow-md">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <!-- <Menu class="size-8" /> -->
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 gap-4 p-2 shadow"
        >
          <NavBarOptions />
        </ul>
      </div>
      <NuxtLink to="/" class="flex items-center gap-2">
        <!-- <NuxtImg src="/logo.png" class="ml-4 size-16" /> -->
        <h1 class="text-base-content text-2xl">NicheKnights</h1>
      </NuxtLink>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul class="menu menu-horizontal gap-4 pr-4">
        <NavBarOptions />
      </ul>
    </div>
  </div>
</template>
