import {
    royaltrain,
    nex,
    skyliner,
    superkamui,
    series485,
    e751series,
    inaho,
    e653series,
    cassiopeiaexpress,
    tobuspecialexpress,
    romancecarvse,
    romancecarmse,
    romancecarexe,
    series287,
    bosoviewexpress,
    shinano,
    twilightexpress,
    superview,
    nikko,
    sunriseexpress,
    superhitachi,
    hakutaka,
    shirasagi,
    hakone,
    musky,
    saganoexpress,
    oceanarrow,
    haruka,
    iseshimaliner,
    urbanlinenext,
    urbanlineplus,
    seres22600,
    sakuraliner,
    shimakaze,
    raku,
    ktr001series,
    ktr8000series,
    rapit,
    thunderbird,
    eizan,
    shiokaze,
    ishizuchi,
    sevenstars,
    yufuinnomori,
    sonic,
    kamome,
    westexpress,
    shikijima,
    tobu500,
    jre353,
    disneyline
} from '../assets/specialExpress/index.js'

import {
    series733, 
    sappororailway,
    sapporo9000,
    sensekiline,
    sendai2000,
    yamanotenew,
    yamanoteline,
    takasakiline,
    chuoline,
    keihintohokuline,
    jobanlinemetro,
    shonansinjukuline,
    keiyoline,
    yokohamaline,
    saikyoline,
    somuline,
    jobanline,
    chuolinemetro,
    yokosukaline,
    nanbuline,
    joban,
    nikkoline,
    naritaline,
    utsunomiyaline,
    kururiline,
    musashinoline,
    seibu30000,
    seibu20000,
    seibu10000,
    seibu9000,
    seibu6000,
    tobu60000,
    tobu50000,
    ginzaline,
    marunouchiline,
    hibiyaline,
    tozailine,
    chiyodaline,
    fukutoshinline,
    hanzomonline,
    nanbokuline,
    arakawaline,
    arakawaline2,
    asakusaline,
    mitaline,
    shinjukuline,
    oedoline,
    tokyu7000,
    tokyu6000,
    tokyu5000,
    keisei3700,
    keisei3400,
    keio9000,
    keio8000,
    keio1000,
    keikyu2100,
    keikyu1000,
    odakyu4000,
    odakyu3000,
    chibacitymonorail,
    minatomirailine,
    sagami11000,
    sagami10000,
    seasideline,
    tamacitymonorail,
    shonancitymonorail,
    yurikamome,
    tx,
    tokyomonorail,
    saitamanewtransport,
    tokyowaterfront,
    enoden,
    meitetsu5000,
    meitetsu4000,
    meitetsu3300,
    meitetsu1700,
    meitetsu1380,
    meitetsu300,
    nagoya7000,
    nagoya6050,
    nagoya1000,
    aonami,
    linimo,
    tokaidoline,
    kosailine,
    hokurikuline,
    kohamaline,
    sanyoline,
    marineliner,
    kyotoline,
    kobeline,
    hiroshimaline,
    toyamacentram,
    portram,
    manyoline,
    fukuirailway,
    keihan13000,
    keihan10000,
    keihan8000,
    kintetsu22000,
    kintetsu16000,
    hanshin9300,
    hanshin9000,
    hanshin8000,
    hanshin5700,
    hanshin5500,
    hanshin1000,
    hankyu9300,
    hankyu8300,
    hankyu7300,
    hankyu1000,
    nankai12000,
    nankai8000,
    senboku7020,
    sanyo5000,
    osakametro200,
    osaka30000,
    osaka9000,
    rokkoliner,
    portliner,
    kobe6000,
    okayamarailway,
    hiroshimarailway,
    hiroden1000,
    iyoden,
    kitakyusyumonorail,
    nishitetsu3000,
    fukuokacitysubway,
    chikuhiline,
    kagoshimaline,
    nippoline,
    kumamotorailway,
    kagoshimautram,
    nagasakitramway,
    okinawayuirail
} from '../assets/commuterRail/index.js'

const imagesByType = {
    express: [royaltrain,
        nex,
        skyliner,
        superkamui,
        series485,
        e751series,
        inaho,
        e653series,
        cassiopeiaexpress,
        tobuspecialexpress,
        romancecarvse,
        romancecarmse,
        romancecarexe,
        series287,
        bosoviewexpress,
        shinano,
        twilightexpress,
        superview,
        nikko,
        sunriseexpress,
        superhitachi,
        hakutaka,
        shirasagi,
        hakone,
        musky,
        saganoexpress,
        oceanarrow,
        haruka,
        iseshimaliner,
        urbanlinenext,
        urbanlineplus,
        seres22600,
        sakuraliner,
        shimakaze,
        raku,
        ktr001series,
        ktr8000series,
        rapit,
        thunderbird,
        eizan,
        shiokaze,
        ishizuchi,
        sevenstars,
        yufuinnomori,
        sonic,
        kamome,
        westexpress,
        shikijima,
        tobu500,
        jre353,
        disneyline
    ],
    commuter: [
        series733, 
    sappororailway,
    sapporo9000,
    sensekiline,
    sendai2000,
    yamanotenew,
    yamanoteline,
    takasakiline,
    chuoline,
    keihintohokuline,
    jobanlinemetro,
    shonansinjukuline,
    keiyoline,
    yokohamaline,
    saikyoline,
    somuline,
    jobanline,
    chuolinemetro,
    yokosukaline,
    nanbuline,
    joban,
    nikkoline,
    naritaline,
    utsunomiyaline,
    kururiline,
    musashinoline,
    seibu30000,
    seibu20000,
    seibu10000,
    seibu9000,
    seibu6000,
    tobu60000,
    tobu50000,
    ginzaline,
    marunouchiline,
    hibiyaline,
    tozailine,
    chiyodaline,
    fukutoshinline,
    hanzomonline,
    nanbokuline,
    arakawaline,
    arakawaline2,
    asakusaline,
    mitaline,
    shinjukuline,
    oedoline,
    tokyu7000,
    tokyu6000,
    tokyu5000,
    keisei3700,
    keisei3400,
    keio9000,
    keio8000,
    keio1000,
    keikyu2100,
    keikyu1000,
    odakyu4000,
    odakyu3000,
    chibacitymonorail,
    minatomirailine,
    sagami11000,
    sagami10000,
    seasideline,
    tamacitymonorail,
    shonancitymonorail,
    yurikamome,
    tx,
    tokyomonorail,
    saitamanewtransport,
    tokyowaterfront,
    enoden,
    meitetsu5000,
    meitetsu4000,
    meitetsu3300,
    meitetsu1700,
    meitetsu1380,
    meitetsu300,
    nagoya7000,
    nagoya6050,
    nagoya1000,
    aonami,
    linimo,
    tokaidoline,
    kosailine,
    hokurikuline,
    kohamaline,
    sanyoline,
    marineliner,
    kyotoline,
    kobeline,
    hiroshimaline,
    toyamacentram,
    portram,
    manyoline,
    fukuirailway,
    keihan13000,
    keihan10000,
    keihan8000,
    kintetsu22000,
    kintetsu16000,
    hanshin9300,
    hanshin9000,
    hanshin8000,
    hanshin5700,
    hanshin5500,
    hanshin1000,
    hankyu9300,
    hankyu8300,
    hankyu7300,
    hankyu1000,
    nankai12000,
    nankai8000,
    senboku7020,
    sanyo5000,
    osaka30000,
    osakametro200,
    osaka9000,
    rokkoliner,
    portliner,
    kobe6000,
    okayamarailway,
    hiroshimarailway,
    hiroden1000,
    iyoden,
    kitakyusyumonorail,
    nishitetsu3000,
    fukuokacitysubway,
    chikuhiline,
    kagoshimaline,
    nippoline,
    kumamotorailway,
    kagoshimautram,
    nagasakitramway,
    okinawayuirail

    ]
  };


  export default imagesByType;



  