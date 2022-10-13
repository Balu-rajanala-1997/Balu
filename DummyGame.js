import React, { useState } from 'react';

export default function DummyGame() {
    const [count, setCount] = useState(0);
    const [enrCounter, setEnrCounter] = useState(0);
    const counterInc = () => {
        setCount(count + 1);
        setEnrCounter(Math.trunc(count / 10));
    }
    var enImg = (
        <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
    );

    var ab = [];

    for (let index = 0; index < enrCounter; index++) {
        if (enrCounter >= 1) {
            ab[index] = enImg;
        }
    }

    const c1 = () => {
        setCount(count + 2);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }
    const c2 = () => {
        setCount(count + 4);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }
    const c3 = () => {
        setCount(count + 6);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }
    const c4 = () => {
        setCount(count - 3);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }
    const c5 = () => {
        setCount(count - 4);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }
    const c6 = () => {
        setCount(count + 7);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }
    const c7 = () => {
        setCount(count - 8);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }
    const c8 = () => {
        setCount(count - 4);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }
    const c9 = () => {
        setCount(count - 2);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }
    const c10 = () => {
        setCount(count - 2);
        var enImg = (
            <img src="iconsaccount.png" style={{ height: "30px", width: "30px" }} />
        );
        setEnrCounter(Math.trunc(count / 10));
    }

    return (
        <div className="container-fluid">
            <div className="bg-dark d-flex justify-content-between rounded rounded-3 mt-2 mb-2">
                <div className="pt-4 ">
                    <button className="btn btn-success text-white ms-4 me-4 mb-3" onClick={counterInc}>CounterInc</button>
                    <button className="btn btn-warning text-dark ms-4 mb-3 " onClick={() => {
                        setCount(count - 1);
                        setEnrCounter(Math.trunc(count / 10));
                    }}>CounterDec</button>
                </div>
                <div>
                    <h5 className="text-end me-4 pt-2 text-warning">Coins[C] <i className="bi bi-arrow-up"></i>: {count}</h5>
                    <h5 className="text-end me-4 pt-1 pb-2 text-warning ">EnrCounter[E] <i className="bi bi-arrow-up"></i>: {enrCounter}</h5>
                </div>
            </div>
            <div className="ms-1 mt-5 me-1 rounded rounded-3" style={{ height: '350px', backgroundColor: 'skyblue' }}>
                <div className="">
                    <div className="row ms-4 pt-3 me-4">
                        <div className="col-2 " onMouseEnter={c1} style={{ height: '150px', backgroundColor: '#ff8000' }}></div>
                        <div className="col-3 " onMouseEnter={c2} style={{ height: '150px', backgroundColor: '#00ff40' }}></div>
                        <div className="col-2 " onMouseEnter={c3} style={{ height: '150px', backgroundColor: '#bf00ff' }}></div>
                        <div className="col-2 " onMouseEnter={c4} style={{ height: '150px', backgroundColor: '#00ff40' }}></div>
                        <div className="col-3 " onMouseEnter={c5} style={{ height: '150px', backgroundColor: '#ff9966' }}></div>
                    </div>
                    <div className="row ms-4 pt-3 me-4">
                        <div className="col-3 " onMouseEnter={c6} style={{ height: '150px', backgroundColor: ' #ff66cc' }}></div>
                        <div className="col-2 " onMouseEnter={c7} style={{ height: '150px', backgroundColor: '#ff00ff' }}></div>
                        <div className="col-3 " onMouseEnter={c8} style={{ height: '150px', backgroundColor: '#bfff00' }}></div>
                        <div className="col-2 " onMouseEnter={c9} style={{ height: '150px', backgroundColor: '#00bfff' }}></div>
                        <div className="col-2 " onMouseEnter={c10} style={{ height: '150px', backgroundColor: '#ff0080' }}></div>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <div className="mx-2">
                    <p className="">
                        {ab.map((ele, ind) => {
                            return <span key={ind}>{ele}</span>;
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}
