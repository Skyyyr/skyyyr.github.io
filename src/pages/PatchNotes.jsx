import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';

function PatchNotes() {
    const patchNotesData = [
        {
            version: "Patch 1.0.132",
            notes: {
                Misc: [
                    "Fixed various bugs.",
                    "Improved game performance."
                ],
                Professions: [
                    "Added new crafting recipes.",
                    "Balanced the skill progression."
                ]
            }
        },
        {
            version: "Patch 1.0.131",
            notes: {
                Misc: [
                    "Updated UI for better accessibility.",
                    "Added new background music tracks."
                ],
                Professions: [
                    "Fixed a bug in the fishing profession.",
                    "Enhanced gathering speed for mining."
                ]
            }
        },
        {
            version: "Patch 1.0.130",
            notes: {
                Misc: [
                    "Fixed issue with loading screen.",
                    "Improved server stability."
                ],
                Professions: [
                    "Added new farming quests.",
                    "Balanced the loot drops."
                ]
            }
        },
        {
            version: "Patch 1.0.129",
            notes: {
                Misc: [
                    "Enhanced graphics performance.",
                    "Updated character models."
                ],
                Professions: [
                    "Improved fishing mechanics.",
                    "Fixed a bug in the herbalism profession."
                ]
            }
        },
        {
            version: "Patch 1.0.128",
            notes: {
                Misc: [
                    "Adjusted game balance.",
                    "Improved AI behavior."
                ],
                Professions: [
                    "Added new alchemy recipes.",
                    "Fixed crafting bugs."
                ]
            }
        }
        // Add more patches as needed
    ];

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
