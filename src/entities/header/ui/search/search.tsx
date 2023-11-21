import { ChangeEvent, useRef } from 'react';

import { Icons } from '@shared/ui';

interface IProps {
  title: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: (searchValue: string) => void;
}

const Search = ({ title, onChange, onSearchClick }: IProps) => {
  const input = useRef<HTMLInputElement | null>(null);

  const handleSearchClicked = () => {
    const searchValue = input.current?.value;
    if (searchValue) onSearchClick(searchValue);
  };

  return (
    <div>
      <span className="font-[600]">{title}</span>

      <div className="flex gap-4 items-center">
        <input
          type="text"
          onChange={onChange}
          className="bg-transparent border-b border-b-white outline-none p-1 min-w-[262px] w-full lmd:w-auto"
          ref={input}
        />
        <button
          onClick={handleSearchClicked}
          className="hover:bg-white/20 active:bg-white/30 rounded"
        >
          <Icons.SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Search;
