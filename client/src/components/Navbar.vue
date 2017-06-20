<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">LaraVue</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <router-link v-if="isAuth" tag="li" to="/feed"><a>Feed</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">User Control <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <router-link v-if="!isAuth" tag="li" to="/login"><a>Login</a></router-link>
                            <router-link v-if="!isAuth" tag="li" to="/register"><a>Register</a></router-link>
                            <li @click="logout()"><a>Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    export default {
        data() {
            return  {
                isAuth: null
            }
        },
        created() {
            this.isAuth = this.$auth.isAuthenticated;
        },
        methods: {
            logout() {
                this.$auth.destroyToken();
                this.$router.push('/login');
            }
        }
    }

</script>