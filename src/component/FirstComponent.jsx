import {useNavigate} from 'react-router-dom'

export default function FirstComponent() {
    const navigate = useNavigate()
    return <div>
        <div>first component</div>
        <button onClick={() => navigate('home')}>navigate to home page</button>
    </div>
}