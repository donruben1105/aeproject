<template>
<div class="bg-white shadow-md rounded px-8 mt-12 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div class="mb-6">
    <h1 class="text-2xl">Fill up the form to enroll new students.</h1>
  </div>
  <form>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="firstName">
          First Name
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="firstName" type="text" placeholder="Jane">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="lastName">
          Last Name
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="lastName" type="text" placeholder="Doe">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="email">
          Email Address
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="email" type="text" placeholder="Jane@doe.com">
      </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-full px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="address">
          Compete Address
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="address" type="address" placeholder="Complete address">
      </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="gender">
          Gender
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="gender" type="text" placeholder="Male or Female">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="phone">
          Contact Number
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="phone" type="text" placeholder="+63 123 456 7890">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="dob">
          Date of Birth
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="dob" type="text" placeholder="1/10/2024">
      </div>
    </div>
    <div class="-mx-3 md:flex mb-4">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="term">
          Term
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="term" type="text" placeholder="kinder to k12">
      </div>
      <div class="md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="section">
          Section
        </label>
        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="section" type="text" placeholder="Section">
      </div>
    </div>
    <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600">Submit</button>
  </form>  
</div>
</template>

<script setup lang="ts">

</script>