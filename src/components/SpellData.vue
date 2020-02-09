<template>
    <div>
        <div class="card w-75 mb-4 mx-auto p-3" v-if="spell">
            <div class="card-body">
                <h2 class="card-title">{{ this.spellData.name }}</h2>
                <h5
                    class="card-subtitle mb-3 text-muted"
                >{{ `Level ${this.spellData.level} ${this.spellClasses.join(", ")} Spell (${this.spellData.school.name})` }}</h5>
                <hr />
                <div class="container">
                    <div class="row mb-3">
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Range:</span>
                                {{ this.spellData.range }}
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Ritual:&nbsp;</span>
                                <span v-if="spellData.ritual">Yes</span>
                                <span v-else>No</span>
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Duration:</span>
                                {{ this.spellData.duration }}
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Concentration:&nbsp;</span>
                                <span v-if="spellData.concentration">Yes</span>
                                <span v-else>No</span>
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Casting Time:</span>
                                {{ this.spellData.casting_time }}
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Components:&nbsp;</span>
                                <span
                                    v-if="spellData.components.length"
                                >{{this.spellData.components.join(", ")}}</span>
                                <span v-else>None</span>
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3" v-if="spellData.material">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Material:</span>
                                {{ this.spellData.material }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <h5
                                class="card-subtitle text-muted text-left mt-2 mb-2"
                            >Spell Description</h5>
                            <p
                                class="card-text text-left"
                                v-for="(description, index) in spellData.desc"
                                v-bind:key="index"
                            >{{description}}</p>
                        </div>
                    </div>
                    <div class="row mb-3" v-if="spellData.higher_level">
                        <div class="col-sm-12">
                            <h5
                                class="card-subtitle text-muted text-left mt-2 mb-2"
                            >At Higher Levels</h5>
                            <p
                                class="card-text text-left"
                                v-for="(higherLevel, index) in spellData.higher_level"
                                v-bind:key="index"
                            >{{higherLevel}}</p>
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
            spellClasses: [],
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

                // Format spell classes
                this.spellClasses = [];
                this.spellData.classes.forEach(spellClass => {
                    this.spellClasses.push(spellClass.name);
                });
            } catch (error) {
                this.errors.push(error);
            }
        }
    },
    methods: {}
};
</script>