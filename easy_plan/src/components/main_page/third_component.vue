<script setup>
import { CheckIcon } from "@heroicons/vue/24/outline";
</script>

<script>
export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {
            listItems: ["Управляй задачами", "Работай в команде", "Создавай колонки и темы", "Составляй цепочки"],
        }
    },
    computed: {},
    methods: {}
}
</script>
<template>
    <div className='third-component-body'>
        <div className='third-component-main-content-wrapper'>
            <div className='third-component-content-image-wrapper'>
                <img src="../../assets/image/Frame 21-1.png" alt="pic"
                    className='third-component-content-image-violetTicket third-component-content-image' />
                <img src="../../assets/image/Frame 22.png" alt="pic"
                    className='third-component-content-image-yellowTicket third-component-content-image' />
                <img src="../../assets/image/Frame 21.png" alt="pic"
                    className='third-component-content-image-blueTicket third-component-content-image' />
                <img src="../../assets/image/Vector 1.png" alt="pic"
                    className='third-component-content-image-vectors1 third-component-content-image' />
                <img src="../../assets/image/Vector 2.png" alt="pic"
                    className='third-component-content-image-vectors2 third-component-content-image' />
            </div>
            <div className='third-component-content-list-wrapper'>
                <div v-for="elem in listItems" className='third-component-content-list-item' key={{elem}}>
                    <p>
                    <div class="check-icon-1">
                        <CheckIcon />
                    </div>
                    {{ elem }}
                    </p>
                </div>

            </div>
        </div>
        <div className='third-component-header-wrapper'>
            <p className='third-component-header-text'>
                Нужна доска для командной работы?
            </p>
        </div>
    </div>
</template>
<style scoped>

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

.third-component-body {
    padding-bottom: 34px;
    width: 100%;
    /* height: 828px; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .third-component-main-content-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: space-between;
    align-items: center;
  }

  .third-component-content-image-wrapper {
    width: 775px;
    height: 632px;
    flex-grow: 0;
    flex-shrink: 0;
    position: relative;
  }

  .third-component-content-image {
    position: absolute;
    left: 0;
  }

  .third-component-content-image-violetTicket {
    left: 183px;
    top: 62px;
  }

  .third-component-content-image-yellowTicket {
    left: 214px;
    top: 414px;
  }

  .third-component-content-image-blueTicket {
    left: 519px;
    top: 148px;
  }

  .third-component-content-image-vectors1 {
    left: 0px;
    top: 97px;
  }

  .third-component-content-image-vectors2 {
    left: 5px;
    top: 2px;
  }

  .third-component-content-list-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    /* width: 40%; */
    padding-left: 40px;
    height: 100%;
  }

  .third-component-content-list-item {
    font-size: 40px;
    font-weight: 400;
    margin-bottom: 35px;
  }

  .third-component-header-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 63px;
  }

  .third-component-header-text {
    font-size: 52px;
    font-weight: 500;
  }


  @media only screen and (max-width: 1360px) {
    .third-component-main-content-wrapper {
      justify-content: center;
    }

    .third-component-content-list-wrapper {
      margin-top: 40px;
    }
  }

  @media only screen and (max-width: 1200px) {


    /* third element */

    .third-component-header-text {
      font-size: 42px;
    }

    .third-component-content-list-item {
      font-size: 36px;
    }
  }

  @media only screen and (max-width: 900px) {

    /* third element */

    .third-component-header-text {
      font-size: 38px;
    }

    .third-component-content-list-item {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 650px) {

    /* third element */

    .third-component-header-text {
      font-size: 34px;
    }

    .third-component-content-image-wrapper{
      scale: 0.85;
    }

    .third-component-content-list-item {
      font-size: 28px;
    }


  }
</style>
