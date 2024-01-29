import { defineStore } from "pinia";
import axios from 'axios'

export interface Official {
    id: number;
    name: string;
    gender: string;
    contact_number: string;
    email: string;
    dob: string;
    address: string;
    position: string;
    startOfTerm: string;
    endOfTerm: string;
}

export interface OfficialStore {
    getOfficials: any;
    officials: Official[];
    totalCount: number;
    addOfficial(official: Official): void;
    deleteOfficial(id: number, official: Official): void;
    updateOfficial(id: number, official: Official): Promise<void>;
}

export const useOfficialStore = defineStore('officialStore', {
    state: () => ({
        officials: <Official[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.officials.length
        }
    },
    actions: {
        async getOfficials() {
            this.loading = true;

            try {
                const response = await axios.get('/api/BRGY/official')
                this.officials = response.data
                this.loading = false
            } catch (error) {
                console.error('Error getting official', error);
            }
        }, // end getofficials

        async addOfficial(official: Official) {
            try {
                const response = await axios.post('/api/BRGY/official', {
                    name: official.name, 
                    gender: official.gender,
                    contact_number: official.contact_number,
                    email: official.email,
                    dob: official.dob,
                    address: official.address,
                    position: official.position,
                    startOfTerm: official.startOfTerm,
                    endOfTerm: official.endOfTerm,
                })
                this.officials.push(response.data)
                console.log('official added successfully', response.data)
            } catch (error) {
                console.error('Error adding official',error);
            }
        }, // end of addofficial

        async updateOfficial(id: number, updateData: Official) {
            const existingOfficial = this.officials.find(official => official.id === id)
            if (!existingOfficial) {
                console.error('official not found with ID', id)
                return;
            }

            try {
                const response = await axios.put(`/api/BRGY/official/${id}`, updateData);

                const updatedIndex = this.officials.findIndex(official => official.id === id);
                this.getOfficials();
                if (updatedIndex !== 1) {
                    this.officials.splice(updatedIndex, 1, response.data)
                    console.log('official updated successfully', response.data)
                } else {
                    console.error('official not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating official', error)
                throw error
            }
        }, // end of updateofficial

        async deleteOfficial(id: number) {
            try {
                const response = await axios.delete(`/api/BRGY/official/${id}`)
                console.log('official deleted successfully', response.data)
                this.getOfficials()
            } catch (error) {
                console.error('Error deleting official', error)
            }
        }
    }
})