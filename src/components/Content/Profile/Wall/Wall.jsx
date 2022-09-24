import scss from './Wall.module.scss';
import SubmitPostContainer from "./SubmitPost/SubmitPostContainer";

const Wall = (props) => {
    return (
        <div className={scss.wall}>
            Feed
            <SubmitPostContainer/>
            <div className={scss.posts}>
                {props.postsElements}
            </div>
        </div>
    );
}

export default Wall;