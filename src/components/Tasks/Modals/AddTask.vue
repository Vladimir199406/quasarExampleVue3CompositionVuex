<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn flat round icon="close" dense v-close-popup />
    </q-card-section>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            class="col"
            outlined
            v-model="taskToSubmit.name"
            :rules="[(val) => !!val || 'Field is required']"
            ref="name"
            label="Task Name"
          />
        </div>
        <div class="row q-mb-sm">
          <q-input label="Due Date" outlined v-model="taskToSubmit.dueDate">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date v-model="taskToSubmit.dueDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="row q-mb-sm">
          <q-input label="Due Time" outlined v-model="taskToSubmit.dueTime">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn type="submit" label="Save" color="primary" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const taskToSubmit = ref({
      name: "",
      dueDate: "",
      dueTime: "",
      completed: false,
    })

    const name = ref('')

    const submitForm = () => {
      name.value.validate()
      
      if (!name.value.hasError) {
        submitTask()
      }
    }

    const submitTask = () => {
      console.log('FLAG!!!')
    }

    return {
      taskToSubmit,
      name,
      submitForm,
    };
  },
};
</script>
