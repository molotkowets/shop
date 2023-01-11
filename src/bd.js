export function bd(x){
    let item = ["blog", "products", "newProducts"]
    for(let i=0; i<item.length; i++){
        if(item[i] === x){
            return( eval(item[i]))   
        }
    }
    
}
// function categories(){
//     let categories = []
//     products.map(item => categories.push(item.id))
//     return categories
// }
const products = [
    {
        id: "0",
        title: "Lira Earrings",
        article: "100-0",
        pictures: {
            main: "101044171-7.2400x2400.jpg",
            additional: [
                "101044171-7_4.2400x2400w.jpg",
                "101044171-7_1.2400x2400w.jpg",
                "101044171-7_2.2400x2400w.jpg",
                "box_free_1.jpg",
                "box_free_2.jpg"
            ]
        },
        price: 67,
        categories: ['Fashion', 'Style'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        AdditionalInformation: {
            Weight:   0.3,
            Dimensions:   "15 x 10 x 1",
            Colors:   "Black, Browns, White",
            Material:   "Metal",
        },
        SKU: 497,
        reviews: [{
            review: "nice",
            email: "email@gmail.com",
            grade:  4
        }]
    },{
        id: "1",
        title: "Hal Earrings",
        pictures: {
            main: "101044171-7.2400x2400.jpg",
            additional: [
                "101044171-7_4.2400x2400w.jpg",
                "101044171-7_1.2400x2400w.jpg",
                "101044171-7_2.2400x2400w.jpg",
                "box_free_1.jpg",
                "box_free_2.jpg"
            ]
        },
        price: 67,
        categories: ['Fashion', 'Style'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        AdditionalInformation: {
            Weight:   0.3,
            Dimensions:   "15 x 10 x 1",
            Colors:   "Black, Browns, White",
            Material:   "Metal",
        },
        SKU: 497,
        reviews: [{
            review: "nice",
            email: "email@gmail.com",
            grade:  4
        }]
    },{
        id: "2",
        title: "Kaede Hair Pin Set Of 3",
        pictures: {
            main: "101044171-7.2400x2400.jpg",
            additional: [
                "101044171-7_4.2400x2400w.jpg",
                "101044171-7_1.2400x2400w.jpg",
                "101044171-7_2.2400x2400w.jpg",
                "box_free_1.jpg",
                "box_free_2.jpg"
            ]
        },
        price: 67,
        categories: ['Fashion', 'Style'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        AdditionalInformation: {
            Weight:   0.3,
            Dimensions:   "15 x 10 x 1",
            Colors:   "Black, Browns, White",
            Material:   "Metal",
        },
        SKU: 497,
        reviews: [{
            review: "nice",
            email: "email@gmail.com",
            grade:  4
        }]
    },{
        id: "3",
        title: "Hair Pin Set of 3",
        pictures: {
            main: "101044171-7.2400x2400.jpg",
            additional: [
                "101044171-7_4.2400x2400w.jpg",
                "101044171-7_1.2400x2400w.jpg",
                "101044171-7_2.2400x2400w.jpg",
                "box_free_1.jpg",
                "box_free_2.jpg"
            ]
        },
        price: 67,
        categories: ['Fashion', 'Style'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        AdditionalInformation: {
            Weight:   0.3,
            Dimensions:   "15 x 10 x 1",
            Colors:   "Black, Browns, White",
            Material:   "Metal",
        },
        SKU: 497,
        reviews: [{
            review: "nice",
            email: "email@gmail.com",
            grade:  4
        }]
    },{
        id: "4",
        title: "Plaine Necklace",
        pictures: {
            main: "101044171-7.2400x2400.jpg",
            additional: [
                "101044171-7_4.2400x2400w.jpg",
                "101044171-7_1.2400x2400w.jpg",
                "101044171-7_2.2400x2400w.jpg",
                "box_free_1.jpg",
                "box_free_2.jpg"
            ]
        },
        price: 67,
        categories: ['Fashion', 'Style'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        AdditionalInformation: {
            Weight:   0.3,
            Dimensions:   "15 x 10 x 1",
            Colors:   "Black, Browns, White",
            Material:   "Metal",
        },
        SKU: 497,
        reviews: [{
            review: "nice",
            email: "email@gmail.com",
            grade:  4
        }]
    },{
        id: "5",
        title: "Yuki Hair Pin Set of 3",
        pictures: {
            main: "101044171-7.2400x2400.jpg",
            additional: [
                "101044171-7_4.2400x2400w.jpg",
                "101044171-7_1.2400x2400w.jpg",
                "101044171-7_2.2400x2400w.jpg",
                "box_free_1.jpg",
                "box_free_2.jpg"
            ]
        },
        price: 67,
        categories: ['Fashion', 'Style'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        AdditionalInformation: {
            Weight:   0.3,
            Dimensions:   "15 x 10 x 1",
            Colors:   "Black, Browns, White",
            Material:   "Metal",
        },
        SKU: 497,
        reviews: [{
            review: "nice",
            email: "email@gmail.com",
            grade:  4
        }]
    },{
        id: "6",
        title: "Yuki Hair Pin Set of 3",
        pictures: {
            main: "101044171-7.2400x2400.jpg",
            additional: [
                "101044171-7_4.2400x2400w.jpg",
                "101044171-7_1.2400x2400w.jpg",
                "101044171-7_2.2400x2400w.jpg",
                "box_free_1.jpg",
                "box_free_2.jpg"
            ]
        },
        price: 67,
        categories: ['Fashion', 'Style'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        AdditionalInformation: {
            Weight:   0.3,
            Dimensions:   "15 x 10 x 1",
            Colors:   "Black, Browns, White",
            Material:   "Metal",
        },
        SKU: 497,
        reviews: [{
            review: "nice",
            email: "email@gmail.com",
            grade:  4
        }]
    },{
        id: "7",
        title: "Yuki Hair Pin Set of 3",
        pictures: {
            main: "101044171-7.2400x2400.jpg",
            additional: [
                "101044171-7_4.2400x2400w.jpg",
                "101044171-7_1.2400x2400w.jpg",
                "101044171-7_2.2400x2400w.jpg",
                "box_free_1.jpg",
                "box_free_2.jpg"
            ]
        },
        price: 67,
        categories: ['Fashion', 'Style'],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.",
        AdditionalInformation: {
            Weight:   0.3,
            Dimensions:   "15 x 10 x 1",
            Colors:   "Black, Browns, White",
            Material:   "Metal",
        },
        SKU: 497,
        reviews: [{
            review: "nice",
            email: "email@gmail.com",
            grade:  4
        }]
    }
]
const blog =[
    {
        id: 1231,
        title: "БИЖУТЕРИЯ СЕРЬГИ , КАК ПОДОБРАТЬ ПОД СВОЙ ТИП ЛИЦА",
        data: "22 февраля 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
        pictures:{
            main: "kak-podobrat-sergi-main.jpg",
            top: "kak-podobrat-sergi-top.jpg",
            additional: ["kak-podobrat-sergi-1.jpg","kak-podobrat-sergi-2.jpg"]
        },
        htmlLayout: <div className='postWrapper'><h1>БИЖУТЕРИЯ СЕРЬГИ , КАК ПОДОБРАТЬ ПОД СВОЙ ТИП ЛИЦА</h1><p>by ANNY JOHNSON - October 8,2020</p><img className='postImgTop' src={'http://localhost:3000/blog/kak-podobrat-sergi-1.png'} alt=""/><div className='postContainer'><p>Серьги – неотъемлемая часть образа, которая никогда не выходит из моды. На сегодняшний день выбор огромен, и каждое украшение манит своим эксклюзивным дизайном, изысканной формой и привлекательными оттенками. Но стоит помнить, что бижутерия призвана подчеркивать внешность и естественную красоту женщины. Поэтому предлагаем узнать о нескольких секретах, которые помогут подобрать идеальные серьги.</p><h2>КАК ВЗАИМОСВЯЗАНЫ СЕРЬГИ И ФОРМА ЛИЦА</h2><span><img className='postImgRight' src={'http://localhost:3000/blog/kak-podobrat-sergi-2.jpg'} alt=""/><p>Форма лица у каждого разная, и этот момент стоит учитывать перед покупкой сережек. Рассмотрим все варианты подробнее.</p><h3>ОВАЛЬНОЕ ЛИЦО</h3><p>В данном случае длина лица в полтора раза больше его ширины. Овал считается эталоном пропорциональной женской внешности. К нему подойдет практически любое украшение. Однако, чтобы визуально еще больше не удлинять лицо, рекомендуем избегать сережки в виде капель и узкие длинные висячие модели. Если хочется выделить скулы, обратите внимание на круглые изделия.</p><h3>КВАДРАТНОЕ ЛИЦО</h3><p>Форма характеризуется угловатыми окончаниями, а лоб и подбородок находятся практически на одном уровне по ширине. В данном случае серьги должны смягчать контуры и слегка вытягивать лицо. Для этой задачи подходят овальные, округлые и вытянутые модели, а также капли. А вот к изделиям с острыми углами не стоит присматриваться.</p><h3>ПРЯМОУГОЛЬНОЕ ЛИЦО</h3><p>По форме оно напоминает овал, только с большей шириной и более жесткими, острыми контурами. Круглые сережки не подойдут, так как визуально расширят лицо. Советуем отдать предпочтение удлиненным серьгам-цепочкам, овальным и треугольным украшениям.</p><h3>КРУГЛОЕ ЛИЦО</h3><p>Такая форма отличается равным по ширине и длине лицом. Необходимо слегка уменьшить щеки и сделать форму более вытянутой. Для этого подходят серьги «перевернутый треугольник», модели с подвесками на конце, квадратные и прямоугольные изделия. Массивная бижутерия у лица не станет удачным выбором.</p><h3>ТРЕУГОЛЬНОЕ ЛИЦО</h3><p>При такой форме самой широкой частью является лоб, а по мере приближения к подбородку лицо сужается. В данном случае рекомендуем подобрать удлиненное украшение, которое будет заканчиваться на уровне подбородка, чтобы зрительно расширить его. Также отлично подойдут серьги-кольца.</p><h3>ГРУШЕВИДНОЕ ЛИЦО</h3><p>Это форма, обратная треугольной, поэтому на подбородке делать акцент не стоит. Лучше остановиться на серьгах-гвоздиках. Они будут смотреться наиболее выигрышно.</p></span><h2>КАКИЕ СЕРЬГИ ВЫБРАТЬ ПОД ЛЮБИМУЮ ПРИЧЕСКУ</h2><ol><li>Высокие прически и пучки. В этом случае подходят длинные и висячие сережки с подвесками или в виде цепочек. Они смотрятся утонченно на фоне открытой шеи.</li><li>Низко собранные волосы. С такой прической стоит присмотреться к серьгам при ухе, а также круглым и длинным изделиям в стиле минимализм.</li><li>Короткие стрижки. Главное правило – серьги должны заканчиваться ниже, чем волосы.</li><li>Кудрявые и объемные прически. Лучше подобрать яркие, но не вычурные украшения, чтобы не создавать лишнего акцента.</li><li>Прямые распущенные волосы. В этом случае подходят все варианты, кроме массивной бижутерии.</li><li>Ассиметричные прически. Предлагаем испробовать тренд: надеть пуссет в одно ушко, а в другое – яркую и крупную серьгу необычной формы.</li></ol><h2>КАК ПОДЧЕРКНУТЬ ЦВЕТ ГЛАЗ С ПОМОЩЬЮ СЕРЕЖЕК</h2><span><img className='postImgLeft' src={'http://localhost:3000/blog/kak-podobrat-sergi-3.jpg'} alt=""/><p>Чтобы подчеркнуть цвет глаз и сделать его ярче, необходимо подбирать оттенок сережек или камня на них, который приближен к цвету глаз или контрастен ему. Есть также два универсальных варианта – жемчужные и перламутровые вставки, которые подходят всем типам внешности.</p><p>Девушкам с голубыми глазами подойдут аксессуары с синими, сиреневыми и голубыми тонами. Если хочется сыграть на контрасте, присмотритесь к сережкам с оранжевыми, желтыми или янтарными деталями.</p><p>Обладательницам зеленых глаз подойдет бирюзовая, изумрудная и салатовая бижутерия, а также все оттенки розового и красного.</p><p>К глазам цвета ореха рекомендуем подобрать янтарные или желто-зеленые, фиолетовые, сиреневые серьги или модель цвета граната.</p><p>Девушкам с темно-карими выразительными глазами стоит подчеркнуть красоту с помощью насыщенных красных, зеленых, синих или золотистых сережек.</p></span><h2>ЛУЧШИЕ СЕРЬГИ В ИНТЕРНЕТ-МАГАЗИНЕ BIJUSVIT</h2><p>В интернет магазине Bijusvit вы можете купить серьги оптом , у нас есть как бижутерия серьги не дорого , так и более дорогие модели – серьги Xuping.</p><p>Огромный выбор хупинг бижутерия , мед золото ксюпинг , xuping медицинское золото.</p><p>В каталоге интернет-магазина Bijusvit представлены эксклюзивные модели сережек с покрытием из золота. Они идеально подойдут к образу выходного дня, на работу, свидание, деловую встречу или мероприятие. Выбирайте и наслаждайтесь покупками.</p><p>Ознакомиться с полным ассортиментом бижутерии Хьюпинг можно по ссылке.</p></div></div>,
        
    },{
        id: 1232,
        title: "ЮВЕЛИРНАЯ БИЖУТЕРИЯ С КРИСТАЛЛАМИ SWAROVSKI – БЛЕСК, СИЯНИЕ И РОСКОШЬ",
        data: "8 февраля 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
        pictures:{
            main: "swarovski-main.jpg",
            top: "swarovski-top.jpg",
            additional: ["swarovski-1.jpg","swarovski-2.jpg","swarovski-3.jpg"]
        },
         htmlLayout: <div className='postWrapper'><h1>БИЖУТЕРИЯ СЕРЬГИ , КАК ПОДОБРАТЬ ПОД СВОЙ ТИП ЛИЦА</h1><p>by ANNY JOHNSON - October 8,2020</p><img className='postImgTop' src={'http://localhost:3000/blog/kak-podobrat-sergi-1.png'} alt=""/><div className='postContainer'><p>Серьги – неотъемлемая часть образа, которая никогда не выходит из моды. На сегодняшний день выбор огромен, и каждое украшение манит своим эксклюзивным дизайном, изысканной формой и привлекательными оттенками. Но стоит помнить, что бижутерия призвана подчеркивать внешность и естественную красоту женщины. Поэтому предлагаем узнать о нескольких секретах, которые помогут подобрать идеальные серьги.</p><h2>КАК ВЗАИМОСВЯЗАНЫ СЕРЬГИ И ФОРМА ЛИЦА</h2><span><img className='postImgRight' src={'http://localhost:3000/blog/kak-podobrat-sergi-2.jpg'} alt=""/><p>Форма лица у каждого разная, и этот момент стоит учитывать перед покупкой сережек. Рассмотрим все варианты подробнее.</p><h3>ОВАЛЬНОЕ ЛИЦО</h3><p>В данном случае длина лица в полтора раза больше его ширины. Овал считается эталоном пропорциональной женской внешности. К нему подойдет практически любое украшение. Однако, чтобы визуально еще больше не удлинять лицо, рекомендуем избегать сережки в виде капель и узкие длинные висячие модели. Если хочется выделить скулы, обратите внимание на круглые изделия.</p><h3>КВАДРАТНОЕ ЛИЦО</h3><p>Форма характеризуется угловатыми окончаниями, а лоб и подбородок находятся практически на одном уровне по ширине. В данном случае серьги должны смягчать контуры и слегка вытягивать лицо. Для этой задачи подходят овальные, округлые и вытянутые модели, а также капли. А вот к изделиям с острыми углами не стоит присматриваться.</p><h3>ПРЯМОУГОЛЬНОЕ ЛИЦО</h3><p>По форме оно напоминает овал, только с большей шириной и более жесткими, острыми контурами. Круглые сережки не подойдут, так как визуально расширят лицо. Советуем отдать предпочтение удлиненным серьгам-цепочкам, овальным и треугольным украшениям.</p><h3>КРУГЛОЕ ЛИЦО</h3><p>Такая форма отличается равным по ширине и длине лицом. Необходимо слегка уменьшить щеки и сделать форму более вытянутой. Для этого подходят серьги «перевернутый треугольник», модели с подвесками на конце, квадратные и прямоугольные изделия. Массивная бижутерия у лица не станет удачным выбором.</p><h3>ТРЕУГОЛЬНОЕ ЛИЦО</h3><p>При такой форме самой широкой частью является лоб, а по мере приближения к подбородку лицо сужается. В данном случае рекомендуем подобрать удлиненное украшение, которое будет заканчиваться на уровне подбородка, чтобы зрительно расширить его. Также отлично подойдут серьги-кольца.</p><h3>ГРУШЕВИДНОЕ ЛИЦО</h3><p>Это форма, обратная треугольной, поэтому на подбородке делать акцент не стоит. Лучше остановиться на серьгах-гвоздиках. Они будут смотреться наиболее выигрышно.</p></span><h2>КАКИЕ СЕРЬГИ ВЫБРАТЬ ПОД ЛЮБИМУЮ ПРИЧЕСКУ</h2><ol><li>Высокие прически и пучки. В этом случае подходят длинные и висячие сережки с подвесками или в виде цепочек. Они смотрятся утонченно на фоне открытой шеи.</li><li>Низко собранные волосы. С такой прической стоит присмотреться к серьгам при ухе, а также круглым и длинным изделиям в стиле минимализм.</li><li>Короткие стрижки. Главное правило – серьги должны заканчиваться ниже, чем волосы.</li><li>Кудрявые и объемные прически. Лучше подобрать яркие, но не вычурные украшения, чтобы не создавать лишнего акцента.</li><li>Прямые распущенные волосы. В этом случае подходят все варианты, кроме массивной бижутерии.</li><li>Ассиметричные прически. Предлагаем испробовать тренд: надеть пуссет в одно ушко, а в другое – яркую и крупную серьгу необычной формы.</li></ol><h2>КАК ПОДЧЕРКНУТЬ ЦВЕТ ГЛАЗ С ПОМОЩЬЮ СЕРЕЖЕК</h2><span><img className='postImgLeft' src={'http://localhost:3000/blog/kak-podobrat-sergi-3.jpg'} alt=""/><p>Чтобы подчеркнуть цвет глаз и сделать его ярче, необходимо подбирать оттенок сережек или камня на них, который приближен к цвету глаз или контрастен ему. Есть также два универсальных варианта – жемчужные и перламутровые вставки, которые подходят всем типам внешности.</p><p>Девушкам с голубыми глазами подойдут аксессуары с синими, сиреневыми и голубыми тонами. Если хочется сыграть на контрасте, присмотритесь к сережкам с оранжевыми, желтыми или янтарными деталями.</p><p>Обладательницам зеленых глаз подойдет бирюзовая, изумрудная и салатовая бижутерия, а также все оттенки розового и красного.</p><p>К глазам цвета ореха рекомендуем подобрать янтарные или желто-зеленые, фиолетовые, сиреневые серьги или модель цвета граната.</p><p>Девушкам с темно-карими выразительными глазами стоит подчеркнуть красоту с помощью насыщенных красных, зеленых, синих или золотистых сережек.</p></span><h2>ЛУЧШИЕ СЕРЬГИ В ИНТЕРНЕТ-МАГАЗИНЕ BIJUSVIT</h2><p>В интернет магазине Bijusvit вы можете купить серьги оптом , у нас есть как бижутерия серьги не дорого , так и более дорогие модели – серьги Xuping.</p><p>Огромный выбор хупинг бижутерия , мед золото ксюпинг , xuping медицинское золото.</p><p>В каталоге интернет-магазина Bijusvit представлены эксклюзивные модели сережек с покрытием из золота. Они идеально подойдут к образу выходного дня, на работу, свидание, деловую встречу или мероприятие. Выбирайте и наслаждайтесь покупками.</p><p>Ознакомиться с полным ассортиментом бижутерии Хьюпинг можно по ссылке.</p></div></div>,
       
    },{
        id: 1232,
        title: "ЮВЕЛИРНАЯ БИЖУТЕРИЯ С КРИСТАЛЛАМИ SWAROVSKI – БЛЕСК, СИЯНИЕ И РОСКОШЬ",
        data: "8 февраля 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
        pictures:{
            main: "swarovski-main.jpg",
            top: "swarovski-top.jpg",
            additional: ["swarovski-1.jpg","swarovski-2.jpg","swarovski-3.jpg"]
        },
         htmlLayout: <div className='postWrapper'><h1>БИЖУТЕРИЯ СЕРЬГИ , КАК ПОДОБРАТЬ ПОД СВОЙ ТИП ЛИЦА</h1><p>by ANNY JOHNSON - October 8,2020</p><img className='postImgTop' src={'http://localhost:3000/blog/kak-podobrat-sergi-1.png'} alt=""/><div className='postContainer'><p>Серьги – неотъемлемая часть образа, которая никогда не выходит из моды. На сегодняшний день выбор огромен, и каждое украшение манит своим эксклюзивным дизайном, изысканной формой и привлекательными оттенками. Но стоит помнить, что бижутерия призвана подчеркивать внешность и естественную красоту женщины. Поэтому предлагаем узнать о нескольких секретах, которые помогут подобрать идеальные серьги.</p><h2>КАК ВЗАИМОСВЯЗАНЫ СЕРЬГИ И ФОРМА ЛИЦА</h2><span><img className='postImgRight' src={'http://localhost:3000/blog/kak-podobrat-sergi-2.jpg'} alt=""/><p>Форма лица у каждого разная, и этот момент стоит учитывать перед покупкой сережек. Рассмотрим все варианты подробнее.</p><h3>ОВАЛЬНОЕ ЛИЦО</h3><p>В данном случае длина лица в полтора раза больше его ширины. Овал считается эталоном пропорциональной женской внешности. К нему подойдет практически любое украшение. Однако, чтобы визуально еще больше не удлинять лицо, рекомендуем избегать сережки в виде капель и узкие длинные висячие модели. Если хочется выделить скулы, обратите внимание на круглые изделия.</p><h3>КВАДРАТНОЕ ЛИЦО</h3><p>Форма характеризуется угловатыми окончаниями, а лоб и подбородок находятся практически на одном уровне по ширине. В данном случае серьги должны смягчать контуры и слегка вытягивать лицо. Для этой задачи подходят овальные, округлые и вытянутые модели, а также капли. А вот к изделиям с острыми углами не стоит присматриваться.</p><h3>ПРЯМОУГОЛЬНОЕ ЛИЦО</h3><p>По форме оно напоминает овал, только с большей шириной и более жесткими, острыми контурами. Круглые сережки не подойдут, так как визуально расширят лицо. Советуем отдать предпочтение удлиненным серьгам-цепочкам, овальным и треугольным украшениям.</p><h3>КРУГЛОЕ ЛИЦО</h3><p>Такая форма отличается равным по ширине и длине лицом. Необходимо слегка уменьшить щеки и сделать форму более вытянутой. Для этого подходят серьги «перевернутый треугольник», модели с подвесками на конце, квадратные и прямоугольные изделия. Массивная бижутерия у лица не станет удачным выбором.</p><h3>ТРЕУГОЛЬНОЕ ЛИЦО</h3><p>При такой форме самой широкой частью является лоб, а по мере приближения к подбородку лицо сужается. В данном случае рекомендуем подобрать удлиненное украшение, которое будет заканчиваться на уровне подбородка, чтобы зрительно расширить его. Также отлично подойдут серьги-кольца.</p><h3>ГРУШЕВИДНОЕ ЛИЦО</h3><p>Это форма, обратная треугольной, поэтому на подбородке делать акцент не стоит. Лучше остановиться на серьгах-гвоздиках. Они будут смотреться наиболее выигрышно.</p></span><h2>КАКИЕ СЕРЬГИ ВЫБРАТЬ ПОД ЛЮБИМУЮ ПРИЧЕСКУ</h2><ol><li>Высокие прически и пучки. В этом случае подходят длинные и висячие сережки с подвесками или в виде цепочек. Они смотрятся утонченно на фоне открытой шеи.</li><li>Низко собранные волосы. С такой прической стоит присмотреться к серьгам при ухе, а также круглым и длинным изделиям в стиле минимализм.</li><li>Короткие стрижки. Главное правило – серьги должны заканчиваться ниже, чем волосы.</li><li>Кудрявые и объемные прически. Лучше подобрать яркие, но не вычурные украшения, чтобы не создавать лишнего акцента.</li><li>Прямые распущенные волосы. В этом случае подходят все варианты, кроме массивной бижутерии.</li><li>Ассиметричные прически. Предлагаем испробовать тренд: надеть пуссет в одно ушко, а в другое – яркую и крупную серьгу необычной формы.</li></ol><h2>КАК ПОДЧЕРКНУТЬ ЦВЕТ ГЛАЗ С ПОМОЩЬЮ СЕРЕЖЕК</h2><span><img className='postImgLeft' src={'http://localhost:3000/blog/kak-podobrat-sergi-3.jpg'} alt=""/><p>Чтобы подчеркнуть цвет глаз и сделать его ярче, необходимо подбирать оттенок сережек или камня на них, который приближен к цвету глаз или контрастен ему. Есть также два универсальных варианта – жемчужные и перламутровые вставки, которые подходят всем типам внешности.</p><p>Девушкам с голубыми глазами подойдут аксессуары с синими, сиреневыми и голубыми тонами. Если хочется сыграть на контрасте, присмотритесь к сережкам с оранжевыми, желтыми или янтарными деталями.</p><p>Обладательницам зеленых глаз подойдет бирюзовая, изумрудная и салатовая бижутерия, а также все оттенки розового и красного.</p><p>К глазам цвета ореха рекомендуем подобрать янтарные или желто-зеленые, фиолетовые, сиреневые серьги или модель цвета граната.</p><p>Девушкам с темно-карими выразительными глазами стоит подчеркнуть красоту с помощью насыщенных красных, зеленых, синих или золотистых сережек.</p></span><h2>ЛУЧШИЕ СЕРЬГИ В ИНТЕРНЕТ-МАГАЗИНЕ BIJUSVIT</h2><p>В интернет магазине Bijusvit вы можете купить серьги оптом , у нас есть как бижутерия серьги не дорого , так и более дорогие модели – серьги Xuping.</p><p>Огромный выбор хупинг бижутерия , мед золото ксюпинг , xuping медицинское золото.</p><p>В каталоге интернет-магазина Bijusvit представлены эксклюзивные модели сережек с покрытием из золота. Они идеально подойдут к образу выходного дня, на работу, свидание, деловую встречу или мероприятие. Выбирайте и наслаждайтесь покупками.</p><p>Ознакомиться с полным ассортиментом бижутерии Хьюпинг можно по ссылке.</p></div></div>,
       
    },{
        id: 1232,
        title: "ЮВЕЛИРНАЯ БИЖУТЕРИЯ С КРИСТАЛЛАМИ SWAROVSKI – БЛЕСК, СИЯНИЕ И РОСКОШЬ",
        data: "8 февраля 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.",
        pictures:{
            main: "swarovski-main.jpg",
            top: "swarovski-top.jpg",
            additional: ["swarovski-1.jpg","swarovski-2.jpg","swarovski-3.jpg"]
        },
         htmlLayout: <div className='postWrapper'><h1>БИЖУТЕРИЯ СЕРЬГИ , КАК ПОДОБРАТЬ ПОД СВОЙ ТИП ЛИЦА</h1><p>by ANNY JOHNSON - October 8,2020</p><img className='postImgTop' src={'http://localhost:3000/blog/kak-podobrat-sergi-1.png'} alt=""/><div className='postContainer'><p>Серьги – неотъемлемая часть образа, которая никогда не выходит из моды. На сегодняшний день выбор огромен, и каждое украшение манит своим эксклюзивным дизайном, изысканной формой и привлекательными оттенками. Но стоит помнить, что бижутерия призвана подчеркивать внешность и естественную красоту женщины. Поэтому предлагаем узнать о нескольких секретах, которые помогут подобрать идеальные серьги.</p><h2>КАК ВЗАИМОСВЯЗАНЫ СЕРЬГИ И ФОРМА ЛИЦА</h2><span><img className='postImgRight' src={'http://localhost:3000/blog/kak-podobrat-sergi-2.jpg'} alt=""/><p>Форма лица у каждого разная, и этот момент стоит учитывать перед покупкой сережек. Рассмотрим все варианты подробнее.</p><h3>ОВАЛЬНОЕ ЛИЦО</h3><p>В данном случае длина лица в полтора раза больше его ширины. Овал считается эталоном пропорциональной женской внешности. К нему подойдет практически любое украшение. Однако, чтобы визуально еще больше не удлинять лицо, рекомендуем избегать сережки в виде капель и узкие длинные висячие модели. Если хочется выделить скулы, обратите внимание на круглые изделия.</p><h3>КВАДРАТНОЕ ЛИЦО</h3><p>Форма характеризуется угловатыми окончаниями, а лоб и подбородок находятся практически на одном уровне по ширине. В данном случае серьги должны смягчать контуры и слегка вытягивать лицо. Для этой задачи подходят овальные, округлые и вытянутые модели, а также капли. А вот к изделиям с острыми углами не стоит присматриваться.</p><h3>ПРЯМОУГОЛЬНОЕ ЛИЦО</h3><p>По форме оно напоминает овал, только с большей шириной и более жесткими, острыми контурами. Круглые сережки не подойдут, так как визуально расширят лицо. Советуем отдать предпочтение удлиненным серьгам-цепочкам, овальным и треугольным украшениям.</p><h3>КРУГЛОЕ ЛИЦО</h3><p>Такая форма отличается равным по ширине и длине лицом. Необходимо слегка уменьшить щеки и сделать форму более вытянутой. Для этого подходят серьги «перевернутый треугольник», модели с подвесками на конце, квадратные и прямоугольные изделия. Массивная бижутерия у лица не станет удачным выбором.</p><h3>ТРЕУГОЛЬНОЕ ЛИЦО</h3><p>При такой форме самой широкой частью является лоб, а по мере приближения к подбородку лицо сужается. В данном случае рекомендуем подобрать удлиненное украшение, которое будет заканчиваться на уровне подбородка, чтобы зрительно расширить его. Также отлично подойдут серьги-кольца.</p><h3>ГРУШЕВИДНОЕ ЛИЦО</h3><p>Это форма, обратная треугольной, поэтому на подбородке делать акцент не стоит. Лучше остановиться на серьгах-гвоздиках. Они будут смотреться наиболее выигрышно.</p></span><h2>КАКИЕ СЕРЬГИ ВЫБРАТЬ ПОД ЛЮБИМУЮ ПРИЧЕСКУ</h2><ol><li>Высокие прически и пучки. В этом случае подходят длинные и висячие сережки с подвесками или в виде цепочек. Они смотрятся утонченно на фоне открытой шеи.</li><li>Низко собранные волосы. С такой прической стоит присмотреться к серьгам при ухе, а также круглым и длинным изделиям в стиле минимализм.</li><li>Короткие стрижки. Главное правило – серьги должны заканчиваться ниже, чем волосы.</li><li>Кудрявые и объемные прически. Лучше подобрать яркие, но не вычурные украшения, чтобы не создавать лишнего акцента.</li><li>Прямые распущенные волосы. В этом случае подходят все варианты, кроме массивной бижутерии.</li><li>Ассиметричные прически. Предлагаем испробовать тренд: надеть пуссет в одно ушко, а в другое – яркую и крупную серьгу необычной формы.</li></ol><h2>КАК ПОДЧЕРКНУТЬ ЦВЕТ ГЛАЗ С ПОМОЩЬЮ СЕРЕЖЕК</h2><span><img className='postImgLeft' src={'http://localhost:3000/blog/kak-podobrat-sergi-3.jpg'} alt=""/><p>Чтобы подчеркнуть цвет глаз и сделать его ярче, необходимо подбирать оттенок сережек или камня на них, который приближен к цвету глаз или контрастен ему. Есть также два универсальных варианта – жемчужные и перламутровые вставки, которые подходят всем типам внешности.</p><p>Девушкам с голубыми глазами подойдут аксессуары с синими, сиреневыми и голубыми тонами. Если хочется сыграть на контрасте, присмотритесь к сережкам с оранжевыми, желтыми или янтарными деталями.</p><p>Обладательницам зеленых глаз подойдет бирюзовая, изумрудная и салатовая бижутерия, а также все оттенки розового и красного.</p><p>К глазам цвета ореха рекомендуем подобрать янтарные или желто-зеленые, фиолетовые, сиреневые серьги или модель цвета граната.</p><p>Девушкам с темно-карими выразительными глазами стоит подчеркнуть красоту с помощью насыщенных красных, зеленых, синих или золотистых сережек.</p></span><h2>ЛУЧШИЕ СЕРЬГИ В ИНТЕРНЕТ-МАГАЗИНЕ BIJUSVIT</h2><p>В интернет магазине Bijusvit вы можете купить серьги оптом , у нас есть как бижутерия серьги не дорого , так и более дорогие модели – серьги Xuping.</p><p>Огромный выбор хупинг бижутерия , мед золото ксюпинг , xuping медицинское золото.</p><p>В каталоге интернет-магазина Bijusvit представлены эксклюзивные модели сережек с покрытием из золота. Они идеально подойдут к образу выходного дня, на работу, свидание, деловую встречу или мероприятие. Выбирайте и наслаждайтесь покупками.</p><p>Ознакомиться с полным ассортиментом бижутерии Хьюпинг можно по ссылке.</p></div></div>,
       
    }
]
const newProducts = {
    earrings:[
        {
            id: "00",
            quantity: 15,
            subcategory: ["з камнями", "сережки - кільця"],
            title: "Срібні сережки - кільця (фіаніти)",
            material: "срібло",
            article: "OR116411",
            pictures: {
                main: "fl12x53b5r1ipbfbmofjvle9hu5zsfw2.jpg",
                additional: [
                    "lgqz2upxjks0v15bibbu8cxfpyg45eq9.jpg",
                ]
            },
            description:{
                price: 1040,
                weight: "2.33",
                material: "Срібло 925",
                insert: "Фіаніт",
                coating: "Родіювання",
                information: [
                    
                ]
            },
            feedback:[
                {
                    data: "6 May, 2020",
                    userName: "name",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "text",
                    assessment: 4,
                }
            ]
        },{
            id: "01",
            quantity: 12,
            subcategory: ["з камнями","пусети", "сережки - кільця"],
            title: "Срібні сережки - пусети \"Кругообіг\" (чорні фіаніти)",
            material: "срібло",
            article: "064510",
            pictures: {
                main: "kx2pqodi90sa6ynn9nu7ng1mm8htyt7c.jpg",
                additional: [
                    "a2t0s8uqwx2mw38jdlcgeat38jcp82ur.jpg",
                ]
            },
            description:{
                price: 960,
                weight: "2.12",
                material: "Срібло 925",
                insert: "Фіаніт",
                coating: "Родіювання",
                information: [
                    
                ]
            },
            feedback:[
                {
                    data: "6 May, 2020",
                    userName: "name",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "text",
                    assessment: 4,
                }
            ]
        },{
            id: "02",
            quantity: 21,
            subcategory: ["з камнями", "джекети"],
            title: "Срібні сережки - джекети з фіанітами",
            material: "срібло",
            article: "902-01125",
            pictures: {
                main: "1hewqqihiuzg65i3ebl2v0k52hux4t82.jpg",
                additional: [
                    "gim53v2f7c4s3dtbmk2jv4g815nvxt9s.jpg",
                    "fqtaewgs78stq4pnp2aqfp2egry72592.jpg"
                ]
            },
            description:{
                price: 1240,
                weight: "2.75",
                material: "Срібло 925",
                insert: "Фіаніт",
                coating: "Родіювання",
                information: [
                    
                ]
            },
            feedback:[
                {
                    data: "6 May, 2020",
                    userName: "name",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "text",
                    assessment: 4,
                }
            ]
        },{
            id: "03",
            quantity: 5,
            subcategory: ["з камнями", "пусети"],
            title: "Сережки-пусети (культ. прісн. перли) 7 мм",
            material: "срібло",
            article: "121029",
            pictures: {
                main: "16c167f8f59fc5c9828c3f575f8eefbf.jpg",
                additional: [
                    "04sr9tukk5oi12s0cy3x2uvhbfbmh8se.jpg",
                    "2lqthz1pbc18ba3xdsvfoaa4jbpzxhrc.jpg",
                    "2c81d7ecdc3d8ce97feffe74b75fd2d4.jpg",
                    "22gcg6wdwi1nqz2pdyfn5ldbd30o5sir.jpg",
                    "84b8ca776ab88d69ee6b824669202e17.jpg",
                    "817c43d5f8855dc32333d64f467cfb9e.jpg",
                    "890cbf664ac769f85651c6f7c2a9fc26.jpg",
                    "akd4kw938p59keosg8s8dp0swb9pphbl.jpg",
                    "f636018580c92a2034afc8323ff08e88.jpg"

                ]
            },
            description:{
                price: 680,
                weight: "1.5",
                material: "Срібло 925",
                insert: "Перли (натуральні)",
                coating: "без покриття",
                information: [
                    {
                        key: "Розмір каменя, см:",
                        value: "0.7"
                    }
                ]
            },
            feedback:[
                {
                    data: "07 травня 2022",
                    userName: "Олена",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "Красивые и качественные. Ничего лишнего. Размер жемчужины вроде как на фото, мне подходит, больше не надо. Я очень довольна. Спасибо, Оникс!",
                    assessment: 5,
                },{
                    data: "23 грудня 2021",
                    userName: "Любов",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "Красивые и качественные. Ничего лишнего. Размер жемчужины вроде как на фото, мне подходит, больше не надо. Я очень довольна. Спасибо, Оникс!",
                    assessment: 5,
                }
            ]
        },{
            id: "04",
            quantity: 18,
            subcategory: ["з камнями", "протяжки", "Клевер"],
            title: "Срібні сережки - протяжки \"Клевер\" з оніксом",
            material: "срібло",
            article: "123173",
            pictures: {
                main: "p6f7lp9ai20jiew6s8viwe59m5x9iaqk.jpg",
                additional: [
                    "cuhltds7u6cgcf6xjby46iz6s9kzsjly.jpg",
                    "karxtv4kzbn733h36ce643kjdvirdd59.jpg",
                    "h75hbua2zj63lgg2x0hhzc7fahurjsux.jpg"

                ]
            },
            description:{
                price: 740,
                weight: "1.4",
                material: "Срібло 925\"",
                insert: "Онікс",
                coating: "Родіювання",
                information: [
                    {
                        key: "Діаметр, см:",
                        value: "0.7"
                    },
                    {
                        key: "Висота, см:",
                        value: "6.1"
                    }
                ]
            },
            feedback:[
                {
                    data: "26 грудня 2022",
                    userName: "Алла",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "Дуже гарні та якісні. Рекомендував! Доставка оперативна. Не перший раз зпмовляю в даному магазині і завжди все на високому рівні",
                    assessment: 5,
                }
            ]
        },{
            id: "05",
            quantity: 18,
            subcategory: ["без каменів", "джекети",],
            title: "Сережки - джекети \"Фріда\" у червоному золоті",
            material: "золото",
            article: "с07954",
            pictures: {
                main: "8r2gg6wjudp2i55ugod54l5au3jmy1og.jpg",
                additional: [
                    "6k9loiodwg1srw66i0hknpr3ipej0eqx.jpg",
                    "uz71pg5qsueu8lm5dqor7ccmwp0rfej2.jpg",
                    "4bybbegv971opwhc0mf2qivndob1a2fa.jpg",
                    "201n943nxe8zed9e9p7eae10g3cwhvdz.jpg"

                ]
            },
            description:{
                price: 14740,
                weight: "4.32",
                material: "Червоне золото 585\"",
                insert: "Без каменів",
                coating: "Без покриття",
                information: [
                    {
                        key: "Ширина, см:",
                        value: "1.6"
                    },
                    {
                        key: "Діаметр, см:",
                        value: "0.5"
                    },
                    {
                        key: "Висота, см:",
                        value: "1.5"
                    }
                ]
            },
            feedback:[
                {
                    data: "26 грудня 2022",
                    userName: "Алла",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "Дуже гарні та якісні. Рекомендував! Доставка оперативна. Не перший раз зпмовляю в даному магазині і завжди все на високому рівні",
                    assessment: 5,
                }
            ]
        },{
            id: "06",
            quantity: 9,
            subcategory: ["з камнями", "клевер", "протяжки"],
            title: "Золоті сережки - протяжки \"Клевер\" з перламутром",
            material: "золото",
            article: "с08149",
            pictures: {
                main: "5hv80vfy8wmjkuejnh5s8di5teuiaash.jpg",
                additional: [
                    "leiu8ek9jcaonpspkaq9giqm4ilmaqao.jpg",
                ]
            },
            description:{
                price: 4610,
                weight: "1.35",
                material: "Червоне золото 585\"",
                insert: "Перламутр",
                coating: "Без покриття",
                information: [
                    
                ]
            },
            feedback:[
                
            ]
        },{
            id: "07",
            quantity: 13,
            subcategory: ["без каменів", "сережки - кільця"],
            title: "Золоті сережки - протяжки \"Клевер\" з перламутром",
            material: "золото",
            article: "с04413",
            pictures: {
                main: "c78dd0c1656ecc5319ce25b8040eb439.jpg",
                additional: [
                    "daceaaa664ce5ff9f417beba9c5452f1.jpg",
                    "8176v6414son63lkt0u30o9dndurwwl7.jpg"
                ]
            },
            description:{
                price: 5020,
                weight: "1.47",
                material: "Жовте золото 585\"",
                insert: "Без каменів",
                coating: "",
                information: [
                    {
                        kay: "Висота, см:",
                        value: "1.9"
                    },
                    {
                        key: "Розмір, см:",
                        value: "0.6 х 0.5"
                    }
                    
                ]
            },
            feedback:[
                
            ]
        },
    ],
    rings:[
        {
            id: "10",
            quantity: 7,
            subcategory: ["з камнями", "заручальні каблучки"],
            title: "Золота заручальна каблучка \"Я кохаю тебе\" з фіанітами",
            material: "золото",
            article: "к06640",
            pictures: {
                main: "b285c44712fb67589bb8cc424b2377d2.jpg",
                additional: [
                    "5f78a71da86b25317283a5243006d962.jpg",
                    "5e5f1368804b4593f8c2edb983f446c5.jpg",
                    "005163dbc164d8c4697fd5c00352d5a0.jpg"
                ]
            },
            size:[
                "15.5",
                "16",
                "16.5",
                "17",
                "17.5",
                "18"
            ],
            description:{
                price: 7520,
                weight: "2.02",
                material: "Червоне золото 585\"",
                insert: "Фіаніт",
                coating: "Без покриття",
                information: [
                    {
                        kay: "Розмір каменя, см:",
                        value: "0.4"
                    }
                ]
            },
            feedback:[
                {
                    data: "31 жовтня 2022",
                    userName: "Віталій",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "Можливо виконати в 18 розмірі?!",
                    assessment: 4,
                }
            ]
        },{
            id: "11",
            quantity: 3,
            subcategory: ["з камнями", "заручальні каблучки"],
            title: "Помолвочное золотое кольцо с фианитом",
            material: "золото",
            article: "к06432",
            pictures: {
                main: "hwpqwsx42q8o6thcj773q1htr1nr1fgm.jpg",
                additional: [
                    "cwva7n1152pq3jb7skni2y31ey67tx4h.jpg",
                    "dvxjton8bdm4qs4wtl0g1fbtf0hh7iqe.jpg",
                    "90ir0dnjrttviopnhcdh9h8pbfx9yhbo.jpg"
                ]
            },
            size:[
                "16",
                "16.5",
                "17",
                "17.5",
                "18",
                "18.5",
                "19"
            ],
            description:{
                price: 6040,
                weight: "1.77",
                material: "Красное золото 585\"",
                insert: "Фіаніт",
                coating: "Без покриття",
                information: [
                    {
                        kay: "Ширина, см:",
                        value: "0.3"
                    },{
                        kay: "Размер камня, см:",
                        value: "0.5"
                    }
                ]
            },
            feedback:[
                
            ]
        },{
            id: "12",
            quantity: 16,
            subcategory: ["з камнями", "заручальні каблучки"],
            title: "Заручальна срібна каблучка з фіанітом",
            material: "срібло",
            article: "643",
            pictures: {
                main: "9cg3wsemju2ghwgfsed9771mcuoau0lz.jpg",
                additional: [
                    "wsj4uqkmulucpkq3ipaek8ae7sa71o01.jpg",
                    "qv7n7w0ewc6z1t9sicz98lmuag5box5r.jpg",
                    "fjrppwxoeodmt7r8jj415slatwkh5r1j.jpg"
                ]
            },
            size:[
                "15",
                "15.5",
                "16",
                "16.5",
                "17",
            ],
            description:{
                price: 1000,
                weight: "1.13",
                material: "Срібло 925\"",
                insert: "Фіаніт",
                coating: "Родіювання",
                information: [
                    {
                        kay: "Розмір каменя, см:",
                        value: "0.4"
                    }
                ]
            },
            feedback:[
                {
                    data: "31 жовтня 2022",
                    userName: "Віталій",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "Можливо виконати в 18 розмірі?!",
                    assessment: 4,
                }
            ]
        },{
            id: "13",
            quantity: 4,
            subcategory: ["діаманти"],
            title: "Золота каблучка з чорним і білими діамантами",
            material: "золото",
            article: "229581122",
            pictures: {
                main: "tvdfcz4t9jdkxc3czf8i4iheryk9bu6i.jpg",
                additional: [
                    "p60001dj73x04z5mk6xmi31dgss154em.jpg",
                    "oqvm420rzgw7t9eoe0ozi7lgi7gm20aj.jpg",
                    "jfm5s39dblrsrcamh6z5lxtycny6vb7r.jpg"
                ]
            },
            size:[
                "15",
                "15.5",
                "16",
                "16.5",
                "17",
                "17.5",
                "18",
                "18.5",
                "19"
            ],
            description:{
                price: 55200,
                weight: "2.4",
                material: "Біле золото 585\"",
                insert: "Діамант",
                coating: "Родіювання",
                information: [
                    {
                        kay: "Розмір каменя, см:",
                        value: "0.4"
                    }
                ]
            },
            feedback:[
                
            ]
        },{
            id: "14",
            quantity: 8,
            subcategory: ["діаманти"],
            title: "Золотое кольцо с белыми и черными бриллиантами",
            material: "золото",
            article: "кб0471di",
            pictures: {
                main: "6aw8gnzt0clashhowrn9dzx1pkha1bf6.jpg",
                additional: [
                    "dlftrmu9995jr92b18a6gkhbmucdp9qd.jpg",
                    "co411gt3kb86t24hjqqj9ufpienyt29e.jpg",
                ]
            },
            size:[
                "18",
            ],
            description:{
                price: 50470,
                weight: "2.1",
                material: "Белое золото 585\"",
                insert: "Діамант",
                coating: "Родіювання",
                information: [
                    {
                        kay: "Розмір каменя, см:",
                        value: "0.4"
                    }
                ]
            },
            feedback:[
                
            ]
        },{
            id: "15",
            quantity: 9,
            subcategory: ["каблучка на фалангу", "без каменів"],
            title: "Срібна каблучка \"Змій Уроборос\"",
            material: "срібло",
            article: "112553",
            pictures: {
                main: "0bqksle822r6idsv9pmqfmth7rp6ug2f.jpg",
                additional: [
                    "6oowhayaxzr4u3gkxfhqnegormiyjk1u.jpg",
                    "o0iaql87lnqqhkl3u2wuccwxjkg11ht4.jpg",
                    "2pnihnywlcqp85ltybv88rrrm7hsb1e4.jpg",
                    "tnmeosoz45t0nv1sym1e8mir1eu8b9v7.jpg",
                    "mo1lam8b7wgzbbpy1hompynzs29aciss.jpg",
                    "bsinq4j3uvkc1nrk887n2pp2ba6gh1lm.jpg",
                    "0594srpesgu7zpmyn5pb7408w27rzae9.jpg",
                    "khcwxy1gsrjrfp0q1cgdcu6lv34eckfn.jpg"
                ]
            },
            size:[
                "14.5",
                "15",
                "15.5",
                "16",
                "16.5",
                "17.5",
                "18",
                "18.5",
                "19"
            ],
            description:{
                price: 1200,
                weight: "2.4",
                material: "Срібло 925\"",
                insert: "Без каменів",
                coating: "Чорніння",
                information: [
                    {
                        kay: "Розмір каменя, см:",
                        value: "0.4"
                    }
                ]
            },
            feedback:[
                
            ]
        },{
            id: "16",
            quantity: 3,
            subcategory: ["з камнями", "каблучка на фалангу", "подвійна"],
            title: "Золота каблучка на дві фаланги з фіанітами",
            material: "золото",
            article: "к05510",
            pictures: {
                main: "844b429d2d876731048a0eb5d1957f9e.jpg",
                additional: [
                    "64d609a1fde87e9a51d908b16d2e92a3.jpg",
                    "d13a7589bde50ccc098f9bb7af1def62.jpg",
                    "22d5d343f8b4f30c2eaa51a615bc6a6b.jpg",
                    "009bfcd0c737f4d79d8fc4d69570733a.jpg",
                    "052a331aca7ad15a7cbfa8a011fea890.jpg",
                    "6cc2a738c08eff9ef03c9b38b0450cb1.jpg"
                ]
            },
            size:[
                "15",
                "15.5",
                "16",
                "16.5",
                "17.5",
                "18",
                "18.5",
                "19"
            ],
            description:{
                price: 14940,
                weight: "5.15",
                material: "Червоне золото 585\"",
                insert: "Фіаніт",
                coating: "Без покриття",
                information: [
                    
                ]
            },
            feedback:[
                
            ]
        },{
            id: "17",
            quantity: 4,
            subcategory: ["без каменів", "каблучка на фалангу", "подвійна"],
            title: "Срібна каблучка \"Мінімалізм\"",
            material: "срібло",
            article: "112243",
            pictures: {
                main: "d1506cdaae9e7d14a31e6e7509f6560d.jpg",
                additional: [
                    "f85538d4470d0ec69578881cc7d3b753.jpg",
                    "4dbxpqwx2b3hp9kplrz2i9uqep7uucln.jpg",
                    "461b41df069ac14dc8513cf6a99ed7a9.jpg",
                    "4eb46cf8067669519fbf2cc102d6f9be.jpg",
                    "818db97906d836c41774c74709cc0751.jpg",
                    "168d7e312144d02eedfff4aae32b4c75.jpg",
                    "ed08bd370e6347737ffd61749af1a40a.jpg"
                ]
            },
            size:[
                "15",
                "15.5",
                "16",
                "16.5",
                "17.5",
                "18",
                "18.5",
                "19"
            ],
            description:{
                price: 570,
                weight: "1.6",
                material: "Срібло 925\"",
                insert: "Без каменів",
                coating: "Без покриття",
                information: [
                    
                ]
            },
            feedback:[
                {
                    data: "30 квітня 2022",
                    userName: "Тетяна",
                    phone: "0987654321",
                    email: "qwerty@gmail.com",
                    body: "А така золота є?",
                    assessment: 5,
                }
            ]
        },
    ]
}








// function ret (){
//     return Object.keys(roducts)
// }
    
    // console.log(roducts[ret()[0]])