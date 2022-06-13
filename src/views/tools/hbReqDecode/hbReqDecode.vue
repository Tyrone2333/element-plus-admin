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
            <textarea id='output-text' v-model='outputVal' cols='50' rows='5' />
            <el-button class='btn btn-primary' @click='doReduction()'>还原</el-button>
        </div>

    </div>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'Aaaa',
    setup() {

        let inputField = ref('WyIwLDk5OTkiXQ%3D%3D')
        let outputVal = ref('outputVal')

        // 浏览器有限制读取剪切板事件需要有按键触发
        function handleClipboardClick() {
            navigator.clipboard.readText()
                .then((text) => {
                    inputField.value = text
                    doConversion()
                })
        }

        function encode(text) {
            return encodeURIComponent(btoa(text))
        }

        function decode(text) {
            return atob(decodeURIComponent(text))
        }

        // 转换
        function doConversion() {
            let text = inputField.value

            let convertedText
            console.log('doConversion', text)
            try {
                convertedText = decode(text)
            } catch (e) {
                console.error(e)
                console.log(e.message)
                outputVal.value = e.message
                return
            }
            // copyTextToClipboard(convertedText)
            outputVal.value = convertedText
        }

        // 还原
        function doReduction() {
            let text = outputVal.value
            let convertedText
            try {
                convertedText = encode(text)
            } catch (e) {
                console.error(e)

                inputField.value = e.message
                return
            }
            // copyTextToClipboard(convertedText)
            inputField.value = convertedText
        }

        return {
            inputField,
            outputVal,
            doConversion,
            doReduction,
            handleClipboardClick,
        }
    },
})
</script>

<style scoped>

textarea {
  vertical-align: bottom;
  margin-right: 10px;
}
</style>
