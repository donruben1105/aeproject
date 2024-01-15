<template>
<div class="bg-slate-50 flex justify-center items-center h-screen">
    <div class="m-4 relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="hover:animate-bounce relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src="../../public/img/SES.png"
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            School Enrollment System
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            The purpose of this web app is to create student numbers and enroll students.
          </p>
        </div>
        <div class="p-6 pt-0">
          <router-link to="/enrollment" custom v-slot="{ href, navigate }">
              <a :href="href" @click="navigate" class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <span class="text-sm font-medium">Enrollment System</span>
              </a>
          </router-link>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
</script>