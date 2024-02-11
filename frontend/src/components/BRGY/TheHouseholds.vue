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
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="gender">
              Gender
            </label>
            <input v-model="form.gender" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="gender" type="text" placeholder="Male or Female">
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="birthdate">
              Birth Date
            </label>
            <input v-model="form.birthdate" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="birthdate" type="birthdate" placeholder="Birth Date">
          </div>
        </div>
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="birth_place">
              Birth Place
            </label>
            <input v-model="form.birth_place" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="birth_place" type="text" placeholder="Birth Place">
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="household_number">
              Household Number
            </label>
            <input v-model="form.household_number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="household_number" type="text" placeholder="Household Number">
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="blood_type">
              Blood Type
            </label>
            <input v-model="form.blood_type" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="blood_type" type="text" placeholder="Blood Type">
          </div>
        </div>
        <div class="-mx-3 md:flex mb-4">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="civil_status">
              Civil Status
            </label>
            <input v-model="form.civil_status" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="civil_status" type="text" placeholder="Civil Status">
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="length_of_stay">
              Length of Stay
            </label>
            <input v-model="form.length_of_stay" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="length_of_stay" type="text" placeholder="Length of Stay">
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="occupation">
              Occupation
            </label>
            <input v-model="form.occupation" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="occupation" type="text" placeholder="Occupation">
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="monthly_income">
              Monthly Income
            </label>
            <input v-model="form.monthly_income" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="monthly_income" type="text" placeholder="Monthly Income">
          </div>
        </div>
        <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">Submit</button>
      </form>  
    </div>
    
    <hr />
          <div class="pt-2">    
              <div class="table w-full p-2">
                  <h1 class="pb-3 text-2xl">All Household.</h1>
                  <h2 class="font-semibold text-slate-800">Total Household <span class="text-slate-500 text-xl">{{ totalCount }}</span></h2>
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
                                    Gender
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
    
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                              <div class="flex items-center justify-center">
                                  DOB
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                  </svg>
                              </div>
                          </th>
    
                          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                Length of Stay
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
                          <tr v-for="household in households" :key="household.id" class="bg-gray-100 text-center border-b text-sm text-gray-600">
                              <td class="p-2 border-r">{{ household.name }}</td>
                              <td class="p-2 border-r">{{ household.gender }}</td>
                              <td class="p-2 border-r">{{ household.birthdate }}</td>
                              <td class="p-2 border-r">{{ household.length_of_stay }}</td>
                              <td>
                                <button @click="openUpdateModal(household)" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</button>
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
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="gender">
                                              Gender
                                            </label>
                                            <input v-model="formUpdate.gender" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="gender" type="text" placeholder="Male or Female">
                                          </div>
                                        </div> 
    
                                        <div class="-mx-3 md:flex mb-2">
                                          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="birthdate">
                                              Birth Date
                                            </label>
                                            <input v-model="formUpdate.birthdate" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="birthdate" type="text" placeholder="Birth Date">
                                          </div>
    
                                          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="birth_place">
                                              Place of Birth
                                            </label>
                                            <input v-model="formUpdate.birth_place" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="birth_place" type="text" placeholder="Place of Birth">
                                          </div>
                                        </div>
    
                                        <div class="-mx-3 md:flex mb-2">
                                          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="blood_type">
                                              Blood Type
                                            </label>
                                            <input v-model="formUpdate.blood_type" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="blood_type" type="text" placeholder="Blood Type">
                                          </div>
    
                                          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="civil_status">
                                              Civil Status
                                            </label>
                                            <input v-model="formUpdate.civil_status" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="civil_status" type="text" placeholder="Civil Status">
                                          </div>
                                        </div>

                                        <div class="-mx-3 md:flex mb-2">
                                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="length_of_stay">
                                                Length of Stay
                                              </label>
                                              <input v-model="formUpdate.length_of_stay" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="length_of_stay" type="text" placeholder="Length of Stay">
                                            </div>
      
                                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="occupation">
                                                Occupation
                                              </label>
                                              <input v-model="formUpdate.occupation" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="occupation" type="text" placeholder="Occupation">
                                            </div>
                                          </div>

                                          <div class="-mx-3 md:flex mb-2">
                                              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="monthly_income">
                                                  Monthly Income
                                                </label>
                                                <input v-model="formUpdate.monthly_income" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="monthly_income" type="text" placeholder="Monthly Income">
                                              </div>

                                              <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="household_number">
                                                  Household Number
                                                </label>
                                                <input v-model="formUpdate.household_number" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="household_number" type="text" placeholder="Household Number">
                                              </div>
                                          </div>

                                        <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">update</button>
                                      </form>  
                                    </div>
                                    </div>
                                </div>
                                <button @click="deleteHousehold(household.id)" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
    </template>
    
    <script setup lang="ts">
    import { ref } from 'vue';
    import { useHouseholdStore } from '@/stores/householdStore';
    import type { HouseHold } from '@/stores/householdStore';
    import { storeToRefs } from 'pinia'
    import Swal from 'sweetalert2'
    
    const householdStore = useHouseholdStore()
    const { households, totalCount, loading } = storeToRefs(householdStore)
    const showUpdateModal = ref(false)
    const form = ref<HouseHold>({
      id: 0,
      name: '',
      gender: '',
      birthdate: '',
      birth_place: '',
      household_number: '',
      blood_type: '',
      civil_status: '',
      length_of_stay: '',
      occupation: '',
      monthly_income: '',
    })
    
    const formUpdate = ref<HouseHold>({
      id: 0,
      name: '',
      gender: '',
      birthdate: '',
      birth_place: '',
      household_number: '',
      blood_type: '',
      civil_status: '',
      length_of_stay: '',
      occupation: '',
      monthly_income: '',
    })
    
    const resetForm = () => {
      form.value.name = '';
      form.value.gender = '';
      form.value.birthdate = '';
      form.value.birth_place = '';
      form.value.household_number = '';
      form.value.blood_type = '';
      form.value.civil_status = '';
      form.value.length_of_stay = '';
      form.value.occupation = '';
      form.value.monthly_income = '';
    }
    
    householdStore.getHouseholds()
    
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
        householdStore.addHousehold(form.value).then(() => {
          const Toast = configureSwal()
          Toast.fire({
            icon: 'success',
            title: 'Official created successfully'
          })
        })
        resetForm();
      }
    }
    
    const openUpdateModal = (household: HouseHold) => {
      formUpdate.value = { ...household }
      showUpdateModal.value = true
    }
    
    const updateForm = () => {
      try {
        householdStore.updateHousehold(formUpdate.value.id, formUpdate.value).then(()=> {
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
    
    const deleteHousehold = (id: number) => {
        householdStore.deleteHousehold(id).then(() => {
        const Toast = configureSwal()
        Toast.fire({
          icon: 'success',
          title: 'Official deleted successfully'
        })
      })
    }
    </script>