import { Outlet } from 'react-router';
import bgImg from '../assets/bg-spring.jpg';
// import mainLogo from '../assets/main-logo.jpg';

export const CommonLayout = () => {
  return (
    <div className="w-full h-[100vh] mx-auto relative">
      <div
        className="h-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <main className="w-4/5 mt-7 bg-white/75 text-center rounded-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
