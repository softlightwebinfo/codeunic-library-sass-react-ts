export default function alphabet(): string[] {
    let arr = ['a', 'z'];
    let res = [];
    for (let i = arr[0].charCodeAt(0); i <= arr[1].charCodeAt(0); i++) {
        res.push(String.fromCharCode(i));
    }
    return res;
}
