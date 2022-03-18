import axios from "axios";
import { useState } from "react";

const Characters = () => {
  // state
  const [characters, setCharacters] = useState(null)

  // effect

  // other logic
  
  const findCharacters = _ => {
    console.log('do fetch');
    let query = ''
    let charName = document.querySelector('#char-name input')
    console.log('charName.value 2', charName.value);

    const charGender = document.querySelectorAll('#char-gender input')
    // charGender.forEach(gen => console.log('gen.checked', gen.checked))

    const charSpecies = document.querySelectorAll('#char-species select option')
    // charSpecies.forEach(s => console.log('s.selected', s.selected))

    const charStatus = document.querySelectorAll('#char-status select option')
    // charStatus.forEach(status => console.log('status.selected', status.selected))

    const find = async () => {
      const charData = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
          
        }
      })
      // console.log(charData.data);
      setCharacters(charData.data.results)
    }
    find()
  }

  // let charName = 'Rick Sanchez'
  // console.log('charName.value 1', charName);
  // // console.log(characters);
  // characters && characters.forEach(element => {
  //   // console.log('element', element.name);
  //   console.log('element', element.name === charName);
  // });


  return (
    <section id="characters">
      <h4>Search for a Rick & Morty character</h4>

      <div id='char-name'>
        <label htmlFor="name">name (optional)</label>
        <input id="name" type="text" />
      </div>

      <div id='char-gender'>
        <span>gender</span>
        <label><input type="radio" name="gender" value="male" />male</label>
        <label><input type="radio" name="gender" value="female" />female</label>
        <label><input type="radio" name="gender" value="genderless" />genderless</label>
        <label><input type="radio" name="gender" value="unknown" />unknown</label>
      </div>

      <div id='char-species'>
        <label htmlFor='species'>species</label>
        <select id='species'>
          <option value="human">human</option>
          <option value="alien">alien</option>
          <option value="humanoid">humanoid</option>
          <option value="mythological">mythological</option>
          <option value="creature">creature</option>
          <option value="animal">animal</option>
          <option value="robot">robot</option>
        </select>
      </div>

      <div id='char-status'>
        <label htmlFor='status'>status</label>
        <select id='status'>
          <option value="all">all</option>
          <option value="alive">alive</option>
          <option value="unknown">unknown</option>
          <option value="dead">dead</option>
        </select>
      </div>

      <button id='find-char' onClick={findCharacters}>find</button>
    </section>
  )
}
export default Characters