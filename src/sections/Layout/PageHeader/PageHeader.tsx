import { Menu } from 'lucide-react';
import logo from '@/assets/pokemon-logo.png';
import { Button } from '@/components';

export default function PageHeader() {
  return (
    <div className="flex justify-between gap-10 lg:gap-20">
      <div className="flex shrink-0 items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="Pokemon logo" className="h-6" />
        </a>
      </div>
      {/* <div></div> */}
      {/* <div></div> */}
    </div>
  );
}
