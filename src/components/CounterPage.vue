<template>
    <div>
        <h1>Vuex Counter</h1>
        <h1 class="counter">{{count}}</h1>
        <button @click="decrement(value)">-</button>
        <input type="number" v-model="value"/>
        <button @click="increment(value)">+</button>
        <div>
            <button @click="addRandomNum" class="btn">Add by a random Number</button>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations,mapActions } from "vuex"
export default {
    data() {
        return {
            value:1
        }
    },
    computed: {
        ...mapState(["count"])
    },
    methods: {
       ...mapMutations(["increment","decrement"]),
       ...mapActions(["addRandomNum"])
    },
}
</script>
<style>
    .counter{
       font-size: 3rem; 
    }
    button{
        border-radius: 100%;
        border: none;
        width: 2rem;
        height: 2rem;
        font-weight: 700;
        cursor: pointer;
    }
    input{
        padding: 0.4rem;
        margin: 0 0.5rem;
        text-align: center;
    }
    .btn{
        border-radius: 0.5rem;
        width: auto;
        background-color:#52c4ba ;
        margin-top: 0.3rem;
    }
</style>