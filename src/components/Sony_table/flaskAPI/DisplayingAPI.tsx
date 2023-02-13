import { useEffect, useState } from "react"
// import { FlaskAPI } from "../../apis/FlaskAPIactions"
import { FlaskApiData } from "../../../Types"
import PropTypes from 'prop-types'
import { Link, useParams } from "react-router-dom"
import { FlaskAPI } from "../../../apis/flaskAPIactions"


const FlaskAPIDetails: React.FC = () => {

    const [flaskData, setFlaskData] = useState<FlaskApiData>({domain:"",
        time:0,
        user:"",
        user1:"",
        username:""})
       
    useEffect(() => {
        FlaskAPI.getAll()
            .then((data: FlaskApiData) => {
                return setFlaskData(data)
            })
    }, [])
    return (
    <div>
        <p>         
            <li key={flaskData.domain}>{flaskData.domain}</li>
            <li key={flaskData.time}>{flaskData.time}</li>
            <li key={flaskData.user}>{flaskData.user}</li>
            
         
        </p>
    </div>)

}

export default FlaskAPIDetails
