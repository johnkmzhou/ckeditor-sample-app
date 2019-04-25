import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import List from '@ckeditor/ckeditor5-list/src/list'
import Link from '@ckeditor/ckeditor5-link/src/link'
import Placeholder from "ckeditor5-placeholder"
import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'

import './App.css';

const App = () => {
  const initialData = "<p>Hello from CKEditor 5!</p>";
  let appEditor;

  const insertText = () => {
    appEditor.model.change(writer => {
      writer.insertText('{Insert Text}', appEditor.model.document.selection.getFirstPosition());
    });
  }

  const insertHtml = () => {
    const content = 'A <strong>paragraph</strong> with <a href="https://ckeditor.com">some link</a>.';
    const viewFragment = appEditor.data.processor.toView(content);
    const modelFragment = appEditor.data.toModel(viewFragment);
    appEditor.model.insertContent(modelFragment);
  }

  const submitData = () => {
    console.log(appEditor.getData());
  }

  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <button onClick={insertText}>Insert Text</button>
      <button onClick={insertHtml}>Insert HTML</button>
      <CKEditor
        config={{
          plugins: [Essentials, Heading, Paragraph, Bold, Italic, BlockQuote, Alignment, List, Link, Table, TableToolbar, Placeholder],
          toolbar: ['Heading', '|', 'Bold', 'Italic', 'Alignment', 'BulletedList', 'NumberedList', 'BlockQuote', 'Link', 'InsertTable', 'Undo', 'Redo', 'Placeholder'],
          placeholderProps: {
            types: ["First Name", "Last Name", "Date"]
          }
        }}
        editor={InlineEditor}
        data={initialData}
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          appEditor = editor;
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={editor => {
          console.log('Blur.', editor);
        }}
        onFocus={editor => {
          console.log('Focus.', editor);
        }}
      />
      <button onClick={submitData}>Submit</button>
    </div>
  );
}

export default App;
