<template>
    <div class='var-name-convert'>

        <p>msg: {{ msg }}</p>
        <div class='checkbox-item'>
            <span>转换中划线: </span>
            <input v-model='transMiddleDash' type='checkbox'>
        </div>
        <div class='checkbox-item'>
            <span>转换空格: </span>
            <input v-model='transSpace' type='checkbox'>
        </div>
        <hr>
        <p>驼峰: {{ underlineToHump(msg) }}</p>
        <p>下划线: {{ humpToUnderline(msg) }}</p>
        <p>大写下划线: {{ toCapitalUnderline(msg) }}</p>
        <p>中划线: {{ humpToMiddleLine(msg) }}</p>

        <div class='child'>
            <h4>需要转换的变量名</h4>
            <input v-model='msg2' type='text' @input='handleInput'>
            <!--<custom-input v-model:mv='msg' :transMiddleDash='transMiddleDash'></custom-input>-->
            <!-- <custom-input :model-value="msg" @update:model-value="msg = $event"></custom-input> -->
        </div>

    </div>
</template>

<script>
/**
 *  Created by en20 on 2021/5/7.
 *  Description:
 */
export default {
    name: 'VarNameConvert',
    props: {},
    data() {
        return {
            msg: 'fooBar',
            count: 0,
            transMiddleDash: true,
            transSpace: true,
        }
    },
    computed: {
        msg2: {
            get() {
                return this.msg
            },
            set(v) {
                let t = v
                if (this.transSpace) {
                    t = v.replaceAll(' ', '_')
                }
                if (this.transMiddleDash) {
                    t = t.replaceAll('-', '_')
                }
                this.msg = t
                // this.$emit('update:mv', v.replaceAll(' ', '_'))
            },
        },
    },
    watch: {
        transMiddleDash() {
            console.log(1111111)
        },
    },
    methods: {
        handleInput(v) {
            console.log('handleInput', v.target.value)
        },
        // 下划线转驼峰
        underlineToHump(s) {
            let a = s.split('_')
            let result = a[0]

            for (let i = 1; i < a.length; i++) {
                result = result + a[i].slice(0, 1).toUpperCase() + a[i].slice(1)
            }
            return result
        },
        // 驼峰转下划线
        humpToUnderline(str) {
            return str.replace(/([A-Z])/g, '_$1').toLowerCase()
        },
        // 驼峰转中划线
        humpToMiddleLine(str) {
            return str.replace(/([A-Z])/g, '-$1').toLowerCase()
        },
        // 大写
        toCapitalUnderline(str) {
            return str.replace(/([A-Z])/g, '_$1').toUpperCase()
        },
    },
}
</script>

<style scoped>
.var-name-convert {
}
</style>
