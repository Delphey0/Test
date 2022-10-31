<template>
    <footer class="w-screen fixed bottom-0 bg-slate-500 bg-opacity-20 p-1">
        <div class="wrapper flex flex-row m-auto items-center">
            <div class="m-auto text-center">
                <span> {{currentDate()}}&copy; Made by <span class="name">Delphey</span></span>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getFullYear()}`;
      return date;
    }
  }
}
</script>
<style>
    
</style>