export default function About() {
     return (
       <section id="about" className="pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-[#f3f4fe]">
         <div className="container">
           <div className="bg-white wow fadeInUp" data-wow-delay=".2s">
             <div className="flex flex-wrap -mx-4">
               <div className="w-full px-4">
                 <div className=" lg:flex items-center justify-between border overflow-hidden " >
                   <div className=" lg:max-w-[565px] xl:max-w-[640px] w-full py-12 px-7 sm:px-12 md:p-16 lg:py-9 lg:px-16 xl:p-[70px] " >
                     <span className=" text-sm font-medium text-white py-2 px-5 bg-primary inline-block mb-5 " >
                       About Us
                     </span>
                     <h2 className=" font-bold text-3xl sm:text-4xl 2xl:text-[40px] sm:leading-snug text-dark mb-6 " >
                       Brilliant Toolkit to Build Nextgen Website Faster.
                     </h2>
                     <p className="text-base text-body-color mb-9 leading-relaxed">The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables led by subject matter experts.</p>
                     <p className="text-base text-body-color mb-9 leading-relaxed">The main ‘thrust' is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel.</p>
                     <a href="javascript:void(0)" className=" inline-flex items-center justify-center py-4 px-6 rounded text-white bg-primary text-base font-medium hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out " >
                       Learn More
                     </a>
                   </div>
                   <div className="text-center">
                     <div className="relative inline-block z-10">
                       <img src="/images/about/about-image.svg" alt="image" className="mx-auto lg:ml-auto" />
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
     );
}