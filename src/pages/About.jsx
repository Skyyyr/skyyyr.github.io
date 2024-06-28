import React from 'react';
import teamMembers from '../data/team.json'

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
