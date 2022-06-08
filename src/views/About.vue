<template>
    <div class="container mx-auto ">
        <div class="flex mt-24 w-100 justify-center">
            <div class="shadow-2xl h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">
                <span ref="el"
                    class="decoration-clone bg-clip-text text-transparent bg-gradient-to-b from-amber-400 to-red-500">
                    Hello<br>
                    World
                </span>
            </div>

        </div>
        <button class="bg-indigo-600 bg-opacity-100 rounded-md px-6 shadow-2xl" @click="increate">
            {{ count }} - {{version}}
        </button>
    </div>
</template>
<script>
import { ref, reactive, onMounted,version } from 'vue'
export default {
    // name: "About",
    setup() {
        const mess = reactive(".shadow-2xl");
        const count = ref(1);
        const el = ref()

        function increate() {
            count.value++;
        }

        onMounted(() => {
            console.log(el)
        })
        //return object to user
        return {
            mess,
            count,
            version,
            increate
        }
    }
};
</script>