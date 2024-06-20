import React from 'react';

const teamMembers = [
    {
        role: 'Lead Developer',
        name: 'Sky'
    },
    {
        role: 'Lead Admin',
        name: 'Sky'
    },
    {
        role: 'Developer',
        name: 'Sky'
    },
    {
        role: 'Developer',
        name: 'Sky'
    },
    {
        role: 'Community Representative',
        name: 'Sky'
    },
    {
        role: 'Community Representative',
        name: 'Sky'
    },
    {
        role: 'Community Representative',
        name: 'Sky'
    },
    {
        role: 'Event Coordinator',
        name: 'Sky'
    },
    {
        role: 'Event Coordinator',
        name: 'Sky'
    },
];

function About() {
    return (
        <div className="text-black">
            <h1>Meet the ROTF Team</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {teamMembers.map((member, index) => (
                    <li key={index}>
                        <b>{member.role}:</b> {member.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default About;
