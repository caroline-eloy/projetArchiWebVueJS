<template>
    <div id="moduleexercices">
        <h1>Liste des exercices</h1>
        <!-- Formulaire d'ajout d'un exercice -->
        <div class="listeexercices">
           <li v-for="exercices in listeexercices" :key="exercices.idexercices">
               <Exercices v-bind:exercices="exercices" @event_updateexercices="updateexercices" @event_deleteexercices="deleteexercices"> </Exercices>
        </div>
        <form>
            <input type="text" v-model="exercices.e_title"/>
            <input type="text" v-model="exercices.code_cours"/>
            <input type="numbers" v-model="exercices.idstudent"/>
            <input type="text" v-model="exercices.e_description"/>
            <button v-on:click="addexercices">Ajouter un exercice</button>
        </form>
    </div>
</template>


<script>
import axios from "axios";
import Exercices from "./Exercices.vue";
export default {
    name: "listeexercices",
    components: { Exercices },
    data () {
        return{
            exercices: 
            {
                idexercices: 0,
                e_title: "Titre",
                code_cours: "Code cours",
                idstudent: 0,
                e_description: "Description"
            },
            listeexercices: [],
            uri:"http://localhost:8080/api/accueil/exercices"
        };
    },
    methods: {
        getlisteexercices: function() {
            axios.get(this.uri).then(response => {
                this.listeexercices = response.data.listeexercices;
            });
        },
        addexercices: function() {
            axios.post(this.uri, this.exercices).then(response => {
                console.log(response.data);
                this.getlisteexercices();
            });
        },
        updateexercices: function(exercices) {
            axios.put(this.uri + exercices.idexercices, exercices).then(response => {
                console.log(response.data);
            });
        },
        deleteexercices: function(synthese) {
            axios.delete(this.uri + exercices.idexercices).then(response => {
                console.log(response.data);
                this.getlisteexercices();
            });
        }
    },
    mounted() {
            this.getlisteexercices();
    }
};
</script>


<style>

</style>