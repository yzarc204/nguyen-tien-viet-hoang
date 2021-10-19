const elmProfileHeader = document.querySelector('.profile-header');

function RenderProfileHeader(username, avatar, skills = []) {
    let htmlSkill = '';

    let htmlPprofile = '';    
    profile += `
    <img alt="Avatar" 
        src="../images/avatar/${avatar}" 
        class="profile-avatar">
    <div class="profile-info">
        <h4 class="profile-name">${username}</h4>
        <div class="skills">
            
        </div>
</div>
    `;
}