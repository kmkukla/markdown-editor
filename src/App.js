import React from 'react';
import ReactMarkdown from 'react-markdown';
import useStickyState from './useStickyState';
import { initialMarkdown } from './initialMarkdown';
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useStickyState(initialMarkdown, 'markdown');

  const handleChange = (e) => setMarkdown(e.target.value);

  return (
    <div className="app">
      <textarea value={markdown} onChange={handleChange} spellcheck="false" />

      <ReactMarkdown className="preview" children={markdown} />
    </div>
  );
};

export default App;
