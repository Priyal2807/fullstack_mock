import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
function HoursOfSleep() {
    const navigate = useNavigate();
    const [data, setData] = useState()
    const handleChange = (e) => {
        setData(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
       // const baseUrl = "http://localhost:5000";
        const url = "hourSleepNight"
        const myid = localStorage.getItem("userid");
        await axios.post(url, {
            hours: data,
            myid: myid
        }).then(() => {
            navigate("/sleepscore");
        }).catch((err) => {
            console.log(err);
        })
        
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                Ok. How many hours sleep do you get in a typical night?
            </div>
            <form action="" method="post" onSubmit={handleSubmit} class="form">
                <input type="text" name="name" value={data} onChange={handleChange} required placeholder="Enter the number of hours" />
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default HoursOfSleep;