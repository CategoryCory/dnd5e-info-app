<template>
    <div class="container">
        <h2 class="mt-4 mb-4">DND 5th Edition Monster Guide</h2>
        <div class="mb-5">
            <MonsterSelector @selectedMonster="onMonsterSelected" />
        </div>
        <MonsterData :monster="selectedMonster" />
    </div>
</template>

<script>
// @ is an alias to /src
import MonsterSelector from "@/components/MonsterSelector.vue";
import MonsterData from "@/components/MonsterData.vue";

export default {
    name: "home",
    components: {
        MonsterSelector,
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
