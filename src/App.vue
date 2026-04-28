<script setup lang="ts">
import { computed, ref } from "vue";
import { contacts } from "@data/Contact";
import Select from "./components/Select.vue";
import ContactList from "./components/ContactList.vue";
import ContactCard from "./components/ContactCard.vue";

const selectedContactId = ref(contacts[0].id);

const selectedContact = computed(() => {
    return (
        contacts.find((contact) => contact.id === selectedContactId.value) ??
        contacts[0]
    );
});
</script>

<template>
    <main class="min-h-screen px-5 py-8 sm:px-8 lg:px-10">
        <section
            class="mx-auto grid w-full max-w-6xl items-start gap-6 lg:min-h-[calc(100vh-4rem)] lg:items-center lg:grid-cols-[1fr_1.8fr]"
            aria-labelledby="widget-title"
        >
            <!-- Selector column -->
            <div>
                <!-- Mobile: dropdown (hidden at lg and above) -->
                <div class="lg:hidden">
                    <div class="relative">
                        <Select
                            :id="selectedContactId"
                            :options="contacts"
                            @change="selectedContactId = $event"
                        />
                    </div>
                </div>

                <!-- Desktop: scrollable contact list (hidden below lg) -->
                <div class="hidden flex-col gap-5 lg:flex">
                    <ContactList
                        :contacts="contacts"
                        :selected-id="selectedContactId"
                        @change="selectedContactId = $event"
                    />
                </div>
            </div>

            <!-- Detail card column -->
            <Transition name="card" mode="out-in">
                <ContactCard
                    :key="selectedContact.id"
                    :contact="selectedContact"
                />
            </Transition>
        </section>
    </main>
</template>
