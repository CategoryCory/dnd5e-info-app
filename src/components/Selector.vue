<template>
    <div class="w-75 mx-auto">
        <v-select
            v-model="selectedItem"
            label="name"
            :options="data"
            :reduce="item => item.index"
            @input="selectionChanged"
        ></v-select>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "selector",
    props: {
        selectType: String
    },
    data() {
        return {
            count: 0,
            data: {},
            selectedItem: "",
            errors: []
        };
    },
    async created() {
        try {
            const response = await axios.get(
                `http://www.dnd5eapi.co/api/${this.selectType}`
            );
            this.count = response.data.count;
            this.data = response.data.results;
        } catch (error) {
            this.errors.push(error);
        }
    },
    methods: {
        selectionChanged() {
            this.$emit("selectedItem", this.selectedItem);
        }
    }
};
</script>
