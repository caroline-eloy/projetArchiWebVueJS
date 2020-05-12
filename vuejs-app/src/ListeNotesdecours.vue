<template>
    <div id="modulenotesdecours">
        <h1>Liste des notes de cours</h1>
        <!-- Formulaire d'ajout de notes de cours -->
        <div class="listenotesdecours">
           <li v-for="notescours in listenotescours" :key="notescours.idnotescours">
               <Notescours v-bind:notescours="notescours" @event_updatenotescours="updatenotescours" @event_deletenotescours="deletenotescours"> </Notescours>
        </div>
        <form>
            <input type="text" v-model="notescours.n_title"/>
            <input type="text" v-model="notescours.code_cours"/>
            <input type="numbers" v-model="notescours.idstudent"/>
            <input type="text" v-model="notescours.n_description"/>
            <button v-on:click="addnotescours">Ajouter une note de cours</button>
        </form>
    </div>
</template>


<script>
import axios from "axios";
import Notescours from "./Notesdecours.vue";
export default {
    name: "listenotescours",
    components: { Notescours },
    data () {
        return{
            notescours: 
            {
                idnotescours: 0,
                n_title: "Titre",
                code_cours: "Code cours",
                idstudent: 0,
                n_description: "Description"
            },
            listenotescours: [],
            uri:"http://localhost:8080/api/accueil/notesdecours"
        };
    },
    methods: {
        getlistenotescours: function() {
            axios.get(this.uri).then(response => {
                this.listenotescours = response.data.listenotescours;
            });
        },
        addnotescours: function() {
            axios.post(this.uri, this.notescours).then(response => {
                console.log(response.data);
                this.getlistenotescours();
            });
        },
        updatenotescours: function(notescours) {
            axios.put(this.uri + notescours.idnotescours, notescours).then(response => {
                console.log(response.data);
            });
        },
        deletenotescours: function(synthese) {
            axios.delete(this.uri + notescours.idnotescours).then(response => {
                console.log(response.data);
                this.getlistenotescours();
            });
        }
    },
    mounted() {
            this.getlistenotescours();
    }
};
</script>


<style>

</style>