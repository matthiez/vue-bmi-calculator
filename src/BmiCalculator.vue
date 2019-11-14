<template>
    <div>
        <height class='bmi--row bmi--row-input' v-model.number='height'></height>

        <weight class='bmi--row bmi--row-input' v-model.number='weight'></weight>

        <bmi class='bmi--row' :height='height' :weight='weight'></bmi>
    </div>
</template>

<style lang='scss'>
    .bmi--hidden {
        display: none;
    }

    .bmi--input {
        background-color: #e1e1e1;
        border: none;
        padding: 5px;
    }

    .bmi--label {
        align-items: center;
        background-color: #f0f0f0;
        display: flex;
        text-transform: uppercase;
    }

    .bmi--row {
        color: #515b70;
        margin-bottom: 1px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    .bmi--row-input {
        display: grid;
        grid-template-columns: 20% 80%;
    }

    /*Thanks to https://pixelbar.be/blog/css-profi-tip-tooltip-attributen/*/
    .bmi--tooltip {
        position: relative;

        &:after {
            background: #fff;
            border-radius: 5px;
            bottom: 130%;
            content: attr(data-tooltip);
            left: 20%;
            opacity: 0;
            padding: 2.5px 10px;
            position: absolute;
            transition: all 0.3s ease-in-out;
            white-space: nowrap;
            -moz-border-radius: 10px;
            -moz-transition: all 0.4s ease;
            -webkit-border-radius: 10px;
            -webkit-transition: all 0.4s ease;
        }

        &:hover:after {
            opacity: 1;
            bottom: 100%;
        }
    }
</style>

<script lang='ts'>
    import {Component, Vue} from 'vue-property-decorator'
    import Height from './components/Height.vue'
    import Weight from './components/Weight.vue'
    import Bmi from './components/Bmi.vue'

    @Component({components: {Height, Weight, Bmi}})
    export default class BmiCalculator extends Vue {
        height: number = 0;
        weight: number = 0;
    }
</script>