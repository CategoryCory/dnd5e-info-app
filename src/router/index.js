import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/monsters",
        name: "monsters",
        component: () => import("../views/Monsters.vue")
    },
    {
        path: "/spells",
        name: "spells",
        component: () => import("../views/Spells.vue")
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
