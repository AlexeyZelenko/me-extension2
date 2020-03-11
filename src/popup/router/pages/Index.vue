<template>
    <div style="width: 600px; height: 510px">
        <nav>
            <router-link
                    to="/"
                    href="#"
                    class="button18">
                Читать Библию
            </router-link>
            <router-link
                    to="/MessageRandom"
                    href="#"
                    class="button18">
                Случайный стих из Библии
            </router-link>
            <router-link
                    to="/Donate"
                    href="#"
                    class="button18">
                Помощь проэкту
            </router-link>
            <router-link
                    to="/lexicon"
                    href="#"
                    class="button18">
                Библейский словарь
            </router-link>
            <router-link
                    to="/links"
                    href="#"
                    class="button18">
                Ссылки
            </router-link>
        </nav>

        <iframe
                src="http://allbible.info/iframebible/"
                width="600" height="450"
                title="Подкрепись! Библия онлайн."
                frameborder="0"
                scrolling="no">
        </iframe>
        <div style="margin-bottom: 10px">
            <button @click="MessageRandom" class="button25">Помочь проэкту</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            MessageRandom() {
                this.$router.push('/Donate')
            }
        }
    }
</script>

<style lang="scss">
    .button25 {
        position: relative;
        display: inline-block;
        width: 10em;
        height: 2.5em;
        line-height: 2.5em;
        vertical-align: middle;
        text-align: center;
        text-decoration: none;
        text-shadow: 0 -1px 1px #777;
        color: #fff;
        outline: none;
        border: 2px solid #F64C2B;
        border-radius: 5px;
        box-shadow: 0 0 0 60px rgba(0, 0, 0, 0) inset, .1em .1em .2em #800;
        background: linear-gradient(#FB9575, #F45A38 48%, #EA1502 52%, #F02F17);
    }

    .button25:active {
        top: .1em;
        left: .1em;
        box-shadow: 0 0 0 60px rgba(0, 0, 0, .05) inset;
    }

    .button18 {
        display: inline-block;
        font-size: 12px;
        color: rgb(205, 216, 228);
        text-decoration: none;
        padding: .2em .8em;
        outline: none;
        border-right: 1px solid rgba(13, 20, 27, .5);
        border-top: 1px solid rgba(270, 278, 287, .01);
        background-color: rgb(64, 73, 82);
        background-image: radial-gradient(1px 60% at 0% 50%, rgba(255, 255, 255, .3), transparent),
        radial-gradient(1px 60% at 100% 50%, rgba(255, 255, 255, .3), transparent),
        linear-gradient(rgb(64, 73, 82), rgb(72, 81, 90));
    }

    .button18:hover {
        background-image: radial-gradient(1px 60% at 0% 50%, rgba(255, 255, 255, .3), transparent),
        radial-gradient(1px 60% at 100% 50%, rgba(255, 255, 255, .3), transparent),
        linear-gradient(rgb(51, 60, 67), rgb(58, 65, 72));
    }

    .button18:focus {
        color: rgb(245, 247, 250);
        border-top: 1px solid rgb(67, 111, 136);
        background-image: linear-gradient(rgb(46, 95, 122), rgb(36, 68, 92));
    }

    .button18:focus:hover {
        border-top: 1px solid rgb(49, 87, 107);
        background-image: linear-gradient(rgb(33, 77, 98), rgb(29, 57, 77));
    }
</style>
