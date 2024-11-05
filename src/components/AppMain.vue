<script>

import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

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
    },
    components: {
        ProjectCard,
    }
};
</script>

<template>
    <main>
        <div class="container">
            <h2 class="text-center mb-3">
                MAIN
            </h2>

            <ProjectCard :projects="projects"/>
        </div>
    </main>
</template>

<style scoped>

</style>
