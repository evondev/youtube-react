import { cloneElement, type ComponentProps, type HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  variant: ButtonVariant;
  size: ButtonSize;
  iconLeft?: React.ReactElement<HTMLAttributes<HTMLElement>, string>;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "ghost",
  size = "lg",
  iconLeft,
  className,
  isLoading = false,
  ...buttonProps
}: ButtonProps) {
  const variantClassNames: Record<ButtonVariant, string> = {
    primary: "bg-orange-400 text-white",
    secondary: "bg-black text-white",
    ghost: "bg-transparent text-black border border-current",
  };

  const iconVariantClassNames: Record<ButtonVariant, string> = {
    primary: "text-white stroke-current",
    secondary: "text-white stroke-current",
    ghost: "stroke-current",
  };

  const sizeClassNames: Record<ButtonSize, string> = {
    sm: "text-sm px-2",
    md: "text-base px-4",
    lg: "text-lg px-6",
  };

  const iconSizeClassNames: Record<ButtonSize, string> = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  const loadingSizeClassNames: Record<ButtonSize, string> = {
    sm: "size-4",
    md: "size-5",
    lg: "size-6",
  };

  const { className: iconLeftClassName, ...iconLeftProps } =
    iconLeft?.props || {};

  const iconLeftClone = iconLeft
    ? cloneElement(iconLeft, {
        className: twMerge(
          iconSizeClassNames[size],
          iconVariantClassNames[variant],
          iconLeftClassName
        ),
        ...iconLeftProps,
      })
    : null;

  const loading = (
    <div
      className={twMerge(
        "size-5 border-2 border-current border-t-transparent border-b-transparent animate-spin rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
        loadingSizeClassNames[size]
      )}
    ></div>
  );

  return (
    <button
      className={twMerge(
        "flex items-center justify-center gap-2 cursor-pointer py-2 px-4 rounded-full bg-gray-200 font-medium border border-transparent disabled:pointer-events-none disabled:select-none disabled:opacity-50 relative",
        variantClassNames[variant],
        sizeClassNames[size],
        className
      )}
      {...buttonProps}
    >
      {isLoading ? (
        loading
      ) : (
        <>
          {iconLeftClone}
          {children}
        </>
      )}
    </button>
  );
}
