import { defineStore } from 'pinia'
import axios from 'axios'

export interface Subject {
    id: number;
    title: string;
}

export const useSubjectStore = defineStore('subjectStore', {
    state: () => ({
        subjects: <Subject[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.subjects.length
        }
    },
    actions: {
        async getSubjects() {
            this.loading = true;

            try {
                const response = await axios.get('/api/SES/subject');
                this.subjects = response.data
                this.loading = false
            } catch (error) {
                console.error('Error getting subjects', error);
            }
        }, // end of getSubjects

        async addSubject(subject: Subject) {
            try {
                const response = await axios.post('/api/SES/subject', {
                    title: subject.title,
                })

                this.subjects.push(response.data)
                console.log('Subject added successfully', response.data)
            } catch (error) {
                console.error('Error adding subject', error);
            }
        }, // end of addSubject

        async updateSubject(id: number, updateData: Subject) {
            const existingSubject = this.subjects.find(subject => subject.id === id)
            if(!existingSubject) {
                console.error('Subject not found with ID', id)
                return;
            }

            try {
                const response = await axios.put(`/api/SES/subject/${id}`, updateData)
                
                const updateIndex = this.subjects.findIndex(subject => subject.id === id)
                this.getSubjects()

                if(updateIndex !== 1) {
                    this.subjects.splice(updateIndex, 1, response.data)
                    console.log('Subject updated successfully', response.data)
                } else {
                    console.error('Subject not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating subject', error);
                throw error
            }
        }, // end of updateSubject

        async deleteSubject(id: number) {
            try {
                const response = await axios.delete(`/api/SES/subject/${id}`)
                console.log('Subject deleted successfully', response.data)
                this.getSubjects()
            } catch (error) {
                console.error('Error deleting subject', error)
            }
        }
    }
})