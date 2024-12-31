<template>
  <div class="bg-base-100" data-theme="coffee">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Main</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
