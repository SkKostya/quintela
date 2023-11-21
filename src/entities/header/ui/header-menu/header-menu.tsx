import Link from 'next/link';

export type HeaderLinkType = {
  href: string;
  title: string;
};

interface IProps {
  list: HeaderLinkType[];
}

const HeaderMenu = ({ list }: IProps) => {
  return (
    <nav>
      <ul className="flex justify-between flex-col lmd:flex-row">
        {list.map((link) => (
          <li key={link.href + link.title}>
            <Link
              href={link.href}
              className="block py-4 px-6 hover:bg-white/20 active:bg-white/30 lmd:p-2 lmd:mx-0 lmd:rounded transition-colors"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
