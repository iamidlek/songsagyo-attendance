import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { PersonalData } from '../App';

interface TimeLimitPageProps {
  checking: boolean;
  setData: React.Dispatch<React.SetStateAction<PersonalData>>;
}

const sunjanglist = [
  '새가족',
  '엄준상',
  '이승태',
  '이새봄',
  '유형철',
  '김현지',
  '김민규',
  '김환철',
  '박슬지',
  '박진유',
  '허재성',
  '장유진',
  '주효민',
  '고아라',
  '김태현',
  '김예지',
  '이주은',
  '김경숙',
  '김은희',
  '배성광',
  '이세화',
];

export const TimeLimitPage: React.FC<TimeLimitPageProps> = ({
  checking,
  setData,
}) => {
  const [sarangName, setSarangName] = useState('');
  const [userName, setUserName] = useState('');
  const [timeover, setTimeover] = useState(false);

  const navigate = useNavigate();

  const sarangNameValidate = useMemo(() => {
    return sunjanglist.includes(sarangName);
  }, [sarangName]);

  const userNameValidate = useMemo(() => {
    return userName.length >= 2;
  }, [userName]);

  const handleInputSarangName = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSarangName(event.target.value);
  };

  const handleInputUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  let once = false;
  const handleClickSubmitButton = async () => {
    if (once) return;
    once = true;

    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
    const KRT = 9 * 60 * 60 * 1000;
    const koreaTime = new Date(utc + KRT);
    const month = koreaTime.getMonth() + 1;
    const date = koreaTime.getDate();
    const hour = koreaTime.getHours();
    const min = koreaTime.getMinutes();
    const { data } = await axios.post(
      'https://port-0-songsagyo-attendance-server-3kzv72nlemksp4v.sel3.cloudtype.app/attend',
      {
        sarang_name: `${sarangName}${userName}`,
        time: `${month}.${date} ${hour}:${min}`,
      },
    );
    setData(data[0]);
    navigate('/weeklytrace');
  };

  useEffect(() => {
    if (!checking) {
      navigate('/');
    }
    const today = new Date();
    const sunday = today.getDay();
    // 주일이 아닌 날엔 비활성화
    if (sunday) {
      setTimeover(true);
      return;
    }
    const hour = today.getHours();
    const min = today.getMinutes();
    // 주일 14시 1분 이후엔 비활성화
    if (hour > 13 && min > 1) {
      setTimeover(true);
    }
  }, []);

  return (
    <div className="py-8">
      <div>
        {timeover
          ? '다음 주일에 일찍 만나요!'
          : '예배에 일찍 와주셔서 감사해요!'}
      </div>
      <input
        className={
          (sarangNameValidate
            ? 'border-lime-500 focus:border-lime-600'
            : 'border-slate-200 focus:border-slate-400') +
          ' block mt-5 w-4/5 text-center mx-auto rounded-lg h-11 border-2 transition-colors duration-300'
        }
        type="text"
        placeholder={
          timeover ? '예배 시작 이후 이므로' : "'순장' 의 이름을 입력해 주세요"
        }
        onInput={handleInputSarangName}
        value={sarangName}
        disabled={timeover}
      />
      <input
        className={
          (userNameValidate
            ? 'border-lime-500 focus:border-lime-600'
            : 'border-slate-200 focus:border-slate-400') +
          ' block mt-5 w-4/5 mx-auto rounded-lg h-11 border-2 text-center transition-colors duration-300'
        }
        type="text"
        placeholder={
          timeover ? '입력이 불가 합니다.' : "'본인' 의 이름을 입력해 주세요"
        }
        onInput={handleInputUserName}
        value={userName}
        disabled={timeover}
      />
      {timeover ? (
        <button
          disabled={true}
          className="bg-slate-200/50 mt-8 w-3/5 h-11 rounded-lg transition-colors duration-300">
          <div>시간이 지났어요!</div>
        </button>
      ) : (
        <button
          disabled={!(sarangNameValidate && userNameValidate)}
          onClick={handleClickSubmitButton}
          className={
            (sarangNameValidate && userNameValidate
              ? 'bg-amber-200/90 hover:bg-amber-300 active:bg-amber-300'
              : 'bg-slate-200/50') +
            ' mt-8 w-3/5 h-11 rounded-lg transition-colors duration-300'
          }>
          {sarangNameValidate
            ? userNameValidate
              ? '제출!'
              : '본인의 이름이 필요해요!'
            : '순장의 이름이 필요해요!'}
        </button>
      )}
    </div>
  );
};
