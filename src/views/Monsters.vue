<template>
    <div class="container">
        <h2 class="mt-4 mb-4">DND 5th Edition Monster Guide</h2>
        <div class="mb-5">
            <Selector @selectedItem="onMonsterSelected" selectType="monsters" />
        </div>
        <MonsterData :monster="selectedMonster" />
    </div>
</template>

<script>
// @ is an alias to /src
import Selector from "@/components/Selector.vue";
import MonsterData from "@/components/MonsterData.vue";

export default {
    name: "monsters",
    components: {
        Selector,
        MonsterData
    },
    data() {
        return {
            selectedMonster: ""
        };
    },
    methods: {
        onMonsterSelected(selectedMonster) {
            this.selectedMonster = selectedMonster;
        }
    }
};
</script>
