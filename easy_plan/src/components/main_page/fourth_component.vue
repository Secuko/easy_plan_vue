<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {
    goToRegistrationPage() {
      console.log('reroute');
      // this.$router.push('/registration');
      this.$router.push({ path: '/registration', replace: true });
      // this.$router.replace({ path: '/desk' })
    },
  }
}
</script>
<template>
  <div className='fourth-component-body'>
    <div className='fourth-component-content-image-wrapper'>
      <img src="../../assets/image/main_screen_fourth_component.png" alt='meeting'
        className='fourth-component-content-image' />
    </div>
    <div className='fourth-component-content-rigth-wrapper'>
      <div className='fourth-component-content-rigth-text-wrapper'>
        <p className='fourth-component-content-rigth-text'>
          Попробуй Easy Plan прямо сейчас
        </p>
      </div>
      <div className='fourth-component-content-rigth-button' @click="goToRegistrationPage()">
        <p className='fourth-component-content-rigth-button-text' to="login">
          Зарегистрироваться
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fourth-component-body {
  width: 100%;
  /* height: 481px; */
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rgba(197, 223, 188, 1);
}

.fourth-component-content-image-wrapper {
  display: flex;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 721px;
  height: 481px;
}

.fourth-component-content-rigth-wrapper {
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  /* width: 100%; */
  padding-top: 90px;
  padding-bottom: 90px;
  justify-content: space-between;
  align-items: center;
}

.fourth-component-content-rigth-text {
  font-size: 44px;
  color: black;
  font-weight: 500;
}

.fourth-component-content-rigth-button {
  height: 110px;
  width: 544px;
  padding: 23px 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background-color: rgba(168, 100, 255, 1);
  border: 3px solid black;
}

.fourth-component-content-rigth-button-text {
  font-size: 47px;
  text-align: center;
  font-weight: 400;
  text-decoration: none;
  color: rgba(247, 247, 247, 1);
}

@media only screen and (max-width: 1500px) {
  .fourth-component-content-rigth-text{
    font-size: 40px;
  }
}

@media only screen and (max-width: 1400px) {
  .fourth-component-body{
    justify-content: center;
  }

  .fourth-component-content-rigth-wrapper{
    padding-top: 40px;
    padding-bottom: 40px;
    justify-content: center;
    align-items: center;
  }

  .fourth-component-content-rigth-text{
    margin-bottom: 25px;
  }
}


@media only screen and (max-width: 650px) {

  .fourth-component-content-image-wrapper{
    width: 100%;
    height: auto;
  }

  .fourth-component-content-rigth-text{
    font-size: 34px;
  }

  .fourth-component-content-rigth-button{
    height: 80px;
    width: 430px;
  }

  .fourth-component-content-rigth-button-text{
    font-size: 34px;
  }
}

</style>
