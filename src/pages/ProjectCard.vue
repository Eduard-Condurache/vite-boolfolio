<script>
export default {
    props: {
        projects: Array
    }
};
</script>

<template>
    <div class="row">
        <div v-for="project in projects" :key="project.id" class="project-card col-12 col-md-6 col-lg-3 mb-4">
            <div class="card text-bg-dark">
                <div class="card-body">
                    <h5 class="card-title">
                       {{ project.id }}) Project Title: {{ project.title }}
                    </h5>

                    <h6 class="card-subtitle mb-2">
                        Type: {{ project.type.name }}
                    </h6>
                    <p class="card-text">
                        Descrizione: {{ project.description }}
                    </p>

                    <div>
                        <span>
                            Technologies:
                        </span>
                        <span v-for="technology in project.technologies" :key="technology.id" class="badge text-bg-success mx-1">
                                {{ technology.name }}
                        </span>
                    </div>

                    <div>
                        <div>
                            <router-link :to="{ name: 'projects-show', params: { slug: project.slug }}">
                                Vedi Progetto
                            </router-link>
                        </div>
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
