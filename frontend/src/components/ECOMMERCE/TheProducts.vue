<template>
    <div class="bg-slate-950 ml-8 p-24 rounded-b-lg">
        <h1 class="ml-10 text-white text-6xl font-bold font-serif uppercase">Level Up Your Fun: <span class="text-blue-500">Play</span>, 
            <span class="text-rose-400">Dominate</span>, <span class="text-sky-400">Repeat!</span></h1>
    </div>
    <div class="pl-14">
        <!-- Profile content -->
      <section class="lg:relative lg:flex p-12">
        <div class="pl-6">
          <div class="lg:mx-auto lg:max-w-full">
            <div class="mb-6 lg:mb-0">
              <div>
                  <section class="mb-8 space-y-4 rounded-md bg-white px-6 py-8 drop-shadow-lg">
                    <!-- <h2 class="mb-6 text-2xl font-bold text-slate-800">
                      Listings
                    </h2> -->
                    <!-- <h2 class="font-semibold text-slate-800">Total listing <span class="text-slate-500 text-xl">{{ totalCount }}</span></h2> -->
                    <!--Row 1 -->
                    <div class="space-y-4 md:flex">
                      <!-- Job Title -->
                      <div class="flex-1">
                        <!-- card -->
                        <div v-if="loading">
                            <div class="flex items-center justify-center">
                              <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                              </div>
                            </div>
                          </div>
                        <div v-else class="">
                          <div class="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
                            <div v-for="listing in listings" :key="listing.id" class="m-4 relative flex w-60 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <div class="relative mx-4 -mt-6 h-54 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                                  <img
                                    :src="getImageUrl(listing.image)"
                                    alt="img-blur-shadow"
                                    class="object-cover h-48 w-96"
                                  />
                                </div>
                                <div class="p-6">
                                  <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {{ listing.name }}
                                  </h5>
                                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                    {{ listing.price }}
                                  </p>
                                  <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                    {{ listing.status }}
                                  </p>
                                  <div class="pt-4">
                                    <router-link :to="`/ecommerce/product/${listing.id}`">
                                        <button class="select-none rounded-lg bg-blue-500 hover:bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Buy Now</button>
                                    </router-link>
                                  </div>
                                </div>
                                
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

              </div>
            </div>
          </div>
        </div>

        
      </section>
    </div>
</template>

<script setup lang="ts">
import { useListingStore } from '@/stores/listingStore'
import { storeToRefs } from 'pinia'

const listingStore = useListingStore()
const { listings, loading } = storeToRefs(listingStore)

listingStore.getListings()

const getImageUrl = (image: string | File | null | undefined): string => {
    if(!image) {
        return ''
    }

    if(typeof image === 'string') {
        return image
    }

    return URL.createObjectURL(image)
}
</script>