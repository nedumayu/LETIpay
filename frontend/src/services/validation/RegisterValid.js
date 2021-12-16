import isEmpty from "validator/es/lib/isEmpty";

class Validation {
    isNull(data) {
        let array = Object.values(data);
        for (let i of array) {
            if (i !== undefined && typeof i === "string" && isEmpty(i)) {
                return true;
            }
        }
        return false;
    }

    emailValid(data) {
        let reg = /\S+@\S+\.\S+/;
        return reg.test(String(data).toLowerCase());
    }

    phoneValid(data) {
        let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        return reg.test(data);
    }

    hasNumbers(data) {
        let reg = /[0-9]/;
        return reg.test(String(data).toLowerCase());
    }

    hasLetters(data) {
        let reg = /[A-Za-zA-Яа-яЁё]/;
        return reg.test(String(data).toLowerCase());
    }

    sumCharacter(str, count) {
        return str.length <= count;
    }

    signupValid(data) {
        if (this.isNull(data)) {
            return { message: "Заполните поля", result: true }
        }

        for(let i in data) {
            switch (i) {
                case "email":{
                    if (!this.emailValid(data[i]))
                        return {message: "Некорректный email", result: true}
                    if (!this.sumCharacter(data[i], 30))
                        return {message: "Превышено количество символов в поле E-mail", result: true}
                    break;
                }

                case "password":{
                    if (!this.sumCharacter(data[i], 100))
                        return {message: "Превышено количество символов в поле Пароль", result: true}
                    break;
                }

                case "username": {
                    if (!this.hasLetters(data[i]))
                        return {message: "ФИО не может содержать цифры и спец-символы", result: true}
                    if (!this.sumCharacter(data[i], 50))
                        return{message: "Превышено количество символов в поле ФИО", result: true}
                    break;
                }


                case "telephone":{
                    if (!this.phoneValid(data[i]))
                        return {message: "Телефон может состоять только из цифр", result: true}
                    if (!this.sumCharacter(data[i], 20))
                        return{message: "Превышено количество символов в поле Телефон", result: true}
                    break;
                }

                case "groupNumber":{
                    if (!this.hasNumbers(data[i]))
                        return {message: "Номер группы может состоять только из цифр", result: true}
                    if (!this.sumCharacter(data[i], 6))
                        return{message: "Превышено количество символов в поле Группа", result: true}
                    break;
                }
                default: {}
            }
        }
        return {message: "", result: false}
    }


}

export default new Validation()