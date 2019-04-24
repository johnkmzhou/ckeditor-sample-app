import React, { useState } from 'react';
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
//import Placeholder from "ckeditor5-placeholder";

import './App.css';

const App = () => {
  const [editorData, setEditorData] = useState("<p>Hello from CKEditor 5!</p>");

  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        config={{
          plugins: [Essentials, Heading, Paragraph, Bold, Italic, BlockQuote, Alignment, List, Link],
          toolbar: ['Heading', '|', 'Bold', 'Italic', 'Alignment', 'List', 'ListUI', 'BlockQuote', 'Undo', 'Redo'],
          removePlugins: ['Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload']
        }}
        editor={InlineEditor}
        data={editorData}
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
          console.log({ event, editor, data });
        }}
        onBlur={editor => {
          console.log('Blur.', editor);
        }}
        onFocus={editor => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  );
}

export default App;
