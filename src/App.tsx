import {SetStateAction, useEffect, useState} from "react"
import moment, {Moment} from "moment";
import ClockHandle from './components/clockHandle.tsx'

import './App.css'
import clockBorder from './assets/clockborder.svg'

function App() {
    const [time, setTime] = useState<Moment>(moment())

    useEffect(() => {

        const interval = setInterval((setTime: SetStateAction<Moment>) =>
            setTime((preState: Moment) => {
                return moment(preState).add(1, 's')
            }), 1000, setTime)

        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <div className={'clock-container'}>
            <div className={"clock-body"}>
                <img src={clockBorder} className={'clock-border'} alt={'clock-border'}/>
            </div>
            <ClockHandle type={'hour'}/>
            <ClockHandle type={'minutes'}/>
        </div>
    )

}

export default App
