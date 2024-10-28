import VueToast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueToast, {
    position: "top-right",
    timeout: 3000,
    hideProgressBar: true,
  });
});