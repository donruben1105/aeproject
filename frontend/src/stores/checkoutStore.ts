import { defineStore } from 'pinia'
import axios from 'axios'

export interface Checkout {
    id: number;
    listing_id: number;
    name: string;
    phone_number: string;
    address: string;
    city: string;
    zip_code: string;
    amount: string;
    status: string;
    type: string;
    card_holder_name: string;
    credit_card_number: string;
    expiration_date: string;
    cvv: string;
    contact_number: string;
    account_name: string;
}

export const useCheckoutStore = defineStore('checkoutStore', {
    state: () => ({
        checkouts: <Checkout[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.checkouts.length
        }
    },
    actions: {
        async getCheckouts() {
            this.loading = true

            try {
                const response = await axios.get('/api/ECOMMERCE/checkout')
                this.checkouts = response.data
                this.loading = false
            } catch (error) {
                console.error('Error getting checkout', error)
            }
        }, // end of getcheckouts

        async addChekcout(checkout: Checkout) {
           try {
            const response = await axios.post('/api/ECOMMERCE/checkout', {
                name: checkout.name,
                phone_number: checkout.phone_number,
                address: checkout.address,
                city: checkout.city,
                zip_code: checkout.zip_code,
                // amount: checkout.amount,
                // status: checkout.status,
                // type: checkout.type,
                card_holder_name: checkout.card_holder_name,
                credit_card_number: checkout.credit_card_number,
                expiration_date: checkout.expiration_date,
                cvv: checkout.cvv,
                listing_id: checkout.listing_id,
                // contact_number: checkout.contact_number,
                // account_name: checkout.account_name,
            })

            this.checkouts.push(response.data)
            console.log('Checkout proccessed', response.data)
           } catch (error) {
            console.error('Error adding checkout', error)
           } 
        }
    }
})