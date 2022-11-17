import { request } from "./api.js";
import Editor from "./components/Editor.js";
import SidebarList from "./components/SidebarList.js";

export default function App({ $target }) {
  const $appPage = document.createElement("div");
  $appPage.className = "notion-app";

  $target.appendChild($appPage);

  this.state = {
    documents: [], // 전체 list를 담을 배열
    specificDocument: {}, // 특정 document {} 객체가 들어감
    // breadcrumb에 쓰일 배열,
    breadcrumb: {
      parentNode: null, // id랑 title 정도 들어가기?
      currNode: null,
    },
  };

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const sidebarList = new SidebarList({
    $target: $appPage,
    initialState: this.state,
  });

  const editor = new Editor({
    $target: $appPage,
    initialState: this.state,
  });

  const fetchRootDocuments = async () => {
    const rootDocuments = await request("/");
    this.setState({ ...this.state, documents: rootDocuments });
    sidebarList.setState(this.state);
  };

  const fetchSpecificDocument = async (id) => {
    const specificDoc = await request(`/${id}`);
    console.log(specificDoc);
  };

  this.route = () => {
    // const { pathname } = window.location;
    // if (pathname === "/") {
    //   // sidebarList.render();
    // } else if (pathname.indexOf("/documents/") === 0) {
    //   // Editor.render();
    // }
  };

  fetchRootDocuments();
  fetchSpecificDocument(50475);
}
