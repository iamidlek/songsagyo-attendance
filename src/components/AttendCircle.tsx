import attendStamp from '../assets/attend-stamp.png';

interface AttendCircleProps {
  color: string;
  attend: boolean;
  date: string;
  time: string | undefined;
}

export const AttendCircle: React.FC<AttendCircleProps> = ({
  color,
  attend,
  date,
  time,
}) => {
  return (
    <div>
      <div
        className={
          color +
          ' relative w-24 h-24 rounded-full border-4 flex justify-center items-center'
        }>
        <div className={attend ? 'opacity-70' : ''}>{date}</div>
        {attend ? <img className="absolute" src={attendStamp} /> : ''}
        {time ? (
          <div className="absolute -bottom-7 font-bold text-sm">
            {date} {time}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
