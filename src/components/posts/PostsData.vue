<template>
<header>
    <h2>PostsData</h2>
</header>
    <base-card>
        <div>
            <ul v-for="post in posts"  :key="post.userId">
                <li id="item"><strong>UserId</strong> : {{post.userId}}</li>
                <li><strong>Id</strong> : {{ post.id }}</li>
                <li id="title"><strong>Title</strong> : {{ post.title }}</li>
                <li><strong>Body</strong> : {{ post.body }}</li> 
            </ul>
        </div>
    </base-card>

</template>

<script>
import axios from 'axios';
window.axios = require('axios');
export default {
    data() {
        return {
            posts : null,
        }; 
    },
    mounted: function() {
        const headers = { "Content-Type": "application/json" };
        axios.get('https://jsonplaceholder.typicode.com/posts' , { headers }).then(response =>
        {
            console.log(response.data);
            this.posts=response.data;
        }) 
    }
}   
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
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

#title{
    color: blue;
}
#item {
    text-decoration-style: inherit;
    color: red;
}
</style>