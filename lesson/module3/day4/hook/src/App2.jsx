import {useMemo, useState} from "react";
import {Button} from "antd";

function App() {
    const [num, setNum] = useState(0);
    const [light, setLight] = useState(true);
    const plusFive = (num) => {
        console.log(num);
        return num + 5;
    };

    const numPlusFive = useMemo(() => plusFive(num), [num]);

    return (
        <>
            <div className={`${light ? "bg-white text-black" : "bg-black text-white"} w-full h-screen flex items-center justify-center`}>
                <div>
                    <h2 className={"text-2xl leading-15"}>
                        Current number: {num}, Plus five: {numPlusFive}
                    </h2>
                    <div className={"flex justify-between"}>
                        <Button
                            type={"primary"}
                            size={"large"}
                            onClick={() => {
                                setNum(num + 1);
                            }}
                        >
                            Update Number{" "}
                        </Button>
                        <Button
                            type={"primary"}
                            size={"large"}
                            onClick={() => {
                                setLight(!light);
                            }}
                        >
                            {" "}
                            Toggle the light{" "}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
