<template>
<div>
    <p>
        {{ message }}
    </p>
</div>
</template>

<script>
export default {
    name: 'Now',
    data() {
        return {
            message: new Date().toString(),
        }
    },
    created() {
        setInterval(() => this.message = new Date().toString(), 1000)
    }
}
</script>