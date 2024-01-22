<template>
    <div class="pt-24 pl-14">
        <!-- Header -->
      <header class="pl-28 grid justify-items-start text-center sm:text-left mb-6">
        <!-- Name -->
        <div class="inline-flex items-start mb-2">
          <h1 class="text-2xl text-slate-800 font-bold">{{ name }}</h1>
        </div>
        <!-- Meta -->
        <div class="flex flex-wrap justify-center sm:justify-start space-x-4">
          <div class="flex items-center">
            <svg class="w-4 h-4 fill-current shrink-0 text-slate-400" viewBox="0 0 16 16">
              <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
            </svg>
            <a class="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2" href="#0">{{ email }}</a>
          </div>
        </div>
      </header>

      <!-- Tabs -->
      <hr/>

      <!-- Profile content -->
      <section class="lg:relative lg:flex p-12">
        <div class="pt-8 pl-6">
          <div class="lg:mx-auto lg:max-w-full">
            <div class="mb-6 lg:mb-0">
              <div>
                  <section class="mb-8 space-y-4 rounded-md bg-white px-6 py-8 drop-shadow-lg">
                    <h2 class="mb-6 text-2xl font-bold text-slate-800">
                      Listings
                    </h2>
                    <h2 class="font-semibold text-slate-800">Total listing <span class="text-slate-500 text-xl">{{ totalCount }}</span></h2>
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
                          <div class="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
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
                                </div>
                                <div class="p-6 pt-0 flex flex-row">
                                  <button @click="openUpdateModal(listing)" class="select-none rounded-lg bg-blue-500 hover:bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Edit</button>
                            <div v-if="showUpdateModal" class="fixed inset-0 flex items-center justify-center z-50">
                                <div class="w-4/12">
                                    <div class="modal-content bg-white p-6 rounded-lg shadow-lg relative">
                                  <div class="mb-6">
                                    <h1 class="text-2xl">Fill up the form to enroll new students.</h1>
                                  </div>
                                  <button @click="showUpdateModal = false" class="close-button absolute top-0 right-0 p-2 text-black rounded-sm px-3 py-1 focus:outline-none text-2xl">×</button>
                                  <form @submit.prevent="updateForm">
                                    <div class="-mx-3 md:flex mb-6">
                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
                                          Name
                                        </label>
                                        <input v-model="formUpdate.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="first_name" type="text" placeholder="Jane">
                                      </div>
                                    </div>
                                      <div class="-mx-3 md:flex mb-6">
                                        <div class="md:w-1/2 px-3">
                                          <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
                                            Price
                                          </label>
                                          <input v-model="formUpdate.price" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="email" type="text" placeholder="Jane@doe.com">
                                        </div>
                                      </div>
                                    
                                    <div class="-mx-3 md:flex mb-6">
                                      <div class="md:w-full px-3">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="address">
                                          Status
                                        </label>
                                        <input v-model="formUpdate.status" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="address" type="address" placeholder="Complete address">
                                      </div>
                                    </div>
                                    <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">update</button>
                                  </form>  
                                </div>
                                </div>
                            </div>
                            <div class="ml-2">
                              <button @click="deleteListing(listing.id)" class="select-none rounded-lg bg-red-500 hover:bg-red-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Remove</button>
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

        <div>
          <div
            class="no-scrollbar border-t lg:sticky lg:top-16 lg:h-[calc(100vh-64px)] lg:w-[500px] lg:shrink-0 lg:overflow-y-auto lg:overflow-x-hidden lg:border-t-0 xl:w-[500px] 2xl:w-[calc(352px+200px)]"
          >
            <div class="px-4 py-8">
              <div class="mx-auto max-w-sm lg:max-w-lg">
                <div class="space-y-6">
                  <div>
                    <!-- Row 1 -->
                    <div class="pr-22 mb-8 space-y-4 rounded-md bg-white px-6 py-8 drop-shadow-lg">
                      <h2 class="mb-6 text-2xl font-bold text-slate-800">
                        Create Listing
                      </h2>
                      <!-- dd -->
                        <form @submit.prevent="submitForm">
                            <ul>
                              <li class="flex items-center border-b border-slate-200 py-3">
                                <div class="grow">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="image">
                                        Image:
                                      </label>
                                      <input @change="handleImageChange" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="image" type="file" />              
                                </div>
                              </li>
                              <li class="flex items-center border-b border-slate-200 py-3">
                                <div class="grow">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
                                        Name:
                                      </label>
                                      <input v-model="form.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Item Name">
                                </div>
                              </li>
                              <li class="flex items-center border-b border-slate-200 py-3">
                                <div class="grow">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="price">
                                        Price:
                                      </label>
                                      <input v-model="form.price" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="price" type="text" placeholder="Price">
                                </div>
                              </li>
                              <li class="mb-4 flex items-center border-b border-slate-200 py-3">
                                <div class="grow">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="status">
                                        Status:
                                      </label>
                                      <input v-model="form.status" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="status" type="text" placeholder="Available">
                                </div>
                              </li>
                              <button class="p-1 w-24 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
                            </ul>
                        </form>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </template>
    
<script setup lang="ts">
import { ref } from 'vue'
import { useListingStore, type Listing } from '@/stores/listingStore'
import { storeToRefs } from 'pinia'
import axios from 'axios';
import Swal from 'sweetalert2'

const listingStore = useListingStore()
const showUpdateModal = ref(false)
const { listings, loading, totalCount } = storeToRefs(listingStore)
const name = ref('')
const email = ref('')
const user_id = ref('')
const form = ref<Listing>({
    id: 0,
    image: null,
    name: '',
    price: '',
    status: '',
})

const formUpdate = ref<Listing>({
  id: 0,
  image: null,
  name: '',
  price: '',
  status: '',
})

const resetForm = () => {
    form.value.image = null;
    form.value.name = '';
    form.value.price = '';
    form.value.status = ''; 
}

const getUser = async () => {
  try {
    const response = await axios.get('/api/user')
    const { name: userName, email: userEmail, id: userId} = response.data
    name.value = userName,
    email.value = userEmail,
    user_id.value = userId
    console.log('User details', response.data)
  } catch (error) {
    console.error('Error getting User', error)
  }
}

getUser()
listingStore.getListings()

const getImageUrl = (image: string | File | null | undefined): string => {
  if (!image) {
    return ''; 
  }

  if (typeof image === 'string') {
    return image; 
  }

  return URL.createObjectURL(image);
};

const handleImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  form.value.image = (target.files && target.files[0]) || null;
};

const configureSwal = () => {
    return Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
};

const submitForm = async () => {
  if (form.value.name.length > 0) {
    const formData = new FormData();
    formData.append('image', form.value.image as File);
    formData.append('name', form.value.name);
    formData.append('price', form.value.price);
    formData.append('status', form.value.status);

    await listingStore.addListing(formData).then(() => {
      const Toast = configureSwal()
      Toast.fire({
        icon: 'success',
        title: 'Listing created successfully'
      })
    });
    resetForm();
  }
};

const openUpdateModal = (listing: Listing) => {
  formUpdate.value = { ...listing }
  showUpdateModal.value = true
}

const updateForm = async () => {
  try {
    await listingStore.updateListing(formUpdate.value.id, formUpdate.value).then(() => {
      const Toast = configureSwal()
        Toast.fire({
          icon: 'success',
          title: 'Listing updated successfully'
        })
    })
    showUpdateModal.value = false
  } catch (error) {
    console.error('Error updating listing', error)
  }
}

const deleteListing = (id: number) => {
  listingStore.deleteListing(id).then(() => {
    const Toast = configureSwal()
    Toast.fire({
      icon: 'success',
      title: 'Listing deleted successfully'
    })
  })
}
</script>