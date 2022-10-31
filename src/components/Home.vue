<template>
    <header class="h-screen flex">
        <div class="flex flex-col self-center w-[100%]">
            <div id="app" class="mx-auto text-center p-3 my-3 flex flex-col">
                <figure class="m-auto rounded-full p-3">
                    <span style="color: transparent; display: inline-block;">
                        <img class="h-56 w-56 object-cover rounded-full border-2 border-slate-500"
                            src="../../img/profile.jpg" alt="Me Irl (real)">
                    </span>
                </figure>
                <span class="sm:text-2xl md:text-3xl lg:text-4xl text-bold"><i>"{{ quote }}"</i></span>
                <p class="sm:text-lg md:text-2xl lg:text-3xl">- Kanye West</p>
            </div>
        </div>
    </header>
</template>
<script>
import axios from 'axios'
import { ref } from 'vue';

export default {
    setup () {

        const quote = ref('')

        const loadQuote = async () => {
            try {
            const response = await axios.get('https://api.kanye.rest/')
            quote.value = response.data.quote
            } catch (err) {
                console.log(err)
            }
        }

        loadQuote()

        // axios.get('https://api.kanye.rest/')
        //     .then(response => {
        //         quote.value = response.data.quote
        //     })
        return {
            quote
        }
    }
}
</script>
<style>

</style>