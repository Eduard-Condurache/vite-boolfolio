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
                    console.log(this.project);
                });
        }
    },
};
</script>

<template>
    <div class="container" v-if="project != null">
        <div class="card my-4 w-50">
            <div class="card-body">
                <div class="row">
                    <div class="col-8">
                        <h1>
                            {{ project.title }}
                        </h1>
                        <h3>
                            {{ project.description }}
                        </h3>
                        <div>
                            <span v-for="technology in project.technologies" :key="technology.id" class="badge text-bg-success mx-1">
                                {{ technology.name }}
                            </span>
                        </div>
                        <div>
                            <h2>
                                Type:
                            </h2>

                            <h4>
                                {{ project.type.name }}
                            </h4>
                            <p>
                                {{ project.type.description }}
                            </p>
                        </div>
                    </div>
                    <div class="col">
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
