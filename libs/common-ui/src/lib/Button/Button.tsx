import { MouseEventHandler } from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-800 text-slate-200 py-2 px-2 rounded-sm hover:bg-blue-700"
    >
      Click me
    </button>
  );
};
