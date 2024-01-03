import { Bell, Menu, Upload, User } from 'lucide-react';
import logo from '@/assets/pokemon-logo.png';
import { Button } from '@/components';

export default function PageHeader() {
  return (
    <div className="mx-4 mb-6 flex justify-between gap-10 pt-2 lg:gap-20">
      <div className="flex shrink-0 items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="Pokemon logo" className="h-12" />
        </a>
      </div>
      {/* <div></div> */}
      <div className="flex shrink-0 md:gap-2 ">
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
}
