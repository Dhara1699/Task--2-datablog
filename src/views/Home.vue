<template>
  <section>
    <base-card>
    <div class="home">
      <h1>Welcome to Home Page</h1>
      <div class="card border-success mb-3" style="max-width: 100%;">
        <div class="card-header bg-transparent border-success">
            <base-button>
              <router-link to="/posts">sunt aut facere repellat provident occaecati excepturi optio reprehenderit</router-link>
            </base-button>
        </div>
        <div class="card-body text-success">
          <h5 class="card-title">
            <base-button>
              <router-link to="/comment">
                comments
              </router-link>
            </base-button>
          </h5>
          <p class="card-text"> write Some comment here</p>
        </div>
        <div class="card-footer bg-transparent border-success">
          <base-button>  
            <router-link to="/user">Bret(Leanne Graham)</router-link>
          </base-button>
        </div>
      </div>
    </div>
    </base-card>
  </section>
</template>

<script>
// @ is an alias to /src
</script>

<style scoped>
a {
  font-weight: bold;
  color: #2c3e50;
}
 a.router-link-exact-active {
  color: #b94242;
}
</style>
