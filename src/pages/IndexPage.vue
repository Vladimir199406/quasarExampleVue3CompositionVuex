<template>
  <q-page padding>
    <button
      style="position: absolute; right: 10px;"
      @click="counter++"
    >
      {{ counter }}
    </button>
    <input 
      v-model="message" 
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-auto-focus
      :class="{'error' : message.length > 22}"
      ref="messageInput"
    >
    <button @click="clearMessage">Clear</button>
    <div>{{ message.length }}</div>
    <h5 
      v-if="message.length" 
      class="boeder-grey" 
    >{{ message }}</h5>
    <h6 v-else>No Message entered </h6>
    <hr>
    <p>Uppercase message: {{ messageUppercase }}</p>
    <p>Lowercase message: {{ messageLowercase }} </p>
  </q-page>
</template>

<script>
export default { 
  data() {
    return {
      message: 'Message Fish',
      counter: 0,
    }
  },
  computed: {
    messageUppercase() {
      return this.message.toUpperCase()
    },
    messageLowercase(value) {
      return this.message.toLowerCase()
    },
    errorStyle() {
      if (this.message.length > 22) {
        return {
          'color' : 'red',
          'background' : 'pink'
        }
      } 
      return ''
    }
  },
  methods: {
    clearMessage() {
      this.message = ''
    },
    alertMessage() {
      alert(this.message)
    }
  },
  directives: {
    autofocus: {
      inserted(el) {
        el.focus
      }
    }
  },
  mounted() {
    this.$refs.messageInput.className = 'bg-green'
  },

}
</script>

<style>
  .border-gray {
    border: 1px solid grey;
  }

  .error {
    color: red;
    background: pink;
  }
</style>
