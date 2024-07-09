<template>
  <div id="modal-container" :class="{ six: isModalOpen }">
    <div class="modal-background">
      <div class="modal">
        <h2>Modal Title</h2>
        <p>Modal Content</p>
        <ul>
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
      </div>
    </div>
  </div>
</template>

<script>
import { translate, getCurrentLanguage } from "../translate";

export default {
  name: "Modal",
  
  data() {
    return {
      isModalOpen: false,
      selectedLanguage: getCurrentLanguage(),
    };
  },
  methods: {
    t(key) {
      return translate(key);
    },
  },
  watch: {
    isModalOpen(newValue) {
      if (newValue) {
        // Re-render the modal content when the modal is opened
        this.selectedLanguage = getCurrentLanguage();
      }
    },
  },
  created() {
    this.$root.$on("languageChanged", (newLanguage) => {
      this.selectedLanguage = newLanguage;
    });
  },
};
</script>

<style lang="scss">
#modal-container {
  position: fixed;
  display: table;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: scale(0);
  z-index: 1;

  &.six {
    transform: scale(1);
    .modal-background {
      background: rgba(0, 0, 0, 0);
      animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      .modal {
        background-color: transparent;
        animation: modalFadeIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        h2, p {
          opacity: 0;
          position: relative;
          animation: modalContentFadeIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        }
        .modal-svg {
          rect {
            animation: sketchIn 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          }
        }
      }
    }
    &.out {
      animation: quickScaleDown 0s 0.5s linear forwards;
      .modal-background {
        animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
        .modal {
          animation: modalFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          h2, p {
            animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
          }
          .modal-svg {
            rect {
              animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
          }
        }
      }
    }
  }

  .modal-background {
    display: table-cell;
    background: rgba(0, 0, 0, 0.8);
    text-align: center;
    vertical-align: middle;
    .modal {
      background: white;
      padding: 50px;
      display: inline-block;
      border-radius: 3px;
      font-weight: 300;
      position: relative;
      h2 {
        color: black;
        font-size: 25px;
        line-height: 25px;
        margin-bottom: 15px;
      }
      p {
        font-size: 18px;
        line-height: 22px;
      }
      .modal-svg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border-radius: 3px;
        rect {
          stroke: #f33232;
          stroke-width: 2px;
          stroke-dasharray: 778;
          stroke-dashoffset: 778;
        }
      }
    }
  }
}

@keyframes fadeIn {
  0% {
    background: rgba(0, 0, 0, 0);
  }
  100% {
    background: rgba(0, 0, 0, 0.7);
  }
}

@keyframes fadeOut {
  0% {
    background: rgba(0, 0, 0, 0.7);
  }
  100% {
    background: rgba(0, 0, 0, 0);
  }
}

@keyframes modalFadeIn {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: white;
  }
}

@keyframes modalFadeOut {
  0% {
    background-color: white;
  }
  100% {
    background-color: transparent;
  }
}

@keyframes modalContentFadeIn {
  0% {
    opacity: 0;
    top: -20px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
}

@keyframes modalContentFadeOut {
  0% {
    opacity: 1;
    top: 0px;
  }
  100% {
    opacity: 0;
    top: -20px;
  }
}

@keyframes sketchIn {
  0% {
    stroke-dashoffset: 778;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes sketchOut {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 778;
  }
}

@keyframes quickScaleDown {
  0% {
    transform: scale(1);
  }
  99.9% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
