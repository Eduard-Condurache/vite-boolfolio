<script>
export default {
    data() {
        return {
            navLinks: [
                {
                    routeName: 'home',
                    label: 'Home',
                },
                {
                    routeName: 'projects',
                    label: 'Projects'
                },
                {
                    routeName: 'about',
                    label: 'About'
                },
                {
                    routeName: 'contact',
                    label: 'Contact'
                }
            ]
        };
    },
};
</script>

<template>
    <header>
            <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body"  data-bs-theme="dark">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        VUE ROUTES
                    </a>

                    <button 
                        class="navbar-toggler" 
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li v-for="(item, index) in navLinks" :key="index" class="nav-item">
                                <router-link :to="{ name: item.routeName }" class="nav-link" aria-current="page">
                                    {{ item.label }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </header>
</template>

<style scoped>

</style>
