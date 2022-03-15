import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import {selectGlobalDataName} from "../store/globalState/globalDataSelectors";
import {useSelector} from "react-redux";

const onChangeGenerator = (setValue) => (event) => {
    if (+event.target.value === +event.target.value) {
        setValue(event.target.value.trim())
    }
}
export default function FirstComponent({count, setCount}) {
    const [isShownCount, setIsShownCount] = useState(true)
    const [value, setValue] = useState('')
    const [sqrtValue, setSqrtValue] = useState('')
    const [powValue, setPowValue] = useState('')
    const [isPow, setIsPow] = useState(false)
    const name = useSelector(selectGlobalDataName)
    const navigate = useNavigate()

    useEffect(() => {
        if (powValue) {
            setIsPow(true)
        }
    }, [powValue])
    useEffect(() => {
        if (sqrtValue) {
            setIsPow(false)
        }
    }, [sqrtValue])
    useEffect(() => {
        return () => {
            setCount(0)
        }
    }, [setCount])
    return <div>
        <div>first component</div>
        <button onClick={() => setCount(++count)}>add</button>
        <button onClick={() => setCount(--count)}>decrease</button>
        <button onClick={() => navigate('home')}>navigate to home page</button>
        <div>
            {
                isShownCount && <button onClick={() => {
                    setIsShownCount(false)
                }}>remove count</button>
            }
            {isShownCount || <button onClick={() => setIsShownCount(true)}>show count</button>}
        </div>
        <input
            onChange={onChangeGenerator(setValue)}
            value={value}
        />
        <button
            onClick={() => {
                setCount(count + +value)
                setValue('')
            }}
            // disabled={value.length}
            disabled={value === ''}
        >
            add input value to count
        </button>
        <div>
            <div>
                <input value={sqrtValue} onChange={onChangeGenerator(setSqrtValue)}/>
                esi armatna
            </div>
            <div>
                <input value={powValue} onChange={onChangeGenerator(setPowValue)}/>
                esi astichany
            </div>
            <button onClick={() => {
                let result
                if(isPow) {
                    result = count ** powValue
                } else {
                    result = Math.sqrt(count)
                }
                setCount(result)
            }}
            >
                tarzan
            </button>
        </div>
        {isShownCount && <div>{count}</div>}
        {count >= 100 && <h1>shnorhavor amanor hasar 100</h1>}
    </div>
}