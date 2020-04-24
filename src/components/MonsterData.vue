<template>
    <div>
        <div class="card w-75 mx-auto mb-4 p-3" v-if="monster">
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
                                <span class="font-weight-bold">Proficiencies:</span>
                                {{ this.monsterProficiencies.join(", ") || "None" }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Damage Vulnerabilities:</span>
                                {{ this.monsterData.damage_vulnerabilities.join(", ") || "None" }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Damage Resistances:</span>
                                {{ this.monsterData.damage_resistances.join(", ") || "None" }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Damage Immunities:</span>
                                {{ this.monsterData.damage_immunities.join(", ") || "None" }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Condition Immunities:</span>
                                {{ this.monsterConditionImmunities.join(", ") || "None" }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Languages:</span>
                                {{ this.monsterData.languages || "None" }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12">
                            <p class="card-text text-left">
                                <span class="font-weight-bold">Senses:</span>
                                {{ this.monsterSenses.join(", ") || "None" }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container" v-if="monsterData.actions">
                    <hr />
                    <h5 class="card-subtitle mt-4 mb-3 text-muted">Actions</h5>
                    <ul class="list-group text-left">
                        <li
                            class="list-group-item"
                            v-for="action in monsterData.actions"
                            v-bind:key="action.name"
                        >
                            <span class="font-weight-bold">{{action.name}}:</span>
                            {{action.desc}}
                        </li>
                    </ul>
                </div>
                <div class="container" v-if="monsterData.special_abilities">
                    <hr />
                    <h5 class="card-subtitle mt-4 mb-3 text-muted">Special Abilities</h5>
                    <ul class="list-group text-left">
                        <li
                            class="list-group-item"
                            v-for="ability in monsterData.special_abilities"
                            v-bind:key="ability.name"
                        >
                            <span class="font-weight-bold">{{ability.name}}:</span>
                            {{ability.desc}}
                        </li>
                    </ul>
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
            monsterSenses: [],
            monsterProficiencies: [],
            monsterConditionImmunities: [],
            monsterSpecialAbilities: [],
            errors: []
        };
    },
    watch: {
        async monster() {
            try {
                const response = await axios.get(
                    `https://www.dnd5eapi.co/api/monsters/${this.monster}`
                );
                this.monsterData = response.data;

                // Format monster speed string array
                this.monsterSpeed = [];
                const spd = this.monsterData.speed;
                for (const [speedType, speedDistance] of Object.entries(spd)) {
                    this.monsterSpeed.push(`${speedType} ${speedDistance}`);
                }

                // Format monster senses string array
                this.monsterSenses = [];
                const senses = this.monsterData.senses;
                for (const [senseType, senseValue] of Object.entries(senses)) {
                    this.monsterSenses.push(
                        `${this.getDisplayName(senseType)} ${senseValue}`
                    );
                }

                // Format monster proficiencies string array
                this.monsterProficiencies = [];
                const proficiencies = this.monsterData.proficiencies;
                proficiencies.forEach(prof => {
                    this.monsterProficiencies.push(
                        `${prof.name} +${prof.value}`
                    );
                });

                // Format monster condition immunities string array
                this.monsterConditionImmunities = [];
                const condImmunities = this.monsterData.condition_immunities;
                condImmunities.forEach(immunity => {
                    this.monsterConditionImmunities.push(`${immunity.name}`);
                });
            } catch (error) {
                this.errors.push(error);
            }
        }
    },
    methods: {
        getDisplayName(dbName) {
            const words = dbName.split("_");
            const capitalizedWords = [];
            words.forEach(word => {
                capitalizedWords.push(
                    word.charAt(0).toUpperCase() + word.slice(1)
                );
            });
            return capitalizedWords.join(" ");
        }
    }
};
</script>
