<template>
  <q-page padding>
    <ul>
      <task-comp v-for="(task, index) in tasks" :key="task.id" :task="task" :index="index" />
    </ul>
  </q-page>
</template>

<script>
export default { 
  data() {
    return {
      tasks: [
        {
          name: 'el1',
          dueDate: '2023/06/28',
          dueTime: '15.00',
          id: 1
        },
        {
          name: 'el2',
          dueDate: '2023/06/29',
          dueTime: '23.00',
          id: 2
        },
        {
          name: 'el3',
          dueDate: '2023/06/30',
          dueTime: '20.00',
          id: 3
        }
      ]
    }
   },
   methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
   },
   components: {
    'taskComp': require('components/taskComp.vue').default
   }
  }
</script>

<style>
</style>
