<script>
import navbar from "./components/navbar.vue";
import hamburger from "./components/hamburger.vue";
import { translate } from "./translate.js";
import Sidebar from "./components/sidebar.vue";

export default {
  data() {
    return {
      /* 
        AbdiqodirDev.

        7/14/2024 14:04   

        for tsiklda chiqarmoqchi bo'lgan rasmlar chiqmadi. Mani fikrimcha tsikl to'g'ri ishlayapti va rasmni src ga to'g'ri manzil boryapti.
      
      */
      // cards: [
      //   {url: "/assets/images/png/card1.png"},
      //   {url: "/assets/images/png/card2.png"},
      //   {url: "/assets/images/png/card3.png"},
      //   {url: "/assets/images/png/card4.png"}
      // ]
    };
  },
  name: "HeroSection",
  components: {
    navbar,
    hamburger,
    Sidebar,
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
    // getCardImage(card) {
    //   try {
    //     console.log(card)
    //     return card;
    //   } catch (error) {
    //     console.log(card)
    //     console.error(card);
    //     return '';
    //   }
    // },
  },
};
</script>

<template>
  <navbar @languageChanged="handleLanguageChange" @toggle-modal="toggleModal" />
  <header>
    <div class="container"></div>
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

    <div class="container">
      <section class="section2">
        <div class="section2__content">
          <h1>{{ t("about_us") }}</h1>
          <p>{{ t("about_us-label") }}</p>

          <div class="section2__content-imgCollection">
            <div class="section2__content-imgCollection-card">
              <img src="./assets/images/png/card1.png" alt="" />
            </div>
            <div class="section2__content-imgCollection-card">
              <img src="./assets/images/png/card2.png" alt="" />
            </div>
            <div class="section2__content-imgCollection-card">
              <img src="./assets/images/png/card3.png" alt="" />
            </div>
            <div class="section2__content-imgCollection-card">
              <img src="./assets/images/png/card4.png" alt="" />
            </div>

            <!-- tsikl -->
            <!-- <div v-for="(item, index) in cards" :key="index" class="section2__content-imgCollection-card">
              <img :src="getCardImage(item.url)" alt="">
            </div> -->
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="section3">
        <h1>{{ t("section3_portfolio") }}</h1>
        <div class="section3__portfolio-content">
          <div class="card" v-for="n in 7" :key="n">
            <!-- <img src="./assets/images/png/card1.png" alt="Card Image" /> -->
            <div class="card-info">
              <p>Card {{ n }} Information</p>
            </div>
            <div class="more">
              {{ t("section3_more-txt") }}
              <span>
                <img src="./assets/images/png/right.png" alt="" />
              </span>
            </div>
          </div>
        </div>
        <button class="section3__btn">
          <span><img src="./assets/images/png/right.png" alt=""></span>
          {{ t("section3_btn-txt") }}
        </button>
      </section>
    </div>
  </main>
</template>

<style scoped lang="scss">
header {
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
    justify-content: space-between;
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

  .section2 {
    &__content {
      &-imgCollection {
        display: flex;
        width: 100%;
        border-radius: 2rem;
        overflow-y: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &-card {
          height: 30rem;
          position: relative;
          width: 25%;
          // width: 300px;
          transition: all 0.3s ease;
          flex-shrink: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        &-card:hover {
          width: 50%;
          transition: all 0.3s ease;
        }
      }
    }
  }

  .section3 {
    margin-top: 16rem;

    &__portfolio-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 16.5vw;
      grid-gap: 2rem;
      gap: 2rem;
    }
    .card:first-child {
      grid-row: 1 / 3;
    }
    .card:last-child {
      grid-column: 2 / -1;
    }
    .card {
      font-size: 1.4rem;
      position: relative;
      // width: 200px;
      // height: 400px;
      border-radius: 1rem;
      overflow: hidden;
      transition: transform 0.3s ease;
      background: url("./assets/images/png/card1.png");
      cursor: pointer;
      transition: background 0.3s ease; /* Add transition for smooth gradient change */
      &:hover {
        background: linear-gradient(
            160deg,
            #d1329193,
            rgba(255, 192, 203, 0) 36% 66%,
            #d132917c
          ),
          url("./assets/images/png/card1.png");
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .card-info {
        position: absolute;
        // top: 1rem;
        left: 1rem;
        color: white;
        // padding: 0.5rem 1rem;
        border-radius: 0.5rem;
      }
      .more {
        display: flex;
        align-items: center;
        gap: 1rem;
        position: absolute;
        bottom: 1rem;
        right: -50%;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: right 0.3s ease;
      }

      &:hover {
        .more {
          right: 1rem;
        }
      }
    }
    &__btn {
      cursor: pointer;
      text-transform: capitalize;
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #af1471,;
    }
  }
}
</style>
