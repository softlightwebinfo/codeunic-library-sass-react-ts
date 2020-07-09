import React from "react";
import {EditorComponent} from './EditorComponent';
import {EditorData, EditorDataEnum, EditorDataImage} from "../../models";

// @ts-ignore
export default {
    title: "Containers|Editor"
};

export const Default = () => <EditorComponent
    isEditor={true}
    onSave={(e) => {
        console.log(e);
    }}
    data={[
        new EditorData(EditorDataEnum.HEADER, {
            text: "Editor.js",
            level: 2,
        }),
        new EditorData(EditorDataEnum.PARAGRAPH, {
            text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
        }),
        new EditorData(EditorDataEnum.HEADER, {
            text: "Key features",
            level: 3
        }),
        new EditorData(EditorDataEnum.LIST, {
            style: "unordered",
            items: [
                "It is a block-styled editor",
                "It returns clean data output in JSON",
                "Designed to be extendable and pluggable with a simple API"
            ],
        }),
        new EditorData(EditorDataEnum.HEADER, {
            text: "What does it mean «block-styled editor»",
            level: 3
        }),
        new EditorData(EditorDataEnum.PARAGRAPH, {
            text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="ce-Marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
        }),
        new EditorData(EditorDataEnum.PARAGRAPH, {
            text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
        }),
        new EditorData(EditorDataEnum.LINK, {
            text: "https://github.com/softlightwebinfo/codeunic-library-sass-react-ts",
            level: 2,
        }),
        new EditorData(EditorDataEnum.HEADER, {
            text: "What does it mean clean data output",
            level: 3
        }),
        new EditorData(EditorDataEnum.PARAGRAPH, {
            text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
        }),
        new EditorData(EditorDataEnum.PARAGRAPH, {
            text: 'Given data can be used as you want: render with HTML for <code class="ce-InlineCode">Web clients</code>, render natively for <code class="ce-InlineCode">mobile apps</code>, create markup for <code class="ce-InlineCode">Facebook Instant Articles</code> or <code class="ce-InlineCode">Google AMP</code>, generate an <code class="ce-InlineCode">audio version</code> and so on.'
        }),
        new EditorData(EditorDataEnum.PARAGRAPH, {
            text: "Clean data is useful to sanitize, validate and process on the backend."
        }),
        new EditorData(EditorDataEnum.DELIMITER, {}),
        new EditorData(EditorDataEnum.PARAGRAPH, {
            text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
        }),
        new EditorData(EditorDataEnum.IMAGE, new EditorDataImage("https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg")),
        new EditorData(EditorDataEnum.CODE, {
            text: "const para = document.querySelector('p');\n" +
                "para.addEventListener('click', updateName);\n" +
                "function updateName() {\n" +
                "  let name = prompt('Ingresa un nuevo nombre');\n" +
                "  para.textContent = 'Player 1: ' + name;\n" +
                "}"
        }),
    ]}
/>;
