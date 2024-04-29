<script setup lang="ts">

const supabase = useSupabaseClient()

const user = useSupabaseUser()

const signOut = () => {
    supabase.auth.signOut()
}

</script>

<template>
    <div>
        <h1>Profile</h1>
        <p>Email: {{ user?.email }}</p>
        <p>Id: {{ user?.id }}</p>

        <button @click="signOut">Sign Out</button>
    </div>
</template>