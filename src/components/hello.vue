<template>
<span>{{ message }}</span>
</template>

<script>
export default {
    name: 'Hello',
    data() {
        return {
            message: 'hello!',;
        }
    },
    created() {
        this.message = 'bye!';
    },
}
</script>