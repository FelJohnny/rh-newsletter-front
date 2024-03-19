import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Importa o estilo do Quill

const QuillEditor = ({ value, onChange }) => {
  const quillRef = useRef(null);

  useEffect(() => {
    if (quillRef.current) {
      const quill = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block']
          ]
        }
      });

      quill.on('text-change', () => {
        onChange(quill.root.innerHTML);
      });

      if (value) {
        quill.root.innerHTML = value;
      }
    }
  }, [value, onChange]);

  return <div ref={quillRef} />;
};

export default QuillEditor;
