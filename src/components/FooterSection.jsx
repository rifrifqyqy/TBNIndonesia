export default function FooterSection() {
  return (
    <div className="flex bg-[#3D4C5E] text-white py-12 mt-8 lg:mt-24">
      <div className="mx-8 grid gap-4 grid-row-3 lg:grid-cols-3 lg:mx-24">
        <div>
          <div className="flex bg-white py-2 max-w-fit px-5 rounded-lg mx-auto lg:mx-0">
            <img src="/images/logo.png" alt="" className="w-[100px] lg:w-full" />
          </div>
        </div>
        <div>
          <h1 className=" text-[16px] font-medium text-center lg:text-[32px]">Contact Us</h1>
          <p className="text-gray-300 text-[14px] lg:text-[16px] text-center lg:text-left mt-3">
            Indonesia Team Impact HubLippo Thamrin Lt.5 #0503Jl. M.H.Thamrin No.20, MentengJakarta Pusat 10350, IndonesiaWhatsApp : +62823 1000 1908Email : info@tbnindonesia.org
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[16px] font-medium text-center lg:text-[32px]">Connect with Us</h1>
          <div className="flex gap-4 justify-center">
            <img src="/images/wa.svg" alt="" className="w-[24px] " />
            <img src="/images/yt.svg" alt="" className="w-[30px] " />
            <img src="/images/linkedin.svg" alt="" className="w-[24px] " />
            <img src="/images/insta.svg" alt="" className="w-[24px] " />
          </div>
          <h2 className="text-center text-gray-300 text-[14px] lg:text-[16px]">© 2023 TBN Indonesia. All Rights Reserved.</h2>
        </div>
      </div>
    </div>
  );
}
