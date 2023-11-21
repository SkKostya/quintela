import { Header } from '@entities';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  children?: JSX.Element;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <div className="leading-140">
      <Header
        onSearchChange={(e) => null}
        onLanguageClick={(language) => null}
        onSearchClick={(searchValue) => null}
        menu={[
          { href: '/', title: 'О компании' },
          { href: '/', title: 'Деятельность' },
          { href: '/', title: 'Персонал' },
          { href: '/', title: 'Клиенту' },
          { href: '/', title: 'Акционеру и инвестору' },
          { href: '/', title: 'Пресс-центр' },
          { href: '/', title: 'Торги' },
          { href: '/', title: 'Контакты' },
        ]}
      />

      {children && <main>{children}</main>}

      <footer>
        <div className="flex">
          <Link href={'/'}>
            <Image
              src={'/images/logo.png'}
              width={235}
              height={65}
              alt="Quintela/Logo"
              priority
            />
          </Link>

          <nav className="flex">
            <ul></ul>
            <ul></ul>
          </nav>

          <address className="not-italic">
            <b className="font-bold">Местонахождение</b>
            <p className="mt-4">
              Ante quam egestas tristique a malesuada massa aliquam ultrices. Et
              tellus nec.
            </p>
          </address>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
