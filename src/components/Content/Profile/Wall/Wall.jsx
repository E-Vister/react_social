import scss from './Wall.module.scss';
import Post from "./Post/Post";

const Wall = () => {
    return (
        <div className={scss.wall}>
            Feed
            <div className={scss.new_post}>New Post</div>
            <div className={scss.posts}>
                <Post message={`Hey. How are you feeling today?`} likesCount={20} nickname={`John`}/>
                <Post message={`I finished my album. Go check it out!`} likesCount={35} nickname={'Michael'}/>
                <Post message={`I'm going on a picnic. Do you wanna join?`} likesCount={1} nickname={'Alex'}/>
            </div>
        </div>
    );
}

export default Wall;