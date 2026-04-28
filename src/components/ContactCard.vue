<template>
    <article
        class="overflow-hidden rounded-2xl border border-primary-light shadow-[0_24px_64px_rgba(27,60,110,0.15)]"
        aria-live="polite"
    >
        <div class="grid md:grid-cols-[5fr_7fr]">
            <!-- Left: Profile panel -->
            <div class="bg-primary relative overflow-hidden p-8 sm:p-10">
                <div class="relative z-10">
                    <!-- Avatar -->
                    <div
                        class="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-2xl font-black text-white ring-1 ring-white/25"
                    >
                        {{ contact.initials }}
                    </div>

                    <h2
                        class="mt-4 text-3xl font-black leading-snug text-white"
                    >
                        {{ contact.name }}
                    </h2>
                    <div class="flex gap-2 md:flex-col">
                        <p
                            class="text-sm font-semibold leading-relaxed text-white/70 md:mt-2"
                        >
                            {{ contact.role }}
                        </p>
                        <p
                            class="text-sm font-semibold leading-relaxed text-white/70 md:hidden"
                        >
                            -
                        </p>
                        <p
                            class="text-sm font-semibold leading-relaxed text-white/70"
                        >
                            {{ contact.department }}
                        </p>
                    </div>

                    <!-- Quick action buttons -->
                    <div
                        class="absolute right-0 top-0 flex flex-wrap gap-2 md:relative md:mt-8"
                    >
                        <a
                            :href="emailLink"
                            class="flex items-center gap-1.5 rounded-xl bg-white/15 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/25"
                        >
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="16"
                                    rx="2"
                                />
                                <path
                                    d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                                />
                            </svg>
                            Email
                        </a>
                        <a
                            :href="phoneLink"
                            class="flex items-center gap-1.5 rounded-xl bg-white/15 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/25"
                        >
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.18-1.18a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                />
                            </svg>
                            Call
                        </a>
                    </div>
                </div>
            </div>

            <!-- Right: Contact details -->
            <div class="bg-white p-8 sm:p-10">
                <p
                    class="mb-7 text-[10px] font-black uppercase tracking-[0.2em] text-primary"
                >
                    Contact Details
                </p>

                <div class="space-y-6">
                    <!-- Email -->
                    <div class="flex items-start gap-4">
                        <div
                            class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#507DBC"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="16"
                                    rx="2"
                                />
                                <path
                                    d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                                />
                            </svg>
                        </div>
                        <div class="min-w-0">
                            <div
                                class="text-[10px] font-black uppercase tracking-[0.15em] text-grey-light"
                            >
                                Email
                            </div>
                            <div class="mt-1">
                                <a
                                    :href="emailLink"
                                    class="block truncate text-sm font-bold text-primary underline-offset-4 transition hover:text-primary-dark hover:underline"
                                    >{{ contact.email }}</a
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Phone -->
                    <div class="flex items-start gap-4">
                        <div
                            class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#507DBC"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.09 6.09l1.18-1.18a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                />
                            </svg>
                        </div>
                        <div>
                            <div
                                class="text-[10px] font-black uppercase tracking-[0.15em] text-grey-light"
                            >
                                Phone
                            </div>
                            <div class="mt-1">
                                <a
                                    :href="phoneLink"
                                    class="text-sm font-bold text-primary underline-offset-4 transition hover:text-primary-dark hover:underline"
                                    >{{ contact.phone }}</a
                                >
                            </div>
                        </div>
                    </div>

                    <!-- Address -->
                    <div class="flex items-start gap-4">
                        <div
                            class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#507DBC"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                            >
                                <path
                                    d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
                                />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <div
                                class="text-[10px] font-black uppercase tracking-[0.15em] text-grey-light"
                            >
                                Address
                            </div>
                            <div
                                class="mt-1 text-sm font-semibold leading-7 text-primary-darker"
                            >
                                {{ contact.address }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { type Contact } from "@data/Contact";

const props = defineProps<{
    contact: Contact;
}>();

const emailLink = computed(() => `mailto:${props.contact.email}`);
const phoneLink = computed(
    () => `tel:${props.contact.phone.replace(/[^\d+]/g, "")}`,
);
</script>
