import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { stdData } from './Students';

export default function UpdateStudent() {
    var params = useParams();
    const [stdData1, setStdDatas] = useState(stdData);

    const eventChange = (e) => {
        stdData.map((ele) => {
            if (ele.name == e.target.name) {
                setStdDatas(...ele, (e.current.name = e.current.value));
            }
        });
    };

    return (
        <div className="container-fluid">
            <div>
                {stdData1.map((value) => {
                    if (params.abc == value.id_) {
                        return (
                            <div className="d-flex justify-content-center">
                                <table className="table table-borderless text-center w-25 table-respons">
                                    <tbody >
                                        {stdData1.map((value) => {
                                            if (params.abc == value.id_) {
                                                return (
                                                    <>
                                                        <tr>
                                                            <th>Id</th>
                                                            <td>{value.id_}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Name</th>
                                                            <td><input className="border borderless" type="text" value={value.name} /></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Marks</th>
                                                            <td><input className="border borderless" type="text" value={value.marks} /></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Place</th>
                                                            <td><input className="border borderless" type="text" value={value.place} /></td>
                                                        </tr>
                                                    </>
                                                )
                                            }
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-info rounded rounded-3">Update</button>
            </div>
        </div>
    )
}
