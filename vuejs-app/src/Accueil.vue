<template>
  <div id="accueil">
    <h1>{{ titreaccueil }}</h1>
    <div>{{ msgaccueil }}</div>
    <ul>
      <li><router-link to="/accueil/synthese">Synthèse</router-link></li>
      <li><router-link to="/accueil/exercices">Exercices</router-link></li>
      <li><router-link to="/accueil/notesdecours">Notes de cours</router-link></li>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'accueil',
  data () {
    return {
      titreaccueil: "Bienvenue sur l'application de la classe Business Analyst",
      msgaccueil: "Cette application est réservée aux élèves de première master de la promotion 2021"
    }
  }
}
</script>

<style>
#accueil {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
