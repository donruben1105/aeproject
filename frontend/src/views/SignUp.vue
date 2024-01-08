<template>
<div class="flex justify-center items-center h-screen">
    <div class="container mx-auto py-8">
        <h1 class="text-2xl font-bold mb-6 text-center">Registration</h1>
        <form @submit.prevent="handleRegister" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
            <input v-model="form.name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="text" id="name" name="name" placeholder="John Doe">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <input v-model="form.email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email" id="email" name="email" placeholder="john@example.com">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
            <input v-model="form.password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password" id="password" name="password" placeholder="********">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password_confirmation">Confirm Password</label>
            <input v-model="form.password_confirmation" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password" id="password_confirmation" name="password_confirmation" placeholder="********">
          </div>
          <button
            class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit">Register</button>
        </form>
        <div class="pt-5 mt-6 border-t border-slate-200">
            <div class="text-sm ml-20 mt-2">
                Have an account?
                <router-link class="text-blue-500" to="/login">
                    Login Here
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSignupStore } from '@/stores/signupStore'
import type { Signup } from '@/stores/signupStore'

const signupStore = useSignupStore()
const form = ref<Signup>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

const handleRegister = () => {
    signupStore.addUser(form.value)
}
    
</script>