<template>
    <div class="bg-white shadow-md rounded px-8 mt-12 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div class="mb-6">
          <h1 class="text-2xl">Fill up the form to add new section.</h1>
        </div>
        <form @submit.prevent="submitForm">
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="sectionName">
                Section
              </label>
              <input v-model="form.title" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="sectionName" type="text" placeholder="GENERAL ACADEMIC">
            </div>
          </div>
          <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600">Submit</button>
        </form>  
      </div>
      <hr />
      <div class="pt-2">    
          <div class="table w-full p-2">
              <h1 class="pb-3 text-2xl">All Section.</h1>
              <h2 class="font-semibold text-slate-800">Total Section <span class="text-slate-500 text-xl">{{ totalCount }}</span></h2>
              <table class="w-full border">
                  <thead>
                      <tr class="bg-gray-50 border-b">
                          <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                              <div class="flex items-center justify-center">
                                  Section
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
                      <tr v-for="section in sections" :key="section.id" class="bg-gray-100 text-center border-b text-sm text-gray-600">
                          <td class="p-2 border-r">{{ section.title }}</td>
                          <td>
                            <button @click="openUpdateModal(section)" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</button>
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
                                        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="title">
                                          Section
                                        </label>
                                        <input v-model="formUpdate.title" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="title" type="text" placeholder="Jane">
                                      </div>
                                    </div> 
                                    <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">update</button>
                                  </form>  
                                </div>
                                </div>
                            </div>
                            <button @click="deleteSection(section.id)" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSectionStore, type Section} from '@/stores/sectionStore'
import { storeToRefs } from 'pinia'

const sectionStore = useSectionStore()
const { sections, loading, totalCount } = storeToRefs(sectionStore)
const showUpdateModal = ref(false)
const form = ref<Section>({
    id: 0,
    title: '',
})

const formUpdate = ref<Section>({
    id: 0,
    title: '',
})

const resetForm = () => {
    form.value.title = '';
}

sectionStore.getSections()

const submitForm = () => {
    if (form.value.title.length > 0) {
        sectionStore.addSection(form.value)
        resetForm();
    }
}

const openUpdateModal = (section: Section) => {
    formUpdate.value = { ...section }
    showUpdateModal.value = true
}

const updateForm = () => {
    try {
        sectionStore.updateSection(formUpdate.value.id, formUpdate.value)
        showUpdateModal.value = false
    } catch (error) {
        console.error('Error updating section', error)
    }
}

const deleteSection = (id: number) => {
    sectionStore.deleteSection(id)
}
</script>