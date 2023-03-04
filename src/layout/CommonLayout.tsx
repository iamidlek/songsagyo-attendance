import { Outlet } from 'react-router';
import bgImg from '../assets/bg-spring.jpg';
import mainLogo from '../assets/main-logo.png';

export const CommonLayout = () => {
  return (
    <div className="w-full h-[100vh] mx-auto relative">
      <div
        className="h-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="absolute top-0 py-4 right-0 px-4 w-52 rounded-3xl">
          <img src={mainLogo} alt="songsagyo logo" />
        </div>
        <main className="m-h-[530px] w-4/5 mt-7 bg-white/75 text-center rounded-2xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
