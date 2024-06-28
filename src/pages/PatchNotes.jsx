import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import patchNotesData from '../data/patchnotes.json';

function PatchNotes() {
    const [currentPage, setCurrentPage] = useState(1);
    const patchesPerPage = 5;

    const indexOfLastPatch = currentPage * patchesPerPage;
    const indexOfFirstPatch = indexOfLastPatch - patchesPerPage;
    const currentPatches = patchNotesData.slice(indexOfFirstPatch, indexOfLastPatch);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="text-black">
            <h1>Patch Notes</h1>
            {currentPatches.map((patch, index) => (
                <div key={index} style={{ textAlign: 'left', marginBottom: '30px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>{patch.version}</h2>
                    {Object.keys(patch.notes).map((section, idx) => (
                        <div key={idx}>
                            <h3>{section}</h3>
                            <ul>
                                {patch.notes[section].map((note, i) => (
                                    <li key={i}>{note}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Pagination>
                    {[...Array(Math.ceil(patchNotesData.length / patchesPerPage)).keys()].map(number => (
                        <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </div>
    );
}

export default PatchNotes;
