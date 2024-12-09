<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-section footer-logo">
          <img src="/images/BoolBnb.png" alt="BoolBnB Logo" class="footer-logo-img" />
        </div>


        <div class="footer-section footer-links">
          <h4 class="footer-title">Quick Links</h4>
          <ul>
            <li>
              <router-link class="footer-link" :to="{ name: 'homepage' }">Home</router-link>
            </li>
            <li>
              <router-link class="footer-link" :to="{ name: 'about' }">About</router-link>
            </li>
            <li>
              <router-link class="footer-link" :to="{ name: 'properties' }">Properties List</router-link>
            </li>
          </ul>
        </div>


        <div class="footer-section footer-social">
          <h4 class="footer-title">Follow Us</h4>
          <div class="social-icons">
            <a href="#" target="_blank" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" class="social-link">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" target="_blank" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank" class="social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>


      <div class="footer-bottom">
        <p>&copy; 2024 BoolBnB. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
:root {
  --primary-color: #0056b3;
  --secondary-color: #f8f9fa;
  --accent-color: #ffc107;
  --text-light: #e9ecef;
  --text-dark: #343a40;
}


.app-footer {
  background: linear-gradient(135deg, var(--primary-color), #003580);
  color: var(--text-light);
  padding: 40px 20px;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
}

.footer-logo-img {
  width: 150px;
  margin-bottom: 10px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
}

.footer-logo-img:hover {
  transform: scale(1.1);
}

.footer-description {
  font-size: 14px;
  margin-top: 10px;
  line-height: 1.6;
}

.footer-title {
  font-size: 18px;
  margin-bottom: 15px;
  text-transform: uppercase;
  color: var(--text-light);
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-link {
  color: var(--text-light);
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--accent-color);
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-link {
  font-size: 20px;
  color: var(--text-light);
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-link:hover {
  color: var(--accent-color);
  transform: scale(1.2);
}

.footer-bottom {
  text-align: center;
  font-size: 14px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
}


@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    text-align: center;
  }
}
</style>
