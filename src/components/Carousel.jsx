import React from "react";



 function AboutUs({data}) {
  return (
   <div className="flex gap-2 mobile-sc sm:flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap">
{ data.map((item,i)=>(
  <article className="group relative overflow-hidden rounded-lg  
" key={i}>
  <img
    alt=""
    src={item.image}
    className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition ease-linear duration-[1200ms]"
  />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64 ">
    <div className="p-4 sm:p-6">
      <time dateTime="2022-10-10" className="block text-xs text-white/90"> CMT </time>

      <a href="#">
        <h3 className="mt-0.5 text-lg text-white">{item.title}</h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        {item.description}
      </p>
    </div>
  </div>
</article>

)) }
   </div>
  );
}

export default AboutUs