<template>
  <header>
    <h2>PostsData</h2>
  </header>
  <base-card>
    <div id="user">
      <div id="posts">
        <!-- <li v-for="user in users" :key="user.userId"> -->
        <ul v-for="post in posts" :key="post.userId">
            <a><strong>@{{post.user.username}}({{post.user.name}})</strong></a>
          <!-- <li><strong>{{ user.username }}@{{ user.name }}</strong></li> -->
          <!-- <li id="item"><strong>UserId</strong> : {{ post.userId }}</li> -->
          <li id="item"><strong>Id</strong> : {{ post.id }}</li>
          <li id="title"><strong>Title</strong> : {{ post.title }}</li>
          <li><strong>Body</strong> : {{ post.body }}</li>
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
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        this.users = response.data;

        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {

            response.data.map((post) => {
                post.user = this.users.find((user) => user.id === post.userId)
            })
            this.posts = response.data;
        })
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

#title {
  color: blue;
  font-size: larger;
  font-family: Georgia, "Times New Roman", Times, serif;
  text-decoration: underline;
  font-weight: bold;
}
#item {
  text-decoration-style: inherit;
  color: red;
}
</style>