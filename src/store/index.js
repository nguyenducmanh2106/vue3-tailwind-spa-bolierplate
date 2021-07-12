
import { createStore, createLogger } from 'vuex';
import createPersistedState from "vuex-persistedstate";


const debug = process.env.NODE_ENV !== 'production'

const Store = createStore({
  strict: debug,
  plugins: debug ? [createLogger(),createPersistedState()] : [createPersistedState()]
})

export default Store;