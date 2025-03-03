import { Fragment, StrictMode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './Style_time.css'; // Add your CSS styles here
import BG from './clock-background.jsx'; // Add your background component if needed

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BG></BG>
        <App />
    </StrictMode>
);

function App() {
    return (
        <Fragment>
            <BuildClock />
        </Fragment>
    );
}

const list = ["hourPlay10", "hourPlay1","dots","minutePlay10", "minutePlay1","dots", "secondPlay10", "secondPlay1"];

function BuildClock() {
    return (
        <>
            {list.map((item, i) => {
                if (item !== "dots") {
                    return (
                        <ul className={"flip " + item} key={i}>
                            <Flaps/>
                        </ul>
                    );
                }else {
                    return (
                        <ul className={"flip " + item} key={i}>
                            <li key={i}>
                                <a href="#">
                                    <div className="up">
                                        <div className="shadow"></div>
                                        <div className="inn">:</div>
                                    </div>
                                    <div className="down">
                                        <div className="shadow"></div>
                                        <div className="inn">:</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    );
                }
            })}
        </>
    );
}

const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Flaps() {
    return (
        num.map((item, i) => {
            return (
                <li key={i}>
                    <a href="#">
                        <div className="up">
                            <div className="shadow"></div>
                            <div className="inn">{item}</div>
                        </div>
                        <div className="down">
                            <div className="shadow"></div>
                            <div className="inn">{item}</div>
                        </div>
                    </a>
                </li>
            );
        })
    );
}

export default App;
