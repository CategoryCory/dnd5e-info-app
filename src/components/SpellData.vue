<template>
    <div>
        <div class="card w-75 mb-4 mx-auto p-3" v-if="spell">
            <div class="card-body">
                <h2 class="card-title">{{ this.spellData.name }}</h2>
                <h5
                    class="card-subtitle mb-3 text-muted"
                >{{ `Level ${this.spellData.level} Spell` }}</h5>
                <hr />
                <div class="container">
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Description:</span>
                                {{ this.spellData.desc[0] }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3" v-if="spellData.higher_level">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">At higher levels:</span>
                                {{ this.spellData.higher_level[0] }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p v-else>
            No spell has been selected. Please select a spell from the list
            above to view its data.
        </p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "spelldata",
    props: {
        spell: String
    },
    data() {
        return {
            spellData: {},
            errors: []
        };
    },
    watch: {
        async spell() {
            try {
                const response = await axios.get(
                    `http://www.dnd5eapi.co/api/spells/${this.spell}`
                );
                this.spellData = response.data;
            } catch (error) {
                this.errors.push(error);
            }
        }
    },
    methods: {}
};
</script>