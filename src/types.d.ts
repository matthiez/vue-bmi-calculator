import Vue from 'vue'

declare module 'vue/types/vue' {
    interface Vue {
        handleMeasurement(measurement: string): number
    }
}