<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      message: "",
    };
  },
  created() {
    axios
      .get("http://localhost:3000")
      .then((response) => {
        this.message = response.data;
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  },
};
</script>
