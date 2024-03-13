import React from 'react';
import './about.css';

const Intro = () => {
    return ( 
        <section id="about" className="body">
            <div className="about-header">
                <div className="line"></div>
                <h1 className="middle">About Me</h1>
                <div className="line"></div>
            </div>

            <div className="about-content">
                <div className="left">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet vestibulum felis. Vivamus facilisis ligula id fringilla gravida. Suspendisse ultricies sollicitudin lacus, et rutrum nunc bibendum sed.
                        <br/><br/><br/>
                         Donec tincidunt tellus sed libero ultricies, eu semper enim molestie. Etiam lorem quam, tincidunt nec malesuada eu, interdum nec leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi placerat tortor sed felis tristique. 
                         <br/><br/><br/>
                         Nunc aliquam magna ut nunc vestibulum, ut dictum nulla sagittis. Cras egestas magna sed nisl pellentesque, sed lobortis felis convallis. Phasellus eget ex at est lobortis iaculis eget non risus. Etiam ultricies at est sit amet condimentum.
                    </p>
        
                </div>
                <div className="right"></div>
            </div>
        </section>
     );
}
 
export default Intro;