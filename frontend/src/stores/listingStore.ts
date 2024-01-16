import { defineStore } from 'pinia'
import axios from 'axios'

export interface Listing {
    id: number;
    image: File | null;
    name: string;
    price: string;
    status: string;
}

export const useListingStore = defineStore('listingStore', {
    state: () => ({
        listings: <Listing[]>[],
        loading:false,
    }),
    getters: {
        totalCount: (state) => {
            return state.listings.length
        }
    },
    actions: {
        async getListings() {
            this.loading = true;

            try {
                const response = await axios.get('/api/ECOMMERCE/listing');
                this.listings = response.data
                this.loading = false;
            } catch (error) {
                console.error('Error getting listings', error);
            }
        }, // end of getListings

        async getListingById(listingId: number) {
            this.loading = true;
      
            try {
              const response = await axios.get(`/api/ECOMMERCE/listing/${listingId}`);
              return response.data;
            } catch (error) {
              console.error('Error getting listing by ID', error);
              throw error;
            } finally {
              this.loading = false;
            }
          }, // end of getListingsData

        async addListing(formData: FormData) {
            try {
                const response = await axios.post('/api/ECOMMERCE/listing', formData)
                this.listings.push(response.data)
                console.log('Listing added successfully', response.data)
            } catch (error) {
                console.error('Error adding listing', error);
            }
        }, // enf of addListing

        async updateListing(id: number, updateData: Listing) {
            const existingListing = this.listings.find(listing => listing.id === id)
            if (!existingListing) {
                console.error('Listing not found with ID', id)
                return
            }

            try {
                const response = await axios.put(`/api/ECOMMERCE/listing/${id}`, updateData)

                const updatedIndex = this.listings.findIndex(listing => listing.id === id)
                this.getListings()

                if(updatedIndex !== 1) {
                    this.listings.splice(updatedIndex, 1, response.data)
                    console.log('Listing updated successfully', response.data)
                } else {
                    console.error('Listing not found with Id', id)
                }
            } catch (error) {
                console.error('Error updating listing', error)
                throw error
            }
        }, // end of updateListing

        async deleteListing(id: number) {
            try {
                const response = await axios.delete(`/api/ECOMMERCE/listing/${id}`)
                console.log('Listing deleted successfully', response)
                this.getListings()
            } catch (error) {
                console.error('Error deleting listing', error)
            }
        }
    }
})