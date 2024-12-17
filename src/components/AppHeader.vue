<script>
import { store } from '../js/store';
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    }
  }
};
</script>

<template>
  <header class="app-header">
    <nav class="navbar navbar-expand-lg">
      <div class="container d-flex justify-content-between align-items-center">

        <figure class="logo-container mb-0">
          <img src="/images/BoolBnb.png" alt="logo BoolBnB" class="logo" />
        </figure>


        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-6 text-uppercase" :to="{ name: 'homepage' }"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link fw-bold fs-6 text-uppercase mx-3" :to="{ name: 'about' }"> About
              </router-link>
            </li>
          </ul>
        </div>


        <div class="right-header">
          <a :href="store.serverPath">
            <button class="rent-btn btn">dashboard</button>
            <!--<button v-else class="rent-btn btn">{{ store.user_name }}</button>-->
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  background: linear-gradient(90deg, #0056b1, #012a7c);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 2px 0;
  transition: all 0.3s ease;
}

.app-header:hover {
  background: linear-gradient(90deg, #003b7a, #00205a);
}

/* Logo */
.logo-container {
  margin: 0;
  animation: fadeIn 1.5s ease;
}

.logo {
  width: 90px;
  transition: transform 0.3s ease, filter 0.3s ease;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
}

.logo:hover {
  transform: scale(1.1) rotate(5deg);
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
}

/* Navigation */
.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
  animation: slideIn 1s ease;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  padding: 5px 15px;
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
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #ffd700;
  transition: all 0.4s ease;
}

.nav-link:hover::after {
  left: 0;
  width: 100%;
}

.nav-link:hover {
  color: #ffd700;
  transform: translateY(-2px);
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
  position: relative;
}

.rent-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}

.rent-btn:hover::after {
  opacity: 1;
}

.rent-btn:hover {
  background-color: #ffc107;
  box-shadow: 0 8px 20px rgba(255, 215, 0, 0.6);
  transform: translateY(-3px);
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive Styles */
@media (max-width: 768px) {
  .navbar-collapse {
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    margin-bottom: 10px;
    font-size: 16px;
  }

  .logo {
    width: 70px;
  }

  .rent-btn {
    font-size: 14px;
    padding: 8px 16px;
  }
}

@media (max-width: 576px) {
  .rent-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
