import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PersonalData } from '../App';
import { AttendCircle } from '../components/AttendCircle';

interface WeeklyTracePageProps {
  checking: boolean;
  data: PersonalData;
}

const march = ['4.2', '4.9', '4.16', '4.23'];
const april = ['4.30', '5.7', '5.14', '5.21'];

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
    setAttendInfo(data.time_json);
  }, []);

  return (
    <div className="flex gap-2 justify-around">
      <div className="w-1/2 bg-gradient-to-r from-amber-400 to-amber-500  rounded-lg py-3 px-2 font-bold">
        <div className="border-dotted border-[0.5rem] border-white mx-auto flex flex-wrap max-w-[17.8rem] sm:max-w-[80rem] pt-3 pb-8 gap-y-8 justify-around items-center">
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
        <div className="border-dotted border-[0.5rem] border-white mx-auto flex flex-wrap max-w-[17.8rem] sm:max-w-[57rem] pt-3 pb-8 gap-y-8 justify-around items-center">
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
  );
};
