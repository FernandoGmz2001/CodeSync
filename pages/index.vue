<template>
   <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
  <!-- solo prueba borrar cuando sea necesario -->
  <section>
    <article v-for="user in users" :key="user.clerkUserId">
      <h2>{{ user.clerkUserId }}</h2>
      <p>{{ user.username }}</p>
    </article>  
  </section>
  <!-- ... -->
  <div class="text-blue-400 font-bold">
    <p>Welcome to your new Nuxt3 project!</p>
  </div>

</template>

<script setup lang="ts">
import type { User } from '~/server/utils/definitions';

const {data: users} = await useAsyncData<User[]>('users', () => $fetch('/api/users'))
</script>
