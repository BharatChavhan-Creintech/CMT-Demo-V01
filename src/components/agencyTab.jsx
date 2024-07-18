import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function AgencyTab(){
    const [ activeIndex, setActiveIndex ] = useState(1)
    return(
        <section className="realtive md:py-24 py-16 bg-slate-50" id="services">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">An All-in-One Compliance and Case Management Platform</h3>

                    <p className="text-slate-600 max-w-xl mx-auto">This innovative and powerful tool simplifies case management, enhances compliance, and ensures a safe, ethical workplace. Customize this text to suit your needs.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-teal-500 duration-500 ${activeIndex === 1 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(1)}>
                                        <span className="block">Step 1</span>
                                        <span className="text-lg mt-2 block">Sign Up and Set Up</span>
                                        <span className="block mt-2">Create your account and customize your profile. Our user-friendly setup gets you ready to manage PoSH cases efficiently from day one</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 2 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(2)}>
                                        <span className="block">Step 2</span>
                                        <span className="text-lg mt-2 block">Add and Manage Cases</span>
                                        <span className="block mt-2">import your existing case data seamlessly. Organize, categorize, and manage cases for quick access and efficient handling</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 3 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(3)}>
                                        <span className="block">Step 3</span>
                                        <span className="text-lg mt-2 block">Generate Reports</span>
                                        <span className="block mt-2">Create detailed reports with ease. Analyze data and track compliance to ensure a safe and ethical workplace.</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className={activeIndex === 1 ? '' : 'hidden' }>
                                <img src="https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-133556.jpg?ga=GA1.1.1410577083.1717562437&semt=ais_user" className="w-[43rem] h-[26rem] object-cover shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Results & Reporting</h5>
                                    <p className="text-slate-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? '' : 'hidden' }>
                                <img src="https://img.freepik.com/free-photo/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data_53876-23014.jpg?t=st=1720159033~exp=1720162633~hmac=332e431a449e942165ede1a0dae833962562310a8e475566b3416b1e807ca392&w=1380" className="w-[43rem] h-[26rem] shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Project Execution</h5>
                                    <p className="text-slate-600 mt-4">Unlock the full potential of your case management with our comprehensive reporting tools. Start generating insightful reports today!</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? '' : 'hidden' }>
                                <img src="https://img.freepik.com/free-photo/business-people-working-laptop-meeting_53876-40326.jpg?ga=GA1.1.1410577083.1717562437&semt=ais_user" className="w-[43rem] h-[26rem] shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Results & Reporting</h5>
                                    <p className="text-slate-600 mt-4" >Unlock the full potential of your case management with our comprehensive reporting tools. Start generating insightful reports today!</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
