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
                Funds : {{funds}}
            </strong>
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save / Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Save Data</a>
                        <a class="dropdown-item" href="#">Load Data</a>

                    </div>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>