import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.scss']
})
export class ListDisplayComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['select','poster','title','overview','popularity'];
  dataSource = new MatTableDataSource(SAMPLE_DATA);
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}

// https://api.themoviedb.org/3/discover/movie?api_key=xxxxx&language=zh-TW&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2019
const SAMPLE_DATA =  [
  {
      "popularity": 563.239,
      "vote_count": 3086,
      "video": false,
      "poster_path": "/uaNDkWm4RTR86ALHsexe0G42wCy.jpg",
      "id": 419704,
      "adult": false,
      "backdrop_path": "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
      "original_language": "en",
      "original_title": "Ad Astra",
      "genre_ids": [
          18,
          878
      ],
      "title": "星際救援",
      "vote_average": 6,
      "overview": "地球上接連出現神秘怪象，科學家發現某種失控的反物質反應正在威脅整個太陽系，人類生存極度堪憂……地球生死攸關之際，天才航天工程師羅伊（Brad Pitt 飾）被派往外太空，試圖揭開謎團拯救人類。這是一場橫跨地球、月球、火星、海王星，穿越整個太陽系的硬核冒險，一路危機重重險象環生，羅伊直面爆炸、隕石、月球飆車槍戰、神秘生物等意想不到的考驗，還找回了失聯20年的父親！當年羅伊的父親（Tommy Lee Jones 飾）離開地球探尋外星智慧生物，結果任務失敗，消失在茫茫宇宙之中。如今父子重逢，羅伊在太空深處發現了不為人知的秘密，漸漸觸達所有事件的終極真相……",
      "release_date": "2019-09-17"
  },
  {
      "popularity": 199.232,
      "id": 181812,
      "video": false,
      "vote_count": 4073,
      "vote_average": 6.5,
      "title": "STAR WARS：天行者的崛起",
      "release_date": "2019-12-18",
      "original_language": "en",
      "original_title": "Star Wars: The Rise of Skywalker",
      "genre_ids": [
          28,
          12,
          878
      ],
      "backdrop_path": "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
      "adult": false,
      "overview": "紅遍全球的經典科幻鉅作，星際大戰(Star Wars) 系列終章 。上集中拯救了反抗軍的「天行者路克」(馬克漢米爾飾演)這次將以絕地英靈之姿回歸。原力覺醒的「芮」(黛西蕾德利飾演) 終於以『絕地』的身分跟反抗軍老夥伴們重逢。另一方面，由「凱羅忍」帶領的第一軍團所造成的威脅似乎不曾變少，預告中片尾的笑聲，似乎更暗示反派西斯大帝的神秘回歸? 每個世代都有傳奇，天行者家族傳奇即將落幕！本集將由億萬導演J.J.亞伯拉罕強勢回歸執導，與《亞果出任務》金獎編劇克里斯泰瑞歐合撰劇本。廣受粉絲喜愛的「藍多卡瑞辛」(比利迪威廉斯飾演)也與「C-3PO」(安東尼丹尼爾斯飾演)也將一同回歸加入第九部曲。「天行者家族」系列將劃下令人滿意的句點。",
      "poster_path": "/tQ5gSCS4h1QygtDnwCoOYi3YIva.jpg"
  },
  {
      "popularity": 129.205,
      "vote_count": 3295,
      "video": false,
      "poster_path": "/yUe992PUYHAg61gw1uJuHXFDG0u.jpg",
      "id": 512200,
      "adult": false,
      "backdrop_path": "/oLma4sWjqlXVr0E3jpaXQCytuG9.jpg",
      "original_language": "en",
      "original_title": "Jumanji: The Next Level",
      "genre_ids": [
          12,
          35,
          14
      ],
      "title": "野蠻遊戲：全面晉級",
      "vote_average": 6.9,
      "overview": "在全新的《野蠻遊戲：全面晉級》中，前一集角色再度聚首，但遊戲的格局卻早已改變！  當四位主角重返「野蠻遊戲」試圖要拯救自己的小命時，他們意外發現這個遊戲規則不僅改變，這一次，所有的玩家都必須去突破更多未探索過的全新領域；從荒蕪的沙漠，到無人之境的雪山，他們必須拼盡全力，才能逃離這個全世界最危險的遊戲，回到現實！",
      "release_date": "2019-12-04"
  },
  {
      "popularity": 106.786,
      "vote_count": 9,
      "video": false,
      "poster_path": "/dRCip3nvvHd5jW5E0GrjBsk0OX1.jpg",
      "id": 614375,
      "adult": false,
      "backdrop_path": null,
      "original_language": "tl",
      "original_title": "F#*@BOIS",
      "genre_ids": [
          18
      ],
      "title": "F#*@BOIS",
      "vote_average": 6.6,
      "overview": "",
      "release_date": "2019-08-02"
  },
  {
      "popularity": 104.344,
      "vote_count": 11587,
      "video": false,
      "poster_path": "/kjNbXFfYLDUdFpfaMkzHbJ5Zq30.jpg",
      "id": 475557,
      "adult": false,
      "backdrop_path": "/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
      "original_language": "en",
      "original_title": "Joker",
      "genre_ids": [
          80,
          18,
          53
      ],
      "title": "小丑",
      "vote_average": 8.2,
      "overview": "社會邊緣人亞瑟佛萊克，他如何從一個失敗的喜劇演員，一步一步成為高譚市最邪惡、最頂尖的超級罪犯。",
      "release_date": "2019-10-02"
  },
  {
      "popularity": 96.331,
      "vote_count": 2474,
      "video": false,
      "poster_path": "/l9Cuwfv3kEhdUhTSMsqpkUmTBYc.jpg",
      "id": 619264,
      "adult": false,
      "backdrop_path": "/3tkDMNfM2YuIAJlvGO6rfIzAnfG.jpg",
      "original_language": "es",
      "original_title": "El hoyo",
      "genre_ids": [
          18,
          878
      ],
      "title": "絕命大平台",
      "vote_average": 7.1,
      "overview": "每個人都要吃，每個人都想活，每個人都想逃脫！  當葛蘭漸漸從昏迷中醒來時，發現自己身處在一座宛如監獄般建築的第48層，這座建築從地表往地底延伸，中間由巨大的方形洞貫穿，一個大平台會將上層住戶吃剩的食物一層層依序送下來。與他同一層的「獄友」崔馬加西知道關於這個神秘處所的規則：每層有兩個人，總人數不詳。如果有辦法往上就能生存，但如果想太多就會再次沉淪。如果在幾乎沒有食物送達的底層，除了自身的勇氣，誰都不能相信……",
      "release_date": "2019-11-08"
  },
  {
      "popularity": 95.475,
      "id": 429617,
      "video": false,
      "vote_count": 6922,
      "vote_average": 7.5,
      "title": "蜘蛛人：離家日",
      "release_date": "2019-06-28",
      "original_language": "en",
      "original_title": "Spider-Man: Far from Home",
      "genre_ids": [
          28,
          12,
          878
      ],
      "backdrop_path": "/3o4NzKxeGSSsrrHnwGKrd3qHK0V.jpg",
      "adult": false,
      "overview": "蜘蛛人彼得帕克在經歷一連串的激烈事件後，依然沉浸在悲痛情緒的他決定暫時卸下自己「鄰家英雄」的身分，跟好友來趟歐洲之旅享受高中生活。然而在彼得遇見神盾局局長尼克福瑞與神秘法師(傑克葛倫霍 飾演)後，他被迫捲入調查幾宗橫跨城市、造成重大死傷的未知怪物攻擊事件，這美好旅行一夕間全變了樣⋯",
      "poster_path": "/yxONLBqDVvWdn5qg0LIbl2nATTD.jpg"
  },
  {
      "popularity": 94.002,
      "vote_count": 835,
      "video": false,
      "poster_path": "/z4A6mFOLTMZAhCSPRyrtzG0SPbd.jpg",
      "id": 475303,
      "adult": false,
      "backdrop_path": "/6fkqwqLEcDZOEAnBBfKAniwNxtx.jpg",
      "original_language": "en",
      "original_title": "A Rainy Day in New York",
      "genre_ids": [
          35,
          10749
      ],
      "title": "雨天・紐約",
      "vote_average": 6.6,
      "overview": "蓋茲比（提摩西夏勒梅 飾）的女友艾希莉（艾兒芬妮 飾）因學校作業爭取到親赴曼哈頓訪談知名大導演羅蘭波拉德（李佛薛伯 飾）的機會，於是蓋茲比計畫了一場充滿紐約復古風情的浪漫約會，但艾希莉卻被導演約去看電影，接著又遇見了金牌編劇泰德戴杜夫（裘德洛 飾）與大明星法蘭西斯柯維嘉（狄亞哥盧納），導致蓋茲比的約會計畫泡湯。當艾希莉在三個才華洋溢的男人之間打轉時，蓋茲比和前女友的妹妹千兒（賽琳娜戈梅茲 飾）意外一「吻」也打亂了他的心……",
      "release_date": "2019-07-26"
  },
  {
      "popularity": 91.695,
      "vote_count": 6494,
      "video": false,
      "poster_path": "/d7VRXTUD9TPIze2oHw92z8qxcP7.jpg",
      "id": 496243,
      "adult": false,
      "backdrop_path": "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
      "original_language": "ko",
      "original_title": "기생충",
      "genre_ids": [
          35,
          18,
          53
      ],
      "title": "寄生上流",
      "vote_average": 8.5,
      "overview": "一家四口全是無業遊民的爸爸基澤（宋康昊 飾）成天遊手好閒，直到積極向上的長子基宇（崔宇植 飾）靠著偽造的文憑來到富豪朴社長（李善均 飾）的家應徵家教，兩個天差地遠的家庭因而被捲入一連串意外事件中……",
      "release_date": "2019-05-30"
  },
  {
      "popularity": 88.384,
      "vote_count": 835,
      "video": false,
      "poster_path": "/wWbVj7reuK87IUp05QcbYWEDawx.jpg",
      "id": 431693,
      "adult": false,
      "backdrop_path": "/qlYxtqVfu2LOdvYMMDPCSGX0Oz0.jpg",
      "original_language": "en",
      "original_title": "Spies in Disguise",
      "genre_ids": [
          28,
          12,
          16,
          35
      ],
      "title": "變身特務",
      "vote_average": 7.7,
      "overview": "世界上最偉大的超級特務藍斯史特林（威爾史密斯 飾）以及科學家華特貝克特（湯姆霍蘭德 飾）可以說是兩個最不同的個體。藍斯很溫和、柔軟且溫文儒雅，而華特呢…剛好沒有上述所提及的所有特質。  儘管華特缺少了所有人與人之間的社交與溝通技巧，他的聰明才智及創造能力卻成功補足了這一切，總是在一次又一次驚險艱困的任務中，替藍斯創造出最智能且令人刮目相看的裝備。但是一場突如其來的意外，讓華特與藍斯不得不以一種全新的方式彼此合作，如果這兩個搭檔無法搞定團隊默契，那他們會將整個世界置於危險之中。",
      "release_date": "2019-12-04"
  },
  {
      "popularity": 85.573,
      "id": 625489,
      "video": false,
      "vote_count": 34,
      "vote_average": 5.1,
      "title": "Recep İvedik 6",
      "release_date": "2019-11-07",
      "original_language": "tr",
      "original_title": "Recep İvedik 6",
      "genre_ids": [
          35
      ],
      "backdrop_path": "/q1Z6dufl5BFvtyfIscnQoFaUiW8.jpg",
      "adult": false,
      "overview": "",
      "poster_path": "/b4thKm1P0F1SYeL11uyVAlGhzR6.jpg"
  },
  {
      "popularity": 84.553,
      "vote_count": 3945,
      "video": false,
      "poster_path": "/dsB5EbeXZACfmNUEvu8zTT45qRY.jpg",
      "id": 330457,
      "adult": false,
      "backdrop_path": "/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
      "original_language": "en",
      "original_title": "Frozen II",
      "genre_ids": [
          12,
          16,
          10751
      ],
      "title": "冰雪奇緣2",
      "vote_average": 7.2,
      "overview": "幸福的三年後，艾莎被小時候父親口中的魔法森林的魔靈所召喚，當王國不再安全，安娜、艾莎與雪寶等人將深入到艾倫戴爾王國那個傳說充滿魔法卻被迷霧封鎖的森林，走入尋根之旅，她們將發現到艾倫戴爾王國長久以來深藏的謎團，一次與北方烏卓人族相互攻擊的慘劇，以及記憶一切的阿托哈蘭，而這個謎團將與艾莎擁有的魔法有關，也將解開艾莎與安娜父母真正啟航的原因。",
      "release_date": "2019-11-20"
  },
  {
      "popularity": 82.77,
      "vote_count": 581,
      "video": false,
      "poster_path": "/xBIviB5up3QdNdNwZ3ILBb5M7b8.jpg",
      "id": 522212,
      "adult": false,
      "backdrop_path": "/4x2AKefQtj8TmzxyRJEEdAayj1V.jpg",
      "original_language": "en",
      "original_title": "Just Mercy",
      "genre_ids": [
          80,
          18
      ],
      "title": "不完美的正義",
      "vote_average": 8,
      "overview": "《不完美的正義》故事改編自布萊恩史蒂文森獲獎無數的非文學類暢銷書籍，布萊恩史蒂文森(麥可B喬丹 飾)從哈佛大學法學院畢業之後，他婉拒了許多條件優渥的工作機會，他選擇前往阿拉巴馬州，在當地人權鬥士伊娃安斯利(布麗拉森 飾)的全力支持下，布萊恩致力於為受到司法誤判或是沒有能力雇請律師的弱勢族群提供適當的法律服務。他甫到阿拉巴馬不久，就經手一項最具挑戰性的冤案：遭司法判處死刑的華特麥米利(傑米福克斯 飾)。他在1987年被控謀殺一名18歲的年輕女子，儘管有多項證據都可以證明他是無辜的，然而僅憑另一名有說謊動機的罪犯證詞，法官就將華特判處死刑。  在接下來的幾年，布萊恩竭盡所能地想要幫助華特與像他這樣受到司法不公平對待的囚犯，他不僅要努力建立犯罪嫌疑人與其家人對他的信心，布萊恩還同時身陷一個毫不隱瞞種族歧視、政治腐敗與充滿陰謀的司法迷宮中，阻擋在他面前的是一整個不公不義的龐大司法體制！  除了領銜主演的麥可B喬丹、傑米福克斯與布麗拉森外，主要演員還包括羅柏摩根、提姆布雷克尼爾森、瑞夫史波，小歐希亞傑克森、凱倫坎卓克等。",
      "release_date": "2019-12-25"
  },
  {
      "popularity": 75.546,
      "vote_count": 2150,
      "video": false,
      "poster_path": "/sOfUbzu6OUL5cscGODPdpHn9C1g.jpg",
      "id": 637920,
      "adult": false,
      "backdrop_path": "/4YbHir4Ka4kG7WOdh0anXv1iT8s.jpg",
      "original_language": "tr",
      "original_title": "7. Koğuştaki Mucize",
      "genre_ids": [
          35,
          18,
          10751
      ],
      "title": "7. Koğuştaki Mucize",
      "vote_average": 8.4,
      "overview": "",
      "release_date": "2019-10-10"
  },
  {
      "popularity": 75.092,
      "vote_count": 5537,
      "video": false,
      "poster_path": "/1fXy2ASWyBR8V6WDG7YoMh5cLuQ.jpg",
      "id": 420817,
      "adult": false,
      "backdrop_path": "/rVqY0Bo4Npf6EIONUROxjYAJfmD.jpg",
      "original_language": "en",
      "original_title": "Aladdin",
      "genre_ids": [
          12,
          35,
          14,
          10749,
          10751
      ],
      "title": "阿拉丁",
      "vote_average": 7.1,
      "overview": "擦亮神燈 小心翼翼許下三個願望...  在沙漠中心的古老城市裡，藏著神祕的傳說，只要獲得帶有魔法的神燈，法力無邊的精靈就會實現你的三個願望。機智的窮小子阿拉丁，遇上了勇敢獨立的茉莉公主，對抗邪惡巫師賈方，阻止他密謀叛變奪取國王寶座，藉由幽默調皮的神燈精靈出手相助，譜出一段浪漫的愛情故事。",
      "release_date": "2019-05-22"
  },
  {
      "popularity": 73.385,
      "vote_count": 4342,
      "video": false,
      "poster_path": "/t4z44X5hwzDVVkwoQWbIiA0hFus.jpg",
      "id": 530915,
      "adult": false,
      "backdrop_path": "/2WgieNR1tGHlpJUsolbVzbUbE1O.jpg",
      "original_language": "en",
      "original_title": "1917",
      "genre_ids": [
          28,
          18,
          53,
          10752
      ],
      "title": "1917",
      "vote_average": 7.9,
      "overview": "第一次世界大戰進入最激烈之際，兩名年輕的英國士兵史考菲（喬治麥凱 飾）以及布雷克（迪恩查爾斯查普曼 飾）受到指派，執行一場看似不可能的任務。他們必須和時間賽跑，冒險進入敵區傳遞一個重要訊息，試圖阻止一場對數百名士兵的致命攻擊 － 其中包括布雷克的親兄弟。",
      "release_date": "2019-12-25"
  },
  {
      "popularity": 71.355,
      "vote_count": 3591,
      "video": false,
      "poster_path": "/soVlOSruwc0xibwZ28vhvS80ur6.jpg",
      "id": 546554,
      "adult": false,
      "backdrop_path": "/AbRYlvwAKHs0YuyNO6NX9ofq4l6.jpg",
      "original_language": "en",
      "original_title": "Knives Out",
      "genre_ids": [
          35,
          80,
          18,
          9648,
          53
      ],
      "title": "鋒迴路轉",
      "vote_average": 7.8,
      "overview": "知名犯罪小說作家（克里斯多夫普拉瑪 飾）在慶祝85歲大壽後，被發現死於自己的豪宅內，一名偵探（丹尼爾克雷格 飾）將對家族成員一一展開調查，解決這場錯綜複雜的謀殺疑雲。",
      "release_date": "2019-11-27"
  },
  {
      "popularity": 68.053,
      "id": 515001,
      "video": false,
      "vote_count": 3126,
      "vote_average": 8.1,
      "title": "兔嘲男孩",
      "release_date": "2019-10-18",
      "original_language": "en",
      "original_title": "Jojo Rabbit",
      "genre_ids": [
          35,
          10752,
          18
      ],
      "backdrop_path": "/xqx5XqTeN3krSM5JFYGsxX81CRk.jpg",
      "adult": false,
      "overview": "電影描述一位十歲小男孩「喬喬」，受到二戰的德國氛圍影響，一心想效忠納粹，但他卻意外發現母親在家中暗藏一位猶太女孩，兩人從互相厭惡到解彼此的過程，軟化了喬喬的態度，而塔伊加飾演的希特勒，是喬喬的幻想朋友，當他內心在是否該對納粹忠誠搖擺不定時，希特勒就會出來攪亂他的思想。",
      "poster_path": "/wREIB9jx3qGg2ZLsOMgauOfAwTV.jpg"
  },
  {
      "popularity": 64.199,
      "vote_count": 8,
      "video": false,
      "poster_path": "/7BC2Mv2ekyBIto68YOrc1DRARv6.jpg",
      "id": 597295,
      "adult": false,
      "backdrop_path": "/hOREXWuVMG0xSKjdwh6QeOoJDFo.jpg",
      "original_language": "zh",
      "original_title": "我的青春都是你",
      "genre_ids": [
          35,
          10749
      ],
      "title": "我的青春都是你",
      "vote_average": 4.9,
      "overview": "",
      "release_date": "2019-06-21"
  },
  {
      "popularity": 63.716,
      "id": 466272,
      "video": false,
      "vote_count": 5742,
      "vote_average": 7.5,
      "title": "從前，有個好萊塢",
      "release_date": "2019-07-25",
      "original_language": "en",
      "original_title": "Once Upon a Time… in Hollywood",
      "genre_ids": [
          35,
          18,
          53
      ],
      "backdrop_path": "/er1S5nJyDSkmy7i2KkPMBjbwK8x.jpg",
      "adult": false,
      "overview": "故事在1969年瞬息萬變的洛杉磯展開，在那個風起雲湧的變革時代，嬉皮文化盛行，好萊塢大製片廠制度瓦解，新的好萊塢明星紛紛崛起。電視明星裡克·道爾頓（Leonardo DiCaprio 飾）與他長期合作替身搭檔克裡夫·布斯（Brad Pitt 飾）如何在逐漸陌生的娛樂圈裡，找到自己的一席之地。他們正力圖揚名電影圈，卻發現這個行業早已不是他們想像的樣子了……這是昆汀（Quentin Tarantino）自編自導第9部影片，彙集星光閃閃的卡司與交錯的情節，紀念好萊塢不再復返的黃金年代。\r 　　1969年，美國洛杉磯社會政治動盪與反叛文化的興起，舊電影制度和觀念的瓦解，電視業的蓬勃發展，歐洲新電影的衝擊，都像狂風暴雨一樣衝擊著當時的好萊塢。在這樣的變革中，過氣的動作片演員裡克·達爾頓（Leonardo DiCaprio 飾）和他的御用替身克裡夫·布斯（Brad Pitt 飾）掙扎著想要在他們已經不再熟悉的好萊塢翻紅。與此同時，裡克·達爾頓的鄰居著名女星莎朗·塔特（Margot Robbie 飾），也是著名導演羅曼·波蘭斯基的妻子，慘遭好萊塢邪教曼森家族殘忍殺害，震驚全美。而華人巨星李小龍（Mike Moh  飾），曾是羅曼·波蘭斯基的私人教練，他遺失的一副墨鏡也成為這起兇殺案的物證。",
      "poster_path": "/72SFS4NCOrnUMzBGfYsYVIBHLRc.jpg"
  }
];
