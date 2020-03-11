<template>
    <div>
        <div class="kvasov-box-gradient">
            <a class="kvasov-btn-gradient btn-color-1" href="https://www.youtube.com/channel/UCSb71yKJmS0eHyhRRl00ioQ" target="_blank">
                Youtube канал
            </a>
            <a class="kvasov-btn-gradient btn-color-2" href="https://bv.ck.ua/" target="_blank">
                Сайт
            </a>
            <a class="kvasov-btn-gradient btn-color-3" href="https://www.facebook.com/bv.ck.ua/" target="_blank">
                Facebook
            </a>
            <a class="kvasov-btn-gradient btn-color-4" href="https://www.instagram.com/bv.ck.ua/" target="_blank">Instagram</a>
            <a class="kvasov-btn-gradient btn-color-5" href="https://twitter.com/bv_church" target="_blank">
                Twitter
            </a>
            <a class="kvasov-btn-gradient btn-color-4" href="https://bvckua.tumblr.com/" target="_blank">
                Tumblr
            </a>
            <a class="kvasov-btn-gradient btn-color-4" href="https://www.linkedin.com/company/церковь-благая-весть-церкассы" target="_blank">
                LinkedIn
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
    .kvasov-link a {
        color: blue;
        text-decoration: none;
        -webkit-transition: 0.3s;
    }
    .kvasov-link a:hover {
        color: hotPink;
    }
    @media (-webkit-min-device-pixel-ratio: 0) {
        .kvasov-link a {
            background-color: skyBlue;
            background-image: -webkit-linear-gradient(left, hotPink 0%, orange 50%, transparent 50%);
            background-position: 100% 0;
            background-size: 200% 200%;
            color: transparent;
            -webkit-transition: 0.3s 0.2s;
            -webkit-background-clip: text;
            font-weight: 700;
        }
        .kvasov-link a:hover {
            background-position: 0 0;
            color: transparent;
            transition: 0.1s 0;
        }
    }
    .kvasov-box-gradient {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
        width: 95%;
        margin: auto;
        font-family: 'Comfortaa', cursive;
    }
    .kvasov-btn-gradient {
        margin: 10px;
        padding: 20px;
        text-align: center;
        transition: 0.5s;
        background-size: 200% auto;
        color: white;
        box-shadow: 0 2px 20px -5px grey;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
    }

    /* здесь начинается волшебство */
    .kvasov-btn-gradient:hover {
        background-position: right center; /* изменить направление движения цвета можно здесь */
        color: #ffffff;
    }

    .btn-color-1 {
        background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
    }

    .btn-color-2 {
        background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);
    }

    .btn-color-3 {
        background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);
    }

    .btn-color-4 {
        background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);
    }

    .btn-color-5 {
        background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 51%, #ffecd2 100%);
    }
</style>
