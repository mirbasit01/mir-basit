import React from 'react'

 const Footer = () => {
  return (
    // <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
    //   <div className="text-white-500 flex gap-2">
    //     <p>Terms & Conditions</p>
    //     <p>|</p>
    //     <p>Privacy Policy</p>
    //   </div>

    //   <div className="flex gap-3 ">
    //     <div className="social-icon">
    //       <a href="https://github.com/mirbasit01">
    //       <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />

    //       </a>
        
    //     </div>
    //     <div className="social-icon">
    //       {/* <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" /> */}
    //       <a href='https://www.linkedin.com/in/abdul-basit-17a689234/'>
    //       <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png" alt="twitter" className="w-1/2 h-1/2" />
    //       </a>
    //     </div>
    //     <div className="social-icon">
    //       <a href="https://www.instagram.com/iamabdulbasit___/">
    //       <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />

    //       </a>
    //     </div>
    //   </div>

    //   <p className="text-white-500">© 2024 Abdul Basit. All rights reserved.</p>
    // </footer>
    
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex flex-col md:flex-row justify-between items-center gap-5">
  {/* Terms and Privacy Policy */}
  <div className="text-white-500 flex gap-2 text-center md:text-left">
    <p>Terms & Conditions</p>
    <p>|</p>
    <p>Privacy Policy</p>
  </div>

  {/* Social Media Icons */}
  <div className="flex gap-3 justify-center">
    <div className="social-icon">
      <a href="https://github.com/mirbasit01">
        <img src="/assets/github.svg" alt="github" className="w-8 h-8" />
      </a>
    </div>
    <div className="social-icon">
      <a href="https://www.linkedin.com/in/abdul-basit-17a689234/">
        <img
          src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
          alt="linkedin"
          className="w-8 h-8"
        />
      </a>
    </div>
    <div className="social-icon">
      <a href="https://www.instagram.com/iamabdulbasit___/">
        <img src="/assets/instagram.svg" alt="instagram" className="w-8 h-8" />
      </a>
    </div>
  </div>

  {/* Copyright Text */}
  <p className="text-white-500 text-center md:text-right">
    © 2024 Abdul Basit. All rights reserved.
  </p>
</footer>

  );
};

export default Footer;