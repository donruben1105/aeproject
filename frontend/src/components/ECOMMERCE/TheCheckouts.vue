<template>
    <div class="">
        <div class="mt-12">
          <router-link to="/ecommerce/product" custom v-slot="{ href, navigate }">
            <a :href="href" @click="navigate" class="text-base text-gray-900 font-normal rounded-lg items-center p-2 group">
              <span class="ml-12 hover:underline underline-offset-1"><i class='bx bx-left-arrow-alt'></i>Back to product</span>
            </a>
          </router-link>
        </div>
        <div class="flex flex-col mt-24">
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
            </div>
          </div>
          <hr class="my-4" />
            
            <div class="flex justify-center mb-14">
                <form class>
                    <div class="flex flex-row mt-12">
                        <div class="pr-12 border border-white bg-white md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto mb-12">
                            <div class="-ml-24 mb-6 mt-4">
                                <h1 class="pl-32 text-xl">Delivery Address:</h1>
                            </div>
                            <div class="-mx-3 md:flex mb-6">
                              <div class="md:w-96 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
                                  Name
                                </label>
                                <input class="appearance-none block w-96 bg-grey-lighter text-grey-darker border border-red rounded-xl py-3 px-4 mb-3" id="name" type="text" placeholder="Jane Doe">
                              </div>
                            </div>
                            <div class="-mx-3 md:flex mb-6">
                              <div class="md:w-96 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="phone_number">
                                  Phone Number
                                </label>
                                <input class="appearance-none block w-96 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl py-3 px-4" id="phone_number" type="text" placeholder="+63 9271234567">
                              </div>
                            </div>
                            <div class="-mx-3 md:flex pt-2">
                              <div class="md:w-96 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="address">
                                  Address
                                </label>
                                <input class="appearance-none block w-96 bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl py-3 px-4 mb-3" id="address" type="address" placeholder="Complete address">
                              </div>
                            </div>
                              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="city">
                                  City
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl py-3 px-4" id="city" type="text" placeholder="Bacoor">
                              </div>
                              <div class="md:w-1/2 px-3 pt-2">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="zip_code">
                                  Zip Code
                                </label>
                                <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-xl py-3 px-4" id="zip_code" type="text" placeholder="4102">
                              </div>
                            
                        </div>
                        
                        <div class="border  bg-slate-800 text-white space-y-3 md:space-y-0 rounded-xl shadow-lg p-12 max-w-xs md:max-w-3xl mx-auto mb-12">
                            <div class="-ml-24 mb-6">
                                <h1 class="pl-24 text-xl">Payment Method: <span class="bg-gradient-to-r from-yellow-500 to-yellow-600 p-2 rounded-xl font-serif">Credit</span> or <span class="bg-gradient-to-r from-rose-500 to-rose-700 p-2 rounded-xl font-serif">Debit</span></h1>
                            </div>
                            <div class="border rounded-xl pr-12 pl-8 shadow-lg pt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                                <div class="-mx-3 md:flex space-x-2">
                                  <div class="md:w-80 px-3 mb-4">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="credit_card_number">
                                      Credit Card Number
                                    </label>
                                    <input class="text-black appearance-none block w-80 bg-grey-lighter text-grey-darker border rounded-xl py-3 px-4" id="credit_card_number" type="text" placeholder="#### #### #### ####">
                                  </div>
                                </div>
                                <div class="-mx-3 md:flex space-x-1">
                                  <div class="md:w-40 px-3">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="expiration_date">
                                      Expiration Date
                                    </label>
                                    <input class="text-black appearance-none block w-40 bg-grey-lighter text-grey-darker border rounded-xl py-3 px-4 mb-3" id="expiration_date" type="text" placeholder="00/00">
                                  </div>
                                  <div class="md:w-40 px-3 md:mb-0">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="cvv">
                                      CVV
                                    </label>
                                    <input class="text-black appearance-none block w-40 bg-grey-lighter text-grey-darker border rounded-xl py-3 px-4" id="cvv" type="text" placeholder="Bacoor">
                                  </div>
                                </div>
                                <div class="-mx-3 md:flex mb-4 space-x-4">
                                    <div class="md:w-80 px-3 md:mb-0">
                                      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="card_holder_name">
                                        Card Holder Name
                                      </label>
                                      <input class="text-black appearance-none block w-80 bg-grey-lighter text-grey-darker border border-red rounded-xl py-3 px-4 mb-3" id="card_holder_name" type="text" placeholder="Jane Doe">
                                    </div>
                                </div>
                            </div>
                            <div class="pt-2">
                                <button class="bg-blue-500 p-2 text-white rounded-xl-sm hover:bg-blue-600 rounded-xl" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
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