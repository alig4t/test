import React from "react";

import img from "../SliderSection/img/7d7a1-HDC11548-2.jpg"

const About = () => {

    /*********************  About options  *********************/
    const tel = 99999999;
    const mail = "Info@myCompany.net";
    const address = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...";

    /*********************  About Text Style  *********************/    
    const textStyle = {fontSize:'14px',fontWeight:'400',lineHeight:'26px'}
    
    /*********************  About Us Content  *********************/    
    const aboutText = (<div>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        <br />
        در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        <br />
    </div>);


    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-lg-6 py-2 text-md-right"  style={textStyle}>
                {process.env.REACT_APP_BASE_TITLE}
                <br />
                    {aboutText}
                    <br />
                    آدرس : {address}
                    <br />
                    تلفن : {tel}
                    <br />
                     {mail}
                     <br />
                </div>
                <div className="col-lg-6 text-center py-2">
                    <img src={img} className="w-100" />
                </div>
            </div>
        </section>
    )
}

export default About;