<template>
  <q-page padding class="q-pa-md">
    <q-list bordered separator>
      <q-item 
      @click="task.completed = !task.completed" 
      v-ripple 
      v-for="task in tasks" 
      :key="task.id" 
      clickable
      :class="!task.completed ? 'bg-orange-1' : 'bg-green'" >
        <q-item-section side top>
          <q-checkbox v-model="task.completed"></q-checkbox>
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strike' : task.completed}">
            {{ task.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label caption class="row justify-end">
                {{ task.dueDate }}
              </q-item-label>
              <q-item-label caption class="row justify-end">
                <small>{{ task.dueTime }}</small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const tasks = ref([
      {
        id: 1,
        name: "go to somewhere",
        completed: false,
        dueDate: "2023/06/30",
        dueTime: "18.30",
      },
      {
        id: 2,
        name: "get apples",
        completed: false,
        dueDate: "2023/07/05",
        dueTime: "12.30",
      },
      {
        id: 3,
        name: "get cherrys",
        completed: false,
        dueDate: "2023/08/14",
        dueTime: "15.20",
      },
    ]);

    return {
      tasks,
    };
  },
};
</script>

<style>
  .text-strikethrough {
    text-decoration: line-through;
  } 
</style>
