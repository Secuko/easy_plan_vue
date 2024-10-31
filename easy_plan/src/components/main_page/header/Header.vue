<script setup>
import { UserCircleIcon } from "@heroicons/vue/24/outline";
</script>

<script>
export default {
  name: '',
  props: {},
  data() {
    return {
      panelItems: [
        {
          id: 1,
          isOpen: false,
          title: "Продукт",
          listOfChildItems: ["О продукте", "Обучение", "Видеокурс"],
        },
        {
          id: 2,
          isOpen: false,
          title: "Тарифы",
          listOfChildItems: ["Free", "Standart", "No limits"],
        },
        {
          id: 3,
          isOpen: false,
          title: "Компания",
          listOfChildItems: ["Лицензия", "Сотрудники",],
        },
      ],
      listIsOpen: true,
    }
  },
  computed: {},
  methods: {
    changeListStatus(id) {
      this.panelItems.forEach(item => {
        if (item.id == id) {
          item.isOpen = !item.isOpen;
        }
      });
      // return this.listIsOpen = !this.listIsOpen;
    },
    getCurrentState(id) {
      this.panelItems.forEach(item => {
        if (item.id == id) {
          return (item.isOpen) ? "visible" : "hidden";
        }
      });
    },
    goToLoginPage() {
      console.log('reroute');
      this.$router.push('/login');
    },
  }
}
</script>

<template>
  <header className="header">
    <div className="logo-panel-wrapper">
      <div className="logo-wrapper">
        <img className="logo" src="../../../assets/image/logo.png" alt="easy plan" />
      </div>
      <div className="action-panel-wrapper">
        <div @click="changeListStatus(item.id)" v-for="item in panelItems" className="action-panel-item" :key="item.id">
          <p className="action-panel-item-text">{{ item.title }}</p>
          <!-- {% if item.isOpen %} -->
          <div className="dropdown-menu" v-if="item.isOpen" :style="{ visibility: getCurrentState(item.id) }">
            <div>
              <div v-for="elem in item.listOfChildItems" className="dropdownmenu-item">{{ elem }}</div>
            </div>
          </div>
          <!-- {% endif %} -->
        </div>
      </div>
    </div>
    <div className="login-icon" @click="goToLoginPage()">
      <UserCircleIcon class="h-6 w-6 text-blue-500" />
    </div>
  </header>
</template>

<style scoped>
.header {
  align-items: center;
  justify-content: space-between;
  padding-right: 25px;
  padding-left: 14px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}

.logo-panel-wrapper {
  display: flex;
  align-items: center;
}

.logo {
  height: 77px;
  width: 285px;
  margin-bottom: 11px;
}

.action-panel-wrapper {
  z-index: 999;
  margin-left: 63px;
  width: 553px;
  height: 60px;
  display: flex;
  flex-direction: row;
  font-size: 35px;
}

.action-panel-item {
  position: relative;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;
  border-bottom: 3px solid rgba(247, 247, 247, 1);
}

.action-panel-item:hover {
  border-bottom: 3px solid rgba(107, 107, 107, 1);
}

.dropdown-menu {
  position: absolute;
  left: 0;
  right: 0;
  top: 60px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: rgba(107, 107, 107, 1);
  padding-bottom: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
}

.dropdownmenu-item {
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 25px;
  border-bottom: 1px solid rgba(107, 107, 107, 1);
  color: rgba(247, 247, 247, 1);
}

.dropdownmenu-item:hover {
  border-bottom: 1px solid rgba(247, 247, 247, 1);
}


.login-icon {
  width: 67px;
  height: 67px;
  padding-bottom: 11px;
}

.check-icon {
  width: 25px;
  height: 25px;
  position:relative;
  right: 25px;
  top: 25px;
}

.check-icon-1 {
  width: 40px;
  height: 40px;
  position:relative;
  right: 40px;
  top: 45px;
}



@media only screen and (max-width: 1200px) {

  /* header */
  .logo {
    height: 54px;
    width: 200px;
  }

  .action-panel-wrapper {
    width: 390px;
    height: 55px;
    font-size: 28px;
  }

  .action-panel-item {
    padding-top: 5px;
  }

  .dropdown-menu {
    top: 50px;
  }

  .dropdownmenu-item {
    font-size: 21px;
  }

  .login-icon {
    scale: 0.8;
  }
}

@media only screen and (max-width: 900px) {
  .logo {
    display: none;
  }

  .action-panel-wrapper {
    margin-left: 0px;
  }
}

@media only screen and (max-width: 650px) {

  .action-panel-wrapper {
    height: 50px;
    font-size: 27px;
  }

  .action-panel-item {
    margin-left: 10px;
    margin-right: 10px;
    padding-top: 5px;
  }

  .dropdown-menu {
    top: 40px;
  }

  .dropdownmenu-item {
    font-size: 18px;
  }

  .login-icon {
    scale: 0.75;
  }

}


</style>
