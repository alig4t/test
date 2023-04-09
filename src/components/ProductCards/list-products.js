
const productList = [
    {
        id: 1,
        slug: 'pizza',
        typePer: 'پیتزا',
        title: 'پیتزا باروژ',
        price: 205000,
        offPercent: 20,
        imgPath: '637210230900801418.jpg',
        desc: 'خمیر پیتزا ایتالیایی، ژامبون ژیگو، ژامبون دودی، سوسیس، قارچ، فلفل دلمه ای رنگی، سس مخصوص، پنیر',
        sort: 1
    },
    {
        id: 2,
        slug: 'pizza',
        typePer: 'پیتزا',
        title: 'پیتزا نوستالژی 30 سانتی',
        price: 199000,
        offPercent: 20,
        imgPath: '637210231396319927.jpg',
        desc: 'خمیر پیتزا ایتالیایی، ژامبون ژیگو، ژامبون دودی، سوسیس، قارچ، فلفل دلمه ای رنگی، سس مخصوص، پنیر',
        sort: 1
    },
    {
        id: 3,
        slug: 'pizza',
        typePer: 'پیتزا',
        title: 'پیتزا پپرونی 30 سانتی',
        price: 190000,
        offPercent: 20,
        imgPath: '637210231902808943.jpg',
        desc: 'خمیر پیتزا ایتالیایی، پپرونی، قارچ، سس مخصوص، پنیر',
        sort: 1
    },
    {
        id: 4,
        slug: 'pizza',
        typePer: 'پیتزا',
        title: 'پیتزا گریل استیک 24 سانتی',
        price: 184000,
        offPercent: 20,
        imgPath: '637210232158244110.jpg',
        desc: 'خمیر پیتزا ایتالیایی، گوشت استیک طعم دار شده، زیتون، قارچ، سس مخصوص، پنیر',
        sort: 1
    },
    {
        id: 5,
        slug: 'pizza',
        typePer: 'پیتزا',
        title: 'پیتزا چیکن آلفردو 24 سانتی',
        price: 199000,
        offPercent: 20,
        imgPath: '637210232727936370.jpg',
        desc: 'خمیر پیتزا ایتالیایی، سینه مرغ طعم دار شده، قارچ، سس آلفردو، پنیر',
        sort: 1
    },
    {
        id: 6,
        slug: 'pizza',
        typePer: 'پیتزا',
        title: 'پیتزا گریل میکس 30 سانتی',
        price: 176000,
        offPercent: 20,
        imgPath: '637210233556103948.jpg',
        desc: 'خمیر پیتزا ایتالیایی، فیله مرغ و گوشت طعم دار شده، فلفل دلمه ای رنگی، زیتون، قارچ، سس مخصوص، پنیر',
        sort: 1
    },
    {
        id: 7,
        slug: 'pizza',
        typePer: 'پیتزا',
        title: 'پیتزا استیک و سیر 30 سانتی',
        price: 214000,
        offPercent: 20,
        imgPath: '637210233741784653.jpg',
        desc: 'خمیر پیتزا ایتالیایی، گوشت استیک طعم دار شده، سس سیر، پنیر',
        sort: 1
    },
    {
        id: 8,
        slug: 'sandwich',
        typePer: 'ساندویچ',
        title: 'ساندویچ رست بیف',
        price: 169000,
        offPercent: 20,
        imgPath: '637210237916914663.jpg',
        desc: '120 گرم فیله مرغ گریل شده، قارچ طعم دار شده، پیاز کاراملی، سس بالزامیک، کاهو، گوجه فرنگی، پنیر موزارلا، پیازچه، نان چاودار',
        sort: 3
    },
    {
        id: 9,
        slug: 'sandwich',
        typePer: 'ساندویچ',
        title: 'ساندویچ مرغ پستو',
        price: 130500,
        offPercent: 20,
        imgPath: '637210237265001383.jpg',
        desc: '',
        sort: 3
    },
    {
        id: 10,
        slug: 'pasta',
        typePer: 'پاستا',
        title: 'پاستا پنه پستو',
        price: 178000,
        offPercent: 20,
        imgPath: '637210235719378248.jpg',
        desc: '',
        sort: 2
    },
    {
        id: 11,
        slug: 'pizza',
        typePer: 'پیتزا',
        title: 'پیتزا رست بیف 30 سانتی',
        price: 227000,
        offPercent: 20,
        imgPath: '637210234126886725.jpg',
        desc: 'خمیر پیتزا ایتالیایی، گوشت ریش ریش شده، قارچ، سس مخصوص، پنیر',
        sort: 1
    },
    {
        id: 12,
        slug: 'pizza',
        typePer: 'پیتزا',
        title: 'پیتزا بلا چاو',
        price: 220000,
        offPercent: 20,
        imgPath: '637289481811335471.jpg',
        desc: 'خمیر پیتزا ایتالیایی،سس پیتزا،پنیر موزارلا تازه،پنیر پیتزا،بیکن،قارچ طعم دار،روکولا',
        sort: 1
    },
    {
        id: 13,
        slug: 'pasta',
        typePer: 'پاستا',
        title: 'پاستا پنه بلونز',
        price: 170000,
        offPercent: 20,
        imgPath: '637210235476774338.jpg',
        desc: '260 گرم پاستا پنه، پنیر پارمزان، 300 گرم سس بلونز: گوشت چرخ کرده، قارچ',
        sort: 2
    },
    {
        id: 14,
        slug: 'chicken',
        typePer: 'مرغ سوخاری',
        title: 'مرغ سوخاری دو تکه نرمال',
        price: 179000,
        offPercent: 20,
        imgPath: '637210238409282801.jpg',
        desc: '2 تکه مرغ سوخاری، دورچین: سیب زمینی سرخ کرده، سالاد کلم، نان بروتچن',
        sort: 4
    },
    {
        id: 15,
        slug: 'Appetizer',
        typePer: 'پیش غذا',
        title: 'سیب زمینی با سس پنیر',
        price: 82000,
        offPercent: 20,
        imgPath: '637210240992451134.jpg',
        desc: '240 گرم سیب زمینی سرخ کرده، سس پنیر',
        sort: 5
    },
    {
        id: 16,
        slug: 'burger',
        typePer: 'برگر',
        title: 'همبرگر',
        price: 133000,
        offPercent: 20,
        imgPath: '637210242470236009.jpg',
        desc: '160 گرم برگر گوشت خالص، کاهو، سس مخصوص حاوی خیارشور و پیاز ، نان گرد',
        sort: 6
    },
    {
        id: 17,
        slug: 'salad',
        typePer: 'سالاد',
        title: 'سالاد سزار با مرغ گریل',
        price: 127000,
        offPercent: 20,
        imgPath: '637210245211663773.jpg',
        desc: 'کاهو، 100 گرم سینه مرغ، گوجه گیلاسی، پنیر پرامزان، نان سرخ شده',
        sort: 7
    },
    {
        id: 18,
        slug: 'beverage',
        typePer: 'نوشیدنی',
        title: 'نوشابه قوطی کوکاکولا',
        price: 15100,
        offPercent: 0,
        imgPath: '637210252177133680.jpg',
        desc: '330 میلی لیتر',
        sort: 8
    },
    {
        id: 19,
        slug: 'sauce',
        typePer: 'سس اضافه',
        title: 'سس قارچ و خامه',
        price: 15000,
        offPercent: 10,
        imgPath: '637210256195119948.jpg',
        desc: 'سس قارچ و خامه یک نفره',
        sort: 9
    },
    {
        id: 19,
        slug: 'extra',
        typePer: 'اضافات',
        title: 'نان همبرگر',
        price: 9000,
        offPercent: 10,
        imgPath: '637210254668546903.jpg',
        desc: 'نان همبرگر',
        sort: 10
    },

]

export default productList