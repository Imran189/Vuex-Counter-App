<template>
    <div>
        <h1>Vuex Counter</h1>
        <h1 class="counter">0</h1>
        <button>-</button>
        <input type="number">
        <button>+</button>
    </div>
</template>
<script>
export default {
    
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
        
    }
</style>