import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/main.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";

const themePreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {},
      dark: {},
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(ToastService);
app.use(PrimeVue, {
  theme: {
    prefix: "p",
    preset: themePreset,
    options: {
      darkModeSelector: ".dark",
    },
  },
  pt: {},
});
app.directive("tooltip", Tooltip);
app.mount("#app");
