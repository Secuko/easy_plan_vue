<script setup>
import { CheckIcon } from "@heroicons/vue/24/outline";
</script>

<script>
export default {
    name: "",
    components: {},
    props: {},
    data() {
        return {
            items: [
                {
                    id: 1,
                    header: "Планируй",
                    subItemsList: [
                        "Создавай задачи",
                        "Устанавливай сроки",
                        "Определяй приоритет",
                    ],
                    color: 'rgba(245, 232, 116, 1)',
                },
                {
                    id: 2,
                    header: "Отслеживай",
                    subItemsList: [
                        "Следи за временем",
                        "Прогресс-бары задач",
                        "Получай уведомления",
                    ],
                    color: 'rgba(116, 222, 245, 1)',
                },
                {
                    id: 3,
                    header: "Завершай",
                    subItemsList: [
                        "Статистика",
                        "История задачи",
                        "Возвращайся к задаче",
                    ],
                    color: 'rgba(226, 213, 254, 1)',
                }
            ]
        };
    },
    computed: {},
    methods: {

    },
};
</script>
<template>
    <div className="first-component-body">
        <div className='tickets-wrapper'>
            <div :style="{ backgroundColor: item.color }" v-for="item in items" className="first-component-element"
                key={{item.id}}>
                <div className="first-component-image">
                    <img src="../../assets/image/pin.png" alt='pin' />
                </div>
                <div className="first-component-element-header">
                    <p className="first-component-element-header-text">{{ item.header }}</p>
                </div>
                <div className="first-component-element-list">
                    <div v-for="subItem in item.subItemsList" className="first-component-element-list-item">

                        <p className="first-component-element-list-item-text">

                        <div class="check-icon">
                            <CheckIcon />
                        </div>
                        {{ subItem }}
                        </p>

                    </div>
                </div>
            </div>
        </div>
        <div className="first-component-header">
            <p className="first-component-header-text">Работаешь один?</p>
        </div>
    </div>
</template>
<style scoped>
.check-icon {
    width: 25px;
    height: 25px;
    position: relative;
    right: 25px;
    top: 25px;
}

.check-icon-1 {
    width: 40px;
    height: 40px;
    position: relative;
    right: 40px;
    top: 45px;
}

/* first component */

.first-component-body {
    padding-top: 45px;
    padding-bottom: 34px;
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 828px; */
    /* flex-wrap: wrap; */
}

.tickets-wrapper {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    display: flex;
    /* flex-wrap: wrap; */
}

.first-component-element {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 645px;
    width: 395px;
    border: 1px solid black;
    border-radius: 40px;
}

.first-component-image {
    width: 39px;
    height: 40px;
}

.first-component-header {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
}

.first-component-element-header {
    margin-top: 15px;
    margin-bottom: 30px;
}

.first-component-header-text {
    font-size: 44px;
    font-weight: 500;
}

.first-component-element-header-text {
    font-size: 39px;
    font-weight: 500;
}

.first-component-element-list-item-text {
    font-size: 32px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 30px;
    padding-left: 15px;
}

.first-component-element-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

@media only screen and (max-width: 600px) {

    /* login content */
    .login-window-content-wrapper {
        height: 380px;
        width: 360px;
        padding-top: 14px;
        padding-bottom: 28px;
        padding-right: 25px;
        padding-left: 25px;
        padding: 10px auto;
    }

    .login-window-content-header {
        font-size: 25px;

    }

    .login-window-content-inputs-wrapper {
        margin-top: 30px;
        height: 400px;
    }

    .login-window-input-element {
        width: 330px;
        height: 35px;
    }

    .login-window-input-element {
        margin-bottom: 2px;
        height: 65px;
    }

    .login-form-input {
        font-size: 20px;
        height: 50px;
        padding: 7px 10px;
    }

    .login-window-input-error {
        height: 15px;
        font-size: 12px;
    }

    .login-window-content-button {
        width: 250px;
        height: 80px;
    }

    .login-window-content-button-text {
        font-size: 25px;
    }


}

@media only screen and (max-width: 1500px) {
    .fourth-component-content-rigth-text {
        font-size: 40px;
    }
}

@media only screen and (max-width: 1400px) {
    .fourth-component-body {
        justify-content: center;
    }

    .fourth-component-content-rigth-wrapper {
        padding-top: 40px;
        padding-bottom: 40px;
        justify-content: center;
        align-items: center;
    }

    .fourth-component-content-rigth-text {
        margin-bottom: 25px;
    }
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

    /* first element */

    .first-component-header {
        margin-top: 40px;
        /* height: 700px; */
    }

    .first-component-element {
        height: 450px;
        width: 295px;
    }

    .first-component-element-list {
        height: 240px;
    }

    .first-component-element-header-text {
        font-size: 30px;
    }

    .first-component-header-text {
        font-size: 35px;
    }

    .first-component-element-list-item-text {
        font-size: 25px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

}

@media only screen and (max-width: 900px) {
    .logo {
        display: none;
    }

    .action-panel-wrapper {
        margin-left: 0px;
    }

    /* first element */

    .tickets-wrapper {
        flex-wrap: wrap;
    }

    .first-component-header {
        margin-top: 30px;
        /* height: 700px; */
    }

    .first-component-element-list {
        height: 240px;
    }

    .first-component-element {
        height: 450px;
        width: 295px;
    }

    .first-component-element-header-text {
        font-size: 28px;
    }

    .first-component-header-text {
        font-size: 34px;
    }

    .first-component-element-list-item-text {
        font-size: 23px;
        margin-top: 20px;
        margin-bottom: 20px;
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
