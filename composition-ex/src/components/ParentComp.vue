<template>
    <div>
        <h1> Parent Component {{ city }}</h1>
        <hr />

        <h3> --------Parent Component Employee Details:--------
            <p>Employee ID :- {{ empId }}</p>
            <p>Employee First Name :- {{ empFirstName }}</p>
            <p>Employee Last Name :- {{ empLastName }}</p>
        </h3>
        <button @click="changeEmpId" style="background-color: lightblue;">Change EmpId</button>
        <ChildX></ChildX>

    </div>
</template>

<script>
import { provide, reactive, ref, toRefs } from 'vue';
import ChildX from './ChildX.vue';
export default {
    components: {
        ChildX
    },
    name: 'ParentComp',

    setup() {
        provide('composition_empCity', 'Gorakhpur india') // provided constant value
        const empId = ref('001');
        const state = reactive({
            empFirstName: 'Rakesh',
            empLastName: 'Singh'
        })

        provide('composition_empId', empId);
        provide('composition_employee', state);
        function changeEmpId() {
            empId.value = 'EMP-0010'
        }
        provide('composition_changeEmpId', changeEmpId)
        return {
            empId,
            ...toRefs(state),
            changeEmpId
        }



    },
    data() {
        return {
            city: 'Gorakhpur'
        }
    },
    provide() {
        return {
            empCity: this.city
        }

    }

}
</script>

<style scoped></style>