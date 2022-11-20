<template>
<div class="base-progress">
    <div class="circle" ref="roundStats" :style="{ width: size + 'px', height: size + 'px'}">
        <div class="inner">
            <slot>
                <div class="inner__container">
                    <div class="inner__number">{{ progress || "NR" }}</div>
                    <div v-if="progress > 0" class="inner__icon">%</div>
                </div>
            </slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "BaseProgress",
    props: {
        progress: { type: Number, String, default: 0},
        size: { type: Number, default: 34},
    },
    mounted () {
        if(this.progress > 0) this.chooseColor()
    },
    methods: {
        chooseColor () {
            let activeColor = ""
            if(this.progress > 73) activeColor ="33, 208, 122"
            else if(this.progress > 50) activeColor = "210, 213, 49"
            else activeColor = "216, 35, 95"
            this.$refs.roundStats.style.backgroundImage = `conic-gradient(rgb(${activeColor}) ${this.progress}%, rgba(${activeColor}, 0.250) 0)`
        }
    }
}
</script>

<style lang="scss">
.base-progress {
    background: black;
    border-radius: 50%;
    padding: 2px;
    .circle {
        position: relative;
        border-radius: 50%;
        background: rgba(41, 65, 47, 0.486);
        overflow: hidden;
    }
    .circle .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 85%;
        height: 85%;
        background: #000;
        border-radius: 50%;
        font-weight: 300;
        color: white;
        padding: 10px;
        .inner__container {
            display: flex;
            .inner__number {
                font-size: 15px;
            }
            .inner__icon {
                font-size: 7px;
                margin-top: 3px;
            }
        }

    }
}
   
</style>