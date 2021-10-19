const user = USER;
const webConfig = WEB;
SetTitleAndIcon(webConfig.title, webConfig.favicon);
RenderProfileHeader(user.avatar, user.skills);
RenderBanks(user.username, user.banks);
CopyEvent();
MouseLeaveEvent();