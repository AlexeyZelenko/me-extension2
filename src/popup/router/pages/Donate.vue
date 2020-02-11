<template>
    <div style="width: 600px; height: 510px">
        <nav>
            <router-link to="/" href="#" class="button18">Читать Библию</router-link>
            <router-link to="/MessageRandom" href="#" class="button18">Случайный стих из Библии</router-link>
            <router-link to="/Donate" href="#" class="button18">Помощь проэкту</router-link>
            <router-link to="/lexicon" href="#" class="button18">Библейский словарь</router-link>
        </nav>
        <p style="color: crimson;">{{messageDonate}}</p>
        <button class="button7" @click="Home">Вернуться к чтению Библии</button>
        <p>1. Номер карточки VISA Приватбанка - 4731185600237827</p>
        <div>
            <div>
                <p>2. SWIFT платеж :</p>
                <button class="knopka" @click="swift=!swift">Подробнее про SWIFT</button>
            </div>
            <p v-if="swift==true">
                <object>
                    <embed src="/icons/pdf.pdf" width="100%" height="500"/>
                </object>
            </p>
            <div v-else-if="swift==!true" style="margin:50px 50px; padding-left:50px;">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swift: false,
                message: "В начале было Слово, и Слово было у Бога, и Слово было Бог(От Иоанна 1)",
                messageDonate: `Вы можете помочь развитию христианских проэктов для магазина Google.`
            }
        },
        methods: {
            Home() {
                this.$router.push('/')
            }
        }
    }

</script>

<style scoped>
    .knopka {
        color: #fff; /* цвет текста */
        text-decoration: none; /* убирать подчёркивание у ссылок */
        user-select: none; /* убирать выделение текста */
        background: rgb(212, 75, 56); /* фон кнопки */
        padding: .7em 1.5em; /* отступ от текста */
        outline: none; /* убирать контур в Mozilla */
    }
    .knopka:hover {
        background: rgb(232, 95, 76);
    }
    /* при наведении курсора мышки */
    .knopka:active {
        background: rgb(152, 15, 0);
    }
    .button7 {
        font-weight: 700;
        color: white;
        text-decoration: none;
        padding: .8em 1em calc(.8em + 3px);
        border-radius: 3px;
        background: rgb(64, 199, 129);
        box-shadow: 0 -3px rgb(53, 167, 110) inset;
        transition: 0.2s;
    }
    .button7:hover {
        background: rgb(53, 167, 110);
    }
    .button7:active {
        background: rgb(33, 147, 90);
        box-shadow: 0 3px rgb(33, 147, 90) inset;
    }


</style>
