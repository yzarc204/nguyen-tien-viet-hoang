const elmProfileHeader = document.querySelector('.profile-header');
const elmBanks = document.querySelector('.banks');

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
    `;

    elmProfileHeader.innerHTML = htmlProfile;
}

function RenderBanks(username, banks = []) {
    let htmlBanks = '';
    banks.forEach(bank => {
        htmlBanks += `
            <div class="bank">
                <img src="./public/images/banks/${bank.logo}" class="bank-logo">
                <div class="bank-info">
                    <p class="bank-name">${bank.name}</p>
                    <p class="bank-number">STK: 107866816570</p>
                    <p class="bank-owner">CTK: Trường Kỳ Kháng Chiến</p>
                </div>
                <span class="btn-copy">Copy</span>
            </div>
        `;
    })
}