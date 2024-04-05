import { createRouter,createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import SignUp from "../components/SignUp.vue";
import HomePage from "../components/HomePage.vue";
import HandyHomePage from "../components/HandyHomePage.vue";



const routes = [
    {
      path: "/",
      name: "LoginPage",
      component: LoginPage
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/HomePage",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/HandyHomePage",
      name: "HandyHomePage",
      component: HandyHomePage
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes

});

export default router;
