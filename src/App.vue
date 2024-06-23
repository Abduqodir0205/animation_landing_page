<script>
import navbar from "./components/navbar.vue";
import hamburger from "./components/hamburger.vue";
import { translate } from "./translate.js";
export default {
  name: "HeroSection",
  components: {
    navbar,
    hamburger,
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
  <header>
    <div class="container">
      <navbar @languageChanged="handleLanguageChange" />
    </div>
    <div class="hero">
      <div class="stars"></div>
      <div class="moon"></div>
      <div class="mountains"></div>
      <div class="container">
        <div class="illuminated-item">
          <h2 class="hero-heading">{{ t("about_us") }}</h2>
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
    <section>
      <div>
        <h1>
          {{ t("section1_h1") }}
        </h1>
        <p>{{ t("section1_p") }}</p>
        <div>
          <button>{{ t("section1_phone") }}</button>
          <button>{{ t("section1_acc") }}</button>
        </div>
      </div>
      <div></div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  // overflow: hidden;
  .mouse_warn {
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 45%;
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
    filter: drop-shadow(0 0 45px #ffffff4d);
  }

  .mountains {
    position: absolute;
    z-index: 3;
    bottom: -80px;
    left: 0;
    width: 100%;
    height: 350px;
    background: url("./assets/images/png/mountains.png") no-repeat bottom center /
        cover,
      linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(9, 9, 121, 0) 40%);
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
</style>
