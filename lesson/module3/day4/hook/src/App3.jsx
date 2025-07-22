import {useCallback, useState} from "react";
import {Button} from "antd";
import {DisplayNumber} from "./DisplayNumber.jsx";

function App() {
    const [num, setNum] = useState(0);
    const [light, setLight] = useState(true);
    const plusFive = useCallback(() => {
        console.log("I was called!");
        return num + 5;
    },[num]);

    return (
        <>
            <div className={`${light ? "bg-white text-black" : "bg-black text-white"} w-full h-screen flex items-center justify-center`}>
                <div>
                    <h2 className={"text-2xl leading-15"}>
                        Current number: {num}, <DisplayNumber func={plusFive} />
                    </h2>
                    <div className={"flex justify-between"}>
                        <Button
                            type={"primary"}
                            size={"large"}
                            onClick={() => {
                                setNum(num + 1);
                            }}
                        >
                            Update Number
                        </Button>
                        <Button
                            type={"primary"}
                            size={"large"}
                            onClick={() => {
                                setLight(!light);
                            }}
                        >
                            Toggle the light
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
