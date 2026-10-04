const TODO = "REPLACE_WITH_URL";

/** Satu-satunya tempat untuk mengganti URL. */
export const links = {
  ecosystem: {
    ai: "https://ai.xeandigital.web.id",
    downloader: "https://downloader.xeandigital.web.id",
    webChat: "https://wech.xeandigital.web.id",
    topUp: "https://veltapedia.id",
    binaryEdu: "https://binary.xeandigital.web.id",
  },
  community: {
    whatsappChannel: TODO,
    telegram: TODO,
    whatsappGroup: TODO,
    admin: TODO, // WhatsApp admin (kontak utama), mis. https://wa.me/<nomor>
  },
  social: {
    tiktok: TODO,
    youtube: TODO,
    instagram: TODO,
  },
};

/** Opsional: isi `handle` (mis. "@namaakun") setelah username dipastikan. Kosong = tidak ditampilkan. */
export type Item = {
  key: string; name: string; desc: string; url: string; cat: string; cta: string;
  color: string; glyph: string; handle?: string;
};

export const isReady = (url: string) => /^https?:\/\//.test(url);

export const ecosystem: Item[] = [
  { key: "ai", name: "Xean AI", desc: "AI assistant untuk membantu berbagai kebutuhan digital dan produktivitas.", url: links.ecosystem.ai, cat: "AI / Produktivitas", cta: "Open AI", color: "var(--purple)", glyph: "✦" },
  { key: "dl", name: "Xean Downloader", desc: "Platform downloader untuk berbagai kebutuhan media digital.", url: links.ecosystem.downloader, cat: "Tools", cta: "Open Downloader", color: "var(--orange)", glyph: "↓" },
  { key: "chat", name: "Xean Web Chat", desc: "Platform komunikasi berbasis web untuk terhubung dan berinteraksi.", url: links.ecosystem.webChat, cat: "Komunikasi", cta: "Open Web Chat", color: "var(--cyan)", glyph: "◉" },
  { key: "topup", name: "Veltapedia", desc: "Platform untuk kebutuhan top up game dan produk digital gaming.", url: links.ecosystem.topUp, cat: "Gaming / Top Up", cta: "Open Veltapedia", color: "var(--red)", glyph: "▲" },
  { key: "edu", name: "Binary Edu", desc: "Platform edukasi digital untuk belajar dan berkembang di dunia teknologi.", url: links.ecosystem.binaryEdu, cat: "Edukasi", cta: "Open Binary Edu", color: "var(--green)", glyph: "01" },
];

export const community: Item[] = [
  { key: "wac", name: "WhatsApp Channel", desc: "Update dan pengumuman terbaru dari Xean Digital.", url: links.community.whatsappChannel, cat: "Channel", cta: "Join WhatsApp Channel", color: "var(--green)", glyph: "WA" },
  { key: "tg", name: "Telegram Channel", desc: "Informasi dan update ekosistem lewat Telegram.", url: links.community.telegram, cat: "Channel", cta: "Join Telegram", color: "var(--cyan)", glyph: "TG" },
  { key: "wag", name: "WhatsApp Group", desc: "Ngobrol dan bertukar info langsung dengan komunitas.", url: links.community.whatsappGroup, cat: "Group", cta: "Join WhatsApp Group", color: "var(--yellow)", glyph: "WA" },
];

export const socials: Item[] = [
  { key: "tt", name: "TikTok", desc: "Short videos, updates & digital content.", url: links.social.tiktok, cat: "Video", cta: "Follow TikTok", color: "var(--red)", glyph: "TT" },
  { key: "yt", name: "YouTube", desc: "Tutorials, projects & digital content.", url: links.social.youtube, cat: "Video", cta: "Subscribe YouTube", color: "var(--orange)", glyph: "▶" },
  { key: "ig", name: "Instagram", desc: "Updates, announcements & visual content.", url: links.social.instagram, cat: "Visual", cta: "Follow Instagram", color: "var(--purple)", glyph: "IG" },
];
