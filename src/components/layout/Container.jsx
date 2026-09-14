import PropTypes from "prop-types";

export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl flex-1 px-2 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};