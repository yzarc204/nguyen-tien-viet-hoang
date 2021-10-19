const user = USER;
const webConfig = WEB;
SetTitleAndIcon(webConfig.title, webConfig.favicon);
RenderProfileHeader(user.username, user.avatar, user.skills);
RenderBanks(user.username, user.banks);
CopyEvent();