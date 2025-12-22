<template>
    <div>
        <h3>Watchers Example using ref with multiple source fname and lname</h3>
        <hr>
        </hr>
        <input type="tex" v-model="refFName"></input>
        <input type="tex" v-model="refLName"></input>

        <h3>Watchers Example using Reactive example</h3>
        <hr>
        </hr>
        <input type="tex" v-model="recFName"></input>
        <input type="tex" v-model="recLName"></input>

        <h3>Deep Watch - Reactive</h3>
        <hr />
        <input type="tex" v-model="address.city"></input>
        <input type="tex" v-model="address.country"></input>
    </div>
</template>

<script>
import _ from 'lodash';
import { reactive, ref, toRefs, watch } from 'vue';
export default {
    name: 'WatchersEx2',
    setup() {
        const refFName = ref('')
        const refLName = ref('')
        watch([refFName, refLName], (newValues, oldValues) => {
            console.log('old value Ref first Name ', oldValues[0])
            console.log('new value Ref first Name ', newValues[0])

            console.log('old value Ref last Name ', oldValues[1])
            console.log('new value Ref last Name ', newValues[1])
        }, { //optional argument immediate:true
            immediate: true
        })

        /*  reactive way */
        const state = reactive({
            recFName: '',
            recLName: '',
            address: {
                city: '',
                country: ''
            }
        })

        //Reactive watchers approach 1 --> if dont want ot access old value, here it will print old and new value

        /*         watch(state, function (newValue, oldValue) {
                    console.log('old value rec first Name ', oldValue.recFName)
                    console.log('new value rec first Name ', newValue.recFName)
                    console.log('old value rec last Name ', oldValue.recLName)
                    console.log('new value rec last Name ', newValue.recLName)
                }) */

        /* Reactive watchers approach 2 -> if u want old value as well */
        /*  watch(
             () => {
                 return { ...state }
             }, function (newValue, oldValue) {
 
                 console.log('old value rec first Name ', oldValue.recFName)
                 console.log('new value rec first Name ', newValue.recFName)
                 console.log('old value rec last Name ', oldValue.recLName)
                 console.log('new value rec last Name ', newValue.recLName)
             })
        */
        /* Approach 3 --> lets say if u have 50 fields in state variable, watchers function will trigger for all, what if u want it to trigger for only one variable/field ex firstName */
        /* watch(
            () => state.recFName, function (newValue, oldValue) {

                console.log('old value rec first Name ', oldValue)
                console.log('new value rec first Name ', newValue)
            })
         */
        /* Approach 4--> Deep watchers(want to trigger if any changes haddpens in city and country field of address object), disadvantage of this is u will get same new and old value*/
        /* watch(
            () => state.address, function (newValue, oldValue) {

                console.log('old value  address  ', oldValue)
                console.log('new value address ', newValue)
            },
            {
                deep: true
            }) */

        /* Approach 5 --> Deep watch (using clone, old and new value will not be same here) */
        watch(
            () => _.cloneDeep(state.address), function (newValue, oldValue) {

                console.log('old value  address  ', oldValue)
                console.log('new value address ', newValue)
            },
            {
                deep: true
            })
        return {
            refFName,
            refLName,
            ...toRefs(state)
        }
    }

}
</script>

<style scoped></style>