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
  <header class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container d-flex justify-content-between align-items-center">      
        <figure class="logo-container m-0">
          <img src="/public/images/BoolBnb.png" alt="logo BoolBnB" id="logo-header" class="logo"/>
        </figure>       
        <div
          class="collapse navbar-collapse d-flex justify-content-center align-items-center"
          id="navbarNav" >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-5 text-uppercase" aria-current="page":to="{ name: 'homepage' }"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-5 text-uppercase mx-4" aria-current="page" :to="{ name: 'about' }"> About </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link fw-bold fs-5 text-uppercase" aria-current="page" :to="{ name: 'properties' }"> Properties List </router-link>
            </li>
          </ul>
        </div>
        
        <div class="right-header d-flex justify-content-center align-items-center">
          <button class="rent-btn btn">Rent with BnB</button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  background: linear-gradient(90deg, #007bff, #0046d5);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}


.app-header:hover {
  background: linear-gradient(90deg, #0056b3, #002d80);
}


.logo-container {
  margin: 0;
}
.logo {
  width: 90px;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
}
.logo:hover {
  transform: scale(1.2);
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
}


.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
}

.nav-item {
  position: relative;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: 600;
  transition: all 0.3s ease;
  border-radius: 5px;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: #ffffff;
  bottom: 0;
  left: 50%;
  transition: all 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
}

.nav-link:hover {
  color: #ffd700;
}

.rent-btn {
  background-color: #ffd700;
  color: #0046d5;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(255, 215, 0, 0.4);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.rent-btn:hover {
  background-color: #ffc107;
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.6);
  transform: translateY(-3px);
}


@media (max-width: 768px) {
  .navbar-collapse {
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    margin-bottom: 15px;
    font-size: 18px;
  }

  .logo {
    width: 70px;
  }

  .rent-btn {
    font-size: 14px;
    padding: 8px 15px;
  }
}
</style>