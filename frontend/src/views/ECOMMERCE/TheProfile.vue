<template>
    <div class="flex h-screen overflow-hidden">
        <ECMSideBar />
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
            <TheProfiles />
        </div>
    </div>
</template>

<script setup lang="ts">
import ECMSideBar from '@/components/ECOMMERCE/ECMSideBar.vue'
import TheProfiles from '@/components/ECOMMERCE/TheProfiles.vue'
</script>