<template>
   <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>

  <div class="text-blue-400 font-bold">
    <p>Welcome to your new Nuxt3 project!</p>
  </div>

</template>

<script setup lang="ts">
</script>
