interface NameUrl {
  name: string;
  icon_url: string;
  url: string;
}

export const categories: NameUrl[] = [
  {
    name: "Offensive",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/c/c7/Iron_Sword.png/revision/latest?cb=20220313022945",
    url: "offensive",
  },
  {
    name: "Defensive",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/f/ff/Iron_Shield.png/revision/latest?cb=20231004093911",
    url: "defensive",
  },
  {
    name: "Skills",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/c/c6/Golden_Starfish.png",
    url: "skills",
  },
  {
    name: "Miscellaneous",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/b/b8/Recall_Idol.png/revision/latest?cb=20220313041921",
    url: "misc",
  },
];

export const contact: NameUrl[] = [
  {
    name: "Steam",
    icon_url: "siSteam",
    url: "https://store.steampowered.com/app/1621690/Core_Keeper/",
  },
  {
    name: "Discord",
    icon_url: "siDiscord",
    url: "https://discord.gg/corekeeper/",
  },
  {
    name: "Twitter",
    icon_url: "siTwitter",
    url: "https://twitter.com/CoreKeeperGame",
  },
  {
    name: "Youtube",
    icon_url: "siYoutube",
    url: "https://www.youtube.com/channel/UCfnfwO-3cN97ZCZYLOWxjTg/",
  },
  {
    name: "TikTok",
    icon_url: "siTiktok",
    url: "https://www.tiktok.com/@corekeepergame/",
  },
];

export const tools: NameUrl[] = [
  {
    name: "Calculator",
    url: "calculator",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/3/36/Admin_Key.png/revision/latest?cb=20220615093300",
  },
  {
    name: "Full List",
    url: "list",
    icon_url:
      "https://static.wikia.nocookie.net/core-keeper/images/e/e6/Cipher_Parchment.png",
  },
];
