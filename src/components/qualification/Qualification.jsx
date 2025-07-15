import React,{useState} from 'react';
import './qualification.css';

const Qualification = () => {
    const[toggleState,setToggleState]=useState(1);
    const toggleTab=(index)=>{
        setToggleState(index);
    }
    return (
        <section className="q section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="q__container container">
                <div className="q__tabs">
                    <div className={toggleState === 1 ? "q__button q_active button--flex" :
                        "q__button button--flex" }
                        onClick={()=> toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap q__icon"></i>Education
                    </div>

                    <div className={toggleState === 2 ? "q__button q_active button--flex" :
                        "q__button button--flex" }
                        onClick={()=> toggleTab(2)}>
                        <i className="uil uil-briefcase-alt q__icon"></i>Extra-curicular
                    </div>
                </div>

                <div className="q__sections">
                    <div className={toggleState === 1? "q__content q__content-active":
                    "q__content"}>
                        <div className="q__data">
                        <div>
                                <h3 className="q__title">Web Development</h3>
                                <span className="q__subtitle">Spain Institute</span>
                                <div className="q__calender">
                                    <i className="uil uil-calendar-alt"></i>2025 - Present
                                </div>                                
                            </div>
                            <div>
                                    <span className="q__rounder"></span>
                                    <span className="q__line"></span>
                            </div>
                        </div>

                        <div className="q__data">
                            <div></div>

                            <div>
                                <span className="q__rounder"></span>
                                <span className="q__line"></span>
                            </div>
                            <div>
                                <h3 className="q__title">Art Director</h3>
                                <span className="q__subtitle">Spain Institute</span>
                                <div className="q__calender">
                                    <i className="uil uil-calendar-alt"></i>2025 - Present
                                </div>

                            </div>
                        </div>

                        <div className="q__data">
                        <div>
                                <h3 className="q__title">Web Designer</h3>
                                <span className="q__subtitle">Spain Institute</span>
                                <div className="q__calender">
                                    <i className="uil uil-calendar-alt"></i>2025 - Present
                                </div>                                
                            </div>
                            <div>
                                    <span className="q__rounder"></span>
                                    <span className="q__line"></span>
                            </div>
                        </div>


                        <div className="q__data">
                            <div></div>

                            <div>
                                <span className="q__rounder"></span>
                                <span className="q__line"></span>
                            </div>
                            <div>
                                <h3 className="q__title">UI Expert</h3>
                                <span className="q__subtitle">Spain Institute</span>
                                <div className="q__calender">
                                    <i className="uil uil-calendar-alt"></i>2024 - Present
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2? "q__content q__content-active":
                    "q__content"}>
                        <div className="q__data">
                        <div>
                                <h3 className="q__title">Product designer</h3>
                                <span className="q__subtitle">Spain Institute</span>
                                <div className="q__calender">
                                    <i className="uil uil-calendar-alt"></i>2025 - Present
                                </div>
                                </div>
                                <div>
                                    <span className="q__rounder"></span>
                                    <span className="q__line"></span>
                                </div>
                        </div>

                        <div className="q__data">
                            <div></div>

                            <div>
                                <span className="q__rounder"></span>
                                <span className="q__line"></span>
                            </div>
                            <div>
                                <h3 className="q__title">Manager</h3>
                                <span className="q__subtitle">Spain Institute</span>
                                <div className="q__calender">
                                    <i className="uil uil-calendar-alt"></i>2025 - Present
                                </div>
                            </div>
                        </div>

                        <div className="q__data">
                            <div>
                                <h3 className="q__title">Web Design</h3>
                                <span className="q__subtitle">Spain Institute</span>
                                <div className="q__calender">
                                    <i className="uil uil-calendar-alt"></i>2025 - Present
                                </div>
                                </div>
                                <div>
                                    <span className="q__rounder"></span>
                                    <span className="q__line"></span>
                                </div>
                        </div>

                        <div className="q__data">
                            <div></div>

                            <div>
                                <span className="q__rounder"></span>
                                <span className="q__line"></span>
                            </div>
                            <div>
                                <h3 className="q__title">UX Expert</h3>
                                <span className="q__subtitle">Spain Institute</span>
                                <div className="q__calender">
                                    <i className="uil uil-calendar-alt"></i>2024 - Present
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Qualification;
