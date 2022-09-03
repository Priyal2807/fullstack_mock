import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
function TimetoSleep() {
    const navigate = useNavigate();
    const [data, setData] = useState();
    const handleChange = (e) => {
        setData(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `${process.env.link}/sleepTimebed`
        const myid = localStorage.getItem('userid');
        await axios.post(url, { bedtime: data, myid: myid }).then(() => {
            navigate("/timetogetup");
        }).catch((err) => {
           console.log(err)
        })
        
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                What time do you go to bed for sleep?
            </div>
            <form action="" method="post" onSubmit={handleSubmit} class="form">
                <input type="text" name="name" value={data} onChange={handleChange} required placeholder="Enter time in hh:mm format" />
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default TimetoSleep;