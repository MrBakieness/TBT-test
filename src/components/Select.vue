<template>
    <select
        v-model="localId"
        aria-label="Select a team member"
        class="w-full appearance-none rounded-2xl border border-white/80 bg-white/75 px-4 py-3.5 pr-10 font-sans text-sm font-bold text-text-dark shadow-[0_4px_24px_rgba(80,125,188,0.10)] backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
    >
        <option
            v-for="contact in options"
            :key="contact.id"
            :value="contact.id"
        >
            {{ contact.name }} · {{ contact.department }}
        </option>
    </select>
    <div
        class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
    >
        <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#507DBC"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    </div>
</template>

<script setup lang="ts">
import { type Contact } from "@data/Contact";
import { ref, watch } from "vue";

const props = defineProps<{
    id: string;
    options: Contact[];
}>();

const emit = defineEmits<{
    change: [id: string];
}>();

const localId = ref(props.id);

watch(localId, (val) => emit("change", val));
</script>
