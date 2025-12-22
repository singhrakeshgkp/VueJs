<template>
    <div>
        <h1>Child Z</h1>
        <hr />
        <h3> Child Comp Z employee city :- {{ empCity }}</h3>
        <h3>Child Comp Z employee city (using composition):- {{ cityName }}</h3>

        <h3> -------- Child Z Component Employee Details:--------

            <p>Employee ID :- {{ empId }}</p>
            <p>Employee First Name :- {{ empFirstName }}</p>
            <p>Employee Last Name :- {{ empLastName }}</p>
        </h3>
        <button @click="changeEmpId" style="background-color: lightblue;">Change Empid</button>
    </div>
</template>

<script>
import { inject, toRefs } from 'vue';
export default {
    name: 'ChildZ',
    setup() {
        const cityName = inject('composition_empCity', 'default city');// return default value if city is not present.
        const empId = inject('composition_empId', '000')
        const compositionEmployee = inject('composition_employee', {})
        const changeEmpId = inject('composition_changeEmpId', {})
        return {
            cityName,
            empId,
            ...toRefs(compositionEmployee),
            changeEmpId
        }
    },
    inject: ['empCity']
}
</script>

<style scoped></style>