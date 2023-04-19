import React, { useState, useEffect, useCallback } from 'react';
import { EditorState } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './TextEditor.css'
import { uploadPostImage } from '../utils/PostApi';


const TextEditor = ({ setConvertedContent }) => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  useEffect(() => {
    let currentContentAsHTML = stateToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }, [editorState, setConvertedContent]);

  const uploadImage = useCallback(async (image) => {
    const formData = new FormData();
    formData.append('image', image);

    const data = await uploadPostImage(formData);

    return {
      data: {
        link: data
      }
    };
  }, []);

  return (
    <div id='text-editor'
      style={{
        padding: '0.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        plugins={[]}
        toolbar={{
          options: ['inline', 'blockType', 'list', 'link', 'emoji', 'image'],
          image: {
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: uploadImage,
            previewImage: false,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: 'auto',
              width: 'auto',
            },
          },
        }}
      />
    </div >
  );
};


export default TextEditor;