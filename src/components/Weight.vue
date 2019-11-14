<template>
    <div>
        <label class='bmi--label' for='vue_bmi_weight'>
            kg
        </label>

        <input
                aria-label='Gewicht in kg'
                class='bmi--input'
                id='vue_bmi_weight'
                v-model='weight'
        />
    </div>
</template>

<script lang='ts'>
    import {Component, Vue, Watch} from 'vue-property-decorator'

    @Component
    export default class Weight extends Vue {
        weight: number = 0;

        @Watch('weight')
        onChangeWeight(weight: string) {
            this.weight = this.$root.handleMeasurement(weight);
            this.$emit('input', this.weight);
        }
    }
</script>