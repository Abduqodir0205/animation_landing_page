<template>
 <div class="container">
  <div id="modal-container" class="six">
    <div class="modal" >
      <ul class="black-list ">
        <li >{{ t("about_us") }}</li>
        <li>{{ t("services") }}</li>
        <li>{{ t("portfolio") }}</li>
        <li>{{ t("vacancies") }}</li>
        <li>{{ t("blog") }}</li>
      </ul>
    </div>
  </div>
 </div>
</template>

<script>
import { translate } from "../translate";

export default {
  name: "Sidebar",
  props: {
    language: {
      type: String,
      required: true,
    },
    
  },
  computed: {
    t() {
      return (key) => translate(key);
    },
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
  transition: 1.3s ease;
  z-index: 8;
  overflow: hidden; /* Modal ichidagi elementlar ko'rinmasligi uchun */
  transition: transform 0.5s ease-in-out;

  &.six {
    transform: scale(1);

    .modal {
      background-color: transparent;
      animation: modalFadeIn 0.5s forwards;
    }
  }

  &.out {
    .modal {
      animation: modalFadeOut 0.5s forwards;
    }
  }

  .modal {
    width: 100%;
    background: white;
    display: inline-block;
    border-radius: 3px;
    font-weight: 300;
    position: absolute;
    top: -80px;
    z-index: 9;
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
  }
}

.black-list {
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: space-evenly;
  li {
    color: black;
  }
}

@keyframes modalFadeIn {
  to {
    background-color: white;
    top: 80px;
  }
}

@keyframes modalFadeOut {
  to {
    background-color: white;
    top: -80px;
  }
}
</style>
