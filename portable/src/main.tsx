import { render } from 'preact';
import { Home } from '@/routes/home';

function App() {
  return <Home />;
}

render(<App />, document.getElementById('app')!);

