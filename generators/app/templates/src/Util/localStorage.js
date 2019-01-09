export function getItem(key) {
    let value;
    try {
        value = localStorage.getItem(key)
    } catch (ex) {
        if (process.env.__DEV__) {
            console.log('localStorage.getItem报错,', ex.message)
        }
    } finally {
        return value
    }
}
export function setItem (key, value) {
    try {
        // ios safari 无痕模式下，直接使用localStore.setItem会报错
        localStorage.setItem(key, value)
    } catch (ex){
        if (process.env.__DEV__) {
            console.log('localStorage.setItem报错,', ex.message)
        }
    }
}
