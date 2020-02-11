<template>
    <div style="width: 400px; height: 350px">
        <nav>
            <router-link to="/" href="#" class="button18">Читать Библию</router-link>
            <router-link to="/MessageRandom" href="#" class="button18">Случайный стих из Библии</router-link>
            <router-link to="/Donate" href="#" class="button18">Помощь проэкту</router-link>
            <router-link to="/lexicon" href="#" class="button18">Библейский словарь</router-link>
        </nav>

        <iframe id="randomVerseIframe" src="http://allbible.info/ajax/randomverse/" width="300" height="300"
                title="Подкрепись! Библия онлайн." frameborder="0" scrolling="no">

        </iframe>
        <button @click="MessageRandom" class="button25">Помочь проэкту</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        methods: {
            MessageRandom() {
                this.$router.push('/Donate')
            }
        }
    }
</script>

<style scoped>

</style>
