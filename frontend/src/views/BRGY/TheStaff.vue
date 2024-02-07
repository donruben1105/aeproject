<template>
    <div class="flex h-screen overflow-hidden">
        <BRGYSideBar />
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
            <TheStaffs />
        </div>
    </div>
</template>

<script setup lang="ts">
import BRGYSideBar from '@/components/BRGY/BRGYSideBar.vue'
import TheStaffs from '@/components/BRGY/TheStaffs.vue'
</script>