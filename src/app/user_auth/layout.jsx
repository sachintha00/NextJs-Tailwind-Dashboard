import React from "react";
import NextImage from "next/image";
import SideImage from "../_assets/images/auth_page_side_image.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-1/2 h-80 lg:h-screen">
        <NextImage
          src={SideImage}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="flex flex-col items-center justify-between w-full p-8 lg:w-1/2 lg:p-20">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
