<template>
    <div>
        <el-form :model='form' label-width='120px'>
            <el-form-item label='Activity name'>
                <el-input v-model='form.name' />
            </el-form-item>
            <el-form-item label='Activity zone'>
                <el-select v-model='form.region' placeholder='please select your zone'>
                    <el-option label='Zone one' value='shanghai' />
                    <el-option label='Zone two' value='beijing' />
                </el-select>
            </el-form-item>
            <el-form-item label='Activity time'>
                <el-col :span='11'>
                    <el-date-picker
                        v-model='form.date1'
                        type='date'
                        placeholder='Pick a date'
                        style='width: 100%'
                    />
                </el-col>
                <el-col :span='2' class='text-center'>
                    <span class='text-gray-500'>-</span>
                </el-col>
                <el-col :span='11'>
                    <el-time-picker
                        v-model='form.date2'
                        placeholder='Pick a time'
                        style='width: 100%'
                    />
                </el-col>
            </el-form-item>
            <el-form-item label='Instant delivery'>
                <el-switch v-model='form.delivery' />
            </el-form-item>
            <el-form-item label='Activity type'>
                <el-checkbox-group v-model='form.type'>
                    <el-checkbox label='Online activities' name='type' />
                    <el-checkbox label='Promotion activities' name='type' />
                    <el-checkbox label='Offline activities' name='type' />
                    <el-checkbox label='Simple brand exposure' name='type' />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label='Resources'>
                <el-radio-group v-model='form.resource'>
                    <el-radio label='Sponsor' />
                    <el-radio label='Venue' />
                </el-radio-group>
            </el-form-item>
            <el-form-item label='Activity form'>
                <el-input v-model='form.desc' type='textarea' />
            </el-form-item>
            <el-form-item>
                <el-button type='primary' @click='onSubmit'>Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
        </el-form>
        <hr>

        <div>
            <div class='block'>
                <span class='demonstration'>Default</span>
                <el-date-picker
                    v-model='value1'
                    type='datetimerange'
                    range-separator='To'
                    start-placeholder='Start date'
                    end-placeholder='End date'
                />
            </div>
            <div class='block'>
                <span class='demonstration'>With shortcuts</span>
                <el-date-picker
                    v-model='value2'
                    type='datetimerange'
                    :shortcuts='shortcuts'
                    range-separator='To'
                    start-placeholder='Start date'
                    end-placeholder='End date'
                />
            </div>
        </div>


    </div>

</template>

<script lang="ts" setup>
import { reactive,ref } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}


// ===============



const value1 = ref([
    new Date(2000, 10, 10, 10, 10),
    new Date(2000, 10, 11, 10, 10),
])
const value2 = ref('')

const shortcuts = [
    {
        text: 'Last week',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
        },
    },
    {
        text: 'Last month',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
        },
    },
    {
        text: 'Last 3 months',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
        },
    },
]

</script>


<style scoped>
.block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.block:last-child {
  border-right: none;
}
.block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
