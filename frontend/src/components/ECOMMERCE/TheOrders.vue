<template>
  <div>
    <div class="mt-12">
      <router-link to="/ecommerce/product" custom v-slot="{ href, navigate }">
        <a :href="href" @click="navigate" class="text-base text-gray-900 font-normal rounded-lg items-center p-2 group">
          <span class="ml-12 hover:underline underline-offset-1"><i class='bx bx-left-arrow-alt'></i>Back to product</span>
        </a>
      </router-link>
    </div>
    <div v-if="loading">
      <div class="flex items-center justify-center">
        <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
      </div>
    </div>
    <div v-else>
    <div v-for="listing in listings" :key="listing.id" class="flex justify-center items-center h-screen">
      <div class="m-4 relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="hover:animate-bounce relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img :src="getImageUrl(listing.image)" alt="tailwind logo" class="rounded-xl object-cover h-full w-full" />
        </div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {{ listing.name }}
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {{ listing.price }}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button @click="openModal(listing.id)" class="elect-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Check Details</button>
          <div v-if="showDataModal" class="fixed inset-0 flex items-center justify-center z-50">
              <div class="w-4/12">
                  <div class="modal-content bg-white p-6 rounded-lg shadow-lg relative">
                <div class="mb-6">
                  <h1 class="text-2xl">Order Details</h1>
                </div>
                <button @click="showDataModal = false" class="close-button absolute top-0 right-0 p-2 text-black rounded-sm px-3 py-1 focus:outline-none text-2xl">×</button>
                <div class="container mx-auto px-4 sm:px-8">
                  <div class="py-8">
                      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                          <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                              <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Contact Number
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Delivery Address
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                            </table>
                            <div v-if="loading">
                              <div class="flex items-center justify-center">
                                <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                                  <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                                </div>
                              </div>
                            </div>
                              <table v-else class="min-w-full leading-normal">
                                  <tbody v-if="checkout">
                                      <tr>
                                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                              <div class="flex items-center">
                                                  <div class="ml-3">
                                                      <p class="text-gray-900 whitespace-no-wrap">
                                                          {{ checkout.name }}
                                                      </p>
                                                  </div>
                                              </div>
                                          </td>
                                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                              <p class="text-gray-900 whitespace-no-wrap">{{ checkout.phone_number }}</p>
                                          </td>
                                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                              <p class="text-gray-900 whitespace-no-wrap">
                                                  {{ checkout.address }} - {{ checkout.city }}
                                              </p>
                                          </td>
                                          <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                              <span
                                                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                  <span aria-hidden
                                                      class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                  <span class="relative">{{ checkout.status }}</span>
                                              </span>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>  
              </div>
              </div>
          </div>
        </div>
    </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useListingStore } from '@/stores/listingStore';
import { useCheckoutStore, type Checkout } from '@/stores/checkoutStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const listingStore = useListingStore();
const checkoutStore = useCheckoutStore();
const route = useRoute();
const { listings, loading } = storeToRefs(listingStore);
const { getCheckoutById } = checkoutStore;
const showDataModal = ref(false);
const checkout = ref<Checkout | undefined>(undefined);

listingStore.getListings();

const getImageUrl = (image: string | File | null | undefined): string => {
  if (!image) {
    return '';
  }

  if (typeof image === 'string') {
    return image;
  }

  return URL.createObjectURL(image);
};

const openModal = async (listingId: number) => {
  try {
    checkout.value = await getCheckoutById(listingId);
    showDataModal.value = true;
  } catch (error) {
    console.error('Error opening modal', error);
  }
};

watch(() => route.params.id, async () => {
  try {
    const listingId = Number(route.params.id);
    checkout.value = await getCheckoutById(listingId);
  } catch (error) {
    console.error('Error fetching checkout', error);
  }
});
</script>
