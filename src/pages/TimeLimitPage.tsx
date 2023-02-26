import { useState } from 'react';
import { useNavigate } from 'react-router';

export const TimeLimitPage = () => {
  const [sarangName, setSarangName] = useState('');
  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  const handleInputSarangName = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSarangName(event.target.value);
  };
  const handleInputUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleClickSubmitButton = () => {
    navigate('/weeklytrace');
  };
  return (
    <div className="py-8">
      <div>예배에 일찍 와주셔서 감사해요!</div>
      <input
        className="block mt-5 w-4/5 mx-auto rounded-lg h-11 border-2 border-slate-200 text-center focus:border-slate-400 transition-colors duration-300"
        type="text"
        placeholder="'순장' 의 이름을 입력해 주세요"
        onInput={handleInputSarangName}
        value={sarangName}
      />
      <input
        className="block mt-5 w-4/5 mx-auto rounded-lg h-11 border-2 border-slate-200 text-center focus:border-slate-400 transition-colors duration-300"
        type="text"
        placeholder="'본인' 의 이름을 입력해 주세요"
        onInput={handleInputUserName}
        value={userName}
      />
      <button
        disabled={!(Boolean(sarangName) && Boolean(userName))}
        onClick={handleClickSubmitButton}
        className={
          (Boolean(sarangName) && Boolean(userName)
            ? 'bg-amber-200/90 hover:bg-amber-300 active:bg-amber-300'
            : 'bg-slate-200/50') +
          ' mt-8 w-3/5 h-11 rounded-lg transition-colors duration-300'
        }>
        {sarangName
          ? userName
            ? '제출!'
            : '본인의 이름이 필요해요!'
          : '순장의 이름이 필요해요!'}
      </button>
    </div>
  );
};
