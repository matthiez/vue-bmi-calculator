import Vue from 'vue'
import {ComponentOptions} from "vue/types/options";
import VueBmi from './VueBmi.vue'

new Vue(<ComponentOptions<Vue>>{
    components: {VueBmi},
    methods: {
        handleMeasurement(measurement: string): number {
            measurement = measurement.toString();

            measurement = '0' == measurement.charAt(0) ? measurement.substring(1) : measurement;

            const _measurement = Number.parseFloat(measurement);

            return isNaN(_measurement) ? 0 : _measurement;
        }
    },
    el: "#app",
    template: '<vue-bmi></vue-bmi>',
});
