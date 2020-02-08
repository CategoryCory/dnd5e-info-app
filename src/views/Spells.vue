<template>
    <div class="container">
        <h2 class="mt-4 mb-4">DND 5th Edition Spell Guide</h2>
        <div class="mb-5">
            <Selector @selectedItem="onSpellSelected" selectType="spells" />
        </div>
    </div>
</template>

<script>
import Selector from "@/components/Selector.vue";
export default {
    name: "spells",
    components: {
        Selector
    },
    data() {
        return {
            selectedSpell: ""
        };
    },
    methods: {
        onSpellSelected(selectedSpell) {
            this.selectedSpell = selectedSpell;
        }
    }
};
</script>