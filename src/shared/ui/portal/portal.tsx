import { createPortal } from 'react-dom';

interface IProps {
  children: JSX.Element;
}

const Portal = ({ children }: IProps) => {
  return createPortal(
    children,
    document.getElementById('portals') as HTMLElement
  );
};

export default Portal;
