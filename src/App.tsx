import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CommonLayout } from './layout/CommonLayout';
import { HomePage } from './pages/HomePage';
import { TimeLimitPage } from './pages/TimeLimitPage';
import { WeeklyTracePage } from './pages/WeeklyTracePage';

export interface PersonalData {
  listcount: number;
  sarang_name: string;
  timelist: string[];
}

function App() {
  const [cerberus, setCerberus] = useState(false);
  const [personalData, setPersonalData] = useState<PersonalData>({
    listcount: 0,
    sarang_name: '',
    timelist: [],
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<HomePage setResult={setCerberus} />} />
          <Route
            path="/timelimit"
            element={
              <TimeLimitPage checking={cerberus} setData={setPersonalData} />
            }
          />
          <Route
            path="/weeklytrace"
            element={
              <WeeklyTracePage checking={cerberus} data={personalData} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
