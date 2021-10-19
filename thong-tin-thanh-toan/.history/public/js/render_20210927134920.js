const elmProfileHeader = document.querySelector('.profile-header');

function RenderProfileHeader(username, avatar, skills = []) {
    let html = '';
    
    html += `
    <img alt="Avatar" 
        src="../images/avatar/${avatar}" 
        class="profile-avatar">
    <div class="profile-info">
        <h4 class="profile-name">Nguyễn Thị Kỳ Anh Ninh Dương Lan</h4>
        <div class="skills">
            
        </div>
</div>
    `;
}