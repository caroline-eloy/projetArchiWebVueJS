<template>
    <div class="notescours">
        <p>
            {{notescours.n_title}}
            {{notescours.code_cours}}
            {{notescours.idstudent}}
            {{notescours.n_description}}
        </p>
        <input type="text" v-model="notescours.n_title"/>
        <input type="text" v-model="notescours.code_cours"/>
        <input type="numbers" v-model="notescours.idstudent"/>
        <input type="text" v-model="notescours.n_description"/>
        <button v-on:click="updatenotescours(notescours.idnotescours)">Modifier</button>
        <button v-on:click="deletenotescours(notescours.idnotescours)">Supprimer</button>
    </div>
</template>


<script>
export default {
    name: 'Notescours',
    props: ['notescours'],
    data() {
        return {
            n_title: "",
            code_cours: "",
            idstudent: "",
            n_description: ""
        }
    },
    methods: {
        updatenotescours(notescours) {
            this.$emit('event_updatenotescours', {idnotescours: idnotescours, n_title: this.n_title, code_cours: this.code_cours, idstudent: this.idstudent, n_description: this.n_description})
        },
        deletesnotescours(notescours) {
            this.$emit('event_deletenotescours', notescours.idnotescours);
        },
    }
}
</script>


<style>

</style>