const user = USER;
const webConfig = WEB;
SetTitleAndIcon()
RenderProfileHeader(user.username, user.avatar, user.skills);
RenderBanks(user.username, user.banks);