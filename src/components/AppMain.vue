<script>

import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    data() {
        return {
            projectsApiUrl: 'http://127.0.0.1:8000/api/projects',
            projects: [],
            prevPage: null,
            nextPage: null
        };
    },
    mounted () {
        this.getProjects(this.projectsApiUrl);
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then((resp) => {
                    this.projects = resp.data.projects.data;

                    this.prevPage = resp.data.projects.prev_page_url;

                    this.nextPage = resp.data.projects.next_page_url;
                });
        },
        getPrevPage() {
            this.getProjects(this.prevPage);
        },
        getNextPage() {
            this.getProjects(this.nextPage);
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

            <div class="buttons text-center">
                <button @click="getPrevPage()" :disabled="prevPage == null" type="button" class="btn btn-primary btn-lg mx-2">
                    &lt; Prev
                </button>

                <button @click="getNextPage()" :disabled="nextPage == null" type="button" class="btn btn-primary btn-lg mx-2">
                    Next &gt;
                </button>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>
