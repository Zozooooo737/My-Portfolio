export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-6xl flex-1 px-4 ${className}`}>
      {children}
    </div>
  );
}
