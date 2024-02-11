import { defineStore } from 'pinia'
import axios from 'axios'

export interface HouseHold {
    id: number;
    name: string;
    gender: string;
    birthdate: string;
    birth_place: string;
    household_number: string;
    blood_type: string;
    civil_status: string;
    length_of_stay: string;
    occupation: string;
    monthly_income: string;
}

export const useHouseholdStore = defineStore('householdStore', {
    state: () => ({
        households: <HouseHold[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.households.length
        }
    },
    actions: {
        async getHouseholds() {
            this.loading = true

            try {
                const response = await axios.get('/api/BRGY/house/hold')
                this.households = response.data
                this.loading = false
            } catch (error) {
                console.error('Error getting Household', error)
            }
        }, // end of getHouseHold

        async addHousehold(household: HouseHold) {
            try {
                const response = await axios.post('/api/BRGY/house/hold', {
                    name: household.name,
                    gender: household.gender,
                    birthdate: household.birthdate,
                    birth_place: household.birth_place,
                    household_number: household.household_number,
                    blood_type: household.blood_type,
                    civil_status: household.civil_status,
                    length_of_stay: household.length_of_stay,
                    occupation: household.occupation,
                    monthly_income: household.monthly_income,
                })

                this.households.push(response.data)
                console.log('Household added successfully', response.data)
            } catch (error) {
                console.error('Error adding Household', error)
            }
        }, // end of addHousehold

        async updateHousehold(id: number, updateData: HouseHold) {
            const existingHousehold = this.households.find(household => household.id == id)
            if(!existingHousehold) {
                console.error('Household not found with ID:', id)
                return
            }

            try {
                const response = await axios.put(`/api/BRGY/house/hold/${id}`, updateData)

                const updatedIndex = this.households.findIndex(household => household.id == id)
                this.getHouseholds()
                if(updatedIndex !== 1) {
                    this.households.splice(updatedIndex, 1, response.data)
                } else {
                    console.error('Household not found with ID:', id)
                }
            } catch (error) {
                console.error('Error updating household', error)
                throw error
            }
        }, // end of updateHousehold

        async deleteHousehold(id: number) {
            try {
                const response = await axios.delete(`/api/BRGY/house/hold/${id}`)
                console.log('Household deleted successfully', response.data)
                this.getHouseholds()
            } catch (error) {
                console.error('Error deleting household', error)
            }
        }
    }
})