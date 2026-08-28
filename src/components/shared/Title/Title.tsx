import React from "react";
import { twMerge } from "tailwind-merge";

interface ITitleProps {
  children: React.ReactNode;
  className?: string;
  subTitle?: string;
  subTitleClass?: string;
}

const Title = ({
  children,
  className,
  subTitle,
  subTitleClass,
}: ITitleProps) => {
  return (
    <div className=" relative z-50  px-4">
      <h2
        className={twMerge(
          "font-lora text-xl md:text-2xl lg:text-3xl md:font-bold font-semibold leading-tight tracking-tight text-center md:text-left",
          className
        )}
      >
        <span className="bg-linear-to-r from-primary via-primary-hover to-teal-400 bg-clip-text text-transparent">
          {children}
        </span>
      </h2>

      {subTitle && (
        <p
          className={twMerge(
            "text-sm text-center md:text-left pt-2 font-inter leading-relaxed text-text-secondary xl:text-xl lg:mx-0 bg-linear-to-r from-accent via-primary to-teal-800 bg-clip-text text-transparent",
            subTitleClass
          )}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Title;