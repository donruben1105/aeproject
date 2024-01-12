import { defineStore } from 'pinia'
import axios from 'axios'

export interface Term {
    id: number;
    title: string;
}

export const useTermStore = defineStore('termStore', {
    state: () => ({
        terms: <Term[]>[],
        loading: false,
    }),
    getters: {
        totalCount: (state) => {
            return state.terms.length
        }
    },
    actions: {
        async getTerms() {
            this.loading = true;

            try {
                const response = await axios.get('/api/SES/term')
                this.terms = response.data
                this.loading = false
            } catch (error) {
                console.error('Error getting terms', error);
            }
        }, // end of getTerms

        async addTerm(term: Term) {
            try {
                const response = await axios.post('/api/SES/term', {
                    title: term.title,
                })
                this.terms.push(response.data)
                console.log('Term added successfully', response.data)
            } catch (error) {
                console.error('Error adding term', error);
            }
        }, // end of addTerm

          async updateTerm(id: number, updateData: Term) {
            const existingTerm = this.terms.find(term => term.id === id)
            if(!existingTerm) {
                console.error('Term not found with ID', id)
                return
            }

            try {
                const response = await axios.put(`/api/SES/term/${id}`, updateData)

                const updateIndex = this.terms.findIndex(term => term.id ===id)
                this.getTerms()

                if (updateIndex !== 1) {
                    this.terms.splice(updateIndex, 1, response.data)
                    console.log('Term updated successfully', response.data)
                } else {
                    console.error('Term not found with ID', id)
                }
            } catch (error) {
                console.error('Error updating term', error)
                throw error
            }
          },// end of updateTerm

        async deleteTerm(id: number) {
            try {
                const response = await axios.delete(`/api/SES/term/${id}`)
                console.log('Term deleted successfully', response.data)
                this.getTerms()
            } catch (error) {
                console.log('Error deleting term', error)
            }
        }, // end of deleteTerm
    }
})