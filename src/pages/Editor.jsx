import * as React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { Header } from "../components";
import { EditorData } from "../data/dummy";

const Editor = () => {
  //defining the settings here to be used inside syncfusion richtextcomponent
  const toolbarSettings = {
    items: [
      "Bold",
      "Italic",
      "Underline",
      "StrikeThrough",
      "FontName",
      "FontSize",
      "FontColor",
      "BackgroundColor",
      "LowerCase",
      "UpperCase",
      "|",
      "Formats",
      "Alignments",
      "OrderedList",
      "UnorderedList",
      "Outdent",
      "Indent",
      "|",
      "CreateLink",
      "Image",
      "|",
      "ClearFormat",
      "Print",
      "SourceCode",
      "FullScreen",
      "|",
      "Undo",
      "Redo",
    ],
  };
  const quickToolbarSettings = {
    image: [
      "Replace",
      "Align",
      "Caption",
      "Remove",
      "InsertLink",
      "OpenImageLink",
      "-",
      "EditImageLink",
      "RemoveImageLink",
      "Display",
      "AltText",
      "Dimension",
    ],
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent
        height={600}
        toolbarSettings={toolbarSettings}
        quickToolbarSettings={quickToolbarSettings}
      >
        <EditorData />
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
