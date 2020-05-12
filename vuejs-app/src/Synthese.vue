<template>
    <div class="synthese">
        <p>
            {{synthese.s_title}}
            {{synthese.code_cours}}
            {{synthese.idstudent}}
            {{synthese.s_description}}
        </p>
        <input type="text" v-model="synthese.s_title"/>
        <input type="text" v-model="synthese.code_cours"/>
        <input type="numbers" v-model="synthese.idstudent"/>
        <input type="text" v-model="synthese.s_description"/>
        <button v-on:click="updatesynthese(synthese.idsynthese)">Modifier</button>
        <button v-on:click="deletesynthese(synthese.idsynthese)">Supprimer</button>
    </div>
</template>


<script>
export default {
    name: 'Synthese',
    props: ['synthese'],
    data() {
        return {
            s_title: "",
            code_cours: "",
            idstudent: "",
            s_description: ""
        }
    },
    methods: {
        updatesynthese(synthese) {
            this.$emit('event_updatesynthese', {idsynthese: idsynthese, s_title: this.s_title, code_cours: this.code_cours, idstudent: this.idstudent, s_description: this.s_description})
        },
        deletesynthese(synthese) {
            this.$emit('event_deletesynthese', synthese.idsynthese);
        },
    }
}
</script>


<style>

</style>