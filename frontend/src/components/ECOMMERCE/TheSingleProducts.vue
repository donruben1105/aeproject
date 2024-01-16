<template>
    <div>
      <div class="mt-12">
        <router-link to="/ecommerce/product" custom v-slot="{ href, navigate }">
          <a :href="href" @click="navigate" class="text-base text-gray-900 font-normal rounded-lg items-center p-2 group">
            <span class="ml-12 hover:underline underline-offset-1"><i class='bx bx-left-arrow-alt'></i>Back to product</span>
          </a>
        </router-link>
      </div>
      <div class="flex flex-col justify-center h-screen">
        <div v-if="listing" class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div class="w-full md:w-1/3 bg-white grid place-items-center">
            <img :src="getImageUrl(listing.image)" alt="tailwind logo" class="rounded-xl" />
          </div>
          <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div class="flex justify-between item-center">
              <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 class="font-black text-gray-800 text-xl">{{ listing.name }}</h3>
            <p class="text-md font-light text-gray-800">₱ {{ listing.price }}</p>
            <p class="text-md font-light text-gray-800">{{ listing.status }}</p>
            <router-link :to="`/ecommerce/checkout/${listing.id}`" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate" class="select-none rounded-lg bg-blue-500 hover:bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Checkout</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useListingStore, type Listing } from '@/stores/listingStore';
  import { useRoute } from 'vue-router';
  
  const listingStore = useListingStore();
  const route = useRoute();
  const listingId = Number(route.params.id);
  
  // Use the correct method to get a specific listing by ID
  const listing = ref<Listing | undefined>(undefined);
  
  const getImageUrl = (image: string | File | null | undefined): string => {
    if (!image) {
      return '';
    }
  
    if (typeof image === 'string') {
      return image;
    }
  
    return URL.createObjectURL(image);
  };
  
  // Fetch the listing when the component is created
  onMounted(async () => {
    try {
      const data = await listingStore.getListingById(listingId);
      listing.value = data ? { ...data } : undefined;
    } catch (error) {
      console.error('Error fetching listing:', error);
    }
  });
  
  // Watch for changes in listingId and update the listing data
  watch(() => listingId, async () => {
    try {
      const data = await listingStore.getListingById(listingId);
      listing.value = data ? { ...data } : undefined;
    } catch (error) {
      console.error('Error fetching listing:', error);
    }
  });
  </script>