"use client";
import React from "react";
import "./home.css";
import Time from "../../assets/svg/time";
import Navbar from "../navBar/Navbar";
import What from "../../assets/DR.jpg";
import Logo from "../../assets/Logo.png";
import Doctors from "../../assets/Doctor.png";
import Group from "../../assets/RectangleH.png";
import Apply from "../../assets/svg/Apply";
import Calender from "../../assets/svg/Calender";
import Cash from "../../assets/svg/Cash";
import Link from "next/link";
import Rectangle from "../../assets/Rectangle.png";
import Medical1 from "../../assets/svg/Medical1";
import Vector from "../../assets/svg/Vector";
import Vector2 from "../../assets/svg/Vector2";
import Vector3 from "../../assets/svg/Vector3";
import Arrow from "../../assets/svg/Arrow";
import Loveicon from "../../assets/svg/Loveicon";
const Sechome = () => {
  return (
    <div>
      <div className=" F-nav bg-black text-white  flex justify-between  w-screen">
        <select className=" ">
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
        <div className=" flex-1  flex justify-end gap-x-2">
          <Time />
          <p className="text-sm">Mon-Fri: 8:00 am - 7:00 pm</p>
        </div>
      </div>
      <div className="mt-2">
        <Navbar />
      </div>
      <div
        style={{ backgroundImage: `url(${What.src})` }}
        className="bg-cover bg-center min-h-100 w-screen bg-blend-color bg-[rgba(0, 0, 0, 0.5);]  md:min-h-150 p-5  flex  items-center"
      >
        <div>
          <img
            src={Logo.src}
            alt="logo"
            className="w-20 md:w-40 absolute left-5 top-35 "
          />
        </div>
        <div className="mx-0 space-y-5 md:space-y-8 md:mx-20">
          <p className="font-bold  font-mono text-md tracking-[3] mb-[-2] text-[#159EEC] md:text-lg md:tracking-[5] md:mb-[-2] uppercase  ">
            Caring for Life
          </p>
          <h1 className="font-serif text-2xl font-semibold text-[#1F2B6C] leading-9 md:text-7xl md:leading-20 ">
            Leading the Way <br /> in Medical Excellence
          </h1>
          <button className="bg-[#BFD2F8] px-5 py-2 rounded-full text-[#1F2B6C] font-semibold md:h-10 w-50">
            {" "}
            Our Service
          </button>
        </div>
      </div>
      <div className="flex z-50 my-[-30] flex-wrap justify-center items-center space-x-0 space-y-5 md:space-y-0 md:space-x-5 ">
        <Link href="/">
          <button className="bg-[#BFD2F8] text-[#1F2B6C] text-sm  flex justify-between items-center space-x-5 px-5 py-2 w-80 h-[80px] rounded hover:transition hover:ease-out hover:duration-700">
            <p>Book an Appointment</p>
            <Apply />
          </button>
        </Link>
        <Link href="/">
          <button className="bg-[#1F2B6C] text-[#FCFEFE] text-sm  flex justify-between items-center space-x-5 px-5 py-2 w-80 h-[80px] rounded hover:transition hover:ease-out hover:duration-700">
            <p>Book an Appointment</p>
            <Calender />
          </button>
        </Link>
        <Link href="/">
          <button className="bg-[#159EEC] text-white text-sm  flex justify-between items-center space-x-5 px-5 py-2 w-80 h-[80px] rounded hover hover:transition hover:ease-out hover:duration-700:">
            <p>Book an Appointment</p>
            <Cash />
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-20 space-y-2">
        <p className="font-bold  font-mono text-md text-[#159EEC]  uppercase  ">
          Welcome to molly specialist hospital
        </p>
        <h1 className="font-serif text-2xl font-semibold text-[#1F2B6C]">
          A Great Place to Receive Care
        </h1>
        <p className=" hidden md:flex text-center text-lg p-4 md:text-center md:p-0  md:text-lg">
          Molloy Hospital is a modern healthcare facility committed to providing
          quality <br /> medical services with compassion and excellence. With
          expert doctors, advanced
          <br /> technology, and patient-centered care, we ensure every visitor
          receives trusted <br /> treatment in a safe and supportive
          environment.
        </p>
        <p className="text-center text-lg p-4 md:text-center md:p-0  md:text-lg md:hidden">
          Molloy Hospital is a modern healthcare facility committed to providing
          quality medical services with compassion and excellence. With expert
          doctors, advanced technology, and patient-centered care, we ensure
          every visitor receives trusted treatment in a safe and supportive
          environment.
        </p>
        <div className="flex justify-center items-center space-x-3 text-[#159EEC]">
          {" "}
          <p>Link Button</p>
          <Arrow />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <img src={Rectangle.src} alt="Group" />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="font-bold  font-mono text-md text-[#159EEC]  uppercase  ">
          you can Trust in our service
        </p>
        <h1 className="font-serif text-2xl font-semibold text-[#1F2B6C]">
          Our Services
        </h1>
      </div>
      <div className="flex justify-center  mt-10  space-y-10 flex-wrap md:mt-15 md:space-x-5 md:space-y-0">
        <div className=" w-50  md:w-30 md:h-50 ">
          <div className="flex flex-col justify-center items-center space-y-2 p-3 border-t  border-l border-r border-gray-400 rounded-t text-[#212124] md:py-5">
            <Medical1 />
            <p>Free Checkup</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 bg-[#1F2B6C] text-[#BFD2F8] py-3 md:py-5 ">
            <Vector />
            <p>Cardiogram</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 p-4 border-l border-r border-gray-400 text-[#212124] md:py-6 ">
            <Vector2 />
            <p>Dna Testing</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-2 p-4 border-l border-r border-gray-400 text-[#212124] md:py-6">
            <Vector3 />
            <p>Blood Bank</p>
          </div>
          <div className="bg-[#1F2B6C] rounded-b  text-center py-2 text-sm text-[#BFD2F8]">
            <p>View All</p>
          </div>
        </div>
        <div className="space-y-5 md:mt-5">
          <h1 className="text-2xl font-semibold text-center md:text-2xl md:font-normal ">
            A passion for putting patients first.
          </h1>

          <div className="px-5 md:px-0 space-y-5">
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <input type="radio" checked className="bg-[#159EEC]" />
                <p>A Passion for Healing</p>
              </div>
              <div className="flex space-x-2">
                <input type="radio" checked className="bg-[#159EEC]" />
                <p>5-Star Care</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <input type="radio" checked className="bg-[#159EEC]" />
                <p>All our best</p>
              </div>
              <div className="flex space-x-2">
                <input type="radio" checked className="bg-[#159EEC]" />
                <p>Believe in Us</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2">
                <input type="radio" checked className="bg-[#159EEC]" />
                <p>A Legacy of Excellence</p>
              </div>
              <div className="flex space-x-2">
                <input type="radio" checked className="bg-[#159EEC]" />
                <p>Always Caring</p>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Quisque placerat scelerisque tortor ornare ornare. Quisque{" "}
              <br /> placerat scelerisque tortor ornare ornare Convallis felis{" "}
              <br /> vitae tortor augue. Velit nascetur proin massa in.
              <br /> Consequat faucibus porttitor enim et.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Quisque placerat scelerisque tortor ornare ornare. Quisque{" "}
              <br /> placerat scelerisque tortor ornare ornare Convallis felis{" "}
              <br /> vitae tortor augue. Velit nascetur proin massa in.
              <br /> Consequat faucibus porttitor enim et.
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <img src={Group.src} alt="pic" />
            <div className="flex  mt-[-1]">
              <div className="bg-[#BFD2F8] flex-1 h-2"></div>
              <div className="bg-[#1F2B6C] flex-2 h-2"></div>
              <div className="bg-[#159EEC] flex-1 h-2"></div>
            </div>
          </div>
          <div>
            <img src={Doctors.src} alt="pic" />
             <div className="flex  mt-[-1]">
              <div className="bg-[#BFD2F8] flex-1 h-2"></div>
              <div className="bg-[#1F2B6C] flex-2 h-2"></div>
              <div className="bg-[#159EEC] flex-1 h-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="font-bold  font-mono text-md text-[#159EEC]  uppercase  ">
         Always Caring
        </p>
        <h1 className="font-serif text-2xl font-semibold text-[#1F2B6C]">
          Our Specialties
        </h1>
      </div>
      <div className="flex justify-center items-center flex-wrap mt-20">
        <div className="flex flex-col justify-center items-center w-50 py-5 border-gray-200 rounded border">
          <Loveicon/>
          <p>Neurology</p>
        </div>
        <div className="flex flex-col justify-center items-center w-50 py-5 border-gray-200 rounded border">
          <Loveicon/>
          <p>Neurology</p>
        </div>
        <div className="flex flex-col justify-center items-center w-50 py-5 border-gray-200 rounded border bg-[#1F2B6C] text-[#BFD2F8]">
          <Loveicon/>
          <p>Neurology</p>
        </div>
        <div className="flex flex-col justify-center items-center w-50 py-5 border-gray-200 rounded border">
          <Loveicon/>
          <p>Neurology</p>
        </div>

      </div>
    </div>
  );
};

export default Sechome;
