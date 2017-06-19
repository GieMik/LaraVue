<template>
    <form>
        <div class="form-group">
            <label for="username">UserName</label>
            <input v-model="user.name" type="name" class="form-control" id="username" placeholder="UserName">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input v-model="user.email" type="name" class="form-control" id="email" placeholder="Email">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-default">Create</button>
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
          name: '',
          password: '',
          email: ''
        }
      }
    }
  }
</script>
