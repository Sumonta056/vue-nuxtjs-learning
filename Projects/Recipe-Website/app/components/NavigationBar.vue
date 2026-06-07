<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  navItems: {
    type: Array,
    required: true,
  },
});

const store = useStore();

const logout = () => {
  store.deleteUser();
  router.push("/login");
};
</script>

<template>
  <nav class="navbar">
    <NuxtLink to="/" class="nav-link" v-if="navItems.includes('Home')"
      >Home</NuxtLink
    >

    <NuxtLink to="/recipe" class="nav-link" v-if="navItems.includes('Recipes')"
      >Recipes</NuxtLink
    >

    <NuxtLink
      to="/Shopping-List"
      class="nav-link"
      v-if="navItems.includes('Shopping List')"
      >Shopping List</NuxtLink
    >

    <NuxtLink to="/Profile" class="nav-link" v-if="navItems.includes('Profile')"
      >Profile</NuxtLink
    >

    <button
      @click="logout"
      class="nav-link nav-link--logout"
      v-if="navItems.includes('Logout') && store.user.username != ''"
    >
      Logout
    </button>

    <NuxtLink
      to="/Login"
      class="nav-link nav-link--logout"
      v-if="navItems.includes('Login') & (store.user.username == '')"
      >Login</NuxtLink
    >
  </nav>
</template>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  flex-wrap: wrap;
}

.nav-link {
  padding: 0.75rem 1.5rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.3s ease;
}

.nav-link:hover::before {
  left: 0;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  background: rgba(255, 255, 255, 0.25);
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.nav-link--logout {
  margin-left: auto;
  background: rgba(220, 53, 69, 0.3);
}

.nav-link--logout:hover {
  background: rgba(220, 53, 69, 0.5);
}

/* Responsive design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 0.875rem 1rem;
  }

  .nav-link--logout {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.75rem;
  }

  .nav-link {
    font-size: 0.875rem;
    padding: 0.75rem 0.875rem;
  }
}
</style>

