import React, { useState, useEffect, useRef } from "react";
import "./CustomWysiwyg.sass";

function CustomWysiwyg({ content, onChange }) {
    const [showSource, setShowSource] = useState(false);
    const [editorContent, setEditorContent] = useState(content);
    const editorRef = useRef(null);

    useEffect(() => {
        setEditorContent(content);
    }, [content]);

    const applyStyle = (tag, styleFn) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const parentNode = selection.anchorNode?.parentNode;

        // Unwrap if the selected content is already wrapped in the tag
        if (parentNode?.tagName?.toLowerCase() === tag.toLowerCase()) {
            const parent = parentNode;
            const unwrappedContent = document.createDocumentFragment();

            while (parent.firstChild) {
                unwrappedContent.appendChild(parent.firstChild);
            }

            parent.replaceWith(unwrappedContent);
            handleContentChange();
            return;
        }

        // Wrap selected content with the tag
        const selectedContent = range.extractContents();
        const newElement = document.createElement(tag);
        if (styleFn) styleFn(newElement);
        newElement.appendChild(selectedContent);

        range.insertNode(newElement);
        range.collapse(false);

        handleContentChange();
    };

    const toggleStyle = (styleProp, value) => {
        applyStyle("span", (element) => {
            element.style[styleProp] = value;
        });
    };

    const createLink = () => {
        const url = prompt("Enter URL:");
        if (!url) return;

        applyStyle("a", (a) => {
            a.href = url;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        });
    };

    const insertList = (type) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const selectedContent = range.extractContents();

        const list = document.createElement(type);
        const listItem = document.createElement("li");

        listItem.appendChild(selectedContent);
        list.appendChild(listItem);

        range.insertNode(list);
        range.collapse(false);

        handleContentChange();
    };

    const insertHeading = (level) => {
        const selection = window.getSelection();
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const selectedContent = range.extractContents();

        const heading = document.createElement(`h${level}`);
        heading.appendChild(selectedContent);

        range.insertNode(heading);
        range.collapse(false);

        handleContentChange();
    };

    const handleContentChange = () => {
        const updatedContent = editorRef.current.innerHTML;
        setEditorContent(updatedContent);
        onChange(updatedContent);
    };

    return (
        <div className='wysiwyg-container'>
            <div className='wysiwyg-toolbar'>
                <button onClick={() => toggleStyle("fontWeight", "bold")}>Bold</button>
                <button onClick={() => toggleStyle("fontStyle", "italic")}>Italic</button>
                <button onClick={() => toggleStyle("textDecoration", "underline")}>
                    Underline
                </button>
                <button onClick={createLink}>Add Link</button>
                <button onClick={() => insertHeading(1)}>Heading 1</button>
                <button onClick={() => insertHeading(2)}>Heading 2</button>
                <button onClick={() => insertList("ul")}>Unordered List</button>
                <button onClick={() => insertList("ol")}>Ordered List</button>
                <button
                    onClick={() => setShowSource(!showSource)}
                    style={{ marginLeft: "auto" }}
                >
                    {showSource ? "View Result" : "View Source"}
                </button>
            </div>

            {showSource ? (
                <textarea
                    className='wysiwyg-source'
                    value={editorContent}
                    onChange={(e) => {
                        const updatedContent = e.target.value;
                        setEditorContent(updatedContent);
                        onChange(updatedContent);
                    }}
                />
            ) : (
                <div
                    className='wysiwyg-editor'
                    ref={editorRef}
                    contentEditable
                    dangerouslySetInnerHTML={{ __html: editorContent }}
                    onBlur={handleContentChange}
                ></div>
            )}
        </div>
    );
}

export default CustomWysiwyg;
