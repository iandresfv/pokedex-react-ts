import { PageHeader } from './PageHeader';
import { LeftBar } from './LeftBar';

export default function Layout() {
  return (
    <div className="container">
      <PageHeader />
      <LeftBar />
    </div>
  );
}
