import { defineStore } from 'pinia'
import axios from 'axios'

export interface Staff {
    id: number;
    name: string;
    email: string;
    gender: string;
    contact_number: string;
    address: string;
    position: string;
}

export const useStaffStore = defineStore('staffStore', {
    state: () => ({
        staffs: <Staff[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.staffs.length
        }
    },
    actions: {
        async getStaffs() {
            this.loading = true
            
            try {
                const response = await axios.get('/api/BRGY/staff')
                this.staffs = response.data
                this.loading = false
            } catch (err) {
                console.error('Error getting staff', err)
            }
        }, // end of getStaffs

        async addStaff(staff: Staff) {
            try {
                const response = await axios.post('/api/BRGY/staff', {
                    name: staff.name,
                    email: staff.email,
                    gender: staff.gender,
                    contact_number: staff.contact_number,
                    address: staff.address,
                    position: staff.position,
                })
                this.staffs.push(response.data)
                console.log('Staff added successfully', response.data)
            } catch (error) {
                console.error('Error adding staff', error)
            }
        }, // end of addStaff

        async updateStaff(id: number, updateData: Staff) {
            const existingStaff = this.staffs.find(staff => staff.id == id)
            if(!existingStaff) {
                console.error('Staff not found with ID', id)
                return
            }

            try {
                const response = await axios.put(`/api/BRGY/staff/${id}`, updateData)

                const updatedIndex = this.staffs.findIndex(staff => staff.id == id)
                this.getStaffs()
                if(updatedIndex !== 1) {
                    this.staffs.splice(updatedIndex, 1, response.data)
                    console.log('Staff updated successfully', response.data)
                } else {
                    console.error('Staff not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating staff', error)
                throw error
            }
        }, // end of updateStaff

        async deleteStaff(id: number) {
            try {
                const response = await axios.delete(`/api/BRGY/staff/${id}`)
                console.log('Staff deleted successfully', response.data)
                this.getStaffs()
            } catch (error) {
                console.error('Error deleting staff', error)
            }
        }
    }
})