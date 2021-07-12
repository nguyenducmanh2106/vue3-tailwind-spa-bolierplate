<template>
    <div class="container mx-auto ">
        <div class="flex mt-24 w-100 justify-center">
            <div class="flex justify-center items-center">
                <img class="object-center h-24 w-100 m-3" src="/images/logo.png"/>
                <span class="text-5xl m-3">+</span>
                <img class="object-center h-24 w-100 m-3" src="/images/tailwind-css.png"/>
            </div>
            <div class="w-30rem pl-4 ">
                <h2 class="text-3xl mb-5 font-bold">Vue 3 & Tailwind Boilerplate</h2>
                <p class=" mb-3  text-gray-500">A single page application boilerplate for quick starting your Vue 3 app with Vue.js and Tailwind CSS. Get started <a href="https://github.com/rakibdevs/vue3-tailwind-spa-bolierplate" class="text-red-400">here</a></p>.
                <div class="inline-block mt-3">
                    <span class="text-xs px-3 bg-green-200 text-green-800 rounded-full m-1">vue-router</span>
                    <span class="text-xs px-3 bg-green-200 text-green-800 rounded-full m-1"> vuex</span>
                    <span class="text-xs px-3 bg-green-200 text-green-800 rounded-full m-1">axios</span>
                    <span class="text-xs px-3 bg-green-200 text-green-800 rounded-full m-1">vue-cli</span>
                </div>   
                
            </div>
        </div>
        <p class="mt-24 w-100 text-center">Contributed by <a href="https://rakibul.dev" class="text-green-600">@Md. Rakibul Islam</a></p>
    </div>
</template>
<script>
export default {
  name: "Home"
};
</script>