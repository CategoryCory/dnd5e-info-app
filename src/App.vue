<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>&nbsp;|
            <router-link to="/monsters">Monsters</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    margin-bottom: 3em;
    padding: 30px;
    background-color: #2c3e50;
    color: #ffffff;
}

#nav a {
    font-weight: bold;
    color: #ffffff;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
