<template>
    <div class="bg-white shadow-md rounded px-8 mt-12 pt-6 pb-8 mb-4 flex flex-col my-2">
      <div class="mb-6">
        <h1 class="text-2xl">Fill up the form to enroll new faculty.</h1>
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
    <hr />
    <div class="pt-2">    
        <div class="table w-full p-2">
            <h1 class="pb-3 text-2xl">All Faculty.</h1>
            <table class="w-full border">
                <thead>
                    <tr class="bg-gray-50 border-b">
                        <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                            <div class="flex items-center justify-center">
                                ID
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
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
                                Email
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
                                Action
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">1</td>
                        <td class="p-2 border-r">John Doe</td>
                        <td class="p-2 border-r">john@gmail.com</td>
                        <td class="p-2 border-r">+63 123 456 7890</td>
                        <td>
                            <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                            <a href="#" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">2</td>
                        <td class="p-2 border-r">Adam Smith</td>
                        <td class="p-2 border-r">adam@gmail.com</td>
                        <td class="p-2 border-r">+63 123 456 7890</td>
                        <td>
                            <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                            <a href="#" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">3</td>
                        <td class="p-2 border-r">Jean Doe</td>
                        <td class="p-2 border-r">jean@gmail.com</td>
                        <td class="p-2 border-r">+63 123 456 7890</td>
                        <td>
                            <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                            <a href="#" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">3</td>
                        <td class="p-2 border-r">Jean Doe</td>
                        <td class="p-2 border-r">jean@gmail.com</td>
                        <td class="p-2 border-r">+63 123 456 7890</td>
                        <td>
                            <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                            <a href="#" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                        </td>
                    </tr>
                    <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                        <td class="p-2 border-r">3</td>
                        <td class="p-2 border-r">Jean Doe</td>
                        <td class="p-2 border-r">jean@gmail.com</td>
                        <td class="p-2 border-r">+63 123 456 7890</td>
                        <td>
                            <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                            <a href="#" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </template>
    
    <script setup lang="ts">
    
    </script>