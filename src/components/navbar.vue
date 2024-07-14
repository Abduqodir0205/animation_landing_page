<template>
  <div class="parent_nav">
    <div class="container">
      <nav>
        <div class="menu">
          <hamburger @click="toggleModal" />
        </div>
        <div class="logo">Menga</div>
        <ul class="nav-links">
          <li>
            <a href="#">{{ t("about_us") }}</a>
          </li>
          <li>
            <a href="#">{{ t("services") }}</a>
          </li>
          <li>
            <a href="#">{{ t("portfolio") }}</a>
          </li>
          <li>
            <a href="#">{{ t("vacancies") }}</a>
          </li>
          <li>
            <a href="#">{{ t("blog") }}</a>
          </li>
        </ul>
        <div class="contact-info">
          <a href="tel:+998991234567" class="phone-number">+998 99 123 45 67</a>
          <div class="language-selector-wrapper">
            <button class="language-selector" @click="toggleDropdown">
              <img
                src="../assets/images/png/global.png"
                alt="Globe Icon"
                class="globe-icon"
              />
              <span>{{ selectedLanguage }}</span>
            </button>
            <ul v-if="showDropdown" class="language-dropdown">
              <li @click="changeLanguage('uz')">UZ</li>
              <li @click="changeLanguage('ru')">RU</li>
              <li @click="changeLanguage('en')">EN</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <teleport to="body">
      <Sidebar v-if="isModalOpen" :language="selectedLanguage"  :isOpen="isModalOpen" />
    </teleport>
  </div>
</template>

<script>
import { setLanguage, translate, getCurrentLanguage } from "../translate";
import hamburger from "./hamburger.vue";
import Sidebar from "./sidebar.vue";

export default {
  name: "Navbar",
  data() {
    return {
      isModalOpen: false,
      showDropdown: false,
      selectedLanguage: getCurrentLanguage(),
    };
  },
  components: {
    hamburger,
    Sidebar,
  },
  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    changeLanguage(language) {
      setLanguage(language);
      this.selectedLanguage = language;
      this.showDropdown = false;
      this.$emit("languageChanged", language);
    },
    t(key) {
      return translate(key);
    },
  },
};
</script>

<style scoped lang="scss">
.parent_nav {
  background: url(../assets/images/png/stars.png);
  position: sticky;
  top: 0;
  z-index: 99;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background: transparent;
  .menu {
    display: none; 
  }
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;

  li {
    a {
      color: #ffffffa1;
      text-decoration: none;
      font-size: 1.04rem;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 20px;

  .phone-number {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
  }

  .language-selector-wrapper {
    position: relative;

    .language-selector {
      background: transparent;
      border: 1px solid #fff;
      border-radius: 10px;
      padding: 10px 15px;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      .globe-icon {
        width: 20px;
        height: 20px;
      }
      span {
        font-size: 16px;
      }
    }

    .language-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      background: #333;
      border: 1px solid #fff;
      border-radius: 10px;
      margin-top: 5px;
      list-style: none;
      padding: 0;
      display: flex;
      flex-direction: column;

      li {
        padding: 10px 20px;
        cursor: pointer;
        color: #fff;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
}
</style>
