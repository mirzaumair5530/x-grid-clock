import {FC, useMemo} from "react"

import Styles from "./clockHandle.module.css"

interface ClockHandleType {
    type: "hour" | "minutes" | "seconds"
}

const ClockHandle: FC<ClockHandleType> = ({type}) => {

    const handleClass = useMemo(() => {
        switch (type) {
            case "hour": {
                return "clock-hour-handle"
            }
            case "minutes": {
                return "clock-minutes-handle"
            }

            default: {
                return "clock-minutes-handle"
            }
        }
    }, [type])
    return <div className={Styles[handleClass]}/>
}

export default ClockHandle