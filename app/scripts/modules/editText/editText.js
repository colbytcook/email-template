import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

module.exports = class TextEdit {
  constructor(el){
    this.el = el
    let editorValue
    ClassicEditor.create(this.el.getElementsByTagName('textarea')[0], {
      toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo']
    })
    .then((editor) => {
        console.log( 'Editor was initialized', editor )
        editorValue = editor
    })
    .catch((error) => {
        console.error( error )
    })
  }
}
