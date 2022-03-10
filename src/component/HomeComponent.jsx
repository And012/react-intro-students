import {useNavigate} from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate()

    return <div>
        <h1>this is home</h1>
        <button onClick={() => navigate('/')}>go to main page</button>
        <Routes>
            <Route path={'firstFloor'} element={<div>first floor</div>}/>
        </Routes>
    </div>
}