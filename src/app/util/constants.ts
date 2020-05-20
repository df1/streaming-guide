export const REPO_URL = '//github.com/df1/streaming-guide';
export const SPONSOR_URL = '//www.paypal.me/ellischang1';
export const SHORT_TITLE = '楓林晚';
export const TITLE = '楓林晚 - 追劇 電影 線上看';
export const CATEGORY_MAP = {
  movies: { name: '電影', type:'movie' },
  taiwan: { name: '台劇', type:'tv' },
  japan:  { name: '日劇', type:'tv' },
  korea:  { name: '韓劇', type:'tv' },
  usa:    { name: '美劇', type:'tv' },
  china:  { name: '陸劇', type:'tv' },
  anime:  { name: '動畫', type:'tv' },
};
export const CATEGORY_LIST = [...Object.keys(CATEGORY_MAP).map( k =>
  ({name: CATEGORY_MAP[k].name, link:`/category/${k}`})
)];
export const MENU_TREE = [
  { name: '首頁', link:'/index', showInToolbar: false },
  ...CATEGORY_LIST,
];
export const PROVIDER_LIST = [
  { id: 1, name: 'Netflix' },
  { id: 2, name: 'LINE TV' },
  { id: 3, name: '愛奇藝台灣站' },
  { id: 4, name: 'HBO GO' },
  { id: 5, name: 'KKTV' },
  { id: 6, name: 'Apple TV+' },
  { id: 7, name: 'GagaOOLala' },
  { id: 8, name: 'iTunes' },
  { id: 9, name: 'YouTube' },
  { id: 10, name: 'Google Play電影' },
  { id: 11, name: 'CATCHPLAY+' },
  { id: 12, name: 'friDay影音' },
  { id: 13, name: 'Hami Video' },
  { id: 14, name: '公視+' },
  { id: 15, name: 'LiTV立視線上影視' },
  { id: 16, name: 'myVideo' },
  { id: 17, name: 'Vidol影音' },
  { id: 18, name: 'WeTV' },
  { id: 19, name: '四季線上影視' },
  { id: 20, name: '酷瞧' }
];
export const GENRE_MAP = {
  12:    "冒險",
  14:    "奇幻",
  16:    "動畫",
  18:    "劇情",
  27:    "恐怖",
  28:    "動作",
  35:    "喜劇",
  36:    "歷史",
  37:    "西部",
  53:    "驚悚",
  80:    "犯罪",
  99:    "紀錄",
  878:   "科幻",
  9648:  "懸疑",
  10402: "音樂",
  10749: "愛情",
  10751: "家庭",
  10752: "戰爭",
  10759: "動作冒險",
  10762: "兒童",
  10763: "新聞",
  10764: "真人秀",
  10765: "科幻與奇幻",
  10766: "肥皂劇",
  10767: "脫口秀",
  10768: "戰爭與政治",
  10770: "電視電影",
};
