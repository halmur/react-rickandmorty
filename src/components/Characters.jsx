import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  console.log('-----> > > CHARACTERS.jsx');
  // state
  const [characters, setCharacters] = useState(null)
  const [name, setName] = useState(null)
  const [gender, setGender] = useState(null)
  const [isError, setIsError] = useState(false)
  
  // effect
  useEffect(_ => {
    const find = async () => {
      let errMsg = null
      
      const apiResponse = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
          name,
          gender,
          species: 'robot',
          status: 'alive'
        }
      }).catch(error => {
        console.log('ERRROR.RESPONSE.data.error', error.response.data.error);
        errMsg = error.response.data.error

        if (isError) {
          return
        } else (
          setIsError(errMsg)
        )
      })
      
      apiResponse && setCharacters(apiResponse.data.info.count)
      apiResponse && isError && setIsError(false)
    }
    find()
  }, [name, gender])
  
  
  // other logic
  const findCharacters = _ => {console.log('empty')}
  
  function fBn(e) {
    setName(e.target.value)
  }

  function fBg(e) {
    setGender(e.target.value)
  }
  
  console.log('characters:', characters);
  console.log('render characters.jsx');
  return (
    <section id="characters">
      {/* <h4>{!isError ? `${characters} matches your search` : `${isError}, please search again!`}</h4> */}
      <h4>{isError ? `Ops, ${isError}!` : `${characters} characters matches your search`}</h4>

      <div id='char-name'>
        <label htmlFor="name">name (optional)</label>
        <input id="name" type="text" onChange={fBn}/>
      </div>

      <div id='char-gender' onChange={fBg}>
        <span>gender</span>
        <label><input type="radio" name="gender" value="" />all</label>
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






/* might need
  let query = ''
  let charName = document.querySelector('#char-name input')
  console.log('charName', charName);

  const charGender = document.querySelectorAll('#char-gender input')
  // charGender.forEach(gen => console.log('gen.checked', gen.checked))

  const charSpecies = document.querySelectorAll('#char-species select option')
  // charSpecies.forEach(s => console.log('s.selected', s.selected))

  const charStatus = document.querySelectorAll('#char-status select option')
  // charStatus.forEach(status => console.log('status.selected', status.selected))
*/

/* test
  console.log(characters);

  let charName = 'Rick Sanchez'

  characters && characters.forEach(element => {
    console.log('element', element.name === charName);
  });
*/