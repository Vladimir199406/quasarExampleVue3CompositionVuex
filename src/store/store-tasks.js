const state = {

  tasks: {
    'ID1'  : {
      name: "go to somewhere",
      completed: false,
      dueDate: "2023/06/30",
      dueTime: "18.30",
    },
    'ID2'  : {
      name: "get cherrys",
      completed: false,
      dueDate: "2023/08/14",
      dueTime: "15.20",
    },
    'ID3'  : {
      name: "get apples",
      completed: false,
      dueDate: "2023/07/05",
      dueTime: "12.30",
    },
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    console.log(id)
    delete state.tasks[id]
  }
}

const actions = {
  updateTask({commit}, payload) {
    commit('updateTask', payload)
  },
  deleteTask({commit}, id) {
    commit('deleteTask', id)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}