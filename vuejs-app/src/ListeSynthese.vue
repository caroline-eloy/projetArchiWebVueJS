<template>
    <div id="modulesynthese">
        <h1>Liste des synthèses</h1>
        <!-- Formulaire d'ajout de synthèse -->
        <div class="listesynthese">
           <li v-for="synthese in listesynthese" :key="synthese.idsynthese">
               <Synthese v-bind:synthese="synthese" @event_updatesynthese="updatesynthese" @event_deletesynthese="deletesynthese"> </Synthese>
        </div>
        <form>
            <input type="text" v-model="synthese.s_title"/>
            <input type="text" v-model="synthese.code_cours"/>
            <input type="numbers" v-model="synthese.idstudent"/>
            <input type="text" v-model="synthese.s_description"/>
            <button v-on:click="addsynthese">Ajouter une synthèse</button>
        </form>
    </div>
</template>


<script>
import axios from "axios";
import Synthese from "./Synthese.vue";
export default {
    name: "listesynthese",
    components: { Synthese },
    data () {
        return{
            synthese: 
            {
                idsynthese: 0,
                s_title: "Titre",
                code_cours: "Code cours",
                idstudent: 0,
                s_description: "Description"
            },
            listesynthese: [],
            uri:"http://localhost:8080/api/accueil/synthese"
        };
    },
    methods: {
        getlistesynthese: function() {
            axios.get(this.uri).then(response => {
                this.listesynthese = response.data.listesynthese;
            });
        },
        addsynthese: function() {
            axios.post(this.uri, this.synthese).then(response => {
                console.log(response.data);
                this.getlistesynthese();
            });
        },
        updatesynthese: function(synthese) {
            axios.put(this.uri + synthese.idsynthese, synthese).then(response => {
                console.log(response.data);
            });
        },
        deletesynthese: function(synthese) {
            axios.delete(this.uri + synthese.idsynthese).then(response => {
                console.log(response.data);
                this.getlistesynthese();
            });
        }
    },
    mounted() {
            this.getlistesynthese();
    }
};
</script>


<style>

</style>