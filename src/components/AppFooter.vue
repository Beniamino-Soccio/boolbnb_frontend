<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Logo -->
        <div class="footer-logo">
          <img src="/public/images/BoolBnb.png" alt="BoolBNB Logo" class="footer-logo-img" />
        </div>
        <!-- Links -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <router-link class="nav-link  fs-5" aria-current="page" :to="{ 'name': 'homepage' }">
                Home
              </router-link>            
              <router-link class="nav-link  fs-5" aria-current="page" :to="{ 'name': 'about' }">
                About
              </router-link>
              <router-link class="nav-link  fs-5" aria-current="page" :to="{ 'name': 'properties' }">
                Properties List
              </router-link>
          </ul>
        </div>
        <!-- Social -->
        <div class="footer-social">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="#" target="_blank" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" class="social-link">
              <i class="fab fa-twitter"></i>
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
        <p>&copy; 2024 BoolBNB. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
:root {
  --primary-color: #0d6efd;
  --secondary-color: #f8f9fa;
  --accent-color: #ffc107;
  --text-light: #e9ecef;
  --text-dark: #343a40;
}

.app-footer {
  background: var(--primary-color);
  background-color: #b7c4d8;
  color: var(--text-light);
  padding: 40px 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.15);
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.footer-logo {
  flex: 1;
  min-width: 200px;
}

.footer-logo-img {
  width: 120px;
  margin-bottom: 15px;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
}

.footer-links h4 {
  font-size: 18px;
  margin-bottom: 15px;
  text-transform: uppercase;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: var(--text-light);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--accent-color);
  text-decoration: underline;
}

.footer-social h4 {
  font-size: 18px;
  margin-bottom: 15px;
  text-transform: uppercase;
 
}

.footer-social .social-icons {
  display: flex;
  gap: 15px;
  
}

.social-link {
  font-size: 20px;
  
}

.social-link:hover {
  color: var(--accent-color);
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;  
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 15px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-logo {
    margin-bottom: 20px;
  }
}
</style>
