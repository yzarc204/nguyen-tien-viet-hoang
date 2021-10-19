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

function RenderBanks(banks = []) {
    let htmlBanks = '';
    banks.forEach(bank => {
        htmlBanks += `
            <div class="bank">
                <img src="./public/images/banks/${bank.logo}" class="bank-logo">
                <div class="bank-info">
                    <p class="bank-name">${bank.name}</p>
                    <p class="bank-number">STK: ${bank.number}</p>
                    <p class="bank-owner">CTK: ${bank.owner}</p>
                </div>
                <span class="btn-copy" data-number="${bank.number}">Copy</span>
            </div>
        `;
    })
    elmBanks.innerHTML = htmlBanks;
}

function SetTitleAndIcon(title, icon) {
    document.title = title;
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
    }
    link.href = ``;
    document.getElementsByTagName('head')[0].appendChild(link);
}

function CopyEvent() {
    const elmCopies = document.querySelectorAll('.btn-copy');
    elmCopies.forEach(btn => {
        btn.addEventListener('click', e => {
            elmCopies.forEach(elm => elm.textContent = 'Copy');
            let number = btn.getAttribute('data-number');
            navigator.clipboard.writeText(number);
            btn.textContent = 'Copied';
        });
    })
}

function MouseLeaveEvent() {
    const elmBank = document.querySelectorAll('.bank');
    elmBank.forEach(bank => {
        bank.addEventListener('mouseleave',e => {
            let btn = bank.querySelector('.btn-copy');
            btn.textContent = 'Copy';
        });
    })
}