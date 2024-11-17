<script>
import axios from 'axios';
export default {
    data() {
        return {
            userName: '',
            userEmail: '',
        };
    },
    methods: {
        sendContact() {
            axios
                .post('http://localhost:8000/api/new-contact', {
                    name: this.userName,
                    email: this.userEmail
                })
                .then(res => {
                    if(res.data.success) {
                        alert('Success')

                        this.userName = '';
                        this.userEmail = '';
                    } else {
                        alert('Fail')
                    }
                })
                .catch(err => {
                    alert(err.response.data.message);
                });
        }
    }
};
</script>

<template>
    <div class="container">
        <h2 class="text-center text-primary">
            Contact Page
        </h2>

        <form @submit.prevent="sendContact()" class="row g-3">
            <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="userEmail" id="email" minlength="6" maxlength="255" placeholder="Inserisci la mail" required>
            </div>
            <div class="col-md-6">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" v-model="userName" id="name" placeholder="Inserisci il tuo nome" minlength="3" maxlength="64" required>
            </div>
           
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </form>
    </div>
</template>

<style scoped>

</style>
