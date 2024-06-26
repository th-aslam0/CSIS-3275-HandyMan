import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import SignUp from "../components/SignUp.vue";
import HomePage from "../components/HomePage.vue";
import NHomePage from "../components/NHomePage.vue";
import HandyHomePage from "../components/HandyHomePage.vue";
import NHandyHomePage from "../components/NHandyHomePage.vue";
import CustomerJobs from "../components/CustomerJobs.vue";
import ChatPage from "../components/ChatPage.vue";
import AccountPage from "../components/AccountPage.vue";
import HandyAccountPage from "../components/HandyAccountPage.vue";

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },

  {
    path: "/NHomePage",
    name: "NHomePage",
    component: NHomePage,
  },

  {
    path: "/HandyHomePage",
    name: "HandyHomePage",
    component: HandyHomePage,
  },
  {
    path: "/NHandyHomePage",
    name: "NHandyHomePage",
    component: NHandyHomePage,
  },
  {
    path: "/CustomerJobs",
    name: "CustomerJobs",
    component: CustomerJobs,
  },
  {
    path: "/ChatPage",
    name: "ChatPage",
    component: ChatPage,
  },
  {
    path: "/AccountPage",
    name: "AccountPage",
    component: AccountPage,
  },
  {
    path: "/HandyAccountPage",
    name: "HandyAccountPage",
    component: HandyAccountPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
