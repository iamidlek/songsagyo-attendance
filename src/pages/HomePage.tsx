import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

const password = '송사교';

export const HomePage = () => {
  const [answer, setAnswer] = useState('');

  const navigate = useNavigate();

  const handleInputAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleClickSubmitButton = () => {
    if (isEqual) {
      // 전역상태에 isEqual값을 저장하여 그냥 라우터 넘어가는 것을 방지
      // store 값 초기화도 필수
      navigate('/timelimit');
      return;
    }
    setAnswer('');
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
        {isEqual ? '확인!' : answer ? '불일치' : '입력 확인중..'}
      </button>
    </div>
  );
};
