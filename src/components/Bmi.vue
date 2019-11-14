<template>
    <div>
        <div class='bmi--row-input'>
            <label class='bmi--label' for='vue_bmi_bmi'>
                <span class='bmi--tooltip' data-tooltip="Body-Mass-Index">BMI</span>
            </label>

            <input
                    aria-label='Body-Mass-Index'
                    class='bmi--input'
                    id='vue_bmi_bmi'
                    readonly
                    :value='bmi.toFixed(2)'
            />
        </div>

        <div :class='0 == bmi ? " bmi--hidden" : ""'>
            <strong class='bmi--description' :style='{
                backgroundColor: _item.hexColor
            }'>{{_item.desc}}</strong>
        </div>
    </div>
</template>

<style lang='scss' scoped>
    .bmi--description {
        color: #fff;
        display: inline-block;
        text-align: center;
        width: 100%;
    }
</style>

<script lang='ts'>
    import {Component, Prop, Vue} from 'vue-property-decorator'

    type Component<Max> = {
        max: Max
        hexColor: string
        desc: string
    }

    const CUT_OFFS: [Component<16>, Component<17>, Component<18.5>, Component<25>, Component<30>, Component<35>, Component<40>, Component<99>] = [
        {max: 16, hexColor: '#B71C1C', desc: 'Starkes Untergewicht',},
        {max: 17, hexColor: '#E65100', desc: 'Mäßiges Untergewicht',},
        {max: 18.5, hexColor: '#FFCC80', desc: 'Leichtes Untergewicht',},
        {max: 25, hexColor: '#1B5E20', desc: 'Normalgewicht',},
        {max: 30, hexColor: '#FFCC80', desc: 'Präadipositas (Vorstufe der Adipositas)',},
        {max: 35, hexColor: '#E65100', desc: 'Adipositas Grad I',},
        {max: 40, hexColor: '#E65100', desc: 'Adipositas Grad II',},
        {max: 99, hexColor: '#E65100', desc: 'Adipositas Grad III',},
    ];

    @Component
    export default class Bmi extends Vue {
        @Prop() height: number = 0;
        @Prop() weight: number = 0;

        get bmi(): number {
            const bmi = this.weight / Math.pow(this.height / 100, 2);

            return isNaN(bmi) ? 0 : bmi;
        }

        get _item() {
            return this.bmi > 40
                ? CUT_OFFS[CUT_OFFS.length - 1]
                : CUT_OFFS[CUT_OFFS.findIndex(c => this.bmi < c.max)];
        }
    }
</script>