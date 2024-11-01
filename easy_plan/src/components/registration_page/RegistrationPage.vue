<script>
// import { loginUser } from '../../api.js';
// import { registerUser } from '../../api.js';
import { registerUser } from '../../api.js';

export default {
    name: '',
    components: {},
    props: {},
    data() {
        return {
            nameField: "",
            emailField: "",
            passwordField: "",
            nameError: "",
            emailError: "",
            passwodError: "",
            errorDict: {
                uncorrectNameErr: "Имя должно быть не короче 5 символов",
                existingNameErr: "Имя уже занято",
                uncorrectEmailFormatErr: "Некорректный формат email",
                uncorrectPasswordFormanErr: "Пароль слишком слабый",
                requiredFieldError: "Обязательное поле",
            }
        }
    },
    computed: {},
    methods: {
        nameFieldValidator() {
            if (this.nameField.trim() === '') {
                this.nameError = this.errorDict.requiredFieldError;
                return;
            }
            if (!(/^(([a-zA-Zа-яА-ЯёЁ]+\s){0,})+[a-zA-Zа-яА-ЯёЁ]+$/.test(this.nameField.trim()))) {
                this.nameError = this.errorDict.uncorrectNameErr
            } else {
                this.nameError = "";
            };
        },
        emailFieldValidator() {
            if (this.emailField.trim() === '') {
                this.emailError = this.errorDict.requiredFieldError;
                return;
            }
            if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(this.emailField.trim()))) {
                this.emailError = this.errorDict.uncorrectEmailFormatErr
            } else {
                this.emailError = "";
            };
        },
        passwordFieldValidator() {
            if (this.passwordField.trim() === '') {
                this.passwodError = this.errorDict.requiredFieldError;
                return;
            }
            if (!(/(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(this.passwordField.trim()))) {
                this.passwodError = this.errorDict.uncorrectPasswordFormanErr
            } else {
                this.passwodError = "";
            };
        },
        async inputFieldsValidation() {
            this.nameFieldValidator();
            this.emailFieldValidator();
            this.passwordFieldValidator();
            // if (this.emailError == "" && this.nameError == "" && this.passwodError == "") {
            if (true) {
                // const userData = {
                //     nickname: this.nameField.trim(),
                //     email: this.emailField.trim(),
                //     password: this.passwordField.trim(),
                //     role: 'user',
                // };
                const userData = {
                    nickname: 'user103',
                    email: 'user103@mail.ru',
                    password: 'qwerty123!',
                    role: 'user',
                };
                const {message, status} = await registerUser(userData);
                if (status == 201) {
                    console.log(message);
                } else {
                    console.log(`Error: ${message}`)
                }
            }
        },
        redirectToLoginPage() {
            this.$router.push({ path: '/login', replace: true });
        }
    }
}
</script>

<template>
    <div className="login-page-wrapper">
        <div className="login-window">
            <div className="login-window-content-wrapper">
                <div className="login-window-content-header">
                    Давай создадим аккаунт!
                </div>
                <div className="login-window-content-inputs-wrapper">
                    <div className="login-window-input-element">
                        <form className="login-form" method="post">
                            <input type="text" size="40" placeholder="Никнейм" v-model="nameField"
                                className="login-form-input" />
                        </form>
                        <div className="login-window-input-error">
                            <p>{{ nameError }}</p>
                        </div>
                    </div>
                    <div className="login-window-input-element">
                        <form className="login-form" method="post">
                            <input type="text" size="40" placeholder="E-mail" v-model="emailField"
                                className="login-form-input" />
                        </form>
                        <div className="login-window-input-error">
                            <p>{{ emailError }}</p>
                        </div>
                    </div>
                    <div className="login-window-input-element">
                        <form className="login-form" method="post">
                            <input type="password" size="40" placeholder="Password" v-model="passwordField"
                                className="login-form-input" />
                        </form>
                        <div className="login-window-input-error">
                            <p>{{ passwodError }}</p>
                        </div>
                    </div>
                </div>
                <div class="page-link">
                    <span class="page-link_text" @click="redirectToLoginPage()">
                        Уже есть аккаунт?
                    </span>
                </div>
                <div className="login-window-content-button">
                    <p className="login-window-content-button-text" @click="inputFieldsValidation()">Создать аккаунт</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.page-link {
    margin-bottom: 10px;
    padding: 10px;
}

.page-link:hover {
    cursor: default;
}

.page-link_text {
    font-size: 20px;
    font-weight: 500;
    color: aliceblue;
}

.page-link_text:hover {
    color: black;
}

.login-window {
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: auto;
}

.login-window-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 600px;
    width: 570px;
    border-radius: 35px;
    padding-top: 28px;
    padding-bottom: 56px;
    padding-right: 50px;
    padding-left: 50px;
    background-color: rgba(0, 0, 0, 0.7);
}

.login-window-content-header {
    font-size: 37px;
    color: white;
}

.login-window-content-inputs-wrapper {
    background-color: none;
    margin-top: 40px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 480px;
    width: 340px;
}

.login-window-input-element {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 482px;
    height: 110px;
    margin-bottom: 5px;
}

.login-form-input {
    height: 74px;
    width: 100%;
    background-color: white;
    font-size: 30px;
    border-radius: 15px;
    border: 1px solid black;
    padding: 12px 10px;
    color: rgba(106, 106, 106, 1);
}

.login-window-input-error {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    width: 100%;
    height: 24px;
}

.login-window-content-button {
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 300px;
    border-radius: 20px;
    border: 1px solid black;
    background-color: rgba(235, 235, 235, 1);
}

.login-window-content-button:hover {
    border-radius: 20px;
    border: 2px solid black;
    background-color: rgb(204, 204, 204);
}

.login-window-content-button-text {
    color: black;
    font-size: 32px;
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
</style>
