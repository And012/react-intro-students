export default function backend(data) {
    console.log(data)
    let email = 'Azatutyun'
    let password = 'Charenc'
    return new Promise((resolve, reject) => {
        if(data.email === email && data.password === password) {
            resolve('jwt')
        }else {
            reject('error')
        }
    })
}
