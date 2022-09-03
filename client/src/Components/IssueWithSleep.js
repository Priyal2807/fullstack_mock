import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
function IssueWithSleep() {
    const navigate = useNavigate();
    const [val, setVal] = useState();
    const handleChange = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setVal(val.concat(value));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const baseUrl = "http://localhost:5000";
        const url = `${baseUrl}/sleepissueTime`
        const myid = localStorage.getItem('userid');
        await axios.post(url, {
            myid: myid,
            val : val
        }).then(() => {
            navigate("/timetosleep");
        }).catch((err) => {
            console.log(err);
        })
       
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                That's a great goal. How long have you been struggling with your sleep?
            </div>
            <form action="" method="post" onSubmit={handleSubmit} class="form2">
                <select value={val} onChange={handleChange} name="role" className="issuewithsleep" multiple>
                    <option value="sleep easily">Less than 2 weeks</option>
                    <option value="sleep through night">2 to 8 weeks</option>
                    <option value="wake up refreshed">More than 8 weeks</option>
                </select>
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default IssueWithSleep;