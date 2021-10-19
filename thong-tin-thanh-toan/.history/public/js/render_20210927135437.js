const elmProfileHeader = document.querySelector('.profile-header');

function RenderProfileHeader(username, avatar, skills = []) {
    let htmlSkill = '';
    skills.forEach(skill => {
        htmlSkill += `
            <div class="skill-tag">${skill}</div>
        `;
    })

    let htmlProfile = '';    
    htmlProfile += `
        <img alt="Avatar" 
            src="./public/images/avatars/${avatar}" 
            class="profile-avatar">
        <div class="profile-info">
            <h4 class="profile-name">${username}</h4>
            <div class="skills">
                ${htmlSkill}
            </div>
        </div>
        <span class="btn-copy">Copy</span>
    `;

    elmProfileHeader.innerHTML = htmlProfile;
}