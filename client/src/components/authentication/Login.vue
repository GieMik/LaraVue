<template>
    <form>
        <div class="form-group">
            <label for="username">UserName</label>
            <input v-model="user.name" type="email" class="form-control" id="username" placeholder="UserName">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button @click.prevent.default="login()" type="submit" class="btn btn-default">Login</button>
        <pre>
            {{ $data }}
        </pre>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: 'hermina.franecki@example.net',
                    password: 'secret'
                }
            }
        },
        methods: {
            login() {
                let data = {
                    client_id: 2,
                    client_secret: 'okaLOlyvylg906UhH0pwUcxknORcuBQmTvC0ur4h',
                    grant_type: 'password',
                    username: this.user.name,
                    password: this.user.password
                };
                console.log(data);
                this.$http.post('oauth/token', data)
                    .then(response => {
                        console.log(response.body)
                        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now());
                        this.$router.push('/feed');
                    })
            }
        }
    }
</script>
