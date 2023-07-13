import styles from './CharacterSelector.module.css';
import CharacterIcon from './CharacterIcon';
import { useContext, useEffect, useRef } from 'react';
import { GameContext } from '../../context/GameContext';
import { useParams } from 'react-router-dom';

const CharacterSelector = ({ pos }) => {
  const { x, y } = pos;
  const { level, isSelectorActive, handleSelectorToggle, handleSelectionClick } = useContext(GameContext);
  const { id } = useParams();
  
  const characterSelectorRef = useRef(null);

  const setCharacterSelectorPos = () => {
    const width = characterSelectorRef.current.offsetWidth;

    // Take scroll offsets in consideration
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    const newY = y - (width / 2) + scrollY;
    const newX = x - (width / 2) + scrollX;

    characterSelectorRef.current.style.top = `${newY}px`;
    characterSelectorRef.current.style.left = `${newX}px`;
  }

  useEffect(() => {
    setCharacterSelectorPos();
  }, [pos]);

  return (
    <div ref={characterSelectorRef} className={styles.container} style={{ display: isSelectorActive ? 'flex' : 'none' }}>
      <div className={styles.bounding__box}>
            
      </div>
      <ul className={styles.characters}>
        {level.characters.map(character => {
          if (!character.found) {
            return (
              <li key={character.name} onClick={() => {
                handleSelectorToggle();
                handleSelectionClick(character.name, pos, id);
              }}>
                <CharacterIcon size={45} img={character.img} hasBackground={true}/>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
};

export default CharacterSelector
