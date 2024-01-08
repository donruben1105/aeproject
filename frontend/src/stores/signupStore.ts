import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router';

export interface Signup {
    name: String;
    email: String;
    password: String;
    password_confirmation: String;
}

export const useSignupStore = defineStore('signupStore', {
    state: () => ({
        users: [] as Signup[]
    }),
    getters: {
        totalCount: (state) => {
            return state.users.length
        }
    },
    actions: {
        async getToken() {
            try {
                await axios.get("/sanctum/csrf-cookie")
            } catch (error) {
                console.error('Error getting token', error);
            }
        }, // end of async getToken

        async addUser(user: Signup) {
            try {
                await this.getToken();
                if(user.password !== user.password_confirmation) {
                    console.log('Password confirmation does not match', user.password)
                    return;
                }

                const response = await axios.post('/register', user, {
                    headers: {
                        "X-CSRF-TOKEN": document.head.querySelector('meta[name="csrf-token"]')?.getAttribute("content") || "",
                    }
                })
                router.push("/dashboard")
                console.log('User registration successful', response.data)
            } catch (error) {
                console.error('Error adding user', error);
            }
        }
    }
})