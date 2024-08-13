<script setup>
</script>

<template>
<section class="bg-slate dark:bg-gray-900 w-96">
  <div class="bg-blue-300 py-8 px-4 mx-auto  lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">To do</h2>
      <div class="col-span-2 border-t pt-4">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                  <h2 type="text" class="">Le titre</h2>
              </div><br>
          <div class="grid gap-4 grid-cols-3 gap-6 border-t mb-5 pt-4">
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority</label>
                  <h2 type="text" class="">Urgent</h2>
              </div>
              <div class="w-full">
                  <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start date</label>
                  <h2 type="text" class="">To day</h2>
              </div>

              <div>
                  <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End date</label>
                  <div class="w-full">
                  <h2 type="text" class="">To day</h2>
              </div>              </div> 

          </div>
          <div class="sm:col-span-2 border-t w-auto my-2 pt-4">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <h2 class=" text-gray-900">Describe all here</h2>
              </div>
          <button type="button" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Add task
          </button>
  </div>
</section>

</template>
