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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-4" aria-current="page" :to="{ 'name': 'homepage' }">
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-4" aria-current="page" :to="{ 'name': 'about' }">
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
      </div>
    </nav>
  </header>
</template>

<style scoped></style>