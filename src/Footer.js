import React from "react";
import twitter from "./assets/twitter-icon.svg";

function Footer() {
  return (
    <div className=" py-8 px-6  left-0 right-0 bg-[#101010] flex justify-between font-DDC items-center">
      <div className="text-left">
        <p>BLOCKHIVE</p>
        <p className="text-xs text-off-white/50 mt-4">
          © 2022 Blockhive. All rights reserved.
        </p>
      </div>
      <img src={twitter} />
    </div>
  );
}

export default Footer;
