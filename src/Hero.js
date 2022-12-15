import React from "react";
import bee from "./assets/bee-illustration.svg";

function Hero({ accounts, setAccounts }) {
  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }
  return (
    <div className="self-stretch  max-w-[60%] flex items-center justify-center mx-auto py-12">
      <div className="place-content-center">
        <img src={bee} className="mx-auto mb-4" />
        <p className="font-DDC mb-4 text-[#5E6B7E]">INTRODUCING BLOCKHIVE</p>
        <h1 className="text-6xl font-DDC mb-4">
          Fractionalized on-chain Real Estate investing
        </h1>
        <p className="font-sans text-off-white mb-8">
          <mark class="p-1 font-DDC text-white bg-[#A77011]/30  ">
            BLOCKHIVE
          </mark>{" "}
          delivers a platform that provides real estate investors with access to
          blockchain-based investment opportunities.
        </p>
        <button
          onClick={connectAccount}
          className="font-DDC border-2  border-[#C89731]  p-1 rounded "
        >
          <div className=" py-2 px-4 bg-[#A77011]/30 rounded hover:bg-[#A77011]/50 ease-in duration-100">
            Connect Metamask
          </div>
        </button>
      </div>
    </div>
  );
}

export default Hero;
