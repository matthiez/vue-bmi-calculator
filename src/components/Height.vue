<template>
    <div>
        <label class='bmi--label' for='vue_bmi_height'>
            cm
        </label>

        <input
                aria-label='Größe in cm'
                autofocus
                class='bmi--input'
                id='vue_bmi_height'
                v-model='height'
        />
    </div>
</template>

<script lang='ts'>
    import {Component, Vue, Watch} from 'vue-property-decorator'

    @Component
    export default class Height extends Vue {
        height: number = 0;

        @Watch('height')
        onChangeHeight(height: string) {
            this.height = this.$root.handleMeasurement(height);
            this.$emit('input', this.height);
        }
    }
</script>