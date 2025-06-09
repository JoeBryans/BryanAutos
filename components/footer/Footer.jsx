import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-max flex flex-col items-center gap-5 mx-auto bg-[#0A1931] py-10">
      <div className="max-w-4xl w-full mx-auto grid grid-cols-2 md:grid-cols-3 px-3">
        <div className="flex flex-col text-white gap-3 items-center ">
          <h1 className="font-bold text-2xl text-white">BryanAuto</h1>
          <ul>
            <li>123 Auto Drive, Car City, ST 54321</li>
            <li>1Phone: (555) 123-4567</li>
            <li>Email: info@driveconnect.com</li>
          </ul>
        </div>

        <div className="flex flex-col text-white gap-3 items-center ">
          <h1 className="font-bold text-2xl text-white">Quick Links</h1>
          <ul>
            <li>
              <Link href={"/new-vehicles"}>New Inventory</Link>
            </li>
            <li>
              <Link href={"/used-vehicles"}>Used Inventory</Link>
            </li>
            <li>
              <Link href={"/finance"}>Financing</Link>
            </li>
            <li>
              <Link href={"/services"}>Service Center</Link>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col text-white gap-3 items-center ">
          <h1 className="font-bold text-2xl text-white">Connect With Us</h1>
          <ul className="flex items-center gap-3 justify-center">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <Sepera */}
      <div className="h-2 w-full bg-white/600" />
      <div className="flex text-white flex-col gap-4 items-center">
        <span>© 2025 BryanAuto. All Rights Reserved.</span>
        <div className="flex items-center gap-1">
          <Link href={"/#"}>Privacy Policy </Link>|
          <Link href={"/#"}> Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
