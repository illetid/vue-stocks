<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <router-link class="navbar-brand" to="/">Stock Trader </router-link>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" to="/portfolio" activeClass="active" tag="li"><a class="nav-link">portfolio</a>
                </router-link>
                <router-link class="nav-item" to="/stocks" activeClass="active" tag="li"><a class="nav-link">stocks</a>
                </router-link>
            </ul>
            <strong class="navbar-text">
                Funds : {{funds | currency}}
            </strong>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#" @click="endDay"> End Day</a>
                </li>
                <li class="nav-item dropdown"
                    @click.prevent="isDropdownOpen = !isDropdownOpen">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save / Load
                    </a>
                    <div class="dropdown-menu"
                         :class="{show :  isDropdownOpen}"
                         aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                        <a class="dropdown-item" href="#" @click="loadData">Load Data</a>

                    </div>
                </li>
            </ul>

            <router-link v-if="!isLogged" class="btn" to="/login">
                Login
            </router-link>
            <button v-if="isLogged" class="btn" @click="logout">Logout</button>
        </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';
    import firebase from 'firebase'
    export default {
        data() {
            return {
                isDropdownOpen: false,

            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            isLogged() {
                return firebase.auth().currentUser;
            }
        },
        methods: {

            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                var user = firebase.auth().currentUser;
                if (user != null) {
                    const data = {
                        funds: this.$store.getters.funds,
                        stockPortfolio: this.$store.getters.stockPortfolio,
                        stocks: this.$store.getters.stocks,
                    };
                    this.$http.put(`data${user.uid}.json`, data);
                }

            },
            loadData() {
                this.fetchData();
            },
            logout (){
                firebase.auth().signOut().then(() => {
                    this.$router.push({path: 'login'})
                });
            }

        }
    }
</script>