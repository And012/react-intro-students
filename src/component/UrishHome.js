import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeJwt} from "../store/globalState/globalStateReducer";

export default function UrishHome() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const jwt = useSelector((state) => state.globalState.jwt)
    useEffect(()=> {
        if(jwt === null) {
            navigate('/')
        }
    },[jwt])
    return <div>
        <button onClick={() => {
            dispatch(removeJwt())
        }}>sign out</button>
        welcome
    </div>
}