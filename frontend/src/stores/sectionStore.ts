import { defineStore } from "pinia";
import axios from 'axios'

export interface Section {
    id: number;
    title: string;
}

export const useSectionStore = defineStore('sectionStore', {
    state: () => ({
        sections: <Section[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.sections.length
        }
    },
    actions: {
        async getSections() {
            this.loading = true;

            try {
                const response = await axios.get('/api/SES/section')
                this.sections = response.data
                this.loading = false
            } catch (error) {
                console.error('Error getting section', error);
            }
        }, // end of getSections

        async addSection(section: Section) {
            try {
                const response = await axios.post('/api/SES/section', {
                    title: section.title,
                })
                this.sections.push(response.data)
                console.log('Section added successfully', response.data)
            } catch (error) {
                console.error('Error adding section', error);
            }
        }, // end of addSection

        async updateSection(id: number, updateData: Section) {
            const existingSection = this.sections.find(section => section.id === id)
            if(!existingSection) {
                console.error('Section not found with ID', id)
                return;
            }

            try {
                const response = await axios.put(`/api/SES/section/${id}`, updateData)

                const updateIndex = this.sections.findIndex(section => section.id === id)
                this.getSections()
                if(updateIndex !== 1) {
                    this.sections.splice(updateIndex, 1, response.data)
                    console.log('Sections updated successfully', response.data)
                } else {
                    console.error('Section not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating section', error)
                throw error
            }
        }, // end of updateSection

        async deleteSection(id: number) {
            try {
                const response = await axios.delete(`/api/SES/section/${id}`)
                console.log('Section deleted successfully', response.data)
                this.getSections()
            } catch (error) {
                console.error('Error deleting section', error)
            }
        }, // end of deleteSection
    }
})