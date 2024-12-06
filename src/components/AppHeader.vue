<script>
export default {
  name: "AppHeader",
  data() {
    return {

    }
  }
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container d-flex justify-content-between align-items-center">

        <figure>
          <img src="/public/images/BoolBnb.png" alt="logo BoolBnB" id="logo-header">
        </figure>
        <div class="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-4" aria-current="page" :to="{ 'name': 'homepage' }">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-4 mx-3" aria-current="page" :to="{ 'name': 'about' }">
                About
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-4" aria-current="page" :to="{ 'name': 'properties' }">
                Properties List
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right-header d-flex justify-content-center align-items-center">
          <h5>
            Rent with BnB
          </h5>
        </div>

      </div>
    </nav>
  </header>
</template>

<style scoped>
#logo-header {
  width: 80px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
}
</style>