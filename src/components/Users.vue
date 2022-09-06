<template>
    <div class="commentaires">
        <h2>Laisser un commentaire</h2>
        <input class="comments" type="text" />
    </div>
    <div class="well">
        <div class="form-group">
            <label class="pull-left">First name</label>
            <input type="text" class="form-control" placeholder="First Name" v-model="User.first_name">
        </div>
        <div class="form-group">
            <label class="pull-left">Last name</label>
            <input type="text" class="form-control" placeholder="Last Name" v-model="User.last_name">
        </div>
        <div class="form-group">
            <label class="pull-left">Email</label>
            <input type="text" class="form-control" placeholder="Email" v-model="User.email">
        </div>
        <button type="submit" class="btn btn-large btn-block btn-primary full-width">Submit</button>
        <button class="btn btn-large btn-block btn-success full-width">Go user</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Users',
    data() {
        return {
            User: {first_name:'', last_name:'', email:''},
        }
    },
    methods: {
        addtoAPI(){
            let newUser = {
                first_name: this.User.first_name,
                last_name: this.User.last_name,
                email: this.User.email,
            }
        }
    }
}
</script>

<style scoped>
</style>
