<script setup lang='ts'>
import { ref, computed } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'


const emailField = ref('')

const rules = computed(() => ({
  emailField: {
    required:helpers.withMessage('This field is required', required),
    email: helpers.withMessage('You entered an invalid email', email)
  },
}))

const v = useVuelidate(rules, { emailField})

const submit = () => {
  v.value.$touch()
  if (v.value.$error) return
  alert('Form submitted' + ' ' + emailField.value)
}


</script>

<template>
    <form
        action="#"
        class="mt-8  h-auto"
        @submit.prevent="submit"
        novalidate
    >
    <div class="flex items-center">
        <div class="min-h-[56px] flex  ">
            <input
                class="w-[354px] h-[56px] p-4 font-satoshi transition border-2 border-transparent duration-300 ease-in-out text-main focus-visible:border-2 focus-visible:border-main focus-visible:outline-none"
                type="email" name="email"
                id="email"
                placeholder="your@email.com"
                v-model.trim="v.emailField.$model"
                @blur="v.emailField.$touch"
                :error="v.emailField.$errors"
            />
        </div>
        <button
            :disabled="v.emailField.$error"
            class="disabled:bg-lightGray disabled:text-main h-[56px] px-8 transition duration-500 ease-in-out bg-main text-white" type="submit">Sign up
        </button>
    </div>

<transition name="error" appear>
     <div class="w-[354px] text-red-500 p-1" v-if="v.emailField.$error"> {{ v.emailField.$errors[0].$message }} </div>
</transition>


    </form>
</template>
<style scoped>
.error-enter-active {
  transition: all 0.3s ease-out;
}
.error-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.error-enter-from {
    transform: translateX(-50px);
    opacity: 0;
}
.error-leave-to {
    transform: translateX(150px);
    opacity: 0;
}
</style>
