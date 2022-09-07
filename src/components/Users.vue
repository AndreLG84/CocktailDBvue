<template>
    <div class="commentaires">
        <h2>Laisser une note:</h2>
        <input class="rate" type="radio" name="0" value="0"/>
        <input class="rate" type="radio" name="1" value="1"/>
        <input class="rate" type="radio" name="2" value="2"/>
        <input class="rate" type="radio" name="3" value="3"/>
        <input class="rate" type="radio" name="4" value="4"/>
        <input class="rate" type="radio" name="5" value="5"/>
    </div>
    <div class="well">
        <div class="form-group">
            <label class="pull-left"></label>
            <input type="text" class="form-control" placeholder="First Name" v-model="User.first_name">
        </div>
        <div class="form-group">
            <label class="pull-left"></label>
            <input type="text" class="form-control" placeholder="Last Name" v-model="User.last_name">
        </div>
        <div class="form-group">
            <label class="pull-left"></label>
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
h2 {
    font-size: 1.4rem;
    margin: 0 1%;
}
.commentaires {
    display: flex;
    justify-content: center;
    align-items: center;
}
.well {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
button {
    margin: 1%;
}
</style>
