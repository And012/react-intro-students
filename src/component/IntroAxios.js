import axios from 'axios'
export default function IntroAxios() {
    axios.get('localhost:4000/').then((response) => {
        console.log(response.data())
    })
    return <h1>this is intro to axios</h1>
}