interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="px-4 py-2 border rounded-md bg-sky-700 hover:bg-sky-600 text-white"
    >
      {children}
    </button>
  );
};
