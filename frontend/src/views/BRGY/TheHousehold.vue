<template>
    <div class="flex h-screen overflow-hidden">
        <BRGYSideBar />
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
            <TheHouseholds />
        </div>
    </div>
</template>

<script setup lang="ts">
import BRGYSideBar from '@/components/BRGY/BRGYSideBar.vue'
import TheHouseholds from '@/components/BRGY/TheHouseholds.vue'
</script>