/**
 * Created by en20 on 2021/4/22.
 */
let cookieArr = []

let newCookieArr = cookieArr.map((item) => {
    return `${item.name}=${item.value}`
})

console.log(newCookieArr.join('; '))
