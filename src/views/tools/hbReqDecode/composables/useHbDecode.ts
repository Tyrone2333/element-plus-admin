import { computed, unref, ref } from 'vue'

/**
 * @description 用户网络是否可用
 * */
export function useHbDecode() {

    const inputField = ref('WyIwLDk5OTkiXQ%3D%3D')
    const outputField = ref('outputField')

    // 浏览器有限制读取剪切板事件需要有按键触发
    function handleClipboardClick() {
        navigator.clipboard.readText()
            .then((text) => {
                inputField.value = text
                doConversion()
            })
    }

    function encode(text: string) {
        return encodeURIComponent(btoa(text))
    }

    function decode(text: string) {
        return atob(decodeURIComponent(text))
    }

    // 转换
    function doConversion() {
        const text = inputField.value

        let convertedText
        console.log('doConversion', text)
        try {
            convertedText = decode(text)
        } catch (e: any) {
            console.error(e)
            console.log(e.message)
            outputField.value = e.message
            return
        }
        // copyTextToClipboard(convertedText)
        outputField.value = convertedText
    }

    // 还原
    function doReduction() {
        const text = outputField.value
        let convertedText
        try {
            convertedText = encode(text)
        } catch (e:any) {
            console.error(e)

            inputField.value = e.message
            return
        }
        // copyTextToClipboard(convertedText)
        inputField.value = convertedText
    }


    return {
        inputField,
        outputField,
        doConversion,
        doReduction,
        handleClipboardClick,
    }

}
