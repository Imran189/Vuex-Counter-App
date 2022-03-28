<template >
    <div class="container">
        <h3>Count History</h3>
        <div class="flex">
            <p v-for="(number, index) in history" :key="index" :class="activeIndex(value).includes(index) && 'bold'">
                {{number}} 
            </p>
            
        </div>
        <p class="input">Search Counted number</p>
        <input  type="number" v-model="value"/>
    </div>
</template>
<script>
import { mapState, mapGetters} from "vuex"
export default {
    data() {
        return {
            value: 1
        }
    },
    computed: {
        ...mapState(["history"]),
        ...mapGetters(["activeIndex"])
    },
}
</script>
<style>
    .container{
        margin-top:3rem ;
    }
    .flex{
        display: flex;
        text-align: center;
        width: 25rem;
        margin: 0 auto;
        justify-content: center;
        flex-wrap: wrap;
    }
   .flex p{
        margin: 0.35rem;
    }
    .input{
        margin-top: 2rem;
    }
    .bold{
        font-weight: 900;
    }
</style>