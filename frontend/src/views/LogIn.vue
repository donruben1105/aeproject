<template>
    <div class="flex justify-center items-center h-screen">
        <div class="container mx-auto py-8">
            <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
            <form @submit.prevent="handleLogin" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
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
              <button
                class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                type="submit">Login</button>
            </form>
            <div class="pt-5 mt-6 border-t border-slate-200">
                <div class="text-sm ml-20 mt-2">
                    Don't have an account?
                    <router-link class="text-blue-500" to="/">
                        Register Here
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLoginStore } from '@/stores/loginStore';
import Swal from 'sweetalert2'

const loginStore = useLoginStore();
const form = ref({
    email: '',
    password: ''
})

const configureSwal = () => {
    return Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
};

const handleLogin = async () => {
    try {
        await loginStore.handleLogin({
            email: form.value.email,
            password:form.value.password,
            onSuccess: () => {
                // Reset the password field
                form.value.password = '';  // Resetting the password field

                // Show success Toast
                const Toast = configureSwal();
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully',
                });
            },
        }
        );
    } catch (error) {
        console.error('Invalid credentials. Please try again.', error);
    }
};

</script>