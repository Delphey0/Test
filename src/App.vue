<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navbar from './components/Navbar.vue'
import Background from './components/Background.vue'
import Footer from './components/Footer.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Background />
  <div class="min-h-screen flex overflow-x-hidden">
    <Navbar class="animate__animated animate__fadeInDown" />
    <Sidebar />
    <div class="wrapper">
      <router-view v-slot="{ Component, route }">
        <transition 
          :enter-active-class="route.meta.enterClass"
          :leave-active-class="route.meta.leaveClass"
          mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Footer class="animate__animated animate__fadeInUp animate__slow" />
  </div>
</template>

<style scoped>

</style>
