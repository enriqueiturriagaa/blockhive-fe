import React from "react";

function TenantOptions({ accounts, setAccounts }) {
  return (
    // Left Side
    <div className="flex">
      <div className="w-1/2 m-4">
      <p className="font-DDC text-xl mb-6 ">Pay Your Rent</p>
      <div className="font-DDC text-lg    bg-[#A77011]/20 px-4 py-3 rounded-[1px] border-2 border-[#C89731]/20">
        
        <div className="inline-block border-2  border-[#C89731]  p-1 rounded-full  mb-2 ">
          <p className="py-2 px-4 bg-black/70 rounded-full font-DDC ">
            Property ID: 0Xa77145633
          </p>
        </div>
        <p className="mt-8">Outstanding Balance:</p>
       
    <p className=" border-2 border-[#C89731] rounded my-2 py-2 text-xl bg-[#6C2E2E] ">1,200 $BHV</p>
    <p className="text-xs text-white/30">Pay your rent of get kicked out ser!</p>
    <p className="mt-4 text-xs font-sans text-white/30 p-4 border rounded bg-black border-[#C89731]">By investing in the property you ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada lacus sit amet lorem lacinia, a finibus erat lobortis. Fusce mollis metus nunc, iaculis malesuada urna blandit rhoncus. Nulla luctus eu ex et faucibus. Vestibulum vehicula velit vitae libero maximus posuere vitae nec sem. Ut at enim nisi. </p>
    <button
          onClick={""}
          className="font-DDC border-2 mt-4 border-[#C89731]  p-1 rounded "
        >
          <div className=" py-2 px-4 bg-[#A77011]/30 rounded-[1px] hover:bg-[#A77011]/50 ease-in duration-100 text-sm">
Pay Outstanding balance          </div>
        </button>
  
        
      </div>
    </div>
    {/* Right Side */}
    <div className=" w-1/2 m-4"><p className="font-DDC text-xl mb-6 ">Other Actions:</p>
      <div className="font-DDC text-lg bg-[#A77011]/20 px-4 py-3 rounded-[1px] border-2 border-[#C89731]/20">
        <p className="font-DDC inline-block mb-4 text-xs text-white/80 ">
          Don't live here anymore?
        </p>
        <div className="  ">
        <button
          onClick={""}
          className="font-DDC border-2  border-[#C89731]  p-1 rounded "
        >
          <div className=" py-2 px-4 bg-[#A77011]/30 rounded-[1px] hover:bg-[#A77011]/50 ease-in duration-100 text-sm">
            Check Out of this property
          </div>
        </button>
        <p className="text-xs text-white/30 mt-8 mb-2">By checking out you agree to leave the property within 24 hrs </p>
        </div>
      </div></div>
    </div>
  );
}

export default TenantOptions;
