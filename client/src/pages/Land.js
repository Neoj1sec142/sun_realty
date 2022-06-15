import {Button, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Land = () => {
    const navigate = useNavigate()
    const n1 = () => {
        navigate('/login')
    }
    return(
        <Card>
            <Button onClick={()=>n1()}>Enter</Button>
        </Card>
    )
}

export default Land