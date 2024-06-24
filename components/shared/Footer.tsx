import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer-contain">
        <div className="mini-box-contain">
          <div className="flex gap-1 items-center">
            <Image src={"/images/logo.png"} alt="logo" width={30} height={30} />
            <h2 className="font-semibold text-xl">GoodPena</h2>
          </div>
          <p className="pl-3 text-sm text-gray-300">Platform AI Serbaguna untuk 
            <br className="hidden lg:block"/> Meningkatkan Kreativitas dan 
            <br/> Efisiensi Konten Anda.</p>
        </div>

        {/* company */}
        <div className="mini-box-contain">
          <h2 className="text-lg font-semibold">Company</h2>
          <hr className="w-full lg:w-1/2 h-0.5 bg-primary"/>
            <ul className="list-footer">
              <li>About</li>
              <li>Fitur</li>
              <li>Harga</li>
              <li>Kontak</li>
            </ul>
        </div>

        {/* Help */}
        <div className="mini-box-contain">
          <h2 className="text-lg font-semibold">Bantuan</h2>
          <hr className="w-full lg:w-1/2 h-0.5 bg-primary"/>
            <ul className="list-footer">
              <li>Customer Support</li>
              <li>Sales & Marketing</li>
              <li>Dokumentasi</li>
              <li>Gabung Komunitas</li>
            </ul>
        </div>

        {/* get in touch */}
        <div className="mini-box-contain">
          <h2 className="text-lg font-semibold">Hubungi Kita!</h2>
          <hr className="w-full lg:w-1/2 h-0.5 bg-primary"/>
            <ul className="list-footer">
              <li>Perlu Bantuan?</li>
              <li>support@goodpena.ai</li>
            </ul>
        </div>
      </div>

      <hr className="mt-20 mb-8 bg-dark-100 h-0.5"/>
      <p className="text-center text-sm">&copy; Copyright {currentYear}, All Rights Reserved by GoodPena.</p>
    </div>
  );
};

export default Footer;
