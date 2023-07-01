import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import tasks from './store-tasks'

export default store(function () {
  const Store = createStore({
    modules: {
      tasks
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
