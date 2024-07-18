import React from "react";
import AboutUs from "./Carousel";



export default function About(){
   const data = [
    {
        "title": "PoSH Compliance Training",
        "image": "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D",
        "description": "Our interactive e-modules offer immersive, dramatized scenarios that engage employees, providing them with practical knowledge and skills to handle PoSH situations effectively."
    },
    {
        "title": "Anti-Bribery Policy Education",
        "image": "https://img.freepik.com/free-photo/professional-colleagues-standing-meeting-room-with-documents-focused-female-grey-haired-worker-glasses-reading-report-businessman-looking-camera-teamwork-business-management-concept_74855-7776.jpg?ga=GA1.1.1410577083.1717562437&semt=ais_user",
        "description": "Our facilitator-led workshops provide comprehensive education on anti-bribery policies, ensuring employees understand and can effectively prevent and address bribery in the workplace."
    },
    {
        "title": "Code of Conduct Workshops",
        "image": "https://img.freepik.com/free-photo/close-up-people-working-office_329181-16075.jpg?ga=GA1.1.1410577083.1717562437&semt=ais_user",
        "description": "Our engaging workshops cover all aspects of the company's code of conduct, helping employees understand and uphold the highest standards of ethical behavior and compliance."
    },
    {
        "title": "Ethics and Compliance Seminars",
        "image": "https://img.freepik.com/free-photo/positive-senior-leader-drawing-graph-meeting_1262-2303.jpg?ga=GA1.1.1410577083.1717562437&semt=ais_user",
        "description": "Our seminars delve into ethics and compliance, featuring dynamic sessions led by experts who provide insights and strategies for maintaining a compliant and ethical workplace."
    }
    

   ]




    return(
        <section className="relative lg:py-20 lg:h-screen " id="about">
            <div className=" container relative mt-20 flex flex-col justify-center items-center gap-10 lg:mt-28 ">
                <h1 className="text-2xl font-semibold text-center mb-2">What we do best!</h1>
                <p className="text-center font-medium text-slate-600 md:px-5 lg:w-1/2 ">We develop impactful training solutions for workplace culture and compliance, ensuring safe, ethical, and compliant work environments.</p>
               <AboutUs data={data}/>
            </div>
        </section>
    )
}