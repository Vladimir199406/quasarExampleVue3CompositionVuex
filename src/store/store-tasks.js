import { uid } from 'quasar'

const state = {

  tasks: []
}


const mutations = {
  updateTask(state, payload) {
    state.tasks.forEach((task) => {
      if (task.id === payload.id) {
        task.completed = payload.completed
        console.log(state.tasks)
      }
    })
  },
  deleteTask(state, id) {
    let indexToDelete = 0

    state.tasks.forEach((task, index) => {
      if(task.id === id) {
        indexToDelete = index
        console.log(indexToDelete)
      }
    })

    state.tasks.splice(indexToDelete, 1)
  },
  addTask(state, payload) {
    state.tasks.push({
      id: payload.id,
      name: payload.task.name,
      dueDate: payload.task.dueDate,
      dueTime: payload.task.dueTime,
      completed: false,
    })
  }
}

const actions = {
  updateTask({commit}, payload) {
    commit('updateTask', payload)
  },
  deleteTask({commit}, id) {
    commit('deleteTask', id)
  },
  addTask({commit}, task) {

    let taskId = uid()

    const payload = {
      id: taskId,
      task: task
    }

    commit('addTask', payload)
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