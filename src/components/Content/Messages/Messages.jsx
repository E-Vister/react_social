import scss from './Messages.module.scss';
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
      <div className={scss.messages}>
          <div className={scss.dialog}>
             <NavLink to={`/messages/1`}>John Garner</NavLink>
          </div>
          <div className={scss.dialog}>
              <NavLink to={`/messages/2`}>Jane Heaton</NavLink>
          </div>
          <div className={scss.dialog}>
              <NavLink to={`/messages/3`}>Alex Drake</NavLink>
          </div>
          <div className={scss.dialog}>
              <NavLink to={`/messages/4`}>Jakub Mathis</NavLink>
          </div>
          <div className={scss.dialog}>
              <NavLink to={`/messages/5`}>Elisabeth Plummer</NavLink>
          </div>
      </div>
    );
}

export default Messages;