<template>
    <div class="container">

        <form action="" @submit.prevent="doLogin">


<article>
    <h4> App</h4>
    <div class="full-width">
  <label for="fieldUser">User</label>
    <input type="text" v-model="auth.user" required placeholder="my.user" id="fieldUser">
    </div>

<div class="full-width ">

    <label for="fieldPassword">Password</label>
    <input type="password" v-model="auth.password" id="fieldPassword" placeholder="****" required autocomplete="false">
</div>

</article>  

 

        <button class="button"> Log In </button>
        </form>

    </div>

</template>

<script>
import Auth from '../services/Auth';
    export default {
        name: 'Login',

    
        data() {
            return {
                auth: {
                }
            }
        },
        methods: {
            doLogin : function(evt) {
                Auth.login(this.auth, ()=>{
                    this.$router.push('/')
                })
            }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    text-align: left;
}
    tfoot td {
        text-align: right;
    }
    
    td:first-child,
    th:first-child {
        max-width: 50px !important;
    }
    
    td button {
        padding: 0px 5px !important;
        margin: 0;
    }
    .restart-button {
        float:left
    }

    .winner {
        display: inline-block
    }
    input[type="date"] {
    webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 0.1rem solid #d1d1d1;
    border-radius: .4rem;
    box-shadow: none;
    box-sizing: inherit;
    height: 3.8rem;
    padding: .6rem 1.0rem;
    width: 100%;
}


.full-width {
    clear: both;

}


.quarter-width ,
.three-quarter-width ,
.half-width,
.three-quarter-width {
    padding: 0px 5px;
    float:left;
}

.three-quarter-width {
    width: 75%;
}
.quarter-width {
    width: 25%;
}
.half-width {
    width:50%;
}

</style>