import { defineStore } from "pinia";
import axios from 'axios'

export interface Enrollment {
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
    status: string;
}

export interface EnrollmentStore {
    getEnrollments: any;
    enrollments: Enrollment[];
    totalCount: number;
    addEnrollment(enrollment: Enrollment): void;
    deleteEnrollment(id: number, enrollment: Enrollment): void;
    updateEnrollment(id: number, enrollment: Enrollment): Promise<void>;
}

export const useEnrollmentStore = defineStore('enrollmentStore', {
    state: () => ({
        enrollments: <Enrollment[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.enrollments.length
        }
    },
    actions: {
        async getEnrollments() {
            this.loading = true;

            try {
                const response = await axios.get('/api/SES/enrollment')
                this.enrollments = response.data
                this.loading = false
            } catch (error) {
                console.error('Error getting enrollment', error);
            }
        }, // end getEnrollments

        async addEnrollment(enrollment: Enrollment) {
            try {
                const response = await axios.post('/api/SES/enrollment', {
                    first_name: enrollment.first_name, 
                    last_name: enrollment.last_name,
                    gender: enrollment.gender,
                    contact_number: enrollment.contact_number,
                    email: enrollment.email,
                    dob: enrollment.dob,
                    address: enrollment.address,
                    term: enrollment.term,
                    section: enrollment.section,
                })
                this.enrollments.push(response.data)
                console.log('Enrollment added successfully', response.data)
            } catch (error) {
                console.error('Error adding enrollment',error);
            }
        }, // end of addEnrollment

        async updateEnrollment(id: number, updateData: Enrollment) {
            const existingEnrollment = this.enrollments.find(enrollment => enrollment.id === id)
            if (!existingEnrollment) {
                console.error('Enrollment not found with ID', id)
                return;
            }

            try {
                const response = await axios.put(`/api/SES/enrollment/${id}`, updateData);

                const updatedIndex = this.enrollments.findIndex(enrollment => enrollment.id === id);
                this.getEnrollments();
                if (updatedIndex !== 1) {
                    this.enrollments.splice(updatedIndex, 1, response.data)
                    console.log('Enrollment updated successfully', response.data)
                } else {
                    console.error('Enrollment not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating enrollment', error)
                throw error
            }
        }, // end of updateEnrollment

        async deleteEnrollment(id: number) {
            try {
                const response = await axios.delete(`/api/SES/enrollment/${id}`)
                console.log('Enrollment deleted successfully', response.data)
                this.getEnrollments()
            } catch (error) {
                console.error('Error deleting enrollment', error)
            }
        }
    }
})