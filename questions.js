// questions.js
const questionData = [
    // 单选题（60道）
    {
        type: "single",
        question: "驾驶机动车在道路上向左变更车道时，应提前开启左转向灯，观察情况，确认安全后驶入要变更的车道。这种说法是否正确？",
        options: {
            A: "正确",
            B: "错误",
            C: "视情况而定",
            D: "仅在夜间需要"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车通过没有交通信号灯、交通标志、交通标线或者交通警察指挥的交叉路口时，应当如何做？",
        options: {
            A: "加速通过",
            B: "减速慢行，并让行人和优先通行的车辆先行",
            C: "鸣喇叭示意其他车辆避让",
            D: "从左侧绕行"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "机动车在高速公路上发生故障时，警告标志应当设置在故障车来车方向多少米以外？",
        options: {
            A: "50米",
            B: "100米",
            C: "150米",
            D: "200米"
        },
        correctAnswer: ["C"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度小于100米时，车速不得超过每小时多少公里？",
        options: {
            A: "40",
            B: "50",
            C: "60",
            D: "70"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "下列哪种标志是指示车辆、行人行进的？",
        options: {
            A: "禁令标志",
            B: "指示标志",
            C: "警告标志",
            D: "辅助标志"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？",
        options: {
            A: "违章行为",
            B: "违法行为",
            C: "过失行为",
            D: "违规行为"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "机动车驾驶人初次申请机动车驾驶证和增加准驾车型后的多长时间为实习期？",
        options: {
            A: "6个月",
            B: "12个月",
            C: "24个月",
            D: "36个月"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上倒车、逆行、穿越中央分隔带掉头的，一次记多少分？",
        options: {
            A: "3分",
            B: "6分",
            C: "9分",
            D: "12分"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车不按规定使用灯光的，一次记多少分？",
        options: {
            A: "1分",
            B: "2分",
            C: "3分",
            D: "6分"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路或者城市快速路上违法占用应急车道行驶的，一次记多少分？",
        options: {
            A: "2分",
            B: "3分",
            C: "6分",
            D: "12分"
        },
        correctAnswer: ["C"],
        points: 1
    },
    {
        type: "single",
        question: "下列哪个标志提示驾驶人下陡坡？",
        options: {
            A: "图1",
            B: "图2",
            C: "图3",
            D: "图4"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在没有中心线的城市道路上，最高速度不能超过每小时多少公里？",
        options: {
            A: "30",
            B: "40",
            C: "50",
            D: "70"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在没有中心线的公路上，最高速度不能超过每小时多少公里？",
        options: {
            A: "30",
            B: "40",
            C: "50",
            D: "60"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车通过铁路道口时，最高速度不能超过每小时多少公里？",
        options: {
            A: "15",
            B: "20",
            C: "30",
            D: "40"
        },
        correctAnswer: ["C"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车通过急弯路时，最高速度不能超过每小时多少公里？",
        options: {
            A: "20",
            B: "30",
            C: "40",
            D: "50"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车通过窄路、窄桥时，最高速度不能超过每小时多少公里？",
        options: {
            A: "20",
            B: "30",
            C: "40",
            D: "50"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车掉头、转弯、下陡坡时的最高速度不能超过每小时多少公里？",
        options: {
            A: "30",
            B: "40",
            C: "50",
            D: "60"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在冰雪道路上行驶时，最高速度不能超过每小时多少公里？",
        options: {
            A: "20",
            B: "30",
            C: "40",
            D: "50"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在泥泞道路上行驶时，最高速度不能超过每小时多少公里？",
        options: {
            A: "15",
            B: "20",
            C: "30",
            D: "40"
        },
        correctAnswer: ["C"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车行经人行横道，不按规定减速、停车、避让行人的，一次记多少分？",
        options: {
            A: "1分",
            B: "2分",
            C: "3分",
            D: "6分"
        },
        correctAnswer: ["C"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车不按规定会车的，一次记多少分？",
        options: {
            A: "1分",
            B: "2分",
            C: "3分",
            D: "6分"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车违反禁令标志、禁止标线指示的，一次记多少分？",
        options: {
            A: "1分",
            B: "2分",
            C: "3分",
            D: "6分"
        },
        correctAnswer: ["C"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶低于规定最低时速的，一次记多少分？",
        options: {
            A: "1分",
            B: "3分",
            C: "6分",
            D: "12分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "机动车驾驶证被暂扣期间驾驶机动车的，一次记多少分？",
        options: {
            A: "3分",
            B: "6分",
            C: "9分",
            D: "12分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "造成致人轻伤以上或者死亡的交通事故后逃逸，尚不构成犯罪的，一次记多少分？",
        options: {
            A: "6分",
            B: "9分",
            C: "12分",
            D: "24分"
        },
        correctAnswer: ["C"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶与准驾车型不符的机动车的，一次记多少分？",
        options: {
            A: "3分",
            B: "6分",
            C: "9分",
            D: "12分"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "饮酒后驾驶机动车的，一次记多少分？",
        options: {
            A: "3分",
            B: "6分",
            C: "9分",
            D: "12分"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上不按规定车道行驶的，一次记多少分？",
        options: {
            A: "1分",
            B: "3分",
            C: "6分",
            D: "12分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车行经交叉路口不按规定行车或者停车的，一次记多少分？",
        options: {
            A: "1分",
            B: "2分",
            C: "3分",
            D: "6分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车有拨打、接听手持电话等妨碍安全驾驶的行为的，一次记多少分？",
        options: {
            A: "1分",
            B: "2分",
            C: "3分",
            D: "6分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路或者城市快速路上不按规定车道行驶的，一次记多少分？",
        options: {
            A: "1分",
            B: "3分",
            C: "6分",
            D: "12分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车不按规定超车、让行的，或者逆向行驶的，一次记多少分？",
        options: {
            A: "1分",
            B: "3分",
            C: "6分",
            D: "12分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车违反规定牵引挂车的，一次记多少分？",
        options: {
            A: "1分",
            B: "3分",
            C: "6分",
            D: "12分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在道路上行驶时，机动车驾驶人未按规定系安全带的，一次记多少分？",
        options: {
            A: "1分",
            B: "2分",
            C: "3分",
            D: "6分"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度小于200米时，与同车道前车保持多少米以上的距离？",
        options: {
            A: "50米",
            B: "100米",
            C: "150米",
            D: "200米"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度小于50米时，车速不得超过每小时多少公里？",
        options: {
            A: "20",
            B: "30",
            C: "40",
            D: "50"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "机动车在高速公路上行驶，下列做法正确的是？",
        options: {
            A: "可在路肩停车上下人员",
            B: "可在紧急停车带停车装卸货物",
            C: "可在减速车道或加速车道上超车、停车",
            D: "非紧急情况时不得在应急车道行驶或者停车"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶人连续驾驶不得超过多长时间？",
        options: {
            A: "4小时",
            B: "6小时",
            C: "8小时",
            D: "10小时"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在夜间超车时怎样使用灯光？",
        options: {
            A: "变换远、近光灯",
            B: "开启雾灯",
            C: "开启远光灯",
            D: "关闭前大灯"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "夜间驾驶机动车在窄路、窄桥会车时正确的做法是使用远光灯？",
        options: {
            A: "正确",
            B: "错误",
            C: "仅对面无车时使用",
            D: "车速慢时使用"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "在道路上发生未造成人员伤亡且无争议的轻微交通事故如何处置？",
        options: {
            A: "保护好现场再协商",
            B: "不要移动车辆",
            C: "疏导其他车辆绕行",
            D: "撤离现场自行协商"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "在道路上发生交通事故，仅造成轻微财产损失，并且基本事实清楚的，当事人应当怎么做？",
        options: {
            A: "不得移动车辆",
            B: "保护现场并报警",
            C: "先撤离现场再进行协商处理",
            D: "等候交通警察前来处理"
        },
        correctAnswer: ["C"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车遇到沙尘、冰雹、雨、雾、结冰等气象条件时应降低行驶速度。",
        options: {
            A: "正确",
            B: "错误",
            C: "仅在夜间需要",
            D: "仅在恶劣天气需要"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在道路上违反道路通行规定应当接受相应的处罚。",
        options: {
            A: "正确",
            B: "错误",
            C: "视情节而定",
            D: "仅在被发现时处罚"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "对驾驶已达到报废标准的机动车上路行驶的驾驶人，会受到下列哪种处罚？",
        options: {
            A: "处15日以下拘留",
            B: "吊销机动车驾驶证",
            C: "处20以上200元以下罚款",
            D: "追究刑事责任"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶人未携带哪种证件驾驶机动车上路，交通警察可依法扣留车辆？",
        options: {
            A: "机动车通行证",
            B: "居民身份证",
            C: "从业资格证",
            D: "机动车行驶证"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶人有下列哪种违法行为一次记6分？",
        options: {
            A: "饮酒后驾驶机动车",
            B: "使用其他车辆行驶证",
            C: "车速超过规定时速50%以上",
            D: "违法占用应急车道行驶"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上倒车、逆行、穿越中央分隔带掉头的一次记6分？",
        options: {
            A: "正确",
            B: "错误",
            C: "视情况而定",
            D: "仅在白天记6分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "车速超过规定时速达到50%的一次记3分？",
        options: {
            A: "正确",
            B: "错误",
            C: "仅在高速公路记3分",
            D: "仅在城市快速路记3分"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶，错过出口时，如果确认后方无来车，可以倒回出口驶离高速公路？",
        options: {
            A: "正确",
            B: "错误",
            C: "在确保安全的情况下可以",
            D: "车速较慢时可以"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车通过漫水路时要加速行驶。",
        options: {
            A: "正确",
            B: "错误",
            C: "水深时加速",
            D: "水浅时加速"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车通过漫水桥，停车观察水情确认安全后，怎样通过？",
        options: {
            A: "挂高速挡快速通过",
            B: "时刻观察水流的变化",
            C: "做好随时停车准备",
            D: "挂低速挡匀速通过"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "机动车在夜间道路上发生故障难以移动时要开启危险报警闪光灯、示廓灯、后位灯。",
        options: {
            A: "正确",
            B: "错误",
            C: "仅开启危险报警闪光灯",
            D: "仅开启示廓灯"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "机动车在紧急制动时ABS系统会起到什么作用？",
        options: {
            A: "缩短制动距离",
            B: "保持转向能力",
            C: "减轻制动惯性",
            D: "自动控制方向"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "安装防抱死制动装置（ABS）的机动车紧急制动时，可用力踏制动踏板。",
        options: {
            A: "正确",
            B: "错误",
            C: "轻踏即可",
            D: "视情况而定"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "夜间驾驶机动车在照明条件良好的路段可以不使用灯光。",
        options: {
            A: "正确",
            B: "错误",
            C: "仅在会车时使用",
            D: "仅在超车时使用"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在没有中心线的道路上遇相对方向来车时怎样行驶？",
        options: {
            A: "减速靠右行驶",
            B: "借非机动车道行驶",
            C: "紧靠路边行驶",
            D: "靠路中心行驶"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在没有交通信号的路口要尽快通过。",
        options: {
            A: "正确",
            B: "错误",
            C: "观察后快速通过",
            D: "确认安全后通过"
        },
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在人行横道上临时停车属于违法行为。",
        options: {
            A: "正确",
            B: "错误",
            C: "仅在白天违法",
            D: "仅在夜间违法"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车遇到前方车辆停车排队等候或缓慢行驶时怎么办？",
        options: {
            A: "可借道超车",
            B: "占用对面车道",
            C: "穿插等候的车辆",
            D: "依次行驶"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度小于50米时，应当开启雾灯、近光灯、示廓灯、前后位灯和危险报警闪光灯，同时将车速控制在每小时20公里以下，并从最近的出口尽快驶离高速公路。",
        options: {
            A: "正确",
            B: "错误",
            C: "仅在夜间需要",
            D: "仅在恶劣天气需要"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度小于100米时，应当开启雾灯、近光灯、示廓灯、前后位灯和危险报警闪光灯，同时与同车道前车保持100米以上的距离。",
        options: {
            A: "正确",
            B: "错误",
            C: "保持50米距离即可",
            D: "保持150米距离"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度小于200米时，应当开启雾灯、近光灯、示廓灯、前后位灯和危险报警闪光灯，同时车速不得超过每小时60公里，与同车道前车保持100米以上的距离。",
        options: {
            A: "正确",
            B: "错误",
            C: "保持50米距离即可",
            D: "车速不得超过每小时80公里"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "机动车在高速公路上发生故障或者交通事故，无法正常行驶的，应当由救援车、清障车拖曳、牵引。",
        options: {
            A: "正确",
            B: "错误",
            C: "可由其他车辆拖曳",
            D: "可由驾驶人自行拖曳"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上长时间骑、轧车行道分界线行驶，会同时占用两个车道，导致后方车辆行驶困难，易引发交通事故。",
        options: {
            A: "正确",
            B: "错误",
            C: "仅在白天危险",
            D: "仅在夜间危险"
        },
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，应当遵守哪些规定？",
        options: {
            A: "开启前照灯、示廓灯和后位灯",
            B: "开启危险报警闪光灯",
            C: "车速不得超过每小时60公里",
            D: "以上都是"
        },
        correctAnswer: ["D"],
        points: 1
    },
    {
        type: "single",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度在200米以上，1000米以下时，应当怎么做？",
        options: {
            A: "开启雾灯、近光灯、示廓灯、前后位灯",
            B: "车速不得超过每小时60公里",
            C: "与同车道前车保持100米以上的距离",
            D: "以上都是"
        },
        correctAnswer: ["D"],
        points: 1
    },

    // 多选题（20道）
    {
        type: "multiple",
        question: "驾驶机动车在道路上发生交通事故后，当事人未报警的，事故现场目击人员和其他知情人员应当怎么办？",
        options: {
            A: "向本单位报告",
            B: "向公安机关交通管理部门举报",
            C: "向执勤的交通警察举报",
            D: "向事故当事人所在地的单位举报"
        },
        correctAnswer: ["B", "C"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，以下做法正确的是什么？",
        options: {
            A: "能见度小于200米时，开启雾灯、近光灯、示廓灯、前后位灯和危险报警闪光灯",
            B: "能见度小于100米时，车速不得超过每小时40公里",
            C: "能见度小于50米时，车速不得超过每小时20公里，并从最近的出口尽快驶离高速公路",
            D: "与同车道前车保持必要的安全距离"
        },
        correctAnswer: ["A", "B", "C", "D"],
        points: 1
    },
    {
        type: "multiple",
        question: "机动车在高速公路上行驶，不得有下列哪些行为？",
        options: {
            A: "倒车、逆行、穿越中央分隔带掉头或者在车道内停车",
            B: "在匝道、加速车道或者减速车道上超车",
            C: "骑、轧车行道分界线或者在路肩上行驶",
            D: "非紧急情况时在应急车道行驶或者停车"
        },
        correctAnswer: ["A", "B", "C", "D"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车不得有下列哪些行为？",
        options: {
            A: "拨打接听手持电话、观看电视等妨碍安全驾驶的行为",
            B: "连续驾驶机动车超过4小时未停车休息或者停车休息时间少于20分钟",
            C: "在禁止鸣喇叭的区域或者路段鸣喇叭",
            D: "向道路上抛撒物品"
        },
        correctAnswer: ["A", "B", "C", "D"],
        points: 1
    },
    {
        type: "multiple",
        question: "下列哪些情形下，不得驾驶机动车？",
        options: {
            A: "饮酒、服用国家管制的精神药品或者麻醉药品",
            B: "患有妨碍安全驾驶机动车的疾病",
            C: "过度疲劳影响安全驾驶的",
            D: "驾驶证丢失、损毁"
        },
        correctAnswer: ["A", "B", "C", "D"],
        points: 1
    },
    {
        type: "multiple",
        question: "机动车通过没有交通信号灯控制也没有交通警察指挥的交叉路口，应当遵守下列哪些规定？",
        options: {
            A: "有交通标志、标线控制的，让优先通行的一方先行",
            B: "没有交通标志、标线控制的，在进入路口前停车瞭望，让右方道路的来车先行",
            C: "转弯的机动车让直行的车辆先行",
            D: "相对方向行驶的右转弯的机动车让左转弯的车辆先行"
        },
        correctAnswer: ["A", "B", "C", "D"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在道路上发生交通事故，车辆驾驶人应当做到哪些？",
        options: {
            A: "立即停车",
            B: "保护现场",
            C: "抢救受伤人员",
            D: "迅速报告执勤的交通警察或者公安机关交通管理部门"
        },
        correctAnswer: ["A", "B", "C", "D"],
        points: 1
    },
    {
        type: "multiple",
        question: "下列哪些行为会被吊销机动车驾驶证？",
        options: {
            A: "饮酒后驾驶机动车被处罚两次以上的",
            B: "醉酒驾驶机动车的",
            C: "饮酒后驾驶营运机动车的",
            D: "造成交通事故后逃逸，构成犯罪的"
        },
        correctAnswer: ["A", "B", "C", "D"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在山区道路下坡路段尽量避免超车，以下说法正确的是什么？",
        options: {
            A: "下坡路段车辆由于重力作用，车速容易过快",
            B: "下坡路段由于重力作用，车辆比平路时操控困难",
            C: "下坡路段车辆阻力很大",
            D: "下坡路段前车车速较快，难以超越"
        },
        correctAnswer: ["A", "B"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车准备进入拥堵的环形路口时，以下做法错误的是什么？",
        options: {
            A: "继续驶入拥堵路口",
            B: "鸣喇叭让路口内的车让行",
            C: "快速驶入路口",
            D: "让路口内的车先行"
        },
        correctAnswer: ["A", "B", "C"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车遇到前方机动车停车排队等候或者缓慢行驶时，可采取的疏导措施是什么？",
        options: {
            A: "穿插等候的车辆",
            B: "占用对面车道",
            C: "依次排队",
            D: "并行通过"
        },
        correctAnswer: ["C"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在高速公路行驶，雨天发生“水滑”现象时，以下做法正确的是什么？",
        options: {
            A: "双手握稳转向盘",
            B: "迅速转向调整",
            C: "逐渐降低车速",
            D: "急踏制动踏板减速"
        },
        correctAnswer: ["A", "C"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度小于50米，以下做法正确的是什么？",
        options: {
            A: "开启雾灯、近光灯、示廓灯、前后位灯和危险报警闪光灯",
            B: "车速不得超过每小时20公里",
            C: "从最近的出口尽快驶离高速公路",
            D: "在应急车道停车等待"
        },
        correctAnswer: ["A", "B", "C"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度小于100米，以下做法正确的是什么？",
        options: {
            A: "开启雾灯、近光灯、示廓灯、前后位灯和危险报警闪光灯",
            B: "车速不得超过每小时40公里",
            C: "与同车道前车保持50米以上的距离",
            D: "从最近的出口尽快驶离高速公路"
        },
        correctAnswer: ["A", "B", "C"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在高速公路上行驶，遇有雾、雨、雪、沙尘、冰雹等低能见度气象条件时，能见度小于200米，以下做法正确的是什么？",
        options: {
            A: "开启雾灯、近光灯、示廓灯、前后位灯和危险报警闪光灯",
            B: "车速不得超过每小时60公里",
            C: "与同车道前车保持100米以上的距离",
            D: "从最近的出口尽快驶离高速公路"
        },
        correctAnswer: ["A", "B", "C"],
        points: 1
    },
    {
        type: "multiple",
        question: "机动车在高速公路上发生故障时，以下做法正确的是什么？",
        options: {
            A: "车上人员应当迅速转移到右侧路肩上或者应急车道内",
            B: "开启危险报警闪光灯",
            C: "在车后150米以外设置警告标志",
            D: "立即报警"
        },
        correctAnswer: ["A", "B", "C", "D"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在道路上超车时，应遵循的原则是什么？",
        options: {
            A: "禁止从左侧超车",
            B: "禁止从右侧超车",
            C: "从前车的左侧超越",
            D: "从右侧超越"
        },
        correctAnswer: ["B", "C"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在夜间会车时，对方一直使用远光灯，以下做法正确的是什么？",
        options: {
            A: "不停变换远近光灯以及鸣喇叭提醒对方",
            B: "视线适当右移，避免直视灯光",
            C: "降低车速，靠右行驶",
            D: "变换远光灯行驶"
        },
        correctAnswer: ["B", "C"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车通过学校门口时应注意什么？",
        options: {
            A: "注意观察标志标线",
            B: "注意减速慢行",
            C: "不要鸣喇叭",
            D: "快速通过"
        },
        correctAnswer: ["A", "B", "C"],
        points: 1
    },
    {
        type: "multiple",
        question: "驾驶机动车在道路上行驶，遇有前方机动车停车排队等候或者缓慢行驶时，不得有下列哪些行为？",
        options: {
            A: "借道超车",
            B: "占用对面车道",
            C: "穿插等候的车辆",
            D: "鸣喇叭催促"
        },
        correctAnswer: ["A", "B", "C", "D"],
        points: 1
    },

    // 判断题（20道）
    {
        type: "judge",
        question: "驾驶机动车在道路上违反道路交通安全法的行为，属于违法行为。",
        correctAnswer: ["A"], // A=正确，B=错误
        points: 1
    },
    {
        type: "judge",
        question: "机动车驾驶人在实习期内驾驶机动车不得牵引挂车。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车在高速公路上倒车、逆行、穿越中央分隔带掉头的，一次记12分。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车不按规定使用灯光的，一次记3分。",
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车在高速公路或者城市快速路上违法占用应急车道行驶的，一次记6分。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车在没有中心线的城市道路上，最高速度不能超过每小时50公里。",
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车在没有中心线的公路上，最高速度不能超过每小时40公里。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车通过铁路道口时，最高速度不能超过每小时30公里。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车通过急弯路时，最高速度不能超过每小时30公里。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车通过窄路、窄桥时，最高速度不能超过每小时50公里。",
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车掉头、转弯、下陡坡时的最高速度不能超过每小时30公里。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车在冰雪道路上行驶时，最高速度不能超过每小时30公里。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车在泥泞道路上行驶时，最高速度不能超过每小时30公里。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车行经人行横道，不按规定减速、停车、避让行人的，一次记3分。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车不按规定会车的，一次记2分。",
        correctAnswer: ["B"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车违反禁令标志、禁止标线指示的，一次记3分。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶机动车在高速公路上行驶低于规定最低时速的，一次记3分。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "机动车驾驶证被暂扣期间驾驶机动车的，一次记6分。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "造成致人轻伤以上或者死亡的交通事故后逃逸，尚不构成犯罪的，一次记12分。",
        correctAnswer: ["A"],
        points: 1
    },
    {
        type: "judge",
        question: "驾驶与准驾车型不符的机动车的，一次记9分。",
        correctAnswer: ["B"],
        points: 1
    }
];