<template>
    <div class="w-75 mx-auto">
        <v-select
            v-model="selectedMonster"
            label="name"
            :options="monsterData"
            :reduce="monster => monster.index"
            @input="monsterChanged"
        ></v-select>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "monsterselector",
    data() {
        return {
            monsterCount: 0,
            monsterData: {},
            selectedMonster: "",
            errors: []
        };
    },
    async created() {
        try {
            const response = await axios.get(
                "http://www.dnd5eapi.co/api/monsters"
            );
            this.monsterCount = response.data.count;
            this.monsterData = response.data.results;
        } catch (error) {
            this.errors.push(error);
        }
    },
    methods: {
        monsterChanged() {
            this.$emit("selectedMonster", this.selectedMonster);
        }
    }
};
</script>
