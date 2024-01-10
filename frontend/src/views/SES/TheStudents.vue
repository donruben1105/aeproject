<template>
    <div class="flex h-screen overflow-hidden">
        <SideBar />
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-auto">
            <TheStudent />
        </div>
    </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/SES/SideBar.vue'
import TheStudent from '@/components/SES/TheStudent.vue'
</script>