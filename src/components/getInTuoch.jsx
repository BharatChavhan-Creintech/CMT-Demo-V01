import React from "react";
import contact from '../assets/images/contact.png'

export default function GetInTouch(){
    return(
        <section className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="contact">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">We're Here to Help</h3>

                    <p className="text-slate-600 max-w-xl mx-auto">Have any questions or need more information? Get in touch with us today and let our team assist you with personalized solutions..</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-7 md:col-span-6 ">
                        <img src={contact} alt="" className=""/>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white  rounded-md shadow dark:shadow-gray-700 p-6">
                                <form>
                                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                                        <div className="lg:col-span-6">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-600 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :"/>
                                        </div>
        
                                        <div className="lg:col-span-6">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-600 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :"/>
                                        </div>

                                        <div className="lg:col-span-12">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <input name="subject" id="subject" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-600 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Subject :"/>
                                        </div>
    
                                        <div className="lg:col-span-12">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <textarea name="comments" id="comments" className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-600 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white mt-2">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}