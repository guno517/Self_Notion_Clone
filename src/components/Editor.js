export default function Editor({ $target, initialState }) {
  const $editorContainer = document.createElement("div");

  $target.appendChild($editorContainer);

  this.state = initialState;

  this.setState = (nextstate) => {
    this.state = nextstate;
  };

  this.render = () => {};

  this.render();
}
