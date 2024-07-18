import React, { useContext } from 'react';
import { FaChartLine, FaChartPie, FaClipboardList, FaSearch, FaUsers, FaShieldAlt, FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { FormContext } from '../../context/FormContext';
import img from "../../assets/stamp.png"
import img2 from "../../assets/signature.png"





const features = [
  {
    icon: FaChartLine,
    title: "Overview",
    description: "A summary of the report's purpose and scope, including the total number of cases handled during the year.",
  },
  {
    icon: FaChartPie,
    title: "Case Statistics",
    description: "Statistical data, including the number of cases reported, types of incidents, and outcomes.",
  },
  {
    icon: FaClipboardList,
    title: "Detailed Case Summaries",
    description: "Brief summaries of each case, highlighting key details, findings, and resolutions.",
  },
  {
    icon: FaSearch,
    title: "Investigation Insights",
    description: "Insights and patterns observed during investigations, including common issues and areas for improvement.",
  },
  {
    icon: FaUsers,
    title: "Committee Activities",
    description: "Activities and efforts of the Internal Committee, including meetings, training sessions, and key decisions.",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance and Actions",
    description: "Compliance measures taken, such as training programs, policy updates, and disciplinary actions.",
  },
  {
    icon: FaLightbulb,
    title: "Recommendations",
    description: "Recommendations for improving the PoSH process and ensuring a safer workplace environment in the coming year.",
  },
  {
    icon: FaCheckCircle,
    title: "Final Review and Approval",
    description: "Review of the entire report for accuracy and completeness, and obtaining necessary approvals before finalizing.",
  },
];


const Summary = () => {
  const { formData } = useContext(FormContext);
  const {name,email,address,phone,message,option,options} = formData
  console.log(formData)

  return (
    <section className='container h-[70svh] '>
       <div className='h-full bg-white rounded-md py-2 overflow-y-auto'>
        <div className="max-w-4xl mx-auto px-5 mt-16">
    <div className='border-[1px] p-2 w-20 border-orange-400 rounded-md text-gray-600'>{option}</div>

    <div className="text-center">
      <h2 className="font-semibold text-3xl">Annual Report 2024</h2>
        <span className="text-xl font-mono text-gray-600">1 Apr 2023 - 31 Mar 2024</span>
      <p className="max-w-md mx-auto mt-2 text-gray-500 text-lg">
      Review the entire report for accuracy and completeness, and obtain necessary approvals before finalizing.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10 mt-10">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4 items-start">
          <span className="text-violet-600 bg-violet-500/10 p-3 rounded-full">
            <feature.icon className="w-5 h-5" />
          </span>
          <div>
            <h3 className="font-semibold text-xl">{feature.title}</h3>
            <p className="mt-1 text-gray-500">{feature.description}</p>
          </div>
        </div>
      ))}
     
    </div>
    <div className='py-10'>

  
    <ul className="bg-white   divide-gray-200 ">
    <li className="px-6 py-4">
        <div className="flex justify-between">
            <span className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a aliquid vero temporibus tempora.</span>
        </div>
        <p className="text-slate-600 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maiores, ipsa eum nemo et voluptates dignissimos aut error debitis dolore quod aspernatur, eligendi, atque harum provident pariatur! Non sit quia fugit, quasi ipsa accusantium quae!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, expedita. Nulla veniam tempora sint vel sapiente itaque nihil pariatur recusandae adipisci maxime deleniti nemo rem exercitationem quod ea consequuntur sit molestiae libero tenetur esse, voluptates debitis in! Sapiente, expedita commodi!</p>
    </li>
    <li className="px-6 py-4">
        <div className="flex justify-between">
            <span className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsum.</span>
        </div>
        <p className="text-slate-600 text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum maxime ipsum dolorem explicabo. Dolor, quaerat in eum quos ipsum iure qui fuga excepturi aut. Dicta nisi repellat possimus harum quis, ab odit inventore nihil eos hic et nam aliquam ea voluptatum vero doloribus minima sit est veritatis ipsa fugit nostrum accusamus. Quis amet dolorem, mollitia sint ipsam dolor officia veniam repudiandae iusto optio aliquam possimus fugit praesentium quibusdam quo, quia, dicta officiis cumque temporibus minus accusantium. Et natus aliquid voluptate, dignissimos molestias est minus tempora numquam incidunt nihil! Repellendus distinctio quos, provident aliquid qui reprehenderit dignissimos incidunt odit laborum quaerat?.</p>
    </li>
    <li className="px-6 py-4">
        <div className="flex justify-between">
            <span className="font-semibold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, et impedit. Quisquam.</span>
        </div>
        <p className="text-slate-600 text-mg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error consectetur iste, fugit maiores maxime distinctio ullam vel temporibus sed est, aut quasi nostrum sint tempore blanditiis inventore aperiam? Reiciendis voluptatibus atque consequuntur beatae delectus quo iste numquam deleniti nihil, hic odio modi in corrupti aliquam, neque itaque perspiciatis blanditiis. Adipisci, ullam? Voluptatem ipsa obcaecati deserunt. Dolorum laboriosam iusto voluptatum quia asperiores possimus facilis inventore pariatur recusandae quidem ipsam vitae numquam, harum corporis beatae quasi atque dolore saepe, id suscipit mollitia architecto fugit. Voluptatem quibusdam molestiae nihil, dolorem inventore perferendis quam hic blanditiis itaque tempore ad debitis tempora unde officiis corrupti consequatur, minima animi dolor sint assumenda magni dolore, natus architecto. Id, temporibus maiores totam cum ullam tenetur dicta minima voluptatem? Reprehenderit numquam eaque vel tempora nihil voluptatum fugiat quia error? Veniam, sunt hic rerum perspiciatis quis possimus sapiente, exercitationem et laudantium sequi quod aliquid laborum! Impedit ratione quam quod sint quidem esse assumenda totam at ipsam natus officiis voluptates beatae deleniti dolores blanditiis, sit, aliquid laudantium enim quae labore. Nulla magnam asperiores repudiandae inventore explicabo numquam expedita quaerat autem, reprehenderit quos facilis provident porro repellendus perferendis voluptates, earum, dolore quam omnis sit ab voluptas ullam sint! Laudantium asperiores vel vero.</p>
    </li>
</ul>
</div>
<div className=' flex justify-between px-10 pb-20'>
<div>
  <div className='w-32'>
    <img src={img2} alt="" />
  </div>
   <p>{name}</p>
   <p>{email}</p>
</div>
<div className='w-20'>
<img src={img} alt='stamp' />
</div>
</div>
  </div>

       </div>

    </section>
  );
};



export default Summary;
