import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

const password = '부활의 기쁨';

interface HomePageProps {
  setResult: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HomePage: React.FC<HomePageProps> = ({ setResult }) => {
  const [answer, setAnswer] = useState('');

  const navigate = useNavigate();

  const handleInputAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ('Enter' === event.key) {
      handleClickSubmitButton();
    }
  };

  const handleClickSubmitButton = async () => {
    if (isEqual) {
      setResult(isEqual);
      navigate('/timelimit');
      return;
    }
    setAnswer('');
    setResult(false);
  };

  const isEqual = useMemo(() => {
    return answer === password;
  }, [answer]);

  return (
    <div className="py-8">
      <div className="text-lg font-bold">이번 주의 단어는?</div>
      <input
        className="block mt-5 w-4/5 mx-auto rounded-lg h-11 border-2 border-slate-200 text-center focus:border-slate-400 transition-colors duration-300"
        type="text"
        placeholder="단어를 입력해 주세요"
        onInput={handleInputAnswer}
        onKeyDown={handleKeyDown}
        value={answer}
      />
      <button
        disabled={!isEqual}
        onClick={handleClickSubmitButton}
        className={
          (isEqual
            ? 'bg-amber-200/90 hover:bg-amber-300 active:bg-amber-300'
            : 'bg-slate-200/50') +
          ' mt-8 w-3/5 h-11 rounded-lg transition-colors duration-300'
        }>
        {isEqual ? '확인!' : answer ? '단어 확인중..' : '입력 대기중..'}
      </button>
    </div>
  );
};
