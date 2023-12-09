import styles from './LeftScreen.module.scss';

interface LeftScreenProps {
  name: string | undefined;
  image: string | undefined;
}

export const LeftScreen: React.FC<LeftScreenProps> = ({ name, image}) => {
  return (
    <div className={styles.leftScreen}>
        { image && <img src={image} alt={name} /> }
        { name && <h1>{name}</h1> }
    </div>
  );
};
