import React, { useState } from 'react'
import { stdData } from './Students';
import { useParams } from "react-router-dom";

export default function DeleteStudent() {
    const [deletes, setDeletes] = useState();

    const [stud, setStuds] = useState(stdData);

    const params = useParams();

    const deleteVal = (e) => {
        setDeletes(e.target.value);
    };

    const recordChange = (e) => {
        alert(`${params.abc} had deleted`)
        setStuds([])
    }
    return (
        <div className="container-fluid">
            <div className=" d-flex justify-content-center mt-4">
                {/* <input type="text" value={deletes} onChange={deleteVal} />&emsp; */}
                <table className="table table-hover table-bordered text-center w-25 table-respons">
                    <tbody >
                        {stud.map((value) => {
                            if (params.abc == value.id_) {
                                return (
                                    <>
                                        <tr>

                                            <th>Id</th>
                                            <td id="valueId">{value.id_}</td>
                                        </tr>
                                        <tr>
                                            <th>Name</th>
                                            <td>{value.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Marks</th>
                                            <td>{value.marks}</td>
                                        </tr>
                                        <tr>
                                            <th>Place</th>
                                            <td>{value.place}</td>
                                        </tr>
                                    </>

                                )
                            }
                        })}
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={recordChange} className="btn btn-secondary rounded rounded-3" value={deletes}>
                    Delete Record
                </button>
            </div>
        </div>
    )
}