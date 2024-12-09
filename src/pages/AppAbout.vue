<script>
export default {
  name: "AboutUs",
  data() {
    return {
      teamMembers: [
        {
          name: "Matteo Cota",
          role: "JR Full Stack Web Developer",
          image: "/public/images/Matteo.jpeg", 
        },
        {
          name: "Beniamino Soccio",
          role: "JR Full Stack Web Developer",
          image: "",
        },
        {
          name: "Daniele Checchin",
          role: "JR Full Stack Web Developer",
          image: "",
        },
        {
          name: "Armando Truglio",
          role: "JR Full Stack Web Developer",
          image: "",
        },
        {
          name: "Tommaso Panarotto",
          role: "JR Full Stack Web Developer",
          image: "",
        },
      ],
      
    };
  },
};
</script>

<template>
  <section class="about-us">
    <div class="container">
      <h1 class="about-title">About Us</h1>
      <p class="about-description">
        Welcome to <strong>BoolBNB</strong>, the leading platform for booking unique accommodations around the globe.
        Whether you’re looking for a cozy apartment in the city, a beachfront villa, or a mountain retreat, we’ve got you covered.
      </p>

      <div class="about-mission">
        <h2>Our Mission</h2>
        <p>
          At BoolBNB, our mission is to make every journey extraordinary by connecting travelers with exceptional stays and unforgettable experiences.
          We aim to inspire wanderlust and ensure that each trip is as unique as you are.
        </p>
      </div>

      <div class="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <span class="icon">🌟</span>
            <strong>Customer Focus:</strong> We prioritize our guests’ needs to ensure a seamless and memorable experience.
          </li>
          <li>
            <span class="icon">🚀</span>
            <strong>Innovation:</strong> We strive to constantly improve and deliver cutting-edge features.
          </li>
          <li>
            <span class="icon">🌍</span>
            <strong>Sustainability:</strong> We promote eco-friendly accommodations and responsible travel.
          </li>
        </ul>
      </div>

      <div class="about-team">
        <h2>Team</h2>
        <p>
          Behind BoolBNB is a passionate group of travel enthusiasts, developers, and designers dedicated to creating a platform that meets the needs of modern travelers.
        </p>
        <div class="team-gallery">
          <div
            v-for="(member, index) in teamMembers"
            :key="index"
            class="team-member"
          >
            <img :src="member.image || placeholderImage" :alt="`Photo of ${member.name}`" />
            <p>
              <strong>{{ member.name }}</strong><br />
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>

      <div class="about-footer">
        <p>Thank you for choosing BoolBNB. We look forward to hosting you!</p>
      </div>
    </div>
  </section>
</template>



<style scoped>
.about-us {
  padding: 40px 20px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  color: #343a40;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-title {
  font-size: 36px;
  margin-bottom: 20px;
  color: #007bff;
}

.about-description {
  font-size: 18px;
  margin-bottom: 40px;
  line-height: 1.6;
}

.about-mission,
.about-values,
.about-team {
  margin-bottom: 30px;
}

h2 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #6c757d;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
  font-size: 16px;
  text-align: left;
  padding-left: 20px;
  position: relative;
}


.team-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center;
}

.team-member {
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

.team-member img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 2px solid #007bff;
}

.about-footer {
  margin-top: 30px;
  font-size: 16px;
  font-style: italic;
  color: #6c757d;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
