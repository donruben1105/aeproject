<template>
    <div class="bg-white shadow-md rounded px-8 mt-12 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div class="mb-6">
          <h1 class="text-2xl">Fill up the form to add new terms.</h1>
        </div>
        <form>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="termName">
                Term
              </label>
              <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="termName" type="text" placeholder="Year Secton">
            </div>
          </div>
          <button class="bg-blue-500 p-2 text-white rounded-sm hover:bg-blue-600">Submit</button>
        </form>  
      </div>
</template>

<script setup lang="ts">
</script>