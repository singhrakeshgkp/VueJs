<template>
    <div>
        <p v-for="tech in teches" :key="tech.framework">
            <slot :framework="tech.framework" :language="tech.language"></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: 'TechStack',
    data() {
        return {
            teches: [
                {
                    framework: 'Spring',
                    language: 'java'
                },
                {
                    framework: 'NextJS',
                    language: 'java script'
                }
            ]
        }
    }
}
</script>

<style scoped></style>