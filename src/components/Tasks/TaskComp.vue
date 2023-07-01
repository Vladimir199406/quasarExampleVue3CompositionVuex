<template>
  <q-item @click="updateTask(updateTaskPayload)" v-ripple clickable
    :class="!props.task.completed ? 'bg-orange-1' : 'bg-green'">
    <q-item-section side top>
      <q-checkbox v-model="props.task.completed"></q-checkbox>
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strike': props.task.completed }">
        {{ props.task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">
            {{ props.task.dueDate }}
          </q-item-label>
          <q-item-label caption class="row justify-end">
            <small>{{ props.task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side class="column">
      <q-btn @click.stop="promptToDelete(props.id)" flat round color="red" icon="delete" size="12px" dense />
    </q-item-section>
  </q-item>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useQuasar } from 'quasar'

export default {
  props: ['task', 'id'],
  setup(props) {
    const store = useStore()

    const $q = useQuasar()

    const updateTaskPayload = ref(
      {
        id: props.id, 
        updates: {
          completed: !props.task.completed
        }
      }
    )

    const promptToDelete = (id) => {
      $q.dialog({
        dark: true,
        title: 'Confirm',
        message: 'Are You sure You want to DELETE?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        store.dispatch('tasks/deleteTask', id)
      })
    }

    return {
      props,
      updateTaskPayload,
      promptToDelete,
      updateTask: (payload) => store.dispatch('tasks/updateTask', payload),
    }
  }
};
</script>

<style></style>