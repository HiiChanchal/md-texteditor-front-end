import React from 'react';

const MarkdownEditor = ({ markdown, setMarkdown }) => {
    return (
        <div className="markdown-editor">
            <h2>Markdown Input</h2>
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                placeholder="Type your markdown here..."
            />
        </div>
    );
};

export default MarkdownEditor;
