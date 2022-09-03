import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
function ChangeinSleep() {
    const navigate = useNavigate();
    const [val, setVal] = useState([]);
    const handleChange = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setVal(val.concat(value));
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        let myid = localStorage.getItem('userid');
        const url = `${process.env.link}/sleepResult`;
        await axios.post(
            url,
            {
                myid: myid,
                val:val
            }
        ).then(function (response) {
            navigate("/issuewithsleep");
        }).catch((err) => {
            console.log(err);
        })

        
    }
    return (
        <div className="centreDiv sizeofDiv">
            <div className="heading">
                Let's say in a few weeks, you are sleeping well. What would change?
            </div>
            <div className="intro">
                Select all the changes you would like to see
            </div>
            <form action="" method="post" onSubmit={handleSubmit} className="form2">
                <select value={val} onChange={handleChange} name="role" className="changeinsleep" multiple>
                <option value="sleep easily">I would go to sleep easily</option>
                <option value="sleep through night">I would sleep through the night</option>
                <option value="wake up refreshed">I'd wake up on time, refreshed</option>
                </select>
                <button type="submit" className="button"><FontAwesomeIcon icon={faArrowDown} /></button>
            </form>
        </div>
    )
}
export default ChangeinSleep;