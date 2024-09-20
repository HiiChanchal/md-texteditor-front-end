// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarkdownEditor from './components/md.editor';
import HtmlPreview from './components/html.preview';
import './App.css';

function App() {
    const [markdown, setMarkdown] = useState('');
    const [html, setHtml] = useState('');

    useEffect(() => {
        const fetchHTML = async () => {
            if (markdown) {
                const response = await axios.post(`${process.env.REACT_APP_SERVER}/text/path/convert`, { markdown });
                setHtml(response.data.html);
            } else {
                setHtml('');
            }
        };

        fetchHTML();
    }, [markdown]);

    return (
        <div className="app-container">
            <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
            <HtmlPreview html={html} />
        </div>
    );
}

export default App;
