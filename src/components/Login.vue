<template>
    <div class="login">
        <h3>
            Sign in
        </h3>
        <input type="email"
               v-model="email"
               placeholder="email"><br>
        <input type="password"
               v-model="password"
               placeholder="password"> <br>
        <button @click="login">login</button>
        <p>don`t have account?
            <router-link to="/sign-up"> create one</router-link>
        </p>
    </div>
</template>


<script>
    import firebase from 'firebase'
    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login() {
                let self = this;
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(
                        function (user) {
                            self.$router.push({path: '/stocks'})

                        },
                        function (err) {
                            console.log(`Ooops ${err.message}`)
                        }
                    );

            }
        }
    }
</script>