import * as React from "react";


const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({  type, ...props }, ref) => {
    return (
      <input
      type={type}
      className="flex bg-transparent file:text-sm file:font-medium placeholder:text-black disabled:cursor-not-allowed disabled:opacity-50 text-12 md:text-14 focus:outline-none focus:ring-2 focus:ring-transparent"
      placeholder="Email"
      ref={ref}
      {...props}
    />
    );
  }
);

Input.displayName = "Email";

export { Input };
