<script>
import axios from 'axios';
import { store } from '../js/store.js'

import BasicFilter from '../components/BasicFilter.vue';
import SponsoredList from '../components/SponsoredList.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    BasicFilter,
    SponsoredList
  },
  methods: {
  }
}
</script>

<template>
  <div class="homepage-container">

    <div class="background-overlay"></div>

    <div class="container text-center">

      <div class="row">
        <div class="col-12 my-5">
          <h1 class="fw-bold text-center animated-title">Welcome to BoolBnb</h1>
          <p class="tagline">
            Find your next unique stay around the world!!
          </p>
        </div>
      </div>
      <BasicFilter :visible="false" />
      <SponsoredList />
    </div>
  </div>
</template>

<style scoped>
/* Container generale */
.homepage-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa, #007bff);
  color: white;
  text-align: center;
  overflow: hidden;
}

/* Sfondo animato */
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("https://www.transparenttextures.com/patterns/circles.png") repeat;
  animation: moveBackground 10s linear infinite;
  z-index: -1;
  opacity: 0.2;
}

@keyframes moveBackground {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 100% 100%;
  }
}

/* Titolo */
.animated-title {
  font-size: 48px;
  color: #FFD700;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  animation: fadeInDown 1s ease-in-out;
}

.tagline {
  font-size: 20px;
  color: #FFD700;
  font-style: italic;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Logo */
.logo-container {
  animation: zoomIn 1.5s ease;
}

.homepage-logo {
  max-width: 200px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.homepage-logo:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.3);
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>