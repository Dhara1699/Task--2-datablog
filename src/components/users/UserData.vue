<template>
<header>
    <h2>User Data</h2>
</header>
    <base-card>
    <div>
        <ul v-for="user in users" :key="user.id">
            <li id="item"><strong>Id</strong> : {{ user.id }}</li>
            <li><strong>Name</strong> : {{ user.name }}</li>
            <li><strong>UserName</strong> : {{ user.username }}</li>
            <li id="email"><strong>Email</strong> : {{ user.email }}</li>
            <li><strong>ADDRESS</strong> : {{ user.address.street }} , 
                          {{ user.address.suite }} ,
                          {{ user.address.city }} ,
                          {{ user.address.zipcode }} ,
                          {{ user.address.geo.late }} ,
                          {{ user.address.geo.lng }} .
            </li>
            <li><strong>Phone</strong> : {{ user.phone }}</li>
            <li id="website"><strong>Website</strong> : {{ user.website }}</li>
            <li> <strong>COMPANY</strong> : {{ user.company.name }} ,
                          {{ user.company.catchPhrase }} ,
                          {{ user.company.bs }}.  
            </li>
        </ul>
    </div>
    </base-card>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            users : null
        };
    },
    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response =>
        {
            console.log(response.data);
            this.users = response.data;
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
#website {
    color: rgb(30, 153, 30);
}
</style>