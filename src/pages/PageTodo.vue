<template>
  <q-page padding class="q-pa-md">
    <q-list bordered separator>
      <task-comp 
        v-for="(task, key) in tasks" 
        :key="key"
        :task="task" 
      />
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn round color="primary" icon="add" size="24px" />
    </div>

    <q-dialog v-model="showAddTask">
      <AddTask />
    </q-dialog>

  </q-page>
</template>

<script>
import { ref, computed, onMounted } from "vue"
import { useStore } from 'vuex'
import TaskComp from '../components/Tasks/TaskComp.vue'
import AddTask from '../components/Tasks/Modals/AddTask.vue'

export default {
  components: {
    TaskComp,
    AddTask
  },

  setup() {
    const store = useStore()

    const tasks = computed(() => store.getters['tasks/tasks'])

    const showAddTask = ref(true)

    return {
      tasks,
      showAddTask
    }

  },
  
};

</script>

<style>
  .text-strikethrough {
    text-decoration: line-through;
  } 
</style>
