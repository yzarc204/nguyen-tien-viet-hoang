const elmContainer = document.querySelector('.container');
const elmProfileHeader = document.querySelector('.profile-header');
const elmBanks = document.querySelector('.banks');
const modal = document.querySelector('.modal');

/* ===== WEBSITE ===== */
function SetTitleAndIcon(title, icon) {
    document.title = title;
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
    }
    link.href = `./public/images/icons/${icon}`;
    document.getElementsByTagName('head')[0].appendChild(link);
}

/* ===== PROFILE ===== */
function RenderProfileHeader(username, avatar, skills = [], blue = true) {
    const color = (blue) ? 'blue' : '';
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
            <div class="profile-name">
                <span>${username}</span>
                <ion-icon class="check-mark ${color}" name="checkmark-circle-sharp"></ion-icon>
            </div>
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
        let classShowModal = (bank.hasOwnProperty('fastTransfer') && bank.fastTransfer) ? 'btn-show-modal' : '';
        htmlBanks += `
                <div class="bank">
                    <img src="./public/images/banks/${bank.logo}" class="bank-logo">
                    <div class="bank-info">
                        <p class="bank-name">${bank.name}</p>
                        <p class="bank-number">STK: ${bank.number}</p>
                        <p class="bank-owner">CTK: ${bank.owner}</p>
                    </div>
                    <span class="btn-copy ${classShowModal}" data-number="${bank.number}">Copy</span>
                </div>
            `;
    });
    elmBanks.innerHTML = htmlBanks;
}

/* ===== EVENT ===== */
function CopyEvent() {
    const elmCopies = document.querySelectorAll('.btn-copy');
    elmCopies.forEach(btn => {
        btn.addEventListener('click', e => {
            elmCopies.forEach(elm => elm.textContent = 'Copy');
            let number = btn.getAttribute('data-number');
            let temp = document.createElement('textarea');
            temp.value = number;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            document.body.removeChild(temp);
            btn.textContent = 'Copied';
        });
    })
}

function ShowModalEvent() {
    const elmShowModals = document.querySelectorAll('.btn-show-modal');
    elmShowModals.forEach(btn => 
        btn.addEventListener('click', e => {
            let number = btn.getAttribute('data-number');
            ShowModal(number);
            btn.textContent = 'Copied';
        })    
    );
}

/* ===== MODAL ===== */
function ShowModal(number = 123456789) {
    modal.classList.add('active');
    elmContainer.classList.add('blur');
    modal.querySelector('#transfer').addEventListener('click', e => {
        let link = 'https://nhantien.momo.vn/' + number;
        window.open(link, '_blank');
        modal.querySelector('#dismiss').click();
    });
}

function CloseModalEvent() {
    modal.querySelector('#dismiss').addEventListener('click', e => {
        modal.classList.remove('active');
        elmContainer.classList.remove('blur');
    });
}