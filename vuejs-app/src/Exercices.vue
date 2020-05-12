<template>
    <div class="exercices">
        <p>
            {{exercices.e_title}}
            {{exercices.code_cours}}
            {{exercices.idstudent}}
            {{exercices.e_description}}
        </p>
        <input type="text" v-model="exercices.e_title"/>
        <input type="text" v-model="exercices.code_cours"/>
        <input type="numbers" v-model="exercices.idstudent"/>
        <input type="text" v-model="exercices.e_description"/>
        <button v-on:click="updateexercices(exercices.idexercices)">Modifier</button>
        <button v-on:click="deleteexercices(exercices.idexercices)">Supprimer</button>
    </div>
</template>


<script>
export default {
    name: 'Exercices',
    props: ['exercices'],
    data() {
        return {
            e_title: "",
            code_cours: "",
            idstudent: "",
            e_description: ""
        }
    },
    methods: {
        updateexercices(exercices) {
            this.$emit('event_updateexercices', {idexercices: idexercices, e_title: this.e_title, code_cours: this.code_cours, idstudent: this.idstudent, e_description: this.e_description})
        },
        deleteexercices(exercices) {
            this.$emit('event_deleteexercices', exercices.idexercices);
        },
    }
}
</script>


<style>

</style>