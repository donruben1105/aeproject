<template>
<div class="bg-white shadow-md rounded px-8 mt-12 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div class="mb-6">
    <h1 class="text-2xl">Fill up the form to enroll new students.</h1>
  </div>
  <form @submit.prevent="submitForm">
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="first_name">
          First Name
        </label>
        <input v-model="form.first_name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="first_name" type="text" placeholder="Jane">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="last_name">
          Last Name
        </label>
        <input v-model="form.last_name" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="last_name" type="text" placeholder="Doe">
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
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="term">
          Term
        </label>
        <input v-model="form.term" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="term" type="text" placeholder="kinder to k12">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="section">
          Section
        </label>
        <input v-model="form.section" class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="section" type="text" placeholder="Section">
      </div>
    </div>
    <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600" type="submit">Submit</button>
  </form>  
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useEnrollmentStore } from '@/stores/enrollmentStore';
import type { Enrollment } from '@/stores/enrollmentStore';

const enrollmentStore = useEnrollmentStore()
const form = ref<Enrollment>({
  id: 0,
  first_name: '',
  last_name: '',
  gender: '',
  contact_number: '',
  email: '',
  dob: '',
  address: '',
  term: '',
  section: '',
  status: '',
})

const resetForm = () => {
  form.value.first_name = '';
  form.value.last_name = '';
  form.value.gender = '';
  form.value.contact_number = '';
  form.value.email = '';
  form.value.dob = '';
  form.value.address = '';
  form.value.term = '';
  form.value.section = '';
}

const submitForm = () => {
  if (form.value.first_name.length > 0) {
    enrollmentStore.addEnrollment(form.value)
    resetForm();
  }
}
</script>