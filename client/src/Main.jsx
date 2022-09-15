import React, {useState} from 'react'
import { Spreadsheet } from 'react-spreadsheet'
const Main = () => {
    const [data, setData] = useState([
        [{value: 'Vanilla'}, {value: "Chocolate"}],
        [{value: 'Strawberry'}, {value: "Cookies"}],
    ])
    const yooo = () => {
        console.log(data[1][0].value)
    }
    return (
        <div>
        <Spreadsheet data={data} onChange={setData}/>
        <button onClick={() => yooo()}>Here</button>
        </div>
    )
}
export default Main