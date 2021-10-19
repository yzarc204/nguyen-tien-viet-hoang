const user = USER;
const webConfig = WEB;
SetTitleAndIcon()
RenderProfileHeader(user.username, user.avatar, user.skills);
RenderBanks(webConfig.title, webConfig.favicon);