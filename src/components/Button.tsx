import "../styles/global.css";

interface ButtonProps {
  href?: string;
  text: string;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

const Button = ({
  href,
  text,
  variant = "primary",
  fullWidth = false,
}: ButtonProps) => {
  const Component = href ? "a" : "button";

  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return {
          border: "border-white",
          text: "text-white",
          background: "bg-transparent",
        };
      default:
        return {
          border: "border-black",
          text: "text-black",
          background: "bg-transparent",
        };
    }
  };

  const styles = getVariantStyles();
  return (
    <div
      className={`flex justify-center items-center ${
        fullWidth ? "w-full" : ""
      }`}
    >
      <Component
        href={href}
        className={`relative group ${fullWidth ? "w-full" : ""}`}
      >
        {/* Outer border */}
        <div
          className={`absolute inset-0 rounded-full border-2 ${styles.border}`}
        ></div>

        {/* Inner border */}
        <div
          className={`relative px-4 py-2 rounded-full border-2 ${
            styles.border
          } m-1 ${styles.background} ${fullWidth ? "w-full text-center" : ""}`}
        >
          <p className={`font-extrabold ${styles.text}`}>{text}</p>
        </div>
      </Component>
    </div>
  );
};

export default Button;
