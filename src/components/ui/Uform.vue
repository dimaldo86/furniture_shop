<script setup lang='ts'>
import uniqueEmail from '@/ts/functions/uniqueEmail'
import axios from 'axios'

import { ref, computed, reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue 2.x
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'


// const emailField = ref('')

const data = reactive({
	email:''
})

const rules = computed(() => ({
 email: {
    required:helpers.withMessage('This field is required', required),
    email: helpers.withMessage('You entered an invalid email', email),
	uniqueEmail:helpers.withMessage('such an email already exists', uniqueEmail)
  },
}))



const v = useVuelidate(rules, data)
const feedback = ref('')

// const submit = () => {
// v.value.$touch()
//   if (v.value.$error) {
// 	return feedback.value = 'Форма успешна отправлена'
// 	 emailField.value=""
// 	}



//   else {
// 	feedback.value = 'Форма незарегистрирована'
// }
// //   alert('Form submitted' + ' ' + emailField.value)
// //
// }

   const submit = ()=> {
		v.value.$validate()
		if (!v.value.$error) {
	// if ANY fail validation
			feedback.value = 'The form has been successfully submitted'
			axios.post('http://localhost:3000/emailRegistrations', data)
			.then(res => {
				console.log(res.data)
			})
		} else {
			feedback.value = ''
		}
		setTimeout(() => {
			data.email = ''
			feedback.value = ''
            }, 1000)
	}

</script>

<template>
    <form
        action="#"
        class="mt-8  h-auto max-w-[500px]"
        @submit.prevent="submit"
        novalidate
    >
		<div class="flex items-center">
			<div class="min-h-[56px] flex  ">
				<input
					class="w-[174px] xs:w-[284px] sm:w-[354px] h-[56px] p-4 font-satoshi transition border-2 border-transparent duration-300 ease-in-out text-main focus-visible:border-2 focus-visible:border-main focus-visible:outline-none"
					type="email" name="email"
					id="email"
					placeholder="your@email.com"
					v-model.trim="data.email"
					@blur="v.email.$touch"
					:error="v.email.$errors"
				/>
			</div>
			<button
				:disabled="v.$invalid"
				class="disabled:bg-lightGray disabled:text-main h-[56px] px-4 xs:px-8 transition duration-500 ease-in-out bg-main text-white" type="submit">Sign up
			</button>
		</div>

		<div class=" text-base text-white p-1"> {{ feedback }}</div>

		<transition name="error" appear>
			<div class="w-auto xs:w-[284px] sm:w-[354px] text-red-500 p-1" v-if="v.email.$error"> {{ v.email.$errors[0].$message }} </div>
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
