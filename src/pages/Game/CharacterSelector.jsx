import styles from './CharacterSelector.module.css';
import CharacterIcon from './CharacterIcon';
import { useEffect, useRef } from 'react';

const CharacterSelector = ({ pos }) => {
  const { x, y } = pos;
  
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
    <div ref={characterSelectorRef} className={styles.container}>
      <div className={styles.bounding__box}>
            
      </div>
      <ul className={styles.characters}>
        <li>
          <CharacterIcon size={45}/>
        </li>
        <li>
          <CharacterIcon size={45}/>
        </li>
        <li>
          <CharacterIcon size={45}/>
        </li>
        <li>
          <CharacterIcon size={45}/>
        </li>
      </ul>
    </div>
  )
};

export default CharacterSelector
