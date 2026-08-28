import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "group/btn cursor-pointer bg-linear-to-tl from-primary to-primary-hover shadow-[0px_4px_32px_0_rgba(99,102,241,.10)] py-2 border border-accent-soft text-muted text-sm md:text-lg font-inter font-medium",
        className
      )}
      {...rest}
    >
      <div className="relative overflow-hidden">
        <p className="group-hover/btn:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
        <p className="absolute top-7 left-0 group-hover/btn:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
      </div>
    </button>
  );
};

export default Button;