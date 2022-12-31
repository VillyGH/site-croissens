import { createStore } from "vuex";
import authentication from "./modules/authentication";
import VuexPersistence from "vuex-persist";
// Code en commentaire ci-dessous: voir note de cours "Conserver les données dans le navigateur"
// Librairie vuex-persist afin de persister le store dans le navigateur
// Instanciation de de la persistence dans un session storage
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage,
  reducer: (state) => ({
    authentication: {
      token: state.authentication.token,
    },
  }),
});

const store = createStore({
  state: {
    patients: [authentication],
  },
  plugins: [vuexLocal.plugin],
});

export default store;
