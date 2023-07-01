<template>
  <q-page padding class="q-pa-md">
    <q-list bordered separator>
      <task-comp 
        v-for="(task, key) in tasks" 
        :key="key"
        :task="task" 
      />
    </q-list>
  </q-page>
</template>

<script>
import { ref, computed, onMounted } from "vue"
import { useStore } from 'vuex'
import TaskComp from '../components/Tasks/TaskComp.vue'

export default {
  components: {
    TaskComp
  },

  setup() {
    const store = useStore()

    const tasks = computed(() => store.getters['tasks/tasks'])

    return {
      tasks
    }

  },
  
};

</script>

<style>
  .text-strikethrough {
    text-decoration: line-through;
  } 
</style>
