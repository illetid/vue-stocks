<template>
    <div class="sign-up">
        <p>
            Let`s create a new account!
        </p>
        <input type="email"
               v-model="email"
               placeholder="email"><br>
        <input type="password"
               v-model="password"
               placeholder="password"><br>
        <button @click="signUp">Sign Up</button>
        <span> Go back to <router-link to="/login"> login </router-link></span>
    </div>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: 'signUp',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signUp (){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(
                        function (user) {
                            this.$router.replace({name: 'Stocks'})
                        },
                        function (err) {
                            alert(`Ooops ${err.message}`)
                        }
                    );

            }
        }
    }
</script>

<style scoped>

</style>