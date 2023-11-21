import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { BurgerButton, Portal } from '@shared/ui';
import { Language } from '@shared/types/main';

import { HeaderMenu, LanguageSwitch, Search } from './ui';
import { HeaderLinkType } from './ui/header-menu';

const languages = [
  { key: 'en', title: 'en' },
  { key: 'ru', title: 'ru' },
];

interface IProps {
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: (searchValue: string) => void;
  onLanguageClick: (language: Language) => void;
  menu: HeaderLinkType[];
  background?: {
    absolute?: boolean;
    transparent?: boolean;
  };
}

const Header = ({
  onSearchChange,
  onSearchClick,
  onLanguageClick,
  menu,
  background,
}: IProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleLanguageChanged = (language: string) =>
    onLanguageClick(language as Language);

  const isTransparent = background?.transparent;
  const headerBackground = isMenuOpened
    ? 'bg-[#1840A7]'
    : isTransparent
    ? 'transparent'
    : 'bg-[#1840A7]';
  const headerPosition = background?.absolute
    ? 'absolute top-0 inset-x-0'
    : 'static';

  return (
    <header
      className={`${headerBackground} ${headerPosition} transition-colors text-white`}
    >
      <div className="xl:container mx-auto px-3 py-7">
        <div className="flex justify-between items-center gap-3">
          <Link href={'/'}>
            <Image
              src={'/images/logo.png'}
              width={235}
              height={65}
              alt="Quintela/Logo"
              className="w-[180px] lmd:w-[235px]"
              priority
            />
          </Link>

          <div className="hidden lmd:block">
            <Search
              title="Быстрый поиск по сайту"
              onChange={onSearchChange}
              onSearchClick={onSearchClick}
            />
          </div>

          <div className="hidden lmd:flex">
            <LanguageSwitch
              languages={languages}
              onChange={handleLanguageChanged}
            />
          </div>

          <div className="block lmd:hidden">
            <BurgerButton onClick={() => setIsMenuOpened(!isMenuOpened)} />

            <Portal>
              <div
                className={`${
                  !isMenuOpened ? '-translate-x-[100%]' : ''
                } transition-transform absolute inset-x-0 bottom-0 top-[105px] z-30 overflow-y-auto flex flex-col gap-4 py-6 pt-0 bg-[#1840A7] text-white lmd:hidden`}
              >
                <div className="px-6">
                  <Search
                    title="Быстрый поиск по сайту"
                    onChange={onSearchChange}
                    onSearchClick={onSearchClick}
                  />
                </div>
                <HeaderMenu list={menu} />
                <div className="self-center mt-auto px-6">
                  <LanguageSwitch
                    languages={languages}
                    onChange={handleLanguageChanged}
                  />
                </div>
              </div>
            </Portal>
          </div>
        </div>
      </div>

      <div className="h-[0.5px] w-full bg-white hidden lmd:block" />

      <div className="xl:container mx-auto px-3 py-4 hidden lmd:block">
        <HeaderMenu list={menu} />
      </div>
    </header>
  );
};

export default Header;
