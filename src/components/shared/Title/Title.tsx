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
    <div className=" relative z-600  px-4">
      <h2
        className={twMerge(
          "font-lora text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl",
          className
        )}
      >
        <span className="bg-linear-to-r from-accent via-teal-900 to-teal-400 bg-clip-text text-transparent dark:to-text-primary font-inter">
          {children}
        </span>
      </h2>

      {subTitle && (
        <p
          className={twMerge(
            "text-sm leading-relaxed text-text-secondary sm:text-xl lg:mx-0",
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