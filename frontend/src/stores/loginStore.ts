import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'

export interface Login {
    email: String;
    password: String;
}

export const useLoginStore = defineStore('loginStore', {
    state: () =>({
        users:<Login[]>[],
    }),
    actions: {
        async getToken() {
            try {
                await axios.get("/sanctum/csrf-cookie")
            } catch (error) {
                console.error('Error getting token', error);
            }
        }, // end of async getToken

        async handleLogin(formData: { email: string, password: string}) {
            try {
                await this.getToken()
                await axios.post("/login", {
                    email: formData.email,
                    password: formData.password
                })
                console.log('routed to dashboard')
                router.push("/dashboard")
            } catch (error) {
                console.error('Invalid credentials. Please try again.', error);
            }
        }
    }
})