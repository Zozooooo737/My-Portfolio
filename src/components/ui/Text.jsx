import PropTypes from "prop-types";

export default function Text({ children, spacing = "none" }) {
  const spacingClasses = {
    none: "",
    sm: "mb-2",
    md: "mb-4",
    lg: "mb-6",
    xl: "mb-8",
  };

  return (
    <p
      className={`px-1 text-justify text-sm md:pl-2 md:text-base ${spacingClasses[spacing]}`}
    >
      {children}
    </p>
  );
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(["none", "sm", "md", "lg", "xl"]),
};
