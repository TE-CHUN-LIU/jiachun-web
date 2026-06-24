export const SITE = "https://web.jiachun-mmt.com";
export const LINE_URL = "https://lin.ee/y4tVOQJ";
export const TEL = "0932174988";
export const TEL_DISPLAY = "0932-174-988";

export const navLinks = [
  { href: "#modules", label: "服務模組" },
  { href: "#why", label: "優勢" },
  { href: "#case", label: "實績案例" },
  { href: "#process", label: "流程" },
  { href: "#pricing", label: "報價" },
  { href: "#faq", label: "FAQ" },
];

export const stats = [
  { n: "10", unit: "年", label: "零售營運實戰", sub: "店長 → 12 店連鎖主管" },
  { n: "150", unit: "+", label: "帶領過的第一線夥伴", sub: "深知人與現場" },
  { n: "17", unit: "家", label: "跨產業團隊輔導", sub: "餐飲・零售・美業" },
];

export const modules = [
  { k: "A", name: "品牌形象官網", tag: "打動人的一頁式門面", items: ["編輯雜誌風視覺・RWD 響應式", "互動式身心自評推薦", "服務／培訓／活動／FAQ"] },
  { k: "B", name: "LINE 線上預約系統", tag: "成交與營運工具", items: ["LIFF 多步驟預約流程", "LINE 推播核准制＋自動提醒", "後台管理＋帳本記帳"] },
  { k: "C", name: "SEO / GEO 優化", tag: "被搜尋、被 AI 引用", items: ["結構化資料 schema", "Search Console 設定", "Google 商家檔案對接"] },
];

export const whyCards = [
  { t: "懂業主也懂顧客", d: "店長到主管的第一線經驗，用使用者與消費者邏輯規劃流程與介面——做出來的是會用、會買單的設計。" },
  { t: "目標導向，不賣功能", d: "先釐清你要達成什麼，再決定做什麼。價格不是重點，能不能解決問題、達成目標才是。" },
  { t: "跨產業實戰", d: "餐飲、零售便利商店、美業都輔導過，懂不同生意的眉角與顧客行為。" },
  { t: "商業 ＋ 技術 一手包", d: "策略顧問的腦＋工程實作的手，省去你在「顧問」與「工程師」之間來回翻譯。" },
];

export const featured = [
  { href: "https://www.jiachun-mmt.com/#about", img: "/assets/founder.jpg", pos: "center 18%", eyebrow: "自有品牌 · 本站即範例", title: "得群ＭＭＴ生日人格學｜商業策略分析", desc: "創辦人劉得群——你正在看的這個網站就是作品。品牌官網＋知識文章＋線上天賦分析工具・Next.js。" },
  { href: "https://imhere-landing.vercel.app", img: "/assets/case-line.jpg", pos: "center 30%", eyebrow: "客戶案例 · 身心療癒空間", title: "I'm here 有我在療癒所—頌缽｜靈氣｜希塔｜水晶", desc: "品牌官網 ＋ LINE 預約系統 ＋ SEO/GEO 整案打造，從形象到預約成交一條龍。" },
];

export const works = [
  { ind: "占星・天賦品牌", t: "得群 MMT 天賦品牌站", d: "官網＋知識文章＋線上天賦分析工具" },
  { ind: "場地租借業", t: "線上預約系統", d: "場地搜尋・優惠方案・智慧場控整合" },
  { ind: "室內裝潢業", t: "線上報價系統", d: "報價編輯・即時計算・一鍵輸出" },
  { ind: "保健・美妝品牌", t: "品牌電商網站", d: "品牌形象與商品介紹" },
  { ind: "連鎖零售", t: "門市招募網站", d: "徵才形象與應徵導引頁" },
  { ind: "教育・知識", t: "講師教學文件站", d: "Astro 文件站・教材結構化呈現" },
];

export const process = [
  { n: "01", t: "諮詢需求", d: "了解你的目標、受眾與想要的功能，免費評估。" },
  { n: "02", t: "規劃與報價", d: "模組化提案、透明分項報價，確認範圍與時程。" },
  { n: "03", t: "設計", d: "品牌視覺與版面設計，確認風格與內容架構。" },
  { n: "04", t: "開發", d: "RWD 切版、互動功能、LINE／後台串接與測試。" },
  { n: "05", t: "上線與優化", d: "部署上線、SEO/GEO、操作教學與後續維護。" },
];

export const priceA = {
  name: "Ａ. 品牌形象官網", total: "NT$79,000",
  items: [
    ["官網基礎建置（一頁式 RWD・Hero・部署）", "30,000"],
    ["服務介紹區（資料驅動可擴充）", "6,000"],
    ["客人見證／老師介紹", "5,000"],
    ["FAQ 常見問題（手風琴）", "4,000"],
    ["培訓課程介紹＋報名串接", "8,000"],
    ["主題活動區", "6,000"],
    ["社群整合＋導覽＋預約列", "5,000"],
    ["互動式身心自評量表 ★", "15,000", true],
  ],
};
export const priceB = {
  name: "Ｂ. LINE 線上預約系統", total: "NT$113,000",
  items: [
    ["LIFF 預約前端（服務→日期→時段→確認）", "35,000"],
    ["後端＋資料庫（Apps Script＋Sheet）", "18,000"],
    ["LINE 推播核准制", "15,000"],
    ["預約前一天自動提醒", "6,000"],
    ["後台管理頁（審核／行事曆／設定）", "20,000"],
    ["帳本 POS 記帳＋損益＋CSV", "15,000"],
    ["業主手動補登預約", "4,000"],
  ],
};
export const addons = [
  { name: "Ｃ. SEO / GEO", price: "NT$22,000", d: "結構化資料 JSON-LD（商家／FAQ／課程 schema）・分享卡＋sitemap＋robots・Search Console 設定＋提交・Google 商家檔案對接" },
  { name: "Ｄ. 效能 / 維運", price: "NT$15,000", d: "圖片與效能優化（壓縮・lazy・LCP／CLS）・跨瀏覽器相容修正・部署上線＋網域協助・教育訓練／交付文件" },
];
export const bundles = [
  { name: "形象官網方案", price: "NT$79,000" },
  { name: "官網 ＋ SEO/GEO", price: "NT$101,000" },
  { name: "預約系統方案", price: "NT$113,000" },
  { name: "完整旗艦方案", price: "NT$229,000", hot: true },
];
export const priceNotes = [
  "※ 以上為功能參考價（未稅），實際依設計細緻度、改版次數、內容量與串接複雜度調整。",
  "※ Ｃ、Ｄ 為加購模組，須搭配 Ａ（官網）或 Ｂ（預約系統），不單獨銷售。",
  "※ 金流串接、自訂網域與主機、長期維護另計；第三方帳號（Google／LINE／網域）由業主提供或協助申請。",
];

export const faqs = [
  { q: "家群和一般網頁設計師有什麼不同？", a: "創辦人劉得群本身是有 10 年零售實戰的商業策略顧問，輔導過餐飲、零售便利商店與美業。我們不只把網站做漂亮，而是從業主的營運問題與顧客的消費邏輯出發做系統與設計，目標是幫你解決問題、達成目標，這是一般純接案的網頁設計師難以提供的附加價值。" },
  { q: "做一個網站大概多少錢？", a: "採模組化報價：品牌形象官網 NT$79,000 起、LINE 線上預約系統 NT$113,000 起，可單買單一模組或整案；SEO/GEO 與效能優化為加購。實際依需求與設計細緻度調整，歡迎免費諮詢。" },
  { q: "製作大概需要多久？", a: "依範圍而定：一頁式形象官網約 2–4 週，含 LINE 預約系統的整案約 4–8 週。確切時程會在報價時一起確認。" },
  { q: "可以只做其中一個模組嗎？", a: "可以。品牌官網、LINE 預約系統都能單獨建置；SEO/GEO 與效能優化屬加購項，需搭配官網或預約系統其中一項。" },
  { q: "什麼是 GEO？和 SEO 有什麼不同？", a: "SEO 是讓你在 Google 搜尋排名靠前；GEO（生成式引擎優化）是讓 ChatGPT、Perplexity、Gemini、Google AI 概覽在回答時主動引用你。做法是用結構化資料把你的服務、價格、地點變成 AI 讀得懂、可引用的事實。" },
  { q: "你們用什麼技術？", a: "前端使用 Astro／React／Next.js；LINE 預約系統以 LIFF＋Google Apps Script 串接；部署在 Vercel，穩定、好維護、好擴充。" },
  { q: "網站做好後我可以自己改內容嗎？", a: "可以。會依需求保留可編輯區塊或後台，並提供操作教學與交付文件；也可選擇後續維護方案由我們協助更新。" },
  { q: "網域、LINE、Google 帳號怎麼處理？", a: "第三方帳號（網域、LINE 官方帳號、Google）由您提供或我們協助申請；自訂網域、主機代管與金流串接為另計項目。" },
];
