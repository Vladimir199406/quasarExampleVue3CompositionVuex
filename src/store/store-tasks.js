import { uid } from 'quasar'

const state = {

  tasks: [
    {
      id: 'id1',
      name: "go to somewhere",
      dueDate: "2023/06/30",
      dueTime: "18.30",
      completed: false,
    },
    {
      id: 'id2',
      name: "get cherrys",
      dueDate: "2023/08/14",
      dueTime: "15.20",
      completed: false,
    },
    {
      id: 'id3',
      name: "get apples",
      dueDate: "2023/07/05",
      dueTime: "12.30",
      completed: false,
    },
  ]
}


const mutations = {
  updateTask(state, payload) {
    const taskSameId = state.tasks.filter(task => task.id === payload.id)

    Object.assign(taskSameId[0], payload.updates)

    console.log(state.tasks)
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
      name: payload.name,
      dueDate: payload.dueTime,
      dueTime: payload.dueTime,
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
    const uid = uid()

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