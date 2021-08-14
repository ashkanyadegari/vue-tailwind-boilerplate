<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <hello-world />
    <div class="cursor-pointer mt-28" @click="testAxios">
      Click Here To Test Axios
    </div>
    <div class="font-bold text-green-600">
      {{ apiResponse }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',

  data() {
    return {
      apiText: 'Click to see if Axios works',
      apiResponse: '',
    };
  },

  mounted() {
    this.$axios.get('/')
      .then((res) => console.log(res));
  },

  components: {
    HelloWorld,
  },

  methods: {
    testAxios() {
      this.$axios.get('/')
        .then((res) => {
          this.apiResponse = res.data.quote;
          console.log(res.data.quote);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
