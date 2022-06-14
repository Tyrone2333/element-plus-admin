<template>
    <div class='container'>
        <div class='row'>
            <h2 class='text-xl'>hb 请求参数转码</h2>
        </div>
        <div class='row my-5'>
            <el-button class='btn btn-primary' type='primary' @click='handleClipboardClick()'>获取剪切板</el-button>
        </div>

        <div class='row'>
            <p>输入框</p>
            <textarea id='input-text' v-model='inputField' cols='50' rows='5' />
            <el-button class='btn btn-primary' @click='doConversion()'>转码</el-button>
        </div>

        <div class='row'>
            <div>转换结果</div>
            <textarea id='output-text' v-model='outputField' cols='50' rows='5' />
            <el-button class='btn btn-primary' @click='doReduction()'>还原</el-button>
        </div>
    </div>

</template>

<script lang='ts'>
export default {
    name: 'HbReqDecodeComposable',

}
</script>
<script lang='ts' setup>

import { useHbDecode } from './composables/useHbDecode'
console.log('HbReqDecodeComposable')
const {
    inputField,
    outputField,
    doConversion,
    doReduction,
    handleClipboardClick,
} = useHbDecode()

</script>

<style scoped>
textarea {
  vertical-align: bottom;
  margin-right: 10px;
}
</style>
