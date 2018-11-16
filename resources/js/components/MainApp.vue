<template>
    <div id="main">
        <Header/>
        <div class="content">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
    import Header from './Header.vue';
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        name: 'main-app',
        components: {Header}

    }
</script>
