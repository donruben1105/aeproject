<template>
<div class="bg-white shadow-md rounded px-8 mt-12 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div class="mb-6">
    <h1 class="text-2xl">Fill up the form to add new officials.</h1>
  </div>
  <form @submit.prevent="submitForm">
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
          Name
        </label>
        <input v-model="form.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Jane Doe">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
          Email Address
        </label>
        <input v-model="form.email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="email" type="text" placeholder="Jane@doe.com">
      </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-full px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="address">
          Compete Address
        </label>
        <input v-model="form.address" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="address" type="address" placeholder="Complete address">
      </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="gender">
          Gender
        </label>
        <input v-model="form.gender" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="gender" type="text" placeholder="Male or Female">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="contact_numer">
          Contact Number
        </label>
        <input v-model="form.contact_number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="contact_numer" type="text" placeholder="+63 123 456 7890">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="dob">
          Date of Birth
        </label>
        <input v-model="form.dob" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="dob" type="text" placeholder="1/10/2024">
      </div>
    </div>
    <div class="-mx-3 md:flex mb-4">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="position">
          Position
        </label>
        <input v-model="form.position" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="position" type="text" placeholder="Position">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="startOfTerm">
          Start of Term
        </label>
        <input v-model="form.startOfTerm" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="startOfTerm" type="text" placeholder="Start of Term">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="endOfTerm">
          End of Term
        </label>
        <input v-model="form.endOfTerm" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="endOfTerm" type="text" placeholder="End of Term">
      </div>
    </div>
    <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">Submit</button>
  </form>  
</div>

<hr />
      <div class="pt-2">    
          <div class="table w-full p-2">
              <h1 class="pb-3 text-2xl">All Official.</h1>
              <h2 class="font-semibold text-slate-800">Total Official <span class="text-slate-500 text-xl">{{ totalCount }}</span></h2>
              <table class="w-full border">
                  <thead>
                      <tr class="bg-gray-50 border-b">
                          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                              <div class="flex items-center justify-center">
                                  Name
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                  </svg>
                              </div>
                          </th>

                          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Contact Number
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>

                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                          <div class="flex items-center justify-center">
                              Start of Term
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                              </svg>
                          </div>
                      </th>

                      <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            End of Term
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                          
                          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                              <div class="flex items-center justify-center">
                                  Action
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                  </svg>
                              </div>
                          </th>
                      </tr>
                  </thead>
                  <div v-if="loading">
                    <div class="flex items-center justify-center">
                      <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                      </div>
                    </div>
                  </div>
                  <tbody v-else>
                      <tr v-for="official in officials" :key="official.id" class="bg-gray-100 text-center border-b text-sm text-gray-600">
                          <td class="p-2 border-r">{{ official.name }}</td>
                          <td class="p-2 border-r">{{ official.contact_number }}</td>
                          <td class="p-2 border-r">{{ official.startOfTerm }}</td>
                          <td class="p-2 border-r">{{ official.endOfTerm }}</td>
                          <td>
                            <button @click="openUpdateModal(official)" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</button>
                            <div v-if="showUpdateModal" class="fixed inset-0 flex items-center justify-center z-50">
                                <div class="w-4/12">
                                    <div class="modal-content bg-white p-6 rounded-lg shadow-lg relative">
                                  <div class="mb-6">
                                    <h1 class="text-2xl">Fill up the form to enroll new students.</h1>
                                  </div>
                                  <button @click="showUpdateModal = false" class="close-button absolute top-0 right-0 p-2 text-black rounded-sm px-3 py-1 focus:outline-none text-2xl">×</button>
                                  <form @submit.prevent="updateForm">
                                    <div class="-mx-3 md:flex mb-2">
                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="name">
                                          Name
                                        </label>
                                        <input v-model="formUpdate.name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="name" type="text" placeholder="Jane">
                                      </div>
                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
                                          Email
                                        </label>
                                        <input v-model="formUpdate.email" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="email" type="text" placeholder="Jane">
                                      </div>
                                    </div> 

                                    <div class="-mx-3 md:flex mb-2">
                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="address">
                                          Address
                                        </label>
                                        <input v-model="formUpdate.address" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="address" type="text" placeholder="Jane">
                                      </div>

                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="contact_number">
                                          Contact Number
                                        </label>
                                        <input v-model="formUpdate.contact_number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="contact_number" type="text" placeholder="Jane">
                                      </div>
                                    </div>

                                    <div class="-mx-3 md:flex mb-2">
                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="startOfTerm">
                                          Start of Term
                                        </label>
                                        <input v-model="formUpdate.startOfTerm" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="startOfTerm" type="text" placeholder="Jane">
                                      </div>

                                      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="endOfTerm">
                                          End of Term
                                        </label>
                                        <input v-model="formUpdate.endOfTerm" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="endOfTerm" type="text" placeholder="Jane">
                                      </div>
                                    </div>
                                    <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">update</button>
                                  </form>  
                                </div>
                                </div>
                            </div>
                            <button @click="deleteOfficial(official.id)" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useOfficialStore } from '@/stores/officialStore';
import type { Official } from '@/stores/officialStore';
import { storeToRefs } from 'pinia'
import Swal from 'sweetalert2'

const officialStore = useOfficialStore()
const { officials, totalCount, loading } = storeToRefs(officialStore)
const showUpdateModal = ref(false)
const form = ref<Official>({
  id: 0,
  name: '',
  gender: '',
  contact_number: '',
  email: '',
  dob: '',
  address: '',
  position: '',
  startOfTerm: '',
  endOfTerm: '',
})

const formUpdate = ref<Official>({
  id: 0,
  name: '',
  gender: '',
  contact_number: '',
  email: '',
  dob: '',
  address: '',
  position: '',
  startOfTerm: '',
  endOfTerm: '',
})

const resetForm = () => {
  form.value.name = '';
  form.value.gender = '';
  form.value.contact_number = '';
  form.value.email = '';
  form.value.dob = '';
  form.value.address = '';
  form.value.position = '';
  form.value.startOfTerm = '';
  form.value.endOfTerm = '';
}

officialStore.getOfficials()

const configureSwal = () => {
    return Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast: { onmouseenter: any; onmouseleave: any; }) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
    });
};

const submitForm = () => {
  if (form.value.name.length > 0) {
    officialStore.addOfficial(form.value).then(() => {
      const Toast = configureSwal()
      Toast.fire({
        icon: 'success',
        title: 'Official created successfully'
      })
    })
    resetForm();
  }
}

const openUpdateModal = (official: Official) => {
  formUpdate.value = { ...official }
  showUpdateModal.value = true
}

const updateForm = () => {
  try {
    officialStore.updateOfficial(formUpdate.value.id, formUpdate.value).then(()=> {
      const Toast = configureSwal()
      Toast.fire({
        icon: 'success',
        title: 'Official updated successfully'
      })
    })
    showUpdateModal.value = false
  } catch (error) {
    console.error('Error updating official', error)
  }
}

const deleteOfficial = (id: number) => {
  officialStore.deleteOfficial(id).then(() => {
    const Toast = configureSwal()
    Toast.fire({
      icon: 'success',
      title: 'Official deleted successfully'
    })
  })
}
</script>