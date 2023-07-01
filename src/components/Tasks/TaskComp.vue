<template>
  <q-item @click="props.task.completed = !props.task.completed" v-ripple clickable
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
  </q-item>
</template>

<script>
export default {
  props: ['task', 'id'],
  setup(props) {
    return {
      props
    }
  }
};
</script>

<style></style>