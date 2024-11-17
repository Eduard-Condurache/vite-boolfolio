<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    data() {
        return {
            projectsApiUrl: 'http://127.0.0.1:8000/api/projects',
            project: null
        };
    },
    mounted () {
        this.getProject();
    },
    methods: {
        getProject() {
            axios
                .get(this.projectsApiUrl + '/' + this.$route.params.slug)
                .then((resp) => {
                    this.project = resp.data.project;
                    
                })
                .catch((err) => {
                    console.error(err);

                    this.$router.push({ name: 'not-found'});
                })
        }
    },
};
</script>

<template>
    <div class="container" v-if="project != null">
        <div class="card my-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="project.full_image_url" class="img-fluid rounded-start" :alt="project.title">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">
                            Titolo: {{ project.title }}
                        </h5>
                        <p class="card-text">
                            Descrizione: {{ project.description }}
                        </p>
                        <span v-for="technology in project.technologies" :key="technology.id" class="badge text-bg-success mx-1">
                            {{ technology.name }}
                        </span>
                        <p class="card-text">
                            Tipo: {{ project.type.name }} - {{ project.type.description }}
                        </p>
                        <router-link :to="{ name: 'projects' }">
                            <button class="btn btn-primary">
                                Torna ai progetti
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    min-height: 250px;
}
</style>
