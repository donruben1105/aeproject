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

        async handleLogin(options: { email: string; password: string; onSuccess?: () => void }) {
            try {
                await this.getToken();
                await axios.post("/login", {
                    email: options.email,
                    password: options.password,
                });

                if (options.onSuccess) {
                    options.onSuccess();
                }

                console.log('routed to dashboard');
                router.push("/dashboard");
            } catch (error) {
                console.error('Invalid credentials. Please try again.', error);
            }
        }
    }
})