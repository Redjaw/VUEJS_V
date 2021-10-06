<template>
    <div class="alert" v-if="!melt">
        <p>Attenzione Fusione in corso</p>
        <p>countdown: {{timeLeft}}</p>
    </div>
    <div class="meltdown" v-else>
        MELTDOWN AVVENUTO, TUTTO E' PERDUTO
    </div>
</template>

<script>
    export default {
        data() {
            return {
                interval: undefined,
                melt: undefined,
                counter: 0,
                timer: 5
            }
        },
        computed: {
            timeLeft(){
                return this.timer - this.counter;
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                this.counter ++
                if(this.timer === this.counter) this.meltDown()
            },1000)
        },
        methods:{
            meltDown(){
                clearInterval(this.interval);
                this.melt = true;
            }
        }
    }
</script>