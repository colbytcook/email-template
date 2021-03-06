import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
let ckEditor

module.exports = class TextEdit {
  constructor(el){
    this.el = el
    let editorValue
    ckEditor = el.querySelector('.ck-editor')
    if(ckEditor === null){
      ClassicEditor.create(this.el.getElementsByTagName('textarea')[0], {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo']
      })
      .then((editor) => {
          editorValue = editor
      })
      .catch((error) => {
          console.error( error )
      })
    }
  }
}
