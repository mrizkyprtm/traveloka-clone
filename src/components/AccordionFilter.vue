<script setup>
import {
  Accordion,
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
  Checkbox,
} from "primevue";

const checkboxs = [
  { label: "7+ Nyaman", value: "7.0" },
  { label: "8+ Mengesankan", value: "8.0" },
  { label: "9+ Luar Biasa", value: "9.0" },
];

const { filter } = defineProps({
  filter: Object,
});
</script>
<template>
  <div class="card flex justify-center accordion-comp max-w-[270px] min-w-[260px]">
    <Accordion class="text-nowrap w-full" value="0">
      <AccordionPanel value="0">
        <AccordionHeader class="font-bold">Rating</AccordionHeader>
        <AccordionContent>
          <template v-for="item in checkboxs" :key="item.label">
            <div class="flex gap-2 items-center mb-1">
              <Checkbox
                v-model="filter.rating"
                :value="item.value"
                :inputId="item.label" />
              <label :for="item.label" class="text-sm">
                {{ item.label }}
              </label>
            </div>
          </template>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>
