import Vue from "vue";
import VueRouter from "vue-router";
import VueI18n from "vue-i18n";
import Viewer from "v-viewer";
import VueMatomo from "vue-matomo";
import "./semantic-ui-utils/main.css";
import App from "./App.vue";
import QuestionView from "./views/QuestionView.vue";
import NutritionView from "./views/NutritionView.vue";
import NutritionInteractiveView from "./views/NutritionInteractiveView.vue";
import TableAnnotation from "./views/TableAnnotation.vue";
import SettingsView from "./views/SettingsView.vue";
import InsightListView from "./views/InsightListView.vue";
import LogoSearchView from "./views/LogoSearchView.vue";
import LogoAnnotationView from "./views/LogoAnnotationView.vue";
import LogoUpdateView from "./views/LogoUpdateView.vue";
import EcoScoreMenu from "./views/EcoScoreMenu.vue";
import SecretTool from "./views/secretTool.vue";
import SubsetQuestionView from "./views/SubsetQuestionView.vue";
import "viewerjs/dist/viewer.css";
import SuiVue from "semantic-ui-vue";
import messages from "./i18n/messages";
import { getLang } from "./settings";

Vue.use(SuiVue);
Vue.use(VueRouter);
Vue.use(Viewer);
Vue.use(VueI18n);
Vue.config.productionTip = false;

Vue.directive("focus", {
  componentUpdated: function(el) {
    el.firstElementChild.focus();
  },
  inserted: function(el) {
    el.firstElementChild.focus();
  },
});

const routes = [
  { path: "/", redirect: "/questions" },
  { path: "/insights", component: InsightListView },
  { path: "/questions", component: QuestionView },
  { path: "/eco-score", component: EcoScoreMenu },
  { path: "/secretTools", component: SecretTool },
  { path: "/nutritions", component: NutritionView },
  { path: "/nutritionInteractive", component: NutritionInteractiveView },
  { path: "/nutritionInteractive/:code", component: NutritionInteractiveView },
  { path: "/table", component: TableAnnotation },
  { path: "/settings", component: SettingsView },
  { path: "/logos", component: LogoAnnotationView },
  { path: "/logos/search", component: LogoSearchView },
  { path: "/logos/:id", component: LogoUpdateView },
  { path: "/subsetQuestion", component: SubsetQuestionView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const i18n = new VueI18n({
  locale: getLang(),
  messages,
  fallbackLocale: "en",
});

Vue.use(VueMatomo, {
  // Configure your matomo server and site by providing
  host: "https://analytics.openfoodfacts.org/",
  siteId: 3,
  router: router, // Enables automatically registering page views on the router
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
