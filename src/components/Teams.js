import React from 'react';

function Teams() {
  return (
    <section className="teams">
      <h2>Our Teams</h2>
      <div className="team-cards">
        <div className="card">
          <img src="/logo192.png" alt="Citra Aniindya" />
          <h3>Citra Aniindya</h3>
          <p>Founder</p>
        </div>
        <div className="card">
          <img src="/logo512.png" alt="Team Member" />
          <h3>Team Member</h3>
          <p>Farmer</p>
        </div>
      </div>
    </section>
  );
}

export default Teams;