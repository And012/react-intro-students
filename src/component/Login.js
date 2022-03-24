import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {Login as LoginThunk} from '../store/globalState/globalStateReducer'

export default function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = useSelector(state => state.globalState.jwt)
    const [data, setData] = useState({email: '', password: ''})
    useEffect(() => {
        if (jwt) {
            navigate('urish')
        }
    }, [jwt])
    return <div>
        {Object.entries(data).map(([key, value]) => {
            return <input
                value={value}
                onChange={
                    (event) => {
                        let result = {...data}
                        result[key] = event.target.value
                        setData(result)
                    }
                }
                {...{key}}
            />
        })}
        <button
            // onClick={() => {
            //     backend(data).then(response => {
            //         dispatch(setJwt(response))
            //     }).catch(err => {
            //         console.log('error')
            //     })
            // }}
            onClick={
                () => {
                    dispatch(LoginThunk(data))
                }
            }
        >
            click me to send request
        </button>
    </div>
}