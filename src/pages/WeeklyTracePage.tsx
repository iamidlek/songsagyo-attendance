import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonalData } from '../App';
import { AttendCircle } from '../components/AttendCircle';

interface WeeklyTracePageProps {
  checking: boolean;
  data: PersonalData;
}

const march = ['3.12', '3.19', '3.26', '4.5'];
const april = ['4.12', '4.19', '4.26', '5.2'];

export const WeeklyTracePage: React.FC<WeeklyTracePageProps> = ({
  checking,
  data,
}) => {
  const [attendInfo, setAttendInfo] = useState<{ [key: string]: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!checking) {
      navigate('/');
    }
    const attend: { [key: string]: string } = {};
    data?.timelist?.map((time) => {
      const [date, hourmin]: string[] = time.split(' ');
      attend[date] = hourmin;
    });
    setAttendInfo(attend);
  }, []);

  const fortest = attendInfo?.['3.5'];
  return (
    <div className="fortest relative ">
      <div className="flex gap-2 justify-around">
        <div className="w-1/2 bg-gradient-to-r from-amber-400 to-amber-500  rounded-lg py-3 px-2 font-bold">
          <div className="border-dotted border-[0.8rem] border-white mx-auto flex flex-wrap max-w-[17.8rem] sm:max-w-[80rem] pt-3 pb-8 gap-y-8 justify-around items-center">
            {march.map((date) => {
              if (!attendInfo) return;
              const time = attendInfo[date];
              return (
                <AttendCircle
                  key={date}
                  color="border-amber-300 bg-orange-100/90"
                  date={date}
                  time={time}
                  attend={Boolean(time)}
                />
              );
            })}
          </div>
        </div>
        <div className="w-1/2 bg-gradient-to-r from-red-200 to-pink-300 rounded-lg py-3 px-2 font-bold">
          <div className="border-dotted border-[0.8rem] border-white mx-auto flex flex-wrap max-w-[17.8rem] sm:max-w-[57rem] pt-3 pb-8 gap-y-8 justify-around items-center">
            {april.map((date) => {
              if (!attendInfo) return;
              const time = attendInfo[date];
              return (
                <AttendCircle
                  key={date}
                  color="border-red-300 bg-red-100/90"
                  date={date}
                  time={time}
                  attend={Boolean(time)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="fortest flex flex-col items-center w-32 h-40 bg-slate-50 absolute top-36 left-16">
        <div>테스트 입니다.</div>
        <AttendCircle
          color="border-amber-300 bg-orange-100/90"
          date={'3.5'}
          time={fortest}
          attend={Boolean(fortest)}
        />
      </div>
    </div>
  );
};
