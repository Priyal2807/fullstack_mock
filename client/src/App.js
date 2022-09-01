import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Name from './Components/Name.js'
import ChangeinSleep from './Components/ChangeinSleep.js'
import HoursOfSleep from './Components/HoursOfSleep.js'
import IssueWithSleep from './Components/IssueWithSleep.js'
import Intro from './Components/Intro.js'
import TimetoGetup from './Components/TimetoGetup.js'
import TimetoSleep from './Components/TimetoSleep.js'
import SleepScore from './Components/SleepScore.js'


function App() {
    return (
        <BrowserRouter>
            <div className="App centreDiv">
                <Routes>
                    <Route exact path="/" element={<Intro />}>
                    </Route>
                    <Route exact path="/changeinsleep" element={<ChangeinSleep />}>
                    </Route>
                    <Route exact path="/hoursofsleep" element={<HoursOfSleep />}>
                    </Route>
                    <Route exact path="/issuewithsleep" element={<IssueWithSleep />}>
                    </Route>
                    <Route exact path="/name" element={<Name />}>
                    </Route>
                    <Route exact path="/timetogetup" element={<TimetoGetup />}>
                    </Route>
                    <Route exact path="/timetosleep" element={<TimetoSleep />}>
                    </Route>
                    <Route exact path="/sleepscore" element={<SleepScore />}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
            )

}

export default App;
