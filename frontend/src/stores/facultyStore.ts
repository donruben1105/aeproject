import { defineStore } from 'pinia'
import axios from 'axios'

export interface Faculty {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    contact_number: string;
    email: string;
    dob: string;
    address: string;
    term: string;
    section: string;
}

export const useFacultyStore = defineStore('facultyStore', {
    state: () => ({
        faculties: <Faculty[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.faculties.length
        }
    },
    actions: {
        async getFaculties() {
            this.loading = true;

            try {
                const response = await axios.get('/api/SES/faculty')
                this.faculties = response.data
                this.loading = false
            } catch (error) {
                console.error('Error gettiing faculties', error);
            }
        }, // end of getFaculties

        async addFaculty(faculty: Faculty) {
            try {
                const response = await axios.post('/api/SES/faculty', {
                    first_name: faculty.first_name, 
                    last_name: faculty.last_name,
                    gender: faculty.gender,
                    contact_number: faculty.contact_number,
                    email: faculty.email,
                    dob: faculty.dob,
                    address: faculty.address,
                    term: faculty.term,
                    section: faculty.section,
                })
                this.faculties.push(response.data)
                console.log('Faculty added successfully', response.data)
            } catch (error) {
                console.error('Error adding faculty', error);
            }
        }, // end of addFaculty

        async updateFaculty(id: number, updateData: Faculty) {
            const existingFaculty = this.faculties.find(faculty => faculty.id === id)
            if (!existingFaculty) {
                console.error('Faculty not found with ID', id)
                return
            }

            try {
                const response = await axios.put(`/api/SES/faculty/${id}`, updateData)

                const updatedIndex = this.faculties.findIndex(faculty => faculty.id === id)
                this.getFaculties()

                if (updatedIndex !== 1) {
                    this.faculties.splice(updatedIndex, 1, response.data)
                    console.log('Faculty updated successfully', response.data)
                } else {
                    console.error('Faculty not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating Faculty', error)
                throw error
            }
        }, // end of updateFaculty

        async deleteFaculty(id: number) {
            try {
                const response = await axios.delete(`/api/SES/faculty/${id}`)
                console.log('Faculty deleted successfully', response)
                this.getFaculties()
            } catch (error) {
                console.error('Error deleting Faculty', error)
            }
        }
    }
})