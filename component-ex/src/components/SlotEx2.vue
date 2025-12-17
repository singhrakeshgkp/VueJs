<template>
    <div>
        <div class="SlotEx2" id="header-div">
            <slot name="header">

            </slot>
        </div>
        <div class="SlotEx2" id="main-div">
            <slot>

            </slot>
        </div>

        <div class="SlotEx2" id="footer-div">
            <slot name="footer">

            </slot>

        </div>
    </div>
</template>

<script>
export default {
    name: 'SlotEx2'
}
</script>

<style scoped>
.SlotEx2 {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 16px;
    margin-bottom: 20px;
    width: 400px;
}

.SlotEx2:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0, 0.2)
}
</style>