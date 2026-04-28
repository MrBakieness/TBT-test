<template>
    <div
        class="contact-list max-h-80 space-y-1 overflow-y-auto rounded-2xl border border-white/80 bg-white/75 p-2 shadow-[0_4px_24px_rgba(80,125,188,0.10)] backdrop-blur-sm"
        aria-label="Staff contact selector"
    >
        <button
            v-for="contact in contacts"
            :key="contact.id"
            type="button"
            class="group flex w-full items-center gap-3.5 rounded-xl px-3.5 py-3 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            :class="
                selectedId === contact.id
                    ? 'bg-primary shadow-[0_4px_14px_rgba(80,125,188,0.35)]'
                    : 'hover:bg-primary/5'
            "
            :aria-pressed="selectedId === contact.id"
            @click="emit('change', contact.id)"
        >
            <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-black transition-all duration-200"
                :class="
                    selectedId === contact.id
                        ? 'bg-white/20 text-white'
                        : 'bg-primary/10 text-primary'
                "
                >{{ contact.initials }}</span
            >

            <span class="min-w-0 flex-1">
                <span
                    class="block truncate text-sm font-extrabold transition-colors duration-200"
                    :class="
                        selectedId === contact.id
                            ? 'text-white'
                            : 'text-text-dark'
                    "
                    >{{ contact.name }}</span
                >
                <span
                    class="block truncate text-xs font-semibold transition-colors duration-200"
                    :class="
                        selectedId === contact.id
                            ? 'text-white/70'
                            : 'text-grey-dark'
                    "
                    >{{ contact.role }}</span
                >
            </span>

            <span
                class="shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide transition-all duration-200"
                :class="
                    selectedId === contact.id
                        ? 'bg-white/20 text-white/90'
                        : 'bg-primary/10 text-primary'
                "
                >{{ contact.department }}</span
            >
        </button>
    </div>
</template>

<script setup lang="ts">
import { type Contact } from "@data/Contact";

defineProps<{
    contacts: Contact[];
    selectedId: string;
}>();

const emit = defineEmits<{
    change: [id: string];
}>();
</script>
