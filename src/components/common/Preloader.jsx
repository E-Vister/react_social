import scss from './Preloader.module.scss';

const Preloader = (props) => {
   return (
       <img className={scss.preloader} src={'/preloader.svg'} alt={'preloader'}/>
   );
}

export default Preloader;


