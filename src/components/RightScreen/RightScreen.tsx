
import { AbilityInfo, MoveInfo, PokeType, SpritesInfo } from '../../types/PokeInfo';
import styles from './RightScreen.module.scss';

interface RightScreenProps {
    abilities: Array<AbilityInfo> | undefined;
    moves: Array<MoveInfo> | undefined;
    sprites: SpritesInfo | undefined;
    types: Array<PokeType> | undefined;
  }
  
  export const RightScreen: React.FC<RightScreenProps> = ({ abilities, moves, sprites, types }) => {
    const getSprites = () => {
        const objKeys = Object.keys(sprites || []) as Array<keyof SpritesInfo>;
        return objKeys.map((key: keyof SpritesInfo) => sprites && typeof sprites[key] === 'string'  && <img key={key} src={sprites[key]} alt={key} />)
    };

    return (
      <div className={styles.rightScreen}>
        { abilities && (
            <div>
                <h2>Abilities</h2>
                <hr />
                { abilities && abilities.map((ability) => <div key={ability?.ability?.name}>{ability?.ability?.name}</div>)}
            </div>)
        }
        { types && (
            <div>
                 <h2>Types</h2>
                 <hr />
                { types && types.map((type) => <div key={type?.type?.name}>{type?.type?.name}</div>)}
            </div>)
        }
        { sprites && (
            <div>
                <h2>Sprites</h2>
                <hr />
                <div>
                    { getSprites() }
                </div>
            </div>)
        }
        { moves && (
            <div>
                <h2>Moves</h2>
                <hr />
                <div>
                    {moves?.map((move) => <div key={move.move.name}>{move.move.name}</div>)}
                </div>
            </div>)
        }

      </div>
    );
  };
  