import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CommonLayout } from './layout/CommonLayout';
import { HomePage } from './pages/HomePage';
import { TimeLimitPage } from './pages/TimeLimitPage';
import { WeeklyTracePage } from './pages/WeeklyTracePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/timelimit" element={<TimeLimitPage />} />
          <Route path="/weeklytrace" element={<WeeklyTracePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
