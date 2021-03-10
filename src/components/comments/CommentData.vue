<template>
<header>
    <h2>Comment Data</h2>
</header>
    <base-card>
    <div>
        <ul v-for="comment in comments" :key="comment.postId">
            <li id="item"><strong>PostId</strong> : {{ comment.postId }}</li>
            <li><strong>Id</strong> : {{ comment.id }}</li> 
            <li><strong>Name</strong> : {{ comment.name }}</li>  
            <li id="email"><strong>Email</strong> : {{ comment.email }}</li>
            <li><strong>Body</strong> : {{ comment.body }}</li>
        </ul>
    </div>
    </base-card>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            comments : null
        };
    },
    mounted() {
            axios.get('https://jsonplaceholder.typicode.com/comments/').then(response =>{
            console.log(response.data);
            this.comments=response.data;
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

#email{
    color: blue;
}
#item {
    text-decoration-style: inherit;
    color: red;
}
</style>