<template>
<h2>This Page Belongs To The UserData</h2>
    <base-card>
    <div>
        <li v-for="user in users" :key="user.id">
            {{ user.name }} - {{ user.username }}
        </li>
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