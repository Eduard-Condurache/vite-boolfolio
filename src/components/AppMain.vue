<script>

import axios from 'axios';

export default {
    data() {
        return {
            projects: []
        };
    },
    mounted () {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios
                .get('http://127.0.0.1:8000/api/projects')
                .then((resp) => {
                    console.log(resp.data);
                    this.projects = resp.data.projects.data;
                    console.log(this.projects);
                });
        }
    }
};
</script>

<template>
    <main>
        <h2>
            main
        </h2>
    </main>
</template>

<style scoped>

</style>
