import img1 from "./img/Ajoodanieh1.png"
import img2 from "./img/Bamland4.png"
import img3 from "./img/Elahieh2.png"
import img4 from "./img/Gisha-1.png"
import "./Branches.css"

const Branches = () => {

    const branches = [
        {state:'میرداماد',address:'',img:{img1}},
        {state:'گیشا',address:'',img:{img1}},
        {state:'سعادت آباد',address:'',img:{img1}},
        {state:'آجودانیه',address:'',img:{img1}},
        {state:'الهیه',address:'',img:{img1}},
        {state:'پونک',address:'',img:{img1}},
    ]

    return (
        <div className="container">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="all-branches ">
                        <ul class="branches clearfix">
                            <li class="media col-md-6">
                                <div class="media-right">
                                    
                                        <img class="media-object" src={img1} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">میرداماد</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...</p>
                                </div>
                            </li>
                            <li class="media col-md-6">
                                <div class="media-right">
                                  
                                        <img class="media-object" src={img2} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">گیشا</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...</p>
                                </div>
                            </li>
                            <li class="media col-md-6">
                                <div class="media-right">
                                    
                                        <img class="media-object" src={img3} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">سعادت آباد</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ....</p>
                                </div>
                            </li>
                            <li class="media col-md-6">
                                <div class="media-right">
                                    
                                        <img class="media-object" src={img4} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">یوسف آباد</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...</p>
                                </div>
                            </li>
                            <li class="media col-md-6">
                                <div class="media-right">
                                    
                                        <img class="media-object" src={img2} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">سردار جنگل</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...</p>
                                </div>
                            </li>
                            <li class="media col-md-6">
                                <div class="media-right">
                                    
                                        <img class="media-object" src={img1} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">آجودانیه</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...</p>
                                </div>
                            </li>
                            <li class="media col-md-6">
                                <div class="media-right">
                                    
                                        <img class="media-object" src={img4} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">الهیه</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...</p>
                                </div>
                            </li>
                            <li class="media col-md-6">
                                <div class="media-right">
                                    
                                        <img class="media-object" src={img3} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">بام لند</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ....</p>
                                </div>
                            </li>
                            <li class="media col-md-6">
                                <div class="media-right">
                                    
                                        <img class="media-object" src={img1} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">کوروش</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...</p>
                                </div>
                            </li>
                            <li class="media col-md-6">
                                <div class="media-right">
                                    
                                        <img class="media-object" src={img2} alt="branch" />
                                    
                                </div>
                                <div class="media-body media-middle">
                                    <h4 class="media-heading bold ">نمایشگاه</h4>
                                    <p><span class="green-text">آدرس : </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ...</p>
                                </div>
                            </li>
                            
                        </ul>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Branches;