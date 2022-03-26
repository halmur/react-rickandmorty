import axios from "axios";
import { useEffect, useState } from "react";

const Characters = () => {
  console.log('-----> > > CHARACTERS.jsx');
  // state
  const [characters, setCharacters] = useState(null)
  const [name, setName] = useState(null)
  const [gender, setGender] = useState(null)
  const [species, setSpecies] = useState(null)
  const [status, setStatus] = useState(null)
  const [isError, setIsError] = useState(false)
  
  // effect
  useEffect( _ => {
    const find = async () => {
      let errMsg = null
      
      const apiResponse = await axios.get('https://rickandmortyapi.com/api/character', {
        params: {
          name,
          gender,
          species,
          status
        }
      }).catch(error => {
        errMsg = error.response.data.error

        if (isError) {
          return
        } else (
          setIsError(errMsg)
        )
      })
      
      console.log(apiResponse);
      apiResponse && setCharacters(apiResponse.data.info.count)
      apiResponse && isError && setIsError(false)
    }
    find()
  }, [name, gender, species, status])

  // jsx
  return (
    <section id="characters">
      <h4>{isError ? `Ops, ${isError}!` : `${characters} characters matches your search`}</h4>

      <div id='char-name'>
        <label htmlFor="name">name (optional)</label>
        <input id="name" type="text" onChange={ e => setName(e.target.value)}/>
      </div>

      <div id='char-gender' onChange={e => setGender(e.target.value)}>
        <span>gender</span>
        <label><input type="radio" name="gender" value="" />all</label>
        <label><input type="radio" name="gender" value="male" />male</label>
        <label><input type="radio" name="gender" value="female" />female</label>
        <label><input type="radio" name="gender" value="genderless" />genderless</label>
        <label><input type="radio" name="gender" value="unknown" />unknown</label>
      </div>

      <div id='char-species'>
        <label htmlFor='species'>species</label>
        <select id='species' onChange={e => setSpecies(e.target.value)}>
          <option value="">all</option>
          <option value="human">human</option>
          <option value="alien">alien</option>
          <option value="humanoid">humanoid</option>
          <option value="mythological creature">mythological creature</option>
          <option value="animal">animal</option>
          <option value="robot">robot</option>
        </select>
      </div>

      <div id='char-status'>
        <label htmlFor='status'>status</label>
        <select id='status' onChange={e => setStatus(e.target.value)}>
          <option value="">all</option>
          <option value="alive">alive</option>
          <option value="unknown">unknown</option>
          <option value="dead">dead</option>
        </select>
      </div>
    </section>
  )
}
export default Characters