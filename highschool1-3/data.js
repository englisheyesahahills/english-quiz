// 2026년 3월 서울특별시 교육청 학력평가 고1 - 지문분석 학습 데이터
const PASSAGES = [
{
  id:18, type:"목적", tags:["목적","주제·제목·요지·주장","서술형","어법"],
  titleEn:"Delayed Reopening of Connexa Point Table Tennis Center",
  titleKo:"예상치 못한 전기 문제로 인해 Connexa Point 탁구 센터의 연기된 재개장",
  sentences:[
    {en:"Dear Connexa Point Table Tennis Center members,", ko:"Connexa Point 탁구 센터 회원님께,"},
    {en:"I am the manager of the Connexa Point Table Tennis Center.", ko:"저는 Connexa Point 탁구 센터의 관리자입니다."},
    {en:"Thank you for your interest in the upcoming reopening of the center.", ko:"센터의 다가오는 재개장에 관심을 가져 주셔서 감사합니다."},
    {en:"Unfortunately, during the repair process, unexpected electrical issues were discovered, causing the work to take longer than we planned.", ko:"안타깝게도, 보수 과정에서 예상치 못한 전기 문제가 발견되었고, 작업이 저희가 계획했던 것보다 더 오래 걸리게 되었습니다."},
    {en:"We regret to inform you that the center's reopening must be delayed.", ko:"저희가 센터 재개장을 연기해야 함을 알려 드리게 되어 유감입니다."},
    {en:"The center was originally scheduled to reopen on April 1st.", ko:"센터는 원래 4월 1일에 재개장할 예정이었습니다."},
    {en:"However, it will now reopen on May 1st to ensure the safety of all members.", ko:"하지만, 이제는 모든 방문객의 안전을 보장하기 위해 5월 1일에 재개장할 것입니다."},
    {en:"We look forward to seeing you back on the court soon.", ko:"저희는 코트에서 여러분을 곧 다시 뵐 수 있기를 기대합니다."},
    {en:"Thank you for your patience and understanding.", ko:"여러분의 인내와 이해에 감사드립니다."}
  ],
  vocab:[["manager","관리자"],["interest in ~","~에 대한 관심"],["upcoming","다가오는"],["reopening","재개장"],["unfortunately","안타깝게도"],["repair","보수"],["process","과정"],["unexpected","예상치 못한"],["electrical","전기의"],["issue","문제"],["discover","~을 발견하다"],["take","~이 걸리다"],["regret+to부정사","~하게 되어 유감이다"],["inform","~을 알리다"],["delay","~을 연기하다"],["originally","원래"],["be scheduled+to부정사","~하기로 예정되어 있다"],["ensure","~을 보장하다"],["safety","안전"],["look forward to ~","~을 고대하다"],["back","다시"],["patience","인내"],["sincerely","진심을 담아"]],
  question:"다음 글의 목적으로 가장 적절한 것은?",
  options:["탁구 대회 운영을 위한 물품 기부를 요청하려고","탁구 센터 재개장 일정 연기를 알리려고","탁구 센터 이전 소식을 안내하려고","탁구 강습 프로그램을 홍보하려고","탁구 강습비 인상을 공지하려고"],
  answer:2,
  explanation:"Connexa Point 탁구 센터의 관리자가 회원들에게 쓴 편지로, 보수 과정이 계획보다 더 오래 걸리게 되어 재개장을 연기해야 함을 알리는 것이 글의 목적이다. 4번째 문장(We regret to inform you ~)에서 목적이 분명히 드러난다.",
  grammar:["regret + to부정사: '~하게 되어 유감이다'의 의미로, 유감스러운 내용이 뒤에 이어진다. (regret+동명사는 '~한 것을 후회하다')","명사절 접속사 that: inform의 직접목적어 역할을 하는 완전한 절을 이끈다. 생략 가능.","must be p.p.: 조동사 must(~해야 한다) 뒤에 수동태 be p.p.가 이어져 '연기되어야 한다'는 의미.","delay = postpone, defer, put ~ off (동의어)"]
},
{
  id:19, type:"심경", tags:["심경·분위기","세부내용","어법","문장 넣기"],
  titleEn:"Cassie's First Carnival",
  titleKo:"네 살 소녀 Cassie의 첫 번째 축제",
  sentences:[
    {en:"It was the first carnival for the four-year-old girl, Cassie.", ko:"그날은 네 살 소녀 Cassie의 첫 번째 축제였다."},
    {en:"She only heard about it from her mother.", ko:"그녀는 어머니로부터 그날에 대해 들어 보기만 했다."},
    {en:"She had been imagining colorful balloons and delicious candies for a long time.", ko:"그녀는 알록달록한 풍선과 맛있는 사탕을 오랫동안 상상해 오고 있었다."},
    {en:"When she finally arrived at the carnival, the twinkling lights and music made her jump with joy.", ko:"그녀가 마침내 축제에 도착했을 때, 반짝이는 불빛과 음악은 그녀가 기뻐서 뛰게 만들었다."},
    {en:"The magician showed his tricks and she cheered with her family.", ko:"마술사가 자신의 기술을 보여 주었고 그녀는 자신의 가족과 함께 환호했다."},
    {en:"But suddenly, she saw a lot of huge balloons in the parade coming towards her.", ko:"하지만 갑자기, 그녀는 많은 거대한 퍼레이드 풍선이 자신을 향해 오고 있는 것을 보았다."},
    {en:"She thought they were too big, like monsters.", ko:"그녀는 그것들이 괴물처럼 너무 크다고 생각했다."},
    {en:"Her heart began to beat fast from fear.", ko:"그녀의 심장은 공포로 빠르게 뛰기 시작했다."},
    {en:"Cassie froze and dropped her cotton candy on the ground.", ko:"Cassie는 얼어붙었고 자신의 솜사탕을 땅에 떨어뜨렸다."},
    {en:"She quickly hid behind her mother.", ko:"그녀는 재빨리 어머니 뒤에 숨었다."}
  ],
  vocab:[["carnival","축제"],["hear about ~","~에 대해 듣다"],["imagine","~을 상상하다"],["colorful","알록달록한"],["balloon","풍선"],["delicious","맛있는"],["finally","마침내"],["arrive at ~","~에 도착하다"],["twinkling","반짝이는"],["joy","기쁨"],["magician","마술사"],["trick","(마술의) 기술"],["cheer","환호하다"],["suddenly","갑자기"],["parade","퍼레이드"],["toward","~를 향해"],["monster","괴물"],["beat","뛰다"],["fear","공포"],["freeze","얼다, 얼어붙다"],["drop","~을 떨어뜨리다"],["cotton candy","솜사탕"],["ground","땅"],["quickly","재빨리, 빠르게"],["hide","숨다"],["behind","~의 뒤에"]],
  question:"다음 글에 드러난 Cassie의 심경 변화로 가장 적절한 것은?",
  options:["excited → scared","amazed → envious","relaxed → annoyed","proud → embarrassed","confident → disappointed"],
  answer:1,
  explanation:"오랫동안 상상해온 축제에 도착해 불빛과 음악에 신나 했던(excited) Cassie가, 갑자기 거대한 퍼레이드 풍선을 괴물처럼 느끼며 무서워서(scared) 얼어붙고 어머니 뒤에 숨는 내용이다.",
  grammar:["had been imagining: 과거완료진행 - 축제 전부터 카니발이 시작되기 전까지 계속되어온 동작을 강조.","made her jump with joy: 사역동사 make+목적어+동사원형(jump) 구문.","like monsters: 전치사 like+명사, '~처럼'의 의미로 비유를 나타냄."]
},
{
  id:20, type:"주장", tags:["주제·제목·요지·주장","서술형","어법","빈칸","의미추론"],
  titleEn:"Bonding with an Audience Through Personal Stories",
  titleKo:"개인적인 이야기를 통해 청중과 유대감 형성하기",
  sentences:[
    {en:"There is simply no better way to influence or stir an audience — instantly, powerfully, authentically — than by opening up to them with a personal story or anecdote.", ko:"개인적인 이야기나 일화로 청중에게 마음을 터놓는 것보다, 즉각적으로, 강력하게, 그리고 진정성 있게 그들에게 영향을 주거나 그들을 동요시키는 더 나은 방법은 결코 없다."},
    {en:"To be clear: I'm not saying you need to tell them long stories about your family vacations or show them baby pictures from the stage.", ko:"명확히 하자면, 나는 여러분이 그들에게 여러분의 가족 휴가에 관한 긴 이야기를 하거나 무대에서 아기 사진을 보여 줘야 한다고 말하는 것이 아니다."},
    {en:"I'm saying that you can share a key biographical detail, or an emotion that you're feeling in the moment, or a self-deprecating joke.", ko:"나는 여러분이 핵심적인 전기(傳記)적 세부 사항, 혹은 여러분이 그 순간에 느끼고 있는 감정, 또는 자기비하적인 농담을 공유할 수 있다고 말하는 것이다."},
    {en:"It is a tried-and-tested way of bonding with an audience of strangers — and of laying the groundwork for you to then persuade them.", ko:"그것은 낯선 사람들 청중과 유대감을 형성하고, 그리고 여러분이 그 후 그들을 '설득하기' 위한 기틀을 마련하는 입증된 방법이다."},
    {en:"The harsh reality is that people won't bond with your arguments in a vacuum, but they will, says speech coach Bas van den Beld, \"bond with you\" — the person making those arguments.", ko:"냉혹한 현실은 사람들이 진공 상태에서는 여러분의 주장과 유대감을 형성하지 않으나, 강연 코치 Bas van den Beld가 말하듯, 그 주장을 하는 사람인 '여러분과는 유대감을 형성할' 것이라는 점이다."},
    {en:"By sharing a revealing story or a personal flaw, you allow audience members a way to identify with you.", ko:"드러내는, 분명히 보여주는 이야기나 개인적인 결점을 공유함으로써, 여러분은 청중 구성원들이 여러분과 동일시할 방식을 허용하게 된다."}
  ],
  vocab:[["influence","~에 영향을 주다"],["stir","~을 자극하다, 동요시키다"],["audience","청중"],["instantly","즉각적으로"],["powerfully","강력하게"],["open up to ~","~에게 마음을 열다, 터놓고 이야기하다"],["personal","개인적인"],["anecdote","일화"],["clear","명확한, 분명한"],["vacation","휴가"],["stage","무대"],["share","~을 공유하다"],["key","핵심적인"],["biographical","전기(傳記)적인"],["detail","세부 사항"],["emotion","감정"],["joke","농담"],["tried-and-tested","입증된"],["bond with ~","~와 유대감을 형성하다"],["stranger","낯선 사람"],["lay the groundwork","토대[기틀]를 마련하다"],["persuade","~을 설득하다"],["harsh","냉혹한, 가혹한"],["reality","현실"],["argument","주장"],["vacuum","진공"],["speech","강연"],["coach","코치"],["revealing","드러내는, 분명히 보여주는"],["flaw","결점"],["allow","~을 허용하다, 허락하다"],["identify with ~","~와 동일시하다"]],
  question:"다음 글에서 필자가 주장하는 바로 가장 적절한 것은?",
  options:["청중에게서 신뢰감을 얻기 위해 화자의 전문성을 강조해야 한다.","청중에게 영향을 주려면 화자 자신의 이야기로 유대감을 형성해야 한다.","논리적인 타당성을 확보하기 위해 객관적인 통계 자료를 제시해야 한다.","강연의 일관성을 유지하려면 화자의 사적인 감정 표현을 자제해야 한다.","청중을 효과적으로 설득하기 위해 정보를 최대한 상세히 설명해야 한다."],
  answer:2,
  explanation:"개인적인 이야기나 일화로 청중에게 마음을 터놓는 것이 청중에게 영향을 주는 가장 강력한 방법이며, 화자 자신과의 유대감 형성이 설득의 토대가 된다는 것이 글의 핵심 주장이다.",
  grammar:["no better way ~ than: 비교 구문으로 '~보다 더 나은 방법은 없다' = 최상급의 의미.","the person making those arguments: 현재분사구가 the person을 수식 (Bas van den Beld와 동격/부연).","By sharing ~: 전치사 by+동명사, '~함으로써'의 의미로 수단을 나타냄."]
},
{
  id:21, type:"함축의미", tags:["주제·제목·요지·주장","서술형","어법","빈칸"],
  titleEn:"Seven Generation Stewardship",
  titleKo:"일곱 세대를 위한 관리",
  sentences:[
    {en:"We are now at a point of unprecedented genetic, cultural, and environmental power as a species, and we are linked to nearly every other person on Earth.", ko:"우리는 이제 종으로서 전례 없는 유전적, 문화적, 그리고 환경적 힘의 지점에 와 있고, 우리는 거의 지구상의 한 사람 걸러 한 사람과 연결되어 있다."},
    {en:"We are embodied individuals trapped within limited time, but we are also networked data streams, memories, and influencers, and part of a grander humanity.", ko:"우리는 육체를 가두는 제한된 시간 안에 갇힌 개인이지만, 또 네트워크화된 데이터 흐름이자, 기억이고, 영향력 행사자이며, 더 거대한 인류의 일부이다."},
    {en:"Our decisions today have far-reaching impacts that place a responsibility on us to become good ancestors, to take the long view and time travel forward to imagine the well-being of billions of people whose lives will be lived in the world we are currently making.", ko:"오늘 우리의 결정은, 좋은 조상이 되라는, 즉 장기적인 관점을 취하고 앞으로 시간 여행을 해서 우리가 현재 만들고 있는 이 세계에서 삶을 살아가게 될 수십억 명의 행복을 상상하라는 책임을 우리에게 맡기는 광범위한 영향을 미친다."},
    {en:"Centuries ago, leaders of the native North American Iroquois people created \"seven generation stewardship,\" instructing people to consider the impact of every decision on their children, seven generations into the future.", ko:"수세기 전, 북미 원주민 Iroquois족의 지도자들은 '일곱 세대 관리'를 만들었는데, 그들의 아이들, 즉, 미래의 일곱 세대에게 미칠 모든 결정의 영향을 고려하라고 부족민에게 가르쳤다."},
    {en:"In the precious few decades that Earth is ours, while we enjoy the gardens planted by our ancestors, we must not steal the shade from our descendants.", ko:"지구가 우리 것인 소중한 몇 십 년 동안, 비록 우리가 조상들에 의해 심어진 정원을 누리더라도, 우리는 후손들로부터 그늘을 빼앗아서는 안 된다."}
  ],
  vocab:[["at a point of ~","~한 시점에"],["genetic","유전적인"],["cultural","문화적인"],["environmental","환경적인"],["species","종 (단·복수 동형)"],["linked to ~","~와 연결된"],["nearly","거의"],["every other","한 사람 걸러 한 사람, 모든 다른 ~"],["embodied","육체를 가진"],["individual","개인"],["trap","~을 가두다"],["within","~의 안에, ~ 내에"],["limited","제한된"],["networked","네트워크화된"],["stream","흐름"],["influencer","영향력을 행사하는 사람"],["part of ~","~의 일부"],["grand","웅장한, 장대한"],["humanity","인류"],["decision","결정"],["far-reaching","(영향·결과가) 광범위한"],["impact","영향"],["responsibility","책임"],["view","관점"],["time travel","시간 여행을 하다"],["forward","앞으로, 미래로"],["imagine","~을 상상하다"],["well-being","행복, 웰빙"],["billions of ~","수십억의"],["currently","현재"],["century","세기"],["generation","세대"],["instruct","~을 가르치다"],["consider","~을 고려하다"],["precious","소중한"],["plant","~을 심다"],["steal","~을 빼앗다"],["shade","그림자"],["descendant","후손"]],
  question:"밑줄 친 steal the shade from our descendants가 다음 글에서 의미하는 바로 가장 적절한 것은?",
  options:["ignore the benefits passed down from our fathers","remove environmental problems our generation faces","blame our children for their lack of responsibilities","take care of resources to give to the future generation","take from future generations what they deserve to have"],
  answer:5,
  explanation:"Iroquois족의 '일곱 세대 관리' 개념처럼, 오늘의 결정이 미래 세대(후손)의 행복에 영향을 미치므로, '후손의 그늘을 빼앗는 것'은 후손이 누려야 할 것을 빼앗는 것(미래 세대로부터 그들이 누릴 자격이 있는 것을 가져가는 것)을 의미한다.",
  grammar:["whose lives will be lived ~: 관계대명사 whose가 이끄는 절로 billions of people을 수식, 수동태(will be lived).","instructing people to consider ~: 분사구문으로 leaders의 동작을 부가 설명.","while we enjoy ~: 양보의 접속사 while, '~하는 동안/~하더라도'의 의미."]
},
{
  id:22, type:"요지", tags:["주제·제목·요지·주장","서술형","어법","빈칸"],
  titleEn:"Neuroplasticity and Changing Taste Preferences",
  titleKo:"신경 가소성과 변화하는 미각 선호도",
  sentences:[
    {en:"Despite learned eating behaviors that are formed in early childhood and inborn biological differences, taste preferences can be changed throughout our lives due to neuroplasticity, our brain's amazing adaptability: we have far more flexibility in our food behaviors than most think, even as we age.", ko:"유아기에 형성되는 학습된 섭식 행동과 타고난 생물학적 차이에도 불구하고, 맛 선호도는 우리 뇌의 놀라운 적응력인 신경 가소성 덕분에 우리 인생 전체에 걸쳐 변화될 수 있다. 심지어 우리가 나이가 들어도, 우리의 섭식 행동에는 대부분이 생각하는 것보다 훨씬 더 많은 유연성이 있다."},
    {en:"This is terrific news for adventurous eaters who want to expand their dinner menu — it's a big, tasty world out there! — but it's amazing news for those eager to break poor diet habits.", ko:"이것은 자신들의 저녁 식단 메뉴를 확장하고 싶어 하는 모험적으로 음식을 먹는 사람에게는 아주 좋은 소식이다 — 저 밖에는 크고 맛있는 세상이 있다! — 하지만 나쁜 식습관을 고치기를 열망하는 사람들에게는 엄청난 소식이다."},
    {en:"Just as kids gradually learn to like nutritious foods, so, too, can adults readjust their taste.", ko:"아이들이 점진적으로 영양가 있는 음식을 좋아하는 것을 배우는 것처럼, 성인 또한 자신의 입맛을 재조정할 수 있다."},
    {en:"Many who switch from processed grain foods like white bread and white rice to whole grain types, for instance, gradually learn to prefer the nutty flavors and chewy textures.", ko:"예를 들어, 흰 빵과 흰 쌀 같은 가공된 곡물 식품에서 통곡물 종류로 바꾸는 많은 이는 점진적으로 견과 같은 풍미와 씹는 식감을 선호하는 것을 배운다."},
    {en:"Repeated exposure — and a willingness to change — is the key.", ko:"반복된 경험 — 그리고 변화하려는 의지 — 가 핵심이다."}
  ],
  vocab:[["despite","~에도 불구하고"],["behavior","행동"],["form","~을 형성하다"],["inborn","타고난"],["biological","생물학적인"],["difference","차이"],["taste","맛"],["preference","선호도"],["throughout","~의 전체에 걸쳐"],["due to ~","~ 덕분에, ~ 때문에"],["adaptability","적응력"],["flexibility","유연성"],["age","나이를 먹다, 늙어가다"],["terrific","아주 좋은"],["adventurous","모험적인"],["expand","~을 확장하다"],["tasty","맛있는"],["eager+to부정사","~하기를 간절히 바라는, 열망하는"],["break a habit","습관을 고치다"],["poor","나쁜"],["diet habit","식습관"],["gradually","점진적으로"],["readjust","~을 재조정하다"],["switch","바꾸다"],["processed","가공된"],["grain","곡물"],["prefer","~을 선호하다"],["nutty","견과 맛이 나는"],["flavor","풍미"],["chewy","씹는"],["texture","식감, 질감"],["repeated","반복된"],["exposure","경험, 노출"],["willingness","의지"],["key","비결"]],
  question:"다음 글의 요지로 가장 적절한 것은?",
  options:["뇌의 적응력은 나이가 들수록 급격히 저하된다.","어릴 때 형성된 식습관이 평생의 건강을 좌우한다.","개인의 식습관에는 유전적인 영향이 크게 작용한다.","다양한 음식의 섭취가 뇌의 구조적 발달을 촉진한다.","식성은 반복된 경험과 변화 의지를 통해 바뀔 수 있다."],
  answer:5,
  explanation:"신경 가소성 덕분에 맛 선호도는 평생에 걸쳐 변할 수 있으며, 반복된 경험과 변화하려는 의지가 입맛을 바꾸는 핵심이라는 것이 글의 요지이다.",
  grammar:["Just as ~, so too can adults ~: '~인 것처럼, 성인도 마찬가지로 ~할 수 있다'는 비교 구문으로 도치(so too can) 발생.","those eager to break ~: eager 뒤에 to부정사가 이어져 '~하기를 열망하는 사람들'.","a willingness to change: to부정사가 명사 willingness를 수식."]
},
{
  id:23, type:"주제", tags:["주제·제목·요지·주장","서술형","어법","빈칸","의미추론"],
  titleEn:"Conformity and Age",
  titleKo:"순응과 나이의 관계",
  sentences:[
    {en:"Conformity in the teenage years has been studied by putting young people in situations where they are asked to make a choice or decision where that appears to go against what everyone else in the group is saying.", ko:"십 대 시절의 순응은 집단 내의 다른 모든 사람이 말하고 있는 것에 반대되는 것처럼 보이는 선택이나 결정을 내리도록 요구받는 상황에 그들을 놓음으로써 연구되어 왔다."},
    {en:"The fascinating thing about the results of these studies is that conformity is not spread equally across all age groups.", ko:"이런 연구들의 결과에 관한 흥미로운 점은 순응이 모든 연령 집단에 걸쳐 고르게 퍼져 있지 않다는 것이다."},
    {en:"Thus, the willingness to go along with others reaches a peak around the age of 14.", ko:"그래서, 다른 사람에게 동조하려는 의지는 14세 무렵 정점에 도달한다."},
    {en:"After that, this tendency decreases, so that by 16 or 17, young people are much more able to disagree with the group and to stand up for their own opinion.", ko:"그 이후에 이 경향은 감소하며, 그래서 16세나 17세 무렵, 청소년은 집단에 반대하고 그들 자신의 의견을 옹호하는 것을 훨씬 더 잘 할 수 있게 된다."},
    {en:"This is an important finding.", ko:"이것은 중요한 발견이다."},
    {en:"It demonstrates that the influence of the peer group is not the same across all ages.", ko:"이것은 또래 집단의 영향력이 모든 연령에 걸쳐 동일하지 않다는 것을 입증한다."},
    {en:"As young people mature, they become more resilient, and more able to defend their opinions as individuals.", ko:"청소년이 성숙해짐에 따라, 그들은 더 회복 탄력적이게 되고, 개인으로서 자신의 의견을 방어하는 것을 더 잘 할 수 있게 된다."}
  ],
  vocab:[["conformity","순응"],["teenage","십 대의"],["situation","상황"],["make a choice","선택을 하다"],["make a decision","결정을 하다"],["appear+to부정사","~하는 것처럼 보이다"],["go against ~","~에 반대하다"],["fascinating","흥미로운"],["result","결과"],["be spread across ~","~ 전역에 퍼져 있다"],["equally","고르게"],["willingness","의지"],["go along with ~","~에게 동조하다"],["reach","~에 도달하다"],["peak","정점"],["around","~쯈, ~ 무렵에"],["tendency","경향"],["decrease","감소하다"],["disagree with ~","~에 반대하다"],["stand up for ~","~을 옹호하다, 지지하다"],["opinion","의견"],["finding","발견"],["demonstrate","~을 입증하다"],["influence","영향력"],["peer","또래"],["mature","성숙해지다"],["defend","~을 방어하다"],["resilient","회복 탄력적인"]],
  question:"다음 글의 주제로 가장 적절한 것은?",
  options:["negative effects of social influence on teenagers","various factors that influence group decision-making","changes in the tendency to follow peers across ages","differences between individual choices and group decisions","ways to overcome peer pressure in the early teenage years"],
  answer:3,
  explanation:"또래 집단에 동조하려는 순응 경향이 14세 무렵 정점에 이르렀다가 16~17세에는 감소한다는, 즉 연령에 따라 또래를 따르려는 경향이 달라진다는 것이 글의 주제이다.",
  grammar:["where that appears to ~: 관계부사 where가 situations를 수식하는 절을 이끔.","so that by 16 or 17 ~: 결과를 나타내는 so that 구문.","more resilient, and more able to defend ~: 비교급 형용사가 등위접속사로 연결됨."]
},
{
  id:24, type:"제목", tags:["주제·제목·요지·주장","서술형","어법","빈칸","의미추론"],
  titleEn:"Temptation Bundling and Building Better Habits",
  titleKo:"유혹 묶기와 더 나은 습관 형성하기",
  sentences:[
    {en:"Habits aren't bad.", ko:"습관은 나쁜 것이 아니다."},
    {en:"We need them to survive.", ko:"우리는 살아가기 위해 그것을 필요로 한다."},
    {en:"Understanding how the brain uses habits, and how you can work with them, is essential for business.", ko:"뇌가 습관을 어떻게 사용하는지, 그리고 여러분이 습관을 가지고 어떻게 행동할 수 있는지를 이해하는 것은 비즈니스에 필수적이다."},
    {en:"One question to ask is, are you really trying to break a habit, or would you do better by attaching to another one (known as temptation bundling)?", ko:"물어야 할 한 가지 질문은, 여러분은 정말로 어떤 습관을 고치려 하고 있는 것인지, 아니면 (유혹 묶기라고 알려진 대로) 다른 습관에 결합함으로써 더 잘하려고 하는가이다."},
    {en:"Wharton professor Katy Milkman led a research project called Holding the Hunger Games Hostage at the Gym, where participants could only have access to their audio devices while at the gym.", ko:"Wharton 대학의 교수인 Katy Milkman은 '헝거 게임을 체육관에 볼모로 잡아 두기'라고 불리는 연구 프로젝트를 이끌었는데, 이 연구에서 참가자들은 체육관에 있을 때에만 자신의 오디오 기기에 접근할 수 있었다."},
    {en:"This uses a tempting habit — listening to that awesome audiobook — and combines it with a habit people would like to build, but may otherwise feel forced to put off, like exercising.", ko:"이것은 유혹적인 습관, 즉 그 멋진 오디오북을 듣는 것을 사용하여, 사람들이 기르고 하지만, 그러지 않았다면 미룰 수 밖에 없다고 느낄 수도 있는, 운동하기와 같은 습관과 그것을 결합하는 것이다."},
    {en:"The participants whose devices were \"held hostage\" were 51 percent more likely to visit the gym.", ko:"자신의 기기가 '볼모로 잡힌' 참가자들은 체육관을 방문할 가능성이 51퍼센트 더 높았다."},
    {en:"And the really amazing thing is what happened after it was over: nearly two-thirds opted to pay to have gym-only access for their devices!", ko:"그리고 정말로 놀라운 것은 그것이 끝난 뒤에 일어난 일인데, 거의 (참가자의) 3분의 2가 자신의 기기에 체육관에서만 접근하도록 비용을 지불하는 것을 선택했다!"}
  ],
  vocab:[["habit","습관"],["survive","생존하다, 살아남다"],["understand","~을 이해하다"],["essential","필수적인"],["break a habit","습관을 고치다"],["attach to ~","~에 결합하다, ~에 붙다"],["bundling","묶기"],["lead","~을 이끌다"],["hold A hostage","A를 인질로 잡아두다"],["participant","참여자"],["have access to ~","~에 접근할 수 있다"],["device","기기"],["gym","체육관"],["awesome","멋진"],["combine A with B","A를 B와 결합하다"],["build a habit","습관을 기르다"],["otherwise","그렇지 않으면"],["force","~을 강요하다"],["put ~ off","~을 미루다"],["be likely+to부정사","~할 것 같다, ~할 가능성이 있다"],["opt+to부정사","~하는 것을 택하다"]],
  question:"다음 글의 제목으로 가장 적절한 것은?",
  options:["Stop Thinking and Just Go to the Gym Now!","Avoid Listening to Music While You Work Out","Why Smart Businesses Focus on Healthcare Service","The Key to Success in Life: Give Up Everyday Hobbies","Pairing Pleasure with Effort: Guiding People to New Behavior"],
  answer:5,
  explanation:"좋아하는 습관(오디오북 듣기)을 형성하고자 하는 습관(운동)과 결합시키는 '유혹 묶기' 전략을 통해 사람들의 행동을 바꿀 수 있다는 내용이므로, 즐거움과 노력을 짝짓는다는 제목이 가장 적절하다.",
  grammar:["known as ~: 분사구문, '~으로 알려진'의 의미로 temptation bundling을 부연 설명.","whose devices were held hostage: 관계대명사 whose가 the participants를 수식.","what happened after it was over: 간접의문문(명사절)이 is의 보어 역할."]
},
{
  id:25, type:"도표", tags:["일치·불일치"],
  titleEn:"Top Benefits of Remote Work: 2023 Global Survey Results",
  titleKo:"재택근무의 주요 이점: 2023년 글로벌 설문 결과",
  sentences:[
    {en:"The above graph shows the top benefits of working from home, based on a 2023 global survey of over 20,000 workers.", ko:"위 그래프는 2만 명 이상의 노동자를 대상으로 한 2023년의 세계적 규모의 설문 조사에 기반하여, 재택근무의 주요 이점들을 보여 준다."},
    {en:"The biggest benefit was 'No Commute,' chosen by just under 60 percent of respondents.", ko:"가장 큰 이점은 '통근 없음'이었으며, 60퍼센트를 바로 밑도는 응답자에 의해 선택되었다."},
    {en:"'Save on Gas and Lunch Costs' came in second place, and 'Flexibility over When I Work' ranked third.", ko:"'가스와 점심 비용 절약'이 2위를 차지했고, '내가 일하는 시간에 대한 유연성'이 3위에 올랐다."},
    {en:"The percentage of respondents who selected 'Less Time Getting Ready for Work' was over 30 percent.", ko:"'일할 준비를 하는 데 더 적은 시간이 드는 것'을 선택한 응답자의 비율은 30퍼센트가 넘었다."},
    {en:"The percentage of respondents citing 'Individual Quiet Time' was lower than that of those who selected 'Spending More Time with Family and Friends.'", ko:"'개인적인 조용한 시간'을 언급한 응답자의 비율은 '가족 및 친구들과 더 많은 시간 보내기'를 선택한 응답자의 비율보다 더 낮았다."},
    {en:"The gap between the percentage of respondents who selected 'Fewer Meetings' and that of those who selected 'No Commute' was about 50 percentage points.", ko:"'더 적은 회의'를 선택한 응답자의 비율과 '통근 없음'을 선택한 응답자의 비율 사이의 격차는 약 50퍼센트 포인트였다."}
  ],
  vocab:[["benefit","이점, 혜택"],["based on ~","~에 기반하여"],["survey","설문 조사"],["respondent","응답자"],["flexibility","유연성"],["rank","(순위·지위 등에서) 위치하다"],["percentage","비율"],["select","~을 선택하다"],["save on ~","~을 절약하다"],["get ready for ~","~을 준비하다"],["cite","~을 언급하다"],["individual","개인의"],["gap","격차"],["commute","통근"]],
  question:"다음 도표의 내용과 일치하지 않는 것은? (실제 시험 25번 - 본 항목은 일치 여부 판별 5문장 ①~⑤로 출제됨)",
  options:["①The biggest benefit was 'No Commute,' chosen by just under 60 percent of respondents.","②'Save on Gas and Lunch Costs' came in second place, and 'Flexibility over When I Work' ranked third.","③The percentage of respondents who selected 'Less Time Getting Ready for Work' was over 30 percent.","④The percentage of respondents citing 'Individual Quiet Time' was lower than that of those who selected 'Spending More Time with Family and Friends.'","⑤The gap between 'Fewer Meetings' and 'No Commute' was about 50 percentage points."],
  answer:4,
  explanation:"'개인적인 조용한 시간'(35.27%)을 언급한 응답자의 비율은 '가족 및 친구들과 더 많은 시간 보내기'(28.55%)를 선택한 응답자의 비율보다 더 높았다(→ 높았다로 바뀌어야 함). 도표상 35.27% > 28.55%이므로 ④가 도표 내용과 일치하지 않는다.",
  grammar:["based on a 2023 global survey: 분사구문이 graph를 부연 설명.","that of those who selected ~: that = the percentage, those = respondents의 대용 표현.","비교급 lower than / 격차 표현 the gap between A and B ~"]
},
{
  id:26, type:"일치·불일치(인물)", tags:["주제·제목·요지·주장","서술형","어법"],
  titleEn:"Gary Graffman",
  titleKo:"피아니스트 Gary Graffman",
  sentences:[
    {en:"Gary Graffman was born in New York City in 1928 and began playing the piano at the age of three.", ko:"Gary Graffman은 1928년에 New York시에서 태어났고, 세 살의 나이에 피아노를 연주하기 시작했다."},
    {en:"When he was seven, he entered the Curtis Institute of Music, where he received training that laid the foundation for his career.", ko:"일곱 살이 되었을 때, 그는 Curtis Institute of Music에 입학했고, 그곳에서 자신의 경력의 기초를 마련한 교육을 받았다."},
    {en:"In 1949, he won the Leventritt Award and then played concerts worldwide.", ko:"1949년에, 그는 Leventritt Award를 수상했고, 그 후 전 세계에서 연주회를 가졌다."},
    {en:"In the late 1970s, Graffman lost control of the fingers on his right hand, but he never gave up playing the piano.", ko:"1970년대 후반, Graffman은 오른손 손가락을 제어할 수 없게 되었으나, 그는 결코 피아노 연주를 포기하지 않았다."},
    {en:"Reconsidering the traditional piano performance convention of using both hands, he focused on works for the left hand alone, such as Ravel's Piano Concerto for the Left Hand.", ko:"양손을 사용하는 전통적인 피아노 연주 관습을 재고하여, 그는 Ravel의 '왼손을 위한 피아노 협주곡'과 같은 왼손만을 위한 작품들에 집중했다."},
    {en:"Graffman returned to the Curtis Institute of Music in 1980 as a member of the piano faculty.", ko:"Graffman은 1980년에 피아노 교수진의 일원으로서 Curtis Institute of Music으로 돌아갔다."},
    {en:"There he taught many outstanding young musicians, including Lang Lang, and his lifelong commitment to music continues to inspire people today.", ko:"그곳에서 그는 Lang Lang을 포함한 많은 뛰어난 젊은 음악가들을 가르쳤으며, 음악에 대한 그의 평생의 헌신은 오늘날까지도 사람들에게 영감을 주고 있다."}
  ],
  vocab:[["at the age of ~","~살의 나이에"],["enter","~에 입학하다"],["receive","~을 받다"],["training","훈련, 교육"],["lay the foundation for ~","~을 위한 기초를 마련하다"],["career","경력"],["win","~을 수상하다"],["worldwide","전 세계적으로"],["late","후반의, 늦은"],["lose control of ~","~을 제어할 수 없게 되다"],["finger","손가락"],["give up","~을 포기하다"],["reconsider","~을 재고하다"],["traditional","전통적인"],["performance","연주"],["convention","관습"],["focus on ~","~에 집중하다"],["work","작품"],["return to ~","~로 돌아가다"],["outstanding","뛰어난"],["including","~을 포함한"],["lifelong","평생의"],["commitment","헌신, 약속"],["inspire","~에게 영감을 주다"]],
  question:"Gary Graffman에 관한 다음 글의 내용과 일치하지 않는 것은?",
  options:["세 살에 피아노 연주를 시작했다.","1949년에 Leventritt Award를 수상했다.","오른손 손가락을 제어할 수 없게 되어 피아노 연주를 포기했다.","1980년에 Curtis Institute of Music으로 돌아갔다.","Lang Lang을 포함한 많은 뛰어난 젊은 음악가들을 가르쳤다."],
  answer:3,
  explanation:"오른손 손가락을 제어할 수 없게 되었지만 'he never gave up playing the piano'(결코 피아노 연주를 포기하지 않았다)라고 했으므로, ③ '피아노 연주를 포기했다'는 내용과 일치하지 않는다.",
  grammar:["where he received training: 관계부사 where가 the Curtis Institute of Music을 부연 설명.","Reconsidering ~: 분사구문 (이유), '~을 재고하여'.","such as Ravel's Piano Concerto for the Left Hand: 구체적 예시 제시."]
},
{
  id:27, type:"일치·불일치(안내문)", tags:["세부내용"],
  titleEn:"Green Parking Pass",
  titleKo:"Green 주차권",
  sentences:[
    {en:"If you are looking for a convenient parking option in our city, check out the Green Parking Pass!", ko:"만약 여러분이 우리 시에서 편리한 주차 옵션을 찾고 있다면, Green Parking Pass를 확인해 보세요!"},
    {en:"You can park safely and save money while using the pass in the city.", ko:"여러분은 시에서 주차권을 사용하는 동안 안전하게 주차하고 비용을 아낄 수 있습니다."},
    {en:"Where to Use: All public parking lots in the city", ko:"사용 장소: 시의 모든 공영 주차장"},
    {en:"When to Use: April 1st to June 30th, 2026", ko:"사용 기간: 2026년 4월 1일부터 6월 30일까지"},
    {en:"Type — Basic: Price $30, Available 9 a.m.–6 p.m. / Plus: Price $75, Available at any time / Premium: Price $120, Available at any time + reserved parking space", ko:"종류 — Basic: 30달러, 오전 9시~오후 6시 / Plus: 75달러, 어느 때나 / Premium: 120달러, 어느 때나 + 지정된 주차 공간"},
    {en:"Purchase Details: The pass can be purchased online or at the city public parking offices. Each person can purchase only one pass.", ko:"구매 세부 사항: 주차권은 온라인 또는 시 공영 주차장 사무소에서 구매할 수 있습니다. 한 사람당 한 개의 주차권만 구매할 수 있습니다."}
  ],
  vocab:[["pass","이용권"],["convenient","편리한"],["option","선택, 선택 사항"],["check ~ out","~을 확인하다"],["park","주차하다"],["safely","안전하게"],["save","~을 절약하다"],["public parking lot","공영 주차장"],["available","이용할 수 있는"],["reserved","지정된, 예약된"],["purchase","구매; ~을 구매하다"],["detail","세부 사항, 상세 항목"],["online","온라인으로"]],
  question:"Green Parking Pass에 관한 다음 안내문의 내용과 일치하지 않는 것은?",
  options:["시의 모든 공영 주차장에서 사용할 수 있다.","Basic 타입은 오전 9시부터 오후 6시까지 이용 가능하다.","Premium 타입의 가격은 120달러이다.","시 공영 주차장 사무소에서는 구매할 수 없다.","한 사람당 한 개만 구매할 수 있다."],
  answer:4,
  explanation:"주차권은 'online or at the city public parking offices'(온라인 또는 시 공영 주차장 사무소)에서 구매할 수 있다고 했으므로, ④ '시 공영 주차장 사무소에서는 구매할 수 없다'는 내용과 일치하지 않는다.",
  grammar:["If you are looking for ~: 조건절, 현재진행형으로 현재의 상황을 강조.","while using the pass: 분사구문(while you are using)에서 주어+be 생략.","Each person can purchase only one pass: only가 수량을 한정."]
},
{
  id:28, type:"일치·불일치(안내문)", tags:["세부내용"],
  titleEn:"One Week Online Film Camp",
  titleKo:"일주일 온라인 영화 캠프",
  sentences:[
    {en:"Create your own short film in just one week!", ko:"단 일주일 만에 여러분만의 단편 영화를 만드세요!"},
    {en:"You'll write, direct, shoot, and edit your own project.", ko:"여러분은 자신만의 프로젝트를 작성하고, 연출하고, 촬영하고, 편집할 것입니다."},
    {en:"Open to: Ages 14–17 (no experience required)", ko:"대상: 14세~17세(경험을 필요로 하지 않음)"},
    {en:"Dates: Monday, April 6th – Sunday, April 12th / Time: Weekdays 5 p.m.–9 p.m., Weekends 1 p.m.–9 p.m. / Fee: $200 per person", ko:"날짜: 4월 6일 월요일~4월 12일 일요일 / 시간: 평일 오후 5시~오후 9시, 주말 오후 1시~오후 9시 / 비용: 1인당 200달러"},
    {en:"You'll participate in online interactive classes with real-time instruction. You'll complete your own film (shorter than 5 minutes in length) to be screened at the end of the camp.", ko:"여러분은 실시간 강연의 온라인 쌍방향 수업에 참여할 것입니다. 여러분은 캠프 마지막에 상영될 (5분보다 짧은 길이의) 여러분의 영화를 완성할 것입니다."},
    {en:"How to apply: Send us an e-mail at oneweek!@film.com.", ko:"신청 방법: 우리에게 oneweek!@film.com으로 이메일을 보내세요."}
  ],
  vocab:[["film","영화"],["direct","~을 연출하다"],["shoot","~을 촬영하다"],["edit","~을 편집하다"],["open to ~","~에게 열려 있는"],["experience","경험"],["require","~을 요구하다, 필요로 하다"],["weekday","평일"],["weekend","주말"],["fee","비용"],["per","~당"],["participate in ~","~에 참여하다"],["interactive","상호작용하는"],["real-time","실시간의"],["instruction","지도, 교육"],["complete","~을 완성하다"],["length","길이"],["screen","~을 상영하다"],["at the end of ~","~의 끝에"],["apply","지원하다"]],
  question:"One Week Online Film Camp에 관한 다음 안내문의 내용과 일치하는 것은?",
  options:["13세부터 참가할 수 있다.","주말에는 오후 5시에 시작한다.","요금은 1인당 100달러이다.","참가자는 10분 길이의 영화를 완성할 것이다.","참가 신청을 하려면 이메일을 보내야 한다."],
  answer:5,
  explanation:"신청 방법(How to apply)에서 'Send us an e-mail'이라고 명시되어 있으므로 ⑤가 안내문의 내용과 일치한다. 나머지는 각각 대상(14-17세), 주말 시작 시간(오후 1시), 비용(200달러), 영화 길이(5분 미만)와 일치하지 않는다.",
  grammar:["to be screened: to부정사의 형용사적 용법(수동), film을 수식.","shorter than 5 minutes in length: 비교급 표현이 명사를 후치 수식.","Open to: Ages 14-17: 안내문 특유의 명사구 표제 형식."]
},
{
  id:29, type:"어법", tags:["주제·제목·요지·주장","서술형","빈칸"],
  titleEn:"Conceptual Models: Helpful and Easy to Use but Sometimes Misleading",
  titleKo:"개념 모형: 유용하고 사용하기 쉽지만 때때로 오해를 일으키는 것",
  sentences:[
    {en:"A conceptual model is an explanation, usually highly simplified, of how something works.", ko:"개념 모형은 무언가가 어떻게 작동하는지에 대한, 보통 매우 단순화된 설명이다."},
    {en:"It doesn't have to be complete or even accurate as long as it is useful.", ko:"그것은 유용하기만 하다면, 완전할 필요가 없고 심지어 정확할 필요도 없다."},
    {en:"The files, folders, and icons you see displayed on a computer screen ①helps people create the conceptual model of documents and folders inside the computer, or of apps or applications on the screen.", ko:"컴퓨터 화면상에 표시되어 있는 여러분이 보는 파일, 폴더, 그리고 아이콘은 사람들이 컴퓨터 내부의 문서와 폴더, 또는 화면 위에 있는 앱이나 응용 프로그램의 개념 모형을 만드는 것을 돕는다.(→help)"},
    {en:"In fact, there are no folders inside the computer — those are effective conceptualizations ②designed to make them easier to use.", ko:"사실, 컴퓨터 내부에는 폴더가 전혀 없는데, 그것들은 사용하기 더 쉽게 만들기 위해 설계된 효과적인 개념화이다."},
    {en:"Sometimes these depictions can add to the confusion, however.", ko:"하지만 때때로 이러한 묘사는 혼란을 더할 수 있다."},
    {en:"When reading e-mail or visiting a website, the material appears to be on the device, for that is ③where it is displayed and used.", ko:"이메일을 읽거나 웹사이트를 방문할 때, 그 자료는 장치에 있는 것처럼 보이는데, 왜냐하면 그곳이 그것(자료)이 표시되고 사용되는 곳이기 때문이다."},
    {en:"But in fact, in many cases the actual material is \"in the cloud,\" located on some distant machine.", ko:"하지만 사실, 많은 경우에 실제 자료는 어떤 멀리 있는 기계에 위치해 있다."},
    {en:"The conceptual model is of one, coherent image, whereas it may actually consist of parts, each located on different machines ④that could be almost anywhere in the world.", ko:"개념 모형은 하나의 일관된 이미지인데, 반면에 그것은 부분으로 구성되어 있을 수도 있고, 각각은 실제로 세상의 거의 어느 곳에나 있을 수 있는 서로 다른 기계에 위치해 있다."}
  ],
  vocab:[["conceptual","개념의"],["model","모형"],["explanation","설명"],["highly","매우"],["simplified","단순화된"],["complete","완전한"],["accurate","정확한"],["as long as+완전한 절","~하는 한"],["useful","유용한"],["file","파일"],["folder","폴더"],["icon","아이콘"],["display","~을 표시하다"],["screen","화면"],["document","문서"],["inside","~ 안에, ~의 내부에"],["application","응용 프로그램"],["effective","효과적인"],["conceptualization","개념화"],["design","~을 고안하다, 설계하다"],["confusion","혼란"],["material","자료"],["device","장치"],["for+완전한 절","~ 때문에"],["case","경우"],["distant","멀리 있는"],["consist of ~","~로 구성되다"],["anywhere","어디에서나, 어디든"]],
  question:"다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
  options:["①accurate","②designed","③where","④that"],
  answer:0,
  explanation:"주어가 The files, folders, and icons (복수)이지만 you see displayed가 삽입된 관계사절이며, 진주어는 ~screen까지이고 주어의 핵심은 the files, folders, and icons로 복수이므로 동사는 help가 되어야 한다. 따라서 helps → help가 정답(②가 정답으로 표기된 원본 기준 — 본 자료의 정답은 helps→help, 선택지 ②).",
  grammar:["문장의 핵심 동사 수일치: 주어가 복수(files, folders, and icons)이므로 단수형 helps는 틀림 → help로 고쳐야 함.","designed: 과거분사가 conceptualizations를 수식 (수동의 의미, '설계된').","that could be ~: 관계대명사 that이 machines를 수식하는 주격 관계사절."]
},
{
  id:30, type:"어휘", tags:["주제·제목·요지·주장","서술형","어법","빈칸","요약"],
  titleEn:"Walking as the Principal Transportation Mode",
  titleKo:"주요 교통수단으로서의 걷기",
  sentences:[
    {en:"The principal transportation mode in the developing world, even in large cities, is still walking because of constraints on the resources needed to operate extensive transit systems.", ko:"개발 도상국에서의 주요한 교통수단은, 심지어 대도시에서조차, 여전히 걷기인데 이는 광범위한 운송 체계를 운영하는 데 필요한 자원에 대한 제약 때문이다."},
    {en:"People cover ①long distances on foot every day and expend human energy that they can hardly spare.", ko:"사람들은 매일 도보로 긴 거리를 이동하고 그들이 거의 내어 줄 수 없는 인간의 에너지를 소비한다."},
    {en:"Walking under those conditions is an unavoidable burden that ②consumes productive capability.", ko:"그러한 조건 하에서의 걷기는 생산적인 능력을 소모하는 피할 수 없는 부담이다."},
    {en:"In North America and Western Europe, however, the attitude and policies are just the ③same: walking is efficient, healthful, and natural.", ko:"그러나, 북미와 서유럽에서, 그 태도와 정책이 똑같은데(→정반대인데), 걷기는 효율적이고, 건강에 좋으며, 자연스러운 것이다."},
    {en:"We should do ④more of it — almost everybody agrees — and some of the current trends should be reversed.", ko:"우리는 거의 모든 사람이 동의하듯이 그것을 더 많이 해야 하고, 현재의 추세 중 일부는 뒤바뀌어야 한다."},
    {en:"Ironically, among the most popular exercise machines in health clubs and in homes are tread-mills that simulate walking, which could be otherwise ⑤accomplished with a transport purpose on the street.", ko:"아이러니하게도, 걷기를 모방하는 러닝머신이 헬스장과 가정에서 가장 인기 있는 운동 기구 중 하나인데, 그것(걷기)은 그렇지 않다면 거리에서 교통의 목적으로 달성될 수 있을 것이다."}
  ],
  vocab:[["principal","주요한"],["transportation","교통, 수송"],["mode","방식, 방법"],["developing world","개발 도상국"],["because of ~","~ 때문에"],["resource","자원"],["operate","~을 운영하다"],["extensive","광범위한"],["cover","(거리를) 이동하다"],["distance","거리"],["on foot","도보로, 걸어서"],["expend","~을 쓰다, 들이다, 소비하다"],["hardly","거의 ~않다"],["spare","~을 내어 주다, 할애하다"],["condition","조건"],["unavoidable","피할 수 없는"],["burden","부담"],["consume","~을 소비하다"],["productive","생산적인"],["capability","능력"],["attitude","태도"],["policy","정책"],["opposite","정반대"],["efficient","효율적인"],["healthful","건강에 좋은"],["natural","자연스러운"],["agree","동의하다"],["trend","추세"],["reverse","~을 뒤바꾸다, 반전시키다"],["simulate","~을 모방하다"],["otherwise","달리, 다른 식으로"],["accomplish","~을 완수하다, 달성하다"],["transport","이동, 운송 (수단)"],["purpose","목적"]],
  question:"다음 글의 밑줄 친 부분 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?",
  options:["①long","②consumes","③same","④more","⑤accomplished"],
  answer:3,
  explanation:"개발 도상국에서는 자원 제약으로 걷기가 부담이지만, 북미·서유럽에서는 걷기를 효율적이고 건강에 좋은 것으로 여기는 태도가 있다는 대조 구조이므로, ③ same은 opposite(정반대인)으로 바뀌어야 한다.",
  grammar:["that they can hardly spare: 목적격 관계대명사 that이 이끄는 절이 human energy를 수식.","could be otherwise accomplished: 수동태(be p.p.) + 부사 otherwise.","among the most popular ~ are tread-mills: 장소 부사구가 문두에 와서 도치된 구문(주어-동사 도치)."]
},
{
  id:31, type:"빈칸(1)", tags:["주제·제목·요지·주장","서술형","어법","빈칸"],
  titleEn:"The Importance of Simplifying Children's Play Spaces",
  titleKo:"아이들의 놀이 공간을 단순화하는 것의 중요성",
  sentences:[
    {en:"Just like how other rooms in your home can cause anxiety when filled with too much stuff, the same is true for kids.", ko:"여러분의 집 안에 있는 다른 방들이 너무 많은 물건으로 채워졌을 때 불안감을 유발할 수 있는 것과 같이, 아이들에게도 마찬가지이다."},
    {en:"If the play space houses every single toy that has ever been purchased for them since birth, they may not be able to express their feelings, but they can feel overwhelmed by so much stuff.", ko:"만약 그 놀이 공간이 태어날 때부터 그들을 위해 구입된 모든 장난감을 하나도 빠짐없이 보관한다면, 아이들이 자신의 감정을 표현하지 못할 수도 있지만, 그들은 '너무 많은 물건'에 의해 압도된 감정을 느낄 수 있다."},
    {en:"This reminds us of how women look in their closets packed full of clothes and think, I have nothing to wear.", ko:"이것은 여성들이 옷으로 가득 찬 자신의 옷장을 들여다보고 '나는 입을 것이 아무것도 없다'고 생각하는 방식을 우리에게 상기시킨다."},
    {en:"_______________ helps everyone see what they have and use what they own.", ko:"수정은 모든 사람이 자신이 가진 것을 보고, 자신이 소유한 것을 사용하도록 도와준다."},
    {en:"When there's too much to see, too much to step over, and too much input, kids have a hard time making a choice.", ko:"볼 것이 너무 많고, 넘어 다녀야 할 것이 너무 많고, 그리고 너무 많은 입력 정보가 있을 때, 아이들은 선택을 하는 데 어려움을 겪는다."},
    {en:"Streamlining a play space is so important.", ko:"놀이 공간을 간소화하는 것은 매우 중요하다."},
    {en:"You want your kids to feel inspired and imaginative in the room — not overcome with indecision.", ko:"여러분은 아이들이 그 방에서 영감을 받고 상상력을 풍부하게 느끼기를, 즉 망설임에 압도되지 '않기'를 바란다."}
  ],
  vocab:[["just like ~","꼭 ~와 같이, 꼭 ~와 같은 방식으로"],["cause","~을 유발하다"],["anxiety","불안감"],["filled with ~","~로 채워진"],["stuff","물건"],["the same is true for ~","~에게도 마찬가지이다"],["house","~을 보관하다"],["purchase","~을 구입하다"],["express","~을 표현하다"],["remind A of B","A에게 B를 상기시키다"],["closet","옷장"],["packed full of ~","~로 가득 찬"],["revision","수정"],["own","~을 소유하다"],["step over ~","~을 넘어 다니다"],["input","입력"],["have a hard time -ing","-하는 데 어려움을 겪다"],["choice","선택"],["streamline","~을 간소화하다"],["inspired","영감을 받은"],["imaginative","상상력이 풍부한"],["overcome with ~","~에 압도된"],["indecision","망설임, 주저함"]],
  question:"다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
  options:["Revision","Invitation","Collection","Possession","Cooperation"],
  answer:1,
  explanation:"옷장 정리(수정)의 비유와 마찬가지로, 놀이 공간도 정리(수정)를 통해 아이들이 자신이 가진 것을 보고 사용하게 도와준다는 내용이므로 'Revision(수정)'이 빈칸에 가장 적절하다.",
  grammar:["Just like how ~ can cause anxiety: 명사절을 이끄는 관계부사 how, '~하는 방식처럼'.","packed full of clothes: 과거분사구가 closets를 수식.","overcome with indecision: 과거분사 + 전치사 with, '~에 압도된'."]
},
{
  id:32, type:"빈칸(2)", tags:["주제·제목·요지·주장","서술형","어법","빈칸"],
  titleEn:"From Familiarity to Real Mastery",
  titleKo:"친숙함에서 진정한 숙달로",
  sentences:[
    {en:"Students often mistake familiarity with true mastery, creating a dangerous \"illusion of competence\" where recognizing information feels like genuine knowledge, but they struggle when asked to recall or apply it independently.", ko:"학생들은 흔히 친숙함을 진정한 숙달로 착각하고, 정보를 인식하는 것이 진짜 지식인 것처럼 느껴지는 위험한 '능력의 착각'을 만들어 내지만, 그들이 독립적으로 그것을 회상하거나 적용하도록 요구받을 때 어려움을 겪는다."},
    {en:"This cognitive bias, strengthened by passive study methods, leads learners to overestimate their understanding.", ko:"수동적인 학습 방법에 의해 강화되는 이러한 인지적 편향은 학습자가 자신의 이해를 과대평가하도록 이끈다."},
    {en:"Teaching materials (even informally or imaginatively) actively counters this illusion by requiring deep processing, active recall, structured organization, and revealing gaps in knowledge.", ko:"(심지어 비공식적으로나 상상 속에서라도) 자료를 가르치는 것은 심층 처리, 능동적 회상, 구조적 조직화를 요구하고 지식의 빈틈을 드러냄으로써 이러한 착각에 적극적으로 대응한다."},
    {en:"It introduces powerful methods like teaching imaginary students, peer-teaching in study groups, employing the Feynman Technique, and writing explanations for others.", ko:"그것은 가상의 학생 가르치기, 학습 집단에서 또래 가르치기, Feynman 기법 이용하기, 그리고 다른 사람들을 위해 설명 쓰기와 같은 강력한 방법들을 도입한다."},
    {en:"Ultimately, ____________________ transforms surface familiarity into real mastery, exposing and filling gaps in knowledge and ensuring solid, reliable understanding.", ko:"궁극적으로, 가르친다는 사람의 사고방식을 채택하는 것은 표면적인 친숙함을 진짜 숙달로 변화시키고, 지식의 빈틈을 드러내고 채우며, 견고하고 신뢰할 수 있는 이해를 보장한다."}
  ],
  vocab:[["mistake A with B","A를 B로 오해하다, 착각하다"],["familiarity","친숙함"],["true","진정한"],["mastery","숙달"],["dangerous","위험한"],["competence","능력"],["recognize","~을 인식하다"],["feel like ~","~처럼 느껴지다"],["genuine","진짜의, 진정한"],["knowledge","지식"],["struggle","어려움을 겪다"],["ask","~을 요구하다, 요청하다"],["recall","~을 회상하다; 회상"],["apply","~을 적용하다"],["independently","독립적으로"],["bias","편향"],["strengthen","~을 강화시키다"],["method","방법, 방식"],["lead","~을 이끌다"],["overestimate","~을 과대평가하다"],["understanding","이해"],["material","자료"],["informally","비공식적으로"],["actively","능동적으로, 적극적으로"],["counter","~에 대응하다, ~에 반응하다"],["require","~을 요구하다"],["processing","처리"],["structured","구조화된, 체계적인"],["organization","조직화, 구조"],["reveal","~을 드러내다"],["gap","공백, 빈틈"],["introduce","~을 도입하다"],["imaginary","가상의, 상상에만 존재하는"],["peer","또래"],["employ","~을 이용하다"],["explanation","설명"],["ultimately","궁극적으로"],["adopt","~을 채택하다"],["mindset","사고방식"],["transform A into B","A를 B로 바꾸다"],["surface","표면적인"],["expose","~을 드러내다"],["fill","~을 채우다"],["ensure","~을 보장하다"],["solid","견고한"],["reliable","신뢰할 수 있는"]],
  question:"다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
  options:["adopting the teacher mindset","using leisure time effectively","activating background knowledge","supporting the emotional stability","reducing the amount of studying time"],
  answer:1,
  explanation:"누군가를 가르치듯 자료를 익히는 것(가르치는 사람의 사고방식 채택)이 능력의 착각을 깨고 진짜 숙달로 이끈다는 내용이 글 전체를 통해 전개되므로 'adopting the teacher mindset'이 빈칸에 가장 적절하다.",
  grammar:["where recognizing information feels like ~: 관계부사 where가 illusion of competence를 부연.","strengthened by passive study methods: 과거분사구가 cognitive bias를 수식.","exposing and filling gaps ~, ensuring ~: 분사구문이 연속으로 결과를 나타냄."]
},
{
  id:33, type:"빈칸(3)", tags:["주제·제목·요지·주장","서술형","어법","연결어","빈칸","문장 넣기"],
  titleEn:"The Birth of the Emancipated Number",
  titleKo:"해방된 숫자의 탄생",
  sentences:[
    {en:"From around 3000 BC, the Sumerian officials would mark their lists of goods on clay tablets.", ko:"기원전 3000년경부터, 수메르 관리들은 점토판에 자신들의 물품 목록을 표시하곤 했다."},
    {en:"If they wanted to record five fish, they would mark five pictures of a fish.", ko:"만약 물고기 다섯 마리를 기록하고 싶었다면, 그들은 물고기 그림 다섯 개를 표시하곤 했다."},
    {en:"Their first great intellectual leap came from _______________________.", ko:"그들의 첫 번째 위대한 지적 도약은 자신들이 세고 있는 대상으로부터 숫자를 분리하는 것에서 왔다."},
    {en:"In other words, they would represent five fish with a numeral for the number five alongside a symbol for the fish.", ko:"다시 말해, 그들은 물고기의 상징 옆에 (수메르) '숫자' 5를 써서 물고기 다섯 마리를 표현하곤 했다."},
    {en:"If they wanted to describe five of something else, they realized they could keep the same numeral and trade the object symbol for a cow, or a jar of oil, or whatever else they were interested in.", ko:"만약 다른 어떤 것 다섯 개를 묘사하고 싶었다면, 그들은 똑같은 숫자를 유지하면서 대상의 상징을 소나 기름 단지, 또는 자신들이 관심이 있는 다른 무엇으로든 바꿀 수 있다는 것을 깨달았다."},
    {en:"The Sumerians had developed the idea of an emancipated number, existing in its own right and independent of whatever it is being used to count.", ko:"수메르인들은 해방된 숫자, 즉 그것이 무엇을 세는 데 사용되고 있는지와 상관없이, 그 자체로 존재하는 숫자의 개념을 발전시켰다."},
    {en:"It is easy to take the emancipated number for granted as it is so deeply set into modern thought, but to the earliest civilizations it was intellectually new and extremely powerful.", ko:"그것은 현대의 사고에 너무나 깊이 자리 잡고 있어 당연하게 여기기 쉽지만, 초기 문명에서 그것은 지적으로 새롭고 매우 강력하였다."}
  ],
  vocab:[["around","약, -경"],["official","관리, 공무원"],["mark","~을 표시하다"],["list","목록"],["goods","물품, 상품"],["clay","점토"],["tablet","판"],["record","~을 기록하다"],["intellectual","지적인"],["leap","도약"],["come from ~","~에서 오다, ~에서 비롯되다"],["represent","~을 표현하다"],["alongside","~ 옆에"],["numeral","숫자"],["symbol","기호, 상징"],["describe","~을 묘사하다"],["realize","~을 깨닫다"],["trade A for B","A를 B와 교환하다, 맞바꾸다"],["jar","단지, 병"],["exist","존재하다"],["separate A from B","B에서 A를 분리하다"],["object","대상"],["count","~을 세다"],["independent of ~","~와 상관없이, ~와 별개로"],["take ~ for granted","~을 당연하게 여기다"],["civilization","문명"],["extremely","매우"]],
  question:"다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
  options:["adding more complex symbols to describe the quality of goods","separating the number from the object they were counting","representing the physical shape of each object accurately","connecting the count of an object with its market value","applying the use of numbers to only precious items"],
  answer:2,
  explanation:"이어지는 문장에서 물고기를 셀 때 숫자(5)와 물고기 기호를 따로 표현하고, 같은 숫자를 다른 대상(소, 기름 등)에도 재사용했다는 내용이 나오므로, '세고 있는 대상으로부터 숫자를 분리하는 것'이 빈칸에 가장 적절하다.",
  grammar:["existing in its own right and independent of ~: 분사구문 두 개가 and로 연결되어 number를 부연 설명.","whatever it is being used to count: 복합관계대명사 whatever가 이끄는 명사절(전치사 of의 목적어).","as it is so deeply set into ~: 이유의 접속사 as."]
},
{
  id:34, type:"빈칸(4)", tags:["주제·제목·요지·주장","서술형","어법","연결어","빈칸"],
  titleEn:"Ingroup Copying and Conformity",
  titleKo:"내집단 모방과 순응",
  sentences:[
    {en:"The emphasis on learning from the ingroup takes little account of individuals.", ko:"내집단으로부터 배우는 것에 대한 강조는 개인을 거의 고려하지 않는다."},
    {en:"Amazingly, while we may dislike some of the people in our ingroup, we still copy them.", ko:"놀랍게도, 우리는 우리 내집단에 속한 일부 사람들을 싫어할 수도 있지만, 여전히 그들을 모방한다."},
    {en:"Wilks, Kirby, and Nielsen studied copying behavior in the context of observing how to open a puzzle box.", ko:"Wilks, Kirby, 그리고 Nielsen은 퍼즐 상자를 여는 방법을 관찰하는 맥락에서 모방 행동을 연구했다."},
    {en:"Ingroups and outgroups were distinguished in a minimal way, using simple color coding of wristbands.", ko:"내집단과 외집단은 손목 밴드의 단순한 색상 구분을 사용하여 최소한의 방식으로 식별되었다."},
    {en:"The children did not simply like all members of their ingroup; they disliked those who behaved in an antisocial fashion.", ko:"아이들은 자기 내집단의 모든 구성원을 단순히 좋아하지는 않았는데, 반사회적인 방식으로 행동한 이들을 싫어했다."},
    {en:"Indeed, they liked these antisocial ingroup members less than the prosocial members of an outgroup.", ko:"실제로 그들은 반사회적인 내집단 구성원을, 외집단의 친사회적인 구성원보다 덜 좋아했다."},
    {en:"Still, their dislike did not affect their tendency to copy ingroup behavior more closely than outgroup behavior.", ko:"그럼에도 불구하고, 그러한 반감은 외집단의 행동보다 내집단의 행동을 더 면밀히 모방하려는 그들의 경향에 영향을 미치지 않았다."},
    {en:"This overimitation reveals that we are not copying in order to learn how to open a box most efficiently.", ko:"이 과잉 모방은 우리가 상자를 가장 효율적으로 여는 방법을 배우기 위해 모방하고 있는 것이 아님을 드러낸다."},
    {en:"We want to learn how to do it in the proper way — in other words, _______________________________.", ko:"우리는 그것을 타당한 방식으로 하는 법을 배우고자 하는데, 다시 말해 내집단의 규칙과 관습에 따르는 것이다."},
    {en:"This will be appropriately demonstrated even by antisocial ingroup members.", ko:"이는 반사회적인 내집단 구성원에 의해서도 적절하게 입증될 것이다."}
  ],
  vocab:[["emphasis on ~","~에 대한 강조"],["ingroup","내집단"],["take account of ~","~을 고려하다"],["individual","개인"],["amazingly","놀랍게도"],["dislike","~을 싫어하다; 반감"],["copy","~을 모방하다"],["behavior","행동"],["in the context of ~","~의 맥락에서"],["observe","~을 관찰하다"],["outgroup","외집단"],["distinguish","식별하다"],["in ~ way","~한 방식으로"],["minimal","최소한의"],["wristband","손목 밴드"],["simply","단순히"],["behave","행동하다"],["antisocial","반사회적인"],["fashion","방식"],["prosocial","친사회적인"],["still","그럼에도 불구하고"],["affect","~에 영향을 주다"],["tendency","경향"],["closely","면밀하게"],["overimitation","과잉 모방"],["reveal","~을 드러내다"],["efficiently","효율적으로"],["proper","타당한"],["conform to ~","~에 따르다, ~을 준수하다"],["convention","관습"],["appropriately","적절하게"],["demonstrate","~을 입증하다, 분명히 보여주다"]],
  question:"다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
  options:["conforming to the rules and conventions of the ingroup","following outgroup behavior which is socially appropriate","avoiding behaviors demonstrated by the ingroup on purpose","pursuing the most efficient strategy for completing the task","maintaining an individual identity rather than a group identity"],
  answer:1,
  explanation:"아이들이 효율성과 무관하게, 심지어 싫어하는 구성원이라도 내집단의 행동을 더 모방한다는 것은 내집단의 규칙과 관습을 따르는 것을 배우려는 것임을 보여주므로 빈칸에 가장 적절하다.",
  grammar:["while we may dislike ~: 양보의 접속사 while.","those who behaved in an antisocial fashion: 관계대명사 who가 선행사 those를 수식.","not copying in order to learn ~: in order to부정사, '~하기 위해'의 목적."]
},
{
  id:35, type:"무관한 문장", tags:["주제·제목·요지·주장","서술형","어법","순서"],
  titleEn:"The Set Point Theory",
  titleKo:"설정점 이론",
  sentences:[
    {en:"The \"set point theory\" concept is that your body has a stable quantity of fat cells by the time you are an adult.", ko:"'설정점 이론' 개념은 여러분이 성인이 될 때쯔이면 여러분의 신체가 안정적인 수량의 지방 세포를 가진다는 것이다."},
    {en:"The more weight you carried in your childhood and your teenage years, the more fat cells you will have as an adult.", ko:"어린 시절과 십 대 시절에 여러분의 체중이 더 많이 나갈수록, 성인으로서 더 많은 지방 세포를 가질 것이다."},
    {en:"①These fat cells then become \"fuller\" or \"thinner\" as you gain and lose weight as an adult.", ko:"그 후 여러분이 성인으로서 살이 찌거나 빠짐에 따라 이 지방 세포는 '더 가득 차거나' 더 얇아'지게 된다."},
    {en:"②The set point is the trigger in these cells that will send a message to your brain saying that your fat cells are getting too thin and that you must eat more.", ko:"설정점은 여러분의 지방 세포가 너무 얇아지고 있고 여러분이 더 많이 먹어야 한다고 말하는 메시지를 뇌에 보낼 이 세포 안의 방아쇠이다."},
    {en:"③Different people's fat cells will have different set points, and the strength of the message is affected by the number of cells.", ko:"서로 다른 사람들의 지방 세포는 서로 다른 설정점을 가질 것이며, 메시지의 강도는 세포의 수에 의해 영향을 받는다."},
    {en:"④Some researchers report that fat cells can release hormones and other chemicals that could help treat a disease.", ko:"(몇몇 연구자들은 지방 세포가 질병을 치료하는 것을 도울 수 있는 호르몬과 다른 화학 물질을 분비할 수 있다고 보고한다.)"},
    {en:"⑤Thus a person with lots of fat cells and a high set point will battle with a strong desire for food when dieting.", ko:"따라서 많은 지방 세포와 높은 설정점을 가진 사람은 다이어트를 하고 있을 때 음식에 대한 강한 욕구와 싸울 것이다."}
  ],
  vocab:[["theory","이론"],["concept","개념"],["stable","안정적인"],["quantity","수량, 양"],["fat","지방"],["cell","세포"],["by the time+완전한 절","~할 때쯔음에"],["weight","체중, 몸무게"],["childhood","어린 시절"],["teenage","십대의"],["full","가득 찬"],["thin","얇은"],["send A to B","A를 B에게 보내다"],["strength","강도"],["affect","~에 영향을 미치다"],["the number of ~","~의 수"],["battle with ~","~와 싸우다"],["desire","욕구"]],
  question:"다음 글에서 전체 흐름과 관계 없는 문장은?",
  options:["①","②","③","④","⑤"],
  answer:4,
  explanation:"글 전체는 '설정점 이론'(지방 세포 수가 체중 조절에 미치는 영향)에 관한 내용인데, ④는 지방 세포가 질병 치료에 도움이 되는 호르몬을 분비한다는 내용으로 글의 흐름과 관계가 없다.",
  grammar:["The more A, the more B: '~할수록 더 ~하다'의 비교급 구문.","saying that ~: 분사구문이 message를 부연 설명(message which says that).","that could help treat a disease: 관계대명사 that이 chemicals를 수식."]
},
{
  id:36, type:"순서(1)", tags:["주제·제목·요지·주장","서술형","어법","연결어","빈칸"],
  titleEn:"Less Is More",
  titleKo:"적은 것이 더 많은 것이다",
  sentences:[
    {en:"Initially the catchphrase \"less is more\" had a simple meaning.", ko:"처음에 '더 적은 것이 더 많은 것이다'라는 유명 문구는 단순한 의미를 가졌다."},
    {en:"(B) First mentioned in Robert Browning's poem \"Andrea del Sarto,\" it suggests that everything simple is better and more beautiful than the complex and tangled. Nowadays this phrase is heard often — maybe even too often.", ko:"(B) Robert Browning의 시 'Andrea del Sarto'에서 맨 처음 언급되었고, 그것은 단순한 모든 것이 복잡하고 뒤엉킨 것보다 더 낫고 더 아름답다는 것을 시사한다. 요즘에는 이 구절이 자주, 어쩌면 너무나도 자주 들린다."},
    {en:"(C) But it's important to recognize that the way of thinking that lies behind these words slowly extinguishes certain habits from our daily life. For example, think about the heavy, massive radio receivers that existed back in the day.", ko:"(C) 하지만 이 말 뒤에 놓여 있는 사고방식이 우리 일상생활로부터 특정한 관습을 서서히 소멸시킨다는 것을 인식하는 것이 중요하다. 예를 들어, 옛날에 존재했던 무겁고 거대한 라디오 수신기에 대해 생각해 보라."},
    {en:"(A) Over time, many of their buttons became viewed as \"extra\" and were removed, and with each reduction these devices eventually developed into the phones in our pockets. The scale of the object became smaller, and the functions of the buttons got lost in the three-dot menus and multilayered folders of our phones.", ko:"(A) 시간이 흐르면서, 그것의 버튼 중 많은 것이 '여분의 것'으로 간주되어 제거되었고, 각각의 축소와 함께 이 장치들은 결국 우리 전화기로 발전했다. 물체의 크기는 더 작아졌고, 버튼의 기능은 우리 전화기의 점 세 개로 된 메뉴와 다층화된 폴더 속으로 사라졌다."}
  ],
  vocab:[["initially","처음에"],["catchphrase","유명 문구"],["mention","~을 언급하다"],["poem","시"],["suggest","~을 시사하다"],["complex","복잡한"],["tangled","뒤엉킨"],["nowadays","요즘에는"],["phrase","구절"],["recognize","~을 인식하다"],["way of thinking","사고방식"],["lie behind ~","~의 뒤에 놓여 있다"],["habit","(사회적) 관습, 습관"],["massive","거대한"],["receiver","수신기"],["exist","존재하다"],["back in the day","예전에, 옛날에"],["view A as B","A를 B로 간주하다"],["remove","~을 제거하다"],["reduction","축소"],["develop into ~","~로 발전하다"],["pocket","주머니"],["scale","크기"],["object","물체"],["function","기능"],["get lost","잃게 되다, 없어지다"],["multilayered","다층화된"]],
  question:"주어진 글 다음에 이어질 글의 순서로 가장 적절한 것을 고르시오.",
  options:["(A)-(C)-(B)","(B)-(A)-(C)","(B)-(C)-(A)","(C)-(A)-(B)","(C)-(B)-(A)"],
  answer:3,
  explanation:"주어진 글에서 'less is more'라는 문구의 단순한 의미를 언급한 후, (B)에서 그 유래(Robert Browning의 시)와 현재 자주 쓰임을 설명하고, (C)에서 이 사고방식이 일상의 관습을 소멸시킨다는 점을 라디오 수신기의 예로 도입하며, (A)에서 그 라디오가 결국 스마트폰으로 발전한 과정을 구체적으로 설명하는 흐름이 자연스럽다.",
  grammar:["First mentioned in ~: 분사구문(수동), '~에서 처음 언급되어'.","with each reduction: '각각의 축소와 함께'라는 동시 상황을 나타내는 전치사구.","became viewed as 'extra': 수동태(be viewed as)의 과거형."]
},
{
  id:37, type:"순서(2)", tags:["주제·제목·요지·주장","서술형","어법","연결어","빈칸"],
  titleEn:"The Hidden History of the Plastics Industry",
  titleKo:"플라스틱 산업의 숨겨진 역사",
  sentences:[
    {en:"We first need to understand the short but hidden history behind the plastics industry and how it became deeply rooted in our daily lives.", ko:"우리는 먼저 플라스틱 산업의 이면의 짧지만 숨겨진 역사와 어떻게 그것이 우리의 일상생활에 깊이 뿌리내리게 되었는지를 이해할 필요가 있다."},
    {en:"Before plastic, people lived more sustainably, with far fewer waste problems than we face today.", ko:"플라스틱 이전에는, 사람들은 우리가 오늘날 직면한 것보다 훨씬 더 적은 쓰레기 문제를 가지고, 더 지속 가능하게 살았다."},
    {en:"(C) However, after the invention of plastic, its rapid adoption during World War II, and its explosion into consumer goods, plastic was everywhere. The growing industry came to symbolize the convenience and prosperity of the American dream.", ko:"(C) 하지만, 플라스틱의 발명, 제2차 세계 대전 동안 그것의 빠른 채택, 그리고 소비재로서의 폭발적 증가 이후에, 플라스틱은 도처에 있었다. 이 성장하는 산업은 미국의 꿈의 편리함과 번영을 상징하게 되었다."},
    {en:"(B) This dream came with a price. Over time, people began to notice the environmental impact, and the early seeds of today's environmental movement were planted.", ko:"(B) 이 꿈은 대가와 함께 왔다. 시간이 흐르면서, 사람들은 환경적 영향을 알아차리기 시작했고, 오늘날 환경 운동의 초기 씨앗이 심어졌다."},
    {en:"(A) However, the plastics industry was quick to counter these concerns, launching campaigns that presented recycling as the solution to all our problems. They pushed the idea that pollution was the fault of consumers, not the corporations flooding the market with plastic.", ko:"(A) 하지만, 플라스틱 산업은 이러한 우려에 빠르게 대응했고, 우리의 모든 문제에 대한 해결책으로 재활용을 제시하는 캠페인을 시작했다. 그들은 오염이 플라스틱으로 시장을 범람시키는 기업의 잘못이 아니라 소비자의 잘못이라는 생각을 밀어붙였다."}
  ],
  vocab:[["hidden","숨겨진"],["behind","~의 이면의"],["deeply","깊게"],["rooted in ~","~에 뿌리내린"],["far","훨씬"],["waste","쓰레기"],["face","~을 직면하다"],["invention","발명"],["rapid","빠른"],["adoption","채택"],["explosion","폭발적 증가"],["consumer goods","소비재"],["everywhere","모든 곳에서, 어디서나"],["growing","성장하는"],["come+to부정사","~하게 되다"],["symbolize","~을 상징하다"],["convenience","편리함"],["prosperity","번영"],["price","대가"],["notice","~을 알아차리다"],["environmental","환경적인"],["impact","영향"],["seed","씨앗"],["movement","운동"],["plant","~을 심다"],["quick+to부정사","빠른"],["counter","~에 대응하다"],["concern","우려, 근심"],["launch","~을 시작하다"],["campaign","캠페인"],["present A as B","A를 B로서 보여주다, 나타내다"],["recycling","재활용"],["solution to ~","~에 대한 해결책"],["push","~을 밀어붙이다"],["pollution","오염"],["fault","잘못"],["consumer","소비자"],["corporation","기업"],["flood A with B","A를 B로 범람시키다, 넘쳐나게 하다"]],
  question:"주어진 글 다음에 이어질 글의 순서로 가장 적절한 것을 고르시오.",
  options:["(A)-(C)-(B)","(B)-(A)-(C)","(B)-(C)-(A)","(C)-(A)-(B)","(C)-(B)-(A)"],
  answer:5,
  explanation:"주어진 글에서 플라스틱 이전의 삶을 언급한 후, (C)에서 플라스틱의 발명과 폭발적 확산을 설명하고, (B)에서 그로 인한 환경 문제(대가)가 나타났음을 설명하며, (A)에서 플라스틱 산업이 이러한 우려에 대응해 재활용 캠페인으로 책임을 소비자에게 돌렸다는 흐름이 자연스럽다.",
  grammar:["came with a price: '대가가 따랐다'는 의미의 표현.","launching campaigns that presented ~: 분사구문 + 관계대명사절.","the corporations flooding the market with plastic: 현재분사구가 the corporations를 수식."]
},
{
  id:38, type:"문장 넣기(1)", tags:["주제·제목·요지·주장","서술형","어법","연결어","빈칸"],
  titleEn:"Kuhn's Paradigm Shift",
  titleKo:"Kuhn의 패러다임 전환",
  sentences:[
    {en:"As Kuhn proposed, our propositions about the world are embedded within paradigms; roughly a network of interrelated commitments to a particular theory, a conception of a subject matter, and methodological practices.", ko:"Kuhn이 제안했듯이, 세상에 대한 우리의 명제는 '패러다임,' 즉 특정 이론, 주제에 대한 대략적인 개념, 그리고 방법론적 관행에 대하여 대략 상호 연관된 약속에 깊이 박혀 있다."},
    {en:"( ① ) Thus, when scientists undertake research, they do so from within a specific paradigm.", ko:"따라서 과학자들이 연구를 수행할 때, 그들은 하나의 특정한 패러다임 안에서 그렇게 한다."},
    {en:"( ② ) Even the most exacting measurements are only sensible from within that paradigm.", ko:"가장 엄밀한 측정조차 오직 그 패러다임 안에서만 사리에 맞는 것이다."},
    {en:"( ③ ) For example, a look into a microscope tells you nothing unless you are already informed about the nature of the instrument and what you are supposed to be looking at.", ko:"예를 들어, 현미경을 들여다보는 것은, 그 도구의 성격과 여러분이 무엇을 보아야 하는지에 대해 이미 알고 있지 않다면, 여러분에게 아무것도 알려 주지 않는다."},
    {en:"( ④ ) [Thus, what we call major progress in science is not a movement from a less to a more accurate paradigm.] Rather, it is a horizontal shift from one 'way of seeing the world' to another.", ko:"따라서 우리가 과학에서 주요한 진보라고 부르는 것은 덜 정확한 패러다임에서 더 정확한 패러다임으로의 이동이 아니다. 오히려, 그것은 하나의 '세상을 바라보는 방식'에서 다른 방식으로의 수평적 전환이다."},
    {en:"( ⑤ ) For Kuhn, 'the scientist with a new paradigm sees differently from the way he had seen before.'", ko:"Kuhn에게 있어서, '새로운 패러다임을 지닌 과학자는 자신이 이전에 보아 왔던 방식과는 다르게 본다.'"}
  ],
  vocab:[["propose","~을 제안하다"],["proposition","명제"],["paradigm","패러다임"],["roughly","대략"],["interrelated","상호 연관된"],["commitment","약속, 헌신"],["particular","특정한"],["theory","이론"],["conception","개념"],["subject matter","주제"],["methodological","방법론적인"],["undertake","~을 착수하다, 수행하다"],["within","~ 내에서"],["specific","특정한"],["exacting","까다로운, 엄밀한"],["measurement","측정"],["sensible","합리적인"],["informed about ~","~에 대해 알고 있는"],["nature","성격"],["instrument","도구"],["be supposed+to부정사","~하기로 되어 있다, ~해야 한다"],["major","주요한"],["progress","진보"],["accurate","정확한"],["rather","오히려"],["horizontal","수평적인"],["shift","전환"]],
  question:"글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오. (주어진 문장: Thus, what we call major progress in science is not a movement from a less to a more accurate paradigm.)",
  options:["①","②","③","④","⑤"],
  answer:4,
  explanation:"④ 앞에서 현미경 예시(특정 패러다임 안에서만 의미가 통함)를 들었고, ④ 뒤의 'Rather, it is a horizontal shift ~'가 주어진 문장의 내용(과학적 진보는 정확도의 이동이 아니다)과 대조/연결되므로, 주어진 문장은 ④에 들어가는 것이 가장 적절하다.",
  grammar:["unless you are already informed ~: 부정 조건의 접속사 unless.","what you are supposed to be looking at: 명사절(간접의문문) + be supposed to.","from a less to a more accurate paradigm: 비교급 표현이 전치사 from~to와 결합."]
},
{
  id:39, type:"문장 넣기(2)", tags:["주제·제목·요지·주장","서술형","어법","연결어","빈칸"],
  titleEn:"Two Visits to the Greenhouse",
  titleKo:"온실로의 두 번의 방문",
  sentences:[
    {en:"Making two visits to one of our cold greenhouses — one at dawn after a below-zero night, and the other a few hours later — provides a striking introduction to the winter harvest.", ko:"우리의 추운 온실 중 하나를 두 번 방문하는 것은, 즉 영하의 밤이 지난 새벽에 한 번, 그리고 몇 시간 후에 나머지 한 번 방문하는 것은, 겨울 수확으로의 인상적인 소개를 제공한다."},
    {en:"( ① ) During the dawn visit all the crops are frozen solid.", ko:"새벽 방문 동안에 모든 농작물은 단단하게 얼어 있다."},
    {en:"( ② ) Raising the inner covers, which is difficult because they too are frozen, reveals a sight of hard, frost-coated leaves bleak enough to convince anyone that this idea is foolish.", ko:"내부 덮개를 들어 올리는 것은, 그것 또한 얼어 있기 때문에 어려운데, 이 생각이 어리석다는 것을 누구에게라도 납득시킬 만큼 충분히 황량한, 뻣뻣하고 서리가 내려앉은 잎의 광경을 드러낸다."},
    {en:"( ③ ) [Yet a few hours later, after the sun has warmed the greenhouses above freezing, the second visit presents a miraculous contrast.] Under the inner covers are closely spaced rows of vigorous, healthy leaves that stretch the length of the greenhouse.", ko:"하지만 몇 시간 뒤, 태양이 온실을 영상으로 데운 후에, 두 번째 방문은 기적적인 대조를 보여 준다. 내부 덮개 아래에는 온실 길이에 걸쳐 뻗은, 생기가 넘치고 싱싱한 잎들이 촘촘히 간격의 줄을 이루고 있다."},
    {en:"( ④ ) The leaf colors in different shades of greens, reds, maroons, and yellows stand bright against the dark soil.", ko:"초록색, 빨간색, 밤색, 그리고 노란색의 온갖 색조를 띤 잎이 짙은 색의 토양을 배경 삼아 밝게 빛난다."},
    {en:"( ⑤ ) It looks like a never-ending spring.", ko:"그것은 끝나지 않는 봄처럼 보인다."}
  ],
  vocab:[["make a visit to ~","~를 방문하다"],["greenhouse","온실"],["dawn","새벽"],["below-zero","영하의"],["provide","~을 제공하다"],["striking","인상적인"],["introduction","소개"],["harvest","수확"],["frozen solid","꽁꽁 언"],["solid","단단한"],["raise","~을 들어 올리다"],["inner","내부의"],["cover","덮개"],["frozen","(땅·물 등이) 언"],["reveal","~을 드러내다"],["sight","광경"],["convince","~을 ...에게 납득시키다"],["foolish","어리석은"],["warm","따뜻하게 하다"],["freezing","어는 점"],["present","~을 보여주다"],["miraculous","기적의"],["contrast","대조"],["closely","빽빽하게, 촘촘히"],["space","~ 사이에 (일정한) 간격을 두다"],["row","줄"],["vigorous","생기가 넘치는"],["stretch","뻗어 있다"],["length","길이"],["shade","색조"],["maroon","밤색, 고동색"],["stand","(~한 상황에) 있다"],["against","~을 배경으로"],["dark","어두운"],["soil","토양"],["never-ending","끝나지 않는"],["spring","봄"]],
  question:"글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳을 고르시오. (주어진 문장: Yet a few hours later, after the sun has warmed the greenhouses above freezing, the second visit presents a miraculous contrast.)",
  options:["①","②","③","④","⑤"],
  answer:3,
  explanation:"③ 앞까지는 새벽 방문 때 얼어붙은 황량한 모습을 설명하고, ③ 뒤의 'Under the inner covers are closely spaced rows of vigorous, healthy leaves'가 주어진 문장의 'miraculous contrast(기적적인 대조)'에 해당하는 두 번째 방문의 모습이므로, 주어진 문장은 ③에 들어가는 것이 가장 적절하다.",
  grammar:["Making two visits ~: 동명사구가 문장의 주어.","which is difficult because ~: 관계대명사 which의 계속적 용법, 앞 내용(Raising the inner covers)을 부연.","bleak enough to convince anyone: enough+to부정사, '~할 만큼 충분히 ~한'."]
},
{
  id:40, type:"요약", tags:["주제·제목·요지·주장","서술형","어법","어휘","문장 넣기","순서","빈칸"],
  titleEn:"Building Back Tolerance for Children in Public Spaces",
  titleKo:"공공장소에서 아이들에 대한 관용 재구축하기",
  sentences:[
    {en:"Parenting experts say children need to learn independence and resilience.", ko:"육아 전문가들은 자녀가 독립심과 회복 탄력성을 배워야 한다고 말한다."},
    {en:"But cities and suburbs don't offer safe walk and bike routes to school, malls kick teenagers out on the weekends, and free time disappears under a spreadsheet of activities.", ko:"그러나 도시와 교외 지역은 안전한 도보 및 자전거 통로를 제공하지 않고, 쇼핑몰은 주말에 십 대들을 쫓아내며, 자유 시간은 활동의 스프레드시트 하에 사라진다."},
    {en:"All of those \"musts\" take more of the parents' time or money to navigate, because the child can't do it on their own.", ko:"그 '필수 사항' 전부가 (자녀를) 이끄는 데 더 많은 부모의 시간이나 돈이 들게 하는데, 왜냐하면 자녀가 혼자 힘으로 그것을 할 수 없기 때문이다."},
    {en:"As Darby Saxbe, a clinical psychologist, recently wrote in the New York Times, \"underparenting requires structural change.\"", ko:"임상 심리학자인 Darby Saxbe가 최근 New York Times에 썼듯이, '언더페어런팅(過少양육)은 구조적 변화를 필요로 한다.'"},
    {en:"Unlike most political experts, she's not just talking about economic policies like family leave and government-supported childcare.", ko:"대부분의 정치 전문가와 달리, 그녀는 가족 (돌봄) 휴가나 정부 지원 보육과 같은 경제 정책만을 말하고 있는 것이 아니다."},
    {en:"She's talking about actual physical structures, and the cultural change required to populate them.", ko:"그녀는 실제적인 물리적 구조와, 그곳에 사는 데 요구되는 문화적 변화에 대해 말하고 있다."},
    {en:"We need to \"build back our tolerance for children in public spaces,\" she writes, \"and create safe environments where lightly supervised kids can move around freely.\"", ko:"우리는 '공공장소에서 자녀에 대한 우리의 관용을 다시 구축하고,' '감독을 가볍게 받는 아이들이 자유롭게 자유롭게 돌아다닐 수 있는 안전한 환경을 조성할' 필요가 있다고 그녀는 쓰고 있다."}
  ],
  vocab:[["parenting","육아"],["expert","전문가"],["need+to부정사","~할 필요가 있다"],["independence","독립심"],["resilience","회복 탄력성"],["suburb","교외 지역"],["offer","~을 제공하다"],["mall","쇼핑몰"],["kick ~ out","~을 쫓아내다"],["disappear","사라지다"],["activity","활동"],["must","필수 사항"],["navigate","~을 헤쳐 나가다"],["on one's own","혼자 힘으로"],["as+완전한 절","~하듯이"],["clinical psychologist","임상 심리학자"],["require","~을 필요로 하다"],["structural","구조적인"],["change","변화"],["unlike","~와 달리"],["political","정치의"],["not just ~","~뿐만 아니라"],["economic","경제의"],["policy","정책"],["family leave","가족 휴가"],["childcare","보육"],["actual","실제적인"],["physical","물리적인"],["structure","구조"],["cultural","문화적인"],["populate","~에 살다"],["back","다시"],["unlike","~와 달리"],["lightly","가볍게"],["supervised","감독받는"]],
  question:"다음 글의 내용을 한 문장으로 요약하려 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은? (요약문: To help parents raise independent children, cities and suburbs need to create (A)__________ environments, where parents can keep their children under (B)__________ supervision, through changes in physical structure and culture.)",
  options:["(A) supportive (B) mild","(A) supportive (B) strict","(A) educational (B) strict","(A) competing (B) mild","(A) competing (B) public"],
  answer:1,
  explanation:"도시와 교외가 부모가 독립적인 자녀를 기르도록 돕기 위해 물리적 구조와 문화의 변화를 통해 '지원적인'(supportive) 환경을 만들고, 부모가 자녀를 '가벼운'(mild) 감독 하에 둘 수 있게 해야 한다는 내용이므로 ①이 가장 적절하다.",
  grammar:["required to populate them: 과거분사구가 the cultural change를 수식.","where lightly supervised kids can move around freely: 관계부사 where가 environments를 수식.","Unlike most political experts: 비교/대조의 전치사구."]
},
{
  id:4142, type:"장문(41~42)", tags:["서술형","어법","빈칸","문장 넣기","순서","요약"],
  titleEn:"Patience as a Form of Power",
  titleKo:"권력의 한 형태로서의 인내심",
  sentences:[
    {en:"It's fair to say that patience has a terrible name.", ko:"인내심이 끔찍한 평판을 가지고 있다고 말하는 것은 타당하다."},
    {en:"For one thing, the prospect of doing anything that you've been told will require patience simply seems unattractive.", ko:"우선 한 가지는, 인내심을 요구할 것이라고 들은 어떤 일을 한다는 전망은 정말로 매력 없어 보인다."},
    {en:"More specifically, though, it's disturbingly (a)passive.", ko:"더 구체적으로, 역시, 그것은 불안하게 할 정도로 수동적이다."},
    {en:"It is the virtue that has traditionally been urged upon housewives, while their husbands led more exciting lives outside the home; or on racial minorities, told to wait just a few more decades for their full civil rights.", ko:"그것은 전통적으로 남편이 집 밖에서 더 신나는 삶을 이끄는 동안 가정주부에게 강요되었던 미덕이고, 또한, 완전한 시민권을 위해 단지 몇 십 년을 더 기다리라고 들었던, 인종적 소수자에게 강요되었던 미덕이다."},
    {en:"The talented but self-effacing employee who \"waits patiently\" for a promotion, we tend to feel, will be waiting a long time: she ought to be trumpeting her (b)achievements instead.", ko:"재능은 있지만 자기를 내세우지 않는, 승진을 위해 '인내심 있게 기다리는' 직원은 오랜 시간을 기다리게 될 것이라고, 우리는 느끼는 경향이 있으니, 대신 그녀는 자신의 성취를 널리 알리고 있어야 한다."},
    {en:"In all such cases, patience is a way of psychologically accommodating yourself to a lack of power, an attitude intended to help you to resign yourself to your (c)lowly position, in theoretical hopes of better days to come.", ko:"그런 모든 경우에, 다가올 더 나은 날들에 대한 이론상으로만 존재하는 희망 속에서, 인내심은 권력의 부족에 여러분 자신을 심리적으로 순응시키는 방식이고, 여러분 자신을 낮은 지위로 단념하도록 돕기 위해 의도된 태도이다."},
    {en:"But as society accelerates, something (d)shifts.", ko:"그러나 사회가 가속화됨에 따라, 무언가가 변한다."},
    {en:"In more and more contexts, patience becomes a form of power.", ko:"점점 더 많은 맥락에서, 인내심은 권력의 한 '형태'가 된다."},
    {en:"In a world geared for hurry, the capacity to (e)feed (→resist) the urge to hurry — to allow things to take the time they take — is a way to gain purchase on the world, to do the work that counts, and to derive satisfaction from the doing itself, instead of putting off all your fulfillment to the future.", ko:"서두름에 맞춰진 세상에서, 서두르고 싶은 충동을 충족시키는(→ 억제하는), 즉 일에 소요되는 시간이 소요되도록 허용하는 능력은 세상에 대한 유리한 입장을 얻고, 중요한 일을 하고, 여러분의 모든 성취를 미래로 미루는 대신에 행위 그 자체로부터 만족을 이끌어 내는 방식이다."}
  ],
  vocab:[["fair","타당한"],["terrible","끔찍한"],["prospect","전망"],["require","~을 요구하다"],["unattractive","매력 없는"],["specifically","구체적으로"],["disturbingly","불안하게 할 정도로"],["passive","수동적인"],["virtue","미덕"],["traditionally","전통적으로"],["urge","~을 강요하다"],["housewife","가정주부"],["racial","인종적인"],["minority","소수자"],["decade","십 년"],["civil rights","시민권"],["talented","재능 있는"],["self-effacing","자기를 내세우지 않는"],["promotion","승진"],["trumpet","~을 널리 알리다"],["achievement","성취"],["psychologically","심리적으로"],["accommodate","~을 순응시키다"],["lack","부족"],["attitude","태도"],["intend","~을 의도하다"],["resign oneself to ~","~로 단념하다"],["lowly","낮은"],["theoretical","이론상의"],["accelerate","가속화되다"],["shift","변하다"],["context","맥락"],["geared for ~","~에 맞춰진"],["capacity","능력"],["resist","~을 억제하다, 저항하다"],["urge","충동"],["purchase","유리한 입장"],["count","중요하다"],["derive","~을 이끌어 내다"],["satisfaction","만족"],["put off ~","~을 미루다"],["fulfillment","성취"]],
  question:"[41] 윗글의 제목으로 가장 적절한 것은? / [42] 밑줄 친 (a)~(e) 중에서 문맥상 낱말의 쓰임이 적절하지 않은 것은?",
  options:["41-①Patience Can Never Be an Answer","41-②Focus on the Work That Truly Counts","41-③Patience: Not a Weakness, but a Power","41-④The Hidden Costs of Waiting Too Long","41-⑤Being Patient: a Key to Long-term Relationship"],
  answer:3,
  explanation:"[41] 인내심이 전통적으로 수동적인 약점으로 여겨졌지만, 가속화되는 사회에서는 오히려 권력의 한 형태가 된다는 내용이므로 제목은 ③ 'Patience: Not a Weakness, but a Power'가 가장 적절하다. [42] (e) feed는 문맥상 서두르고 싶은 충동을 '억제하는' 능력이 핵심이므로 feed → resist로 바뀌어야 한다(정답 ⑤).",
  grammar:["the virtue that has traditionally been urged upon ~: 현재완료 수동태 + 관계대명사절.","an attitude intended to help you to resign yourself to ~: 과거분사구가 attitude를 수식.","the capacity to resist the urge to hurry: to부정사가 반복적으로 명사를 수식하는 구조."]
},
{
  id:434445, type:"장문(43~45)", tags:["서술형","어법","지칭","순서"],
  titleEn:"The Sage and the Coin",
  titleKo:"현자와 동전",
  sentences:[
    {en:"(A) One day, a sage was traveling with his disciple through the capital of a prosperous kingdom.", ko:"(A) 어느 날, 한 현자가 자신의 제자와 함께 번영한 왕국의 수도를 지나 여행하고 있었다."},
    {en:"As they walked along a busy road, the sage noticed a coin on the ground.", ko:"그들이 붐비는 길을 따라 걷고 있을 때, 현자는 땅 위에 있는 동전 하나를 알아차렸다."},
    {en:"Since he lived simply and had no need for it, he told his disciple (a)he hoped to give it to someone who truly required it.", ko:"그는 소박하게 살았고 그것에 대한 필요가 없었기 때문에, 그는 그것을 진정으로 필요로 하는 누군가에게 주고 싶다고 제자에게 말했다."},
    {en:"The two men searched the streets, but found no one in genuine need of the coin.", ko:"그 두 사람은 거리를 찾아다녔지만, 그 동전을 진정으로 필요로 하는 어느 누구도 찾지 못했다."},
    {en:"(B) The king, puzzled and slightly annoyed at what he did, asked, \"What is the meaning of this coin?", ko:"(B) 왕은 그가 한 행동에 당황스러워하고 약간 불쾌함을 느끼며, '이 동전의 의미가 무엇이오?'라고 말했다."},
    {en:"I am the richest king in the land. Why would I need a single coin?\"", ko:"나는 이 땅에서 가장 부유한 왕이오. 내가 왜 동전 하나가 필요하겠소?'"},
    {en:"The sage replied calmly, \"Oh, Great King, I found this coin yesterday while walking through your capital. I had no need for it, so I planned to give it to someone who (b)I met seemed content and lacked any urgent need.\"", ko:"현자가 '오, 위대한 왕이시여, 저는 어제 폐하의 수도를 걸어 다니다가 이 동전을 발견했습니다. 저는 그것에 대해 필요가 전혀 없었기에, 만나는 모든 사람 중 만족해 보이고 어떤 긴요한 필요도 없어 보였던 누군가에게 주려고 계획했습니다.'라고 담대하게 대답했다."},
    {en:"(C) The next morning, near the palace, they saw the king preparing for a war.", ko:"(C) 다음 날 아침, 궁전 근처에서, 그들은 전쟁을 준비하고 있는 왕을 보았다."},
    {en:"The king was not satisfied with what he had and sought to expand his kingdom.", ko:"왕은 자신이 가진 것에 만족하지 않았고 자신의 왕국을 확장하고자 했다."},
    {en:"Accompanied by his army, he stopped when he saw the sage and his disciple.", ko:"자신의 군대와 동행하다가, 왕은 현자와 그의 제자를 보자 멈추었다."},
    {en:"He approached the sage and asked for a blessing that might ensure victory.", ko:"그는 현자에게 다가가 승리를 보장해 줄 축복을 부탁했다."},
    {en:"After a quiet moment of thought, the sage handed the king the coin (c)he had found the previous day.", ko:"조용한 사색의 잠깐 후에, 현자는 왕에게 그가 전날 발견했던 동전을 건네주었다."},
    {en:"(D) The sage added, \"Today, I see you preparing for war.", ko:"(D) 현자는 '오늘, 저는 폐하께서 전쟁을 준비하며 더 많은 것을 정복하려 하시는 것을 봅니다.'라고 덧붙였다."},
    {en:"And (d)I thought you, the one who desires more, were in need of this coin.\"", ko:"'그리고 저는 더 많은 것을 욕망하는 분인 폐하께 이 동전이 필요하다고 생각했습니다.'라고 덧붙였다."},
    {en:"The king was struck by the sage's words.", ko:"왕은 현자의 말에 큰 충격을 받았다."},
    {en:"He realized that his hunger for more had made him forget the value of contentment.", ko:"그는 더 많은 것에 대한 자신의 갈망이 자신에게 만족의 가치를 잊게 만들었다는 것을 깨달았다."},
    {en:"The sage's simple but powerful lesson made him change (e)his plans.", ko:"현자의 단순하지만 강력한 가르침은 그로 하여금 자신의 계획을 바꾸게 만들었다."},
    {en:"The king called off the invasion and chose to appreciate what he already had.", ko:"왕은 침략을 취소했고 자신이 이미 가진 것을 소중히 여기기로 했다."}
  ],
  vocab:[["sage","현자(賢者)"],["disciple","제자"],["prosperous","번영한"],["kingdom","왕국"],["busy","붐비는"],["notice","~을 알아차리다"],["coin","동전"],["simply","소박하게"],["require","~을 필요로 하다"],["search","~을 찾아다니다"],["genuine","진정한"],["puzzled","당황스러운"],["slightly","약간"],["annoyed","불쾌한"],["calmly","담대하게, 차분하게"],["content","만족한"],["lack","~이 없다"],["urgent","긴요한, 긴급한"],["palace","궁전"],["prepare for ~","~을 준비하다"],["satisfied","만족한"],["seek+to부정사","~하고자 하다"],["expand","~을 확장하다"],["accompanied by ~","~와 동행하는"],["army","군대"],["approach","~에게 다가가다"],["ask for ~","~을 부탁하다"],["blessing","축복"],["ensure","~을 보장하다"],["victory","승리"],["hand","~을 건네주다"],["previous","전날의, 이전의"],["add","~을 덧붙이다"],["conquer","~을 정복하다"],["desire","~을 욕망하다"],["be struck by ~","~에 충격을 받다"],["realize","~을 깨닫다"],["hunger for ~","~에 대한 갈망"],["value","가치"],["contentment","만족"],["lesson","가르침"],["call off ~","~을 취소하다"],["invasion","침략"],["appreciate","~을 소중히 여기다"]],
  question:"[43] 주어진 글 (A)에 이어질 내용을 순서에 맞게 배열한 것으로 가장 적절한 것은? / [44] 밑줄 친 (a)~(e) 중에서 가리키는 대상이 나머지 넷과 다른 것은? / [45] 윗글에 관한 내용으로 적절하지 않은 것은?",
  options:["43-①(B)-(D)-(C)","43-②(C)-(B)-(D)","43-③(C)-(D)-(B)","43-④(D)-(B)-(C)","43-⑤(D)-(C)-(B)"],
  answer:2,
  explanation:"[43] (A)에서 현자가 동전을 줄 사람을 찾지 못한 뒤, (C)에서 다음 날 아침 전쟁을 준비하는 왕을 만나 축복을 부탁받고 동전을 건네주며, (B)에서 왕이 동전의 의미를 묻고 현자가 그 사연을 설명하며, (D)에서 현자가 왕에게 그 동전이 필요한 이유(욕망하는 자)를 덧붙이는 흐름이 자연스럽다 → (C)-(B)-(D). [44] (a),(b),(d),(e)는 모두 the sage(현자)를 가리키지만 (c) 'he'는 문맥상 the king이 아니라 역시 the sage를 가리킨다 — 본 자료의 정답은 ⑤(e)가 다른 대상을 가리킴(왕의 계획이므로 his=king). [45] 현자는 전쟁을 준비하는 왕을 '궁전 근처에서' 보았다(③)는 것은 본문과 일치한다(궁전 근처에서 본 것이 맞음) — 따라서 일치하지 않는 것은 ②(왕이 현자가 한 행동에 당황스러워했다는 시점 순서 오류 등 세부사항 확인 필요).",
  grammar:["told his disciple he hoped to give it to ~: that이 생략된 명사절.","seemed content and lacked any urgent need: 등위접속사로 연결된 두 개의 동사(seemed, lacked).","Accompanied by his army: 분사구문, '군대와 동행하여'."]
}
];
