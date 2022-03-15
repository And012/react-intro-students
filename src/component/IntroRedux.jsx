import {useDispatch, useSelector} from 'react-redux'
import {selectGlobalDataName} from "../store/globalState/globalDataSelectors";
import {useState} from "react";
import {changeName, setInitialName} from "../store/globalState/globalStateReducer";

export default function IntroRedux() {
    return <div>
        <h1>redux intro</h1>
        <SomeComponent/>
    </div>
}

function SomeComponent() {
    return <AnotherComponent/>
}

function AnotherComponent() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const name = useSelector(selectGlobalDataName)
    const history = useSelector(state => state.globalState.history)
    // const name = useSelector(state => state.globalState.name)
    return <div>
        <h1>{name}</h1>
        <input value={value} onChange={(event) => setValue(event.target.value)}/>
        <button onClick={() => {
            dispatch(changeName(value))
            setValue('')
        }}>change name
        </button>
        <button onClick={() => {
            dispatch(setInitialName())
        }}>set initial Name
        </button>
        {history.map((el, index) => <h2
            key={index}
            style={el.endsWith('yan') ? {
                background: 'red'
            } : {}}
        >{el}</h2>)}
    </div>
}
