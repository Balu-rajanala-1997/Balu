import React from 'react';
import { useParams } from 'react-router-dom';
import { stdData } from './Students';

export default function GetStudent(props) {
    var params = useParams();
    return (
        <div className="container-fluid m-2">
            <div className="d-flex justify-content-center">
                <table className="table w-25 text-center table-bordereless border border-success table-hover table-respons">
                    <tbody>
                        {stdData.map((value) => {
                            if (params.abc == value.id_) {
                                return (
                                    <>
                                    <tr>
                                        <th>Id</th>
                                        <td>{value.id_}</td>
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
        </div>
    )
}
