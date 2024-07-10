<script>
import navbar from "./components/navbar.vue";
import hamburger from "./components/hamburger.vue";
import { translate } from "./translate.js";
import Sidebar from "./components/sidebar.vue"

export default {
  data() {
    return {
    }
  },
  name: "HeroSection",
  components: {
    navbar,
    hamburger,
    Sidebar
  },
  mounted() {
    window.scrollTo(0, 100);
  },
  methods: {
   
    handleLanguageChange(language) {
      this.$forceUpdate(); // Re-render the component to update translations
    },
    t(key) {
      return translate(key);
    },
  },
};
</script>

<template>
  <navbar
    @languageChanged="handleLanguageChange"
    @toggle-modal="toggleModal" 
  />
  <header>
    <div class="container">
    </div>
    <div class="hero">
      <div class="stars"></div>
      <div class="moon"></div>
      <div class="mountains"></div>
      <div class="container">
        <div class="illuminated-item">
          <h2 class="hero-heading ">{{ t("about_us") }}</h2>
        </div>
      </div>
      <div class="spotlight" ref="spotlight"></div>
      <div class="mouse_warn">
        <img src="./assets/images/png/mouse.png" alt="" />
        <p>{{ t("scroll_down") }}</p>
      </div>
    </div>
  </header>
  <main>
    <div class="container">
      <section class="section1">
        <div class="section1__box">
          <h1>
            {{ t("section1_h1") }}
          </h1>
          <p>{{ t("section1_p") }}</p>
          <div>
            <button>
              <span
              ><img src="./assets/images/png/telephone.png" alt=""
              /></span>
              {{ t("section1_phone") }}
            </button>
            <button>
              <span><img src="./assets/images/png/right.png" alt="" /></span>
              {{ t("section1_acc") }}
            </button>
          </div>
        </div>
        <div class="section1__box2">
          <img src="./assets/images/png/section1_img.png" alt="" />
        </div>
      </section>
    </div>
    

  </main>
</template>

<style scoped lang="scss">
header{
  // overflow: hidden;
  background-image: url("./assets/images/png/stars.png");
}
.hero {
  position: relative;
  width: 100%;
  // height: 90VH;
  height: calc(100vh - 70px);
  // overflow: hidden;
  .mouse_warn {
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 44%;
    z-index: 4;
    color: white;
  }
  .moon {
    position: absolute;
    z-index: 2;
    width: 350px;
    height: 350px;
    background: url("./assets/images/png/moon.png") no-repeat center center /
      contain;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    animation: riseMoon 2.2s ease-out forwards,
      rotateMoon 8s linear infinite 0.4s;
    filter: drop-shadow(0 0 25px #ffffff4d);
  }

  .mountains {
    position: absolute;
    z-index: 3;
    bottom: -80px;
    left: 0;
    width: 100%;
    height: 350px;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 120%
      ),
      url("./assets/images/png/mountains.png") no-repeat bottom center / cover;
  }

  .illuminated-item {
    position: relative;
    overflow: hidden;
    text-align: center;
    z-index: 1;
    bottom: 60px;
    .hero-heading {
      color: #ffffff70;
      font-family: "Georgia", serif;
      text-transform: uppercase;
      font-size: 120px;
      font-weight: bold;
      letter-spacing: 1rem;
      padding: 0 3rem;
      transition: text-shadow 0.3s ease;
      position: relative;
      z-index: 4; // Make sure it is above the spotlight
    }
    .hero-heading {
      background: 50% 100% / 50% 50% no-repeat
        radial-gradient(ellipse at bottom, #ffffff62, transparent, transparent);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      // font-size: 10vw;
      font-family: "Source Sans Pro", sans-serif;
      animation: reveal 3000ms ease-in-out forwards 200ms,
        glow 2500ms linear infinite 2000ms;

      @keyframes reveal {
        80% {
          letter-spacing: 8px;
        }
        100% {
          background-size: 300% 300%;
        }
      }
    }
  }

  .hero-heading:hover ~ .spotlight {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

@keyframes riseMoon {
  to {
    bottom: 5%;
  }
}

@keyframes rotateMoon {
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(360deg);
  }
}
main {
  margin-top: 10rem;

  .section1 {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    &__box {
      width: 50vw;
      h1 {
        font-size: 2rem;
        font-weight: 600;
      }
      p {
        font-size: 1.4rem;
        color: #b0b0b0;
      }
      div {
        display: flex;
        align-items: center;
        gap: 1.6rem;
      }
    }
    &__box2 {
      width: 30vw;
      // height: 400  px;
      img {
        width: inherit;
        height: inherit;
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      border-radius: 10px;
      padding: 6px 15px;
      background-color: transparent;
      border: 1px solid white;
      color: white;
      font-size: 18px;
      cursor: pointer;
      transition: background-color 0.3s ease;
      span {
        img {
          opacity: 0.5;
        }
      }
    }

    button:hover {
      background-color: #3836364b;
    }
  }
}
</style>
