<template>
    <div>
        <div class="card w-75 mx-auto p-3" v-if="monster">
            <div class="card-body">
                <h2 class="card-title">{{ this.monsterData.name }}</h2>
                <h5
                    class="card-subtitle mb-3 text-muted"
                >{{ `CR ${this.monsterData.challenge_rating} ${this.monsterData.size} ${this.monsterData.type} (${this.monsterData.alignment})` }}</h5>
                <hr />
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Hit Points:</span>
                                {{ this.monsterData.hit_points }}
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Armor Class:</span>
                                {{ this.monsterData.armor_class }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Hit Dice:</span>
                                {{ this.monsterData.hit_dice }}
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Speed:</span>
                                {{ this.monsterSpeed.join(", ") }}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Strength:</span>
                                {{ this.monsterData.strength }}
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Intelligence:</span>
                                {{ this.monsterData.intelligence }}
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Dexterity:</span>
                                {{ this.monsterData.dexterity }}
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Wisdom:</span>
                                {{ this.monsterData.wisdom }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Constitution:</span>
                                {{ this.monsterData.constitution }}
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Charisma:</span>
                                {{ this.monsterData.charisma }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Languages:</span>
                                {{ this.monsterData.languages }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p v-else>
            No monster has been selected. Please select a monster from the list
            above to view its data.
        </p>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "monsterdata",
    props: {
        monster: String
    },
    data() {
        return {
            monsterData: {},
            monsterSpeed: [],
            errors: []
        };
    },
    watch: {
        async monster() {
            try {
                const response = await axios.get(
                    `http://www.dnd5eapi.co/api/monsters/${this.monster}`
                );
                this.monsterData = response.data;

                // Format monster speed string
                this.monsterSpeed = [];
                const spd = this.monsterData.speed;
                for (const [speedType, speedDistance] of Object.entries(spd)) {
                    this.monsterSpeed.push(`${speedType} ${speedDistance}`);
                }
            } catch (error) {
                this.errors.push(error);
            }
        }
    }
};
</script>
