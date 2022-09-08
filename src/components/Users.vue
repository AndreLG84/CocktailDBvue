<template>
    <div class="rate">
        <h2>Laisser une note:</h2>
        <label for="one">1</label>
        <input type="radio" id="one" value="One" v-model="picked">
        <br>
        <label for="two">2</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <br>
        <label for="tree">3</label>
        <input type="radio" id="tree" value="Tree" v-model="picked">
        <br>
        <label for="four">4</label>
        <input type="radio" id="four" value="Four" v-model="picked">
        <br>
        <label for="five">5</label>
        <input type="radio" id="five" value="Five" v-model="picked">
        <br>
        <span>Picked: {{ picked }}</span>
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
.rate {
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
    background-color: #971717;
    border:1px solid white;
}
</style>
