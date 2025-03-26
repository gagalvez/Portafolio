/* eslint-disable no-unused-vars */
import CssIcon from "./icons/Css";
import HtmlIcon from "./icons/HtmlIcon";
import "../css/Badges.css";
import JsIcon from "./icons/JS";
import DjangoIcon from "./icons/Django";
import PythonIcon from "./icons/Python";
import ReactIcon from "./icons/React";

const Badge = [
  {
    id: "css",
    icon: CssIcon,
  },
  {
    id: "html",
    icon: HtmlIcon,
  },
  {
    id: "js",
    icon: JsIcon,
  },
  {
    id: "django",
    icon: DjangoIcon,
  },
  {
    id: "python",
    icon: PythonIcon,
  },
  {
    id: "react",
    icon: ReactIcon,
  },
];

const Badges = () => (
  <div className="icon-div">
    <ul>
      {Badge.map(({id, icon: Icon}) =>
        <li key={id}>
          <Icon size="80"/>
        </li>
      )}
    </ul>
  </div>
)

export default Badges;

