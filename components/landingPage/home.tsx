// 'use client';
// import React from "react";
// import "./home.css";
// import Time from "../../assets/svg/time";
// import Navbar from "../navBar/Navbar";
// import myImage from "../../assets/Frame.png";
// import bgImage from "../../assets/DR.jpg";
// import Dr from "../../assets/DRP.png";
// import Trans from "../../assets/Trans.png";
// import Backfram from "../../assets/Backfram.jpg";
// import Logo from "../../assets/Logo.png";
// import Apply from "../../assets/svg/Apply";
// import Calender from "../../assets/svg/Calender";
// import Cash from "../../assets/svg/Cash";
// import Arrow from "../../assets/svg/Arrow";
// import Group from "../../assets/svg/Group";
// import Rectangle from "../../assets/Rectangle.png";
// import What from "../../assets/Door.jpg";
// import { useState } from "react";
// export const Home = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <div className="bg-black text-white flex p- px-20 items-center justify-between  md:p-5">
//         <div className="flex-1 flex items-left  md:gap-x-2 gap-x-5">
//           <select>
//             <option value="en">English</option>
//             <option value="fr">French</option>
//           </select>
//         </div>
//         <div className="flex-1 flex justify-end gap-x-2 ">
//           <Time />
//           <p>Mon-Fri: 8:00 am - 7:00 pm</p>
//         </div>
//       </div>
//       <div className=" my-5">
//         <div>
//           <Navbar />
//           </div>
//         <div className="relative">
//           <img src={Logo.src} alt="logo" className="absolute   z-100 p-6 md:w-[200px] sm:w-[150px] lg:w-[200px]"  />

//         </div>
        
//         <div
//           style={{ backgroundImage: `url(${What.src})` }} className="bg-cover bg-center h-[500px]  flex items-center relative ">
//             <div className="flex-1 font-bold px-40 tracking-wider items-center justify-center mt-30 text-left sm:mt-30 text-center md:text-center mt-20">
//               <p className="text-[#159EEC] text-sm mt-0 md:text-left mt-5">CARING FOR LIFE</p>
//               <p className="text-3xl  font-serif text-[#1F2B6C] leading-15  md:text-5xl text-left">Leading the Way <br/> in Medical Excellence</p>
//                   <button className="bg-[#BFD2F8]  text-[#1F2B6C] px-10 py-2 flex justify-center items-center mx-0 text-sm rounded-full md:mx-0 ">Our services</button>
//                 </div>
//           {/* <img
//             src={Dr.src}
//             alt="Doctor"
//              className="block absolute bottom-0 left-0  h-full object-cover   md:block  sm:mx-0 lg:mx-120"
//           /> */}
//         </div>
//       </div>
//       <div className="flex justify-center items-center gap-5 relative  sm:my-[0px] md:my-[-20px] lg:my-[-60px] px-20 flex-wrap">
//         <div className="smCard bg-[#BFD2F8] text-[#1F2B6C] text-sm ">
//           <p>Book an Appointment</p>
//           <Apply/>
//         </div>
//         <div className="smCard bg-[#1F2B6C] text-white text-sm">
//           <p>Book an Appointment</p>
//           <Calender/>
//         </div>
//         <div className="smCard bg-[#159EEC] text-white text-sm">
//           <p>Book an Appointment</p>
//           <Cash/>
//         </div>
//       </div>
//       <div className="my-30 flex flex-col items-center justify-center text-center">
//         <p className=" uppercase tracking-[5] font-bold text-[#159EEC]">Welcome to molly specialist hospital</p>
//         <h1 className="text-[34px] font-serif font-semibold text-[#1F2B6C] my-3">A Great Place to Receive Care</h1>
//         <p className="tracking-wide font-medium" >Molloy Hospital is a modern healthcare facility committed to providing quality <br/> medical services with compassion and excellence. With expert doctors, advanced <br/> technology, and patient-centered care, we ensure every visitor receives trusted <br/> treatment in a safe and supportive environment.</p>
//         <button className="flex items-center gap-2 my-5 text-[#159EEC] text-sm ">Learn More <Arrow/> </button>
//       </div>
//       <div className="flex justify-center items-center">
//          <img
//             src={Rectangle.src}
//             alt="Group"
//           />
//       </div>
    

      

//     </div>
//   );
// };
// export default Home;
