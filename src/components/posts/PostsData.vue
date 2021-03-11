<template>
  <header>
    <h2>PostsData</h2>
  </header>
  <base-card>
    <div id="user">
      <div id="posts">
        <!-- <li v-for="user in users" :key="user.userId"> -->
        <p v-if="isLoading">Loading....</p>
        <p v-else-if="!isLoading && error">{{ error }}</p>
        <ul v-for="post in posts" :key="post.userId" v-else>
          <router-link to="/user"
            ><strong
              >@{{ post.user.username }}({{ post.user.name }})</strong
            ></router-link
          >
          <!-- <li><strong>{{ user.username }}@{{ user.name }}</strong></li> -->
          <!-- <li id="item"><strong>UserId</strong> : {{ post.userId }}</li> -->
          <li id="item"><strong>Id</strong> : {{ post.id }}</li>
          <button class="title" @click="toggleDetails">
            {{ bodyAreVisible ? "" : "" }}
            <li class="title_button">
              <strong>Title</strong> : {{ post.title }}
            </li>
          </button>
          <li class="body" v-if="bodyAreVisible">
            <strong>Body</strong> : {{ post.body }}
          </li>
        </ul>
        <!-- </li> -->
      </div>
    </div>
  </base-card>
</template>

<script>
import axios from "axios";
window.axios = require("axios");
export default {
  data() {
    return {
      posts: [],
      users: [],
      bodyAreVisible: false,
      isLoading: false,
      error: null,
    };
  },
  mounted() {
    this.isLoading = true;
    this.error = null;
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.users = response.data;
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            response.data.map((post) => {
              post.user = this.users.find((user) => user.id === post.userId);
            });
            this.posts = response.data;
          });
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.error = "Failed to fetch data";
      });

    // const headers = { "Content-Type": "application/json" };
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts", { headers })
    //   .then((response) => {
    //     console.log(response.data);
    //     this.posts = response.data;
    //     /*for(let key in this.posts){
    //             axios.get(`https://jsonplaceholder.typicode.com/users/${this.posts[key].userId}`).then(res =>
    //             {
    //                 console.log(res.data);

    //                 //this.users = response.data;
    //             })
    //         }*/
    //     axios
    //       .get("https://jsonplaceholder.typicode.com/users")
    //       .then((response) => {
    //         console.log(response.data);
    //         return (this.users = response.data);
    //       });
    //   });
  },
  methods: {
    toggleDetails() {
      this.bodyAreVisible = !this.bodyAreVisible;
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

.ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  list-style-type: none;
  text-align: center;
}
#item {
  text-decoration-style: inherit;
  color: red;
}
.title {
  display: block;
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  background: green;
  color: black;
  text-align: left;
  transition: background 0.2s;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: larger;
  text-decoration: underline;
  font-weight: bold;
}
.body {
  text-align: inherit;
  font-display: swap;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  background: whitesmoke;
}
</style>