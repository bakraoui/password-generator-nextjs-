
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export default function Home() {

  const chars = [
        ['a','b','c','d','e','f','g','h','i','j','k','l','m',
        'n','o','p','q','r','s','t','u','v','w','x','y','z'],
        [0,1,2,3,4,5,6,7,8,9],
        ['A','B','C','D','E','F','G','H','I','J','K','L','M',
        'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        ['-','+','=','_','!','@','#','$','%','^','&','*']
      ]
  const [lowercase, setLowercase] = useState(true);
  const [numeric, setNumeric] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState(null);
  
  const generatePassword = () => {

    // random length of the password
    const passwordLength = Math.floor(20*Math.random()) + 8;

    // Charatcters that will be included into the password (based on the user's choice)
    let allowedCharacters = []
    if(lowercase && uppercase && numeric && special) allowedCharacters.push(0,1,2,3)
    else if(lowercase && uppercase && numeric ) allowedCharacters.push(0,1,2)
    else if(lowercase && uppercase && special) allowedCharacters.push(0,2,3)
    else if(lowercase && numeric && special) allowedCharacters.push(0,1,3)
    else if(uppercase && numeric && special) allowedCharacters.push(1,2,3)

    else if(lowercase && numeric ) allowedCharacters.push(0,1)
    else if(lowercase && uppercase ) allowedCharacters.push(0,2)
    else if(lowercase && special) allowedCharacters.push(0,3)
    else if(uppercase && numeric ) allowedCharacters.push(1,2)
    else if(  numeric && special) allowedCharacters.push(1,3)
    else if(uppercase && special) allowedCharacters.push(2,3)

    else if(lowercase) allowedCharacters.push(0)
    else if(numeric) allowedCharacters.push(1)
    else if(uppercase) allowedCharacters.push(2)
    else if(special) allowedCharacters.push(3)


   let generatedPassword = []

   // loop to generate the password character by character
    for (let index = 0; index < passwordLength; index++) {

      const characterType = allowedCharacters[Math.floor(allowedCharacters.length*Math.random()) ] ;
      const characterIndex = Math.floor(chars[characterType].length*Math.random())
      
      // store the generated characters in an array
       generatedPassword.push(chars[characterType][characterIndex])
      
    }

    // join the array and get the password
    setPassword(generatedPassword.join(''))
  }

  
  

  return (
    <div className='vh-100 pt-5 bg-info '>
      <h1 className='text-center text-light mb-5'> Password Generator</h1>
      <div className="p-4 container bg-light border rounded-2 w-50">

        <div className='bg-light text-dark border h5 rounded-2 p-3 mt-2 mb-4'>
           {password !== null ? password : ''}
        </div> 

        <button className='btn btn-dark border border-light mb-3 w-100' 
            onClick={() => {generatePassword()}}>Generate Password</button><br />


        <div className="form-check">    
          <label htmlFor="lowercase" className='form-check-label'>Lowercase</label>
          <input type="checkbox" className='form-check-input' name="lowercase" id="lowercase"
                checked={lowercase}
                onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="form-check">    
          <label htmlFor="numeric" className='form-check-label'>Numeric</label>
          <input type="checkbox" className='form-check-input' name="numeric" id="numeric"
                checked={numeric}
                onChange={() => setNumeric(!numeric)}
          />
        </div> 
        
        <div className="form-check"> 
          <label htmlFor="uppercase" className='form-check-label'>Uppercase</label>
          <input type="checkbox" className='form-check-input' name="uppercase" id="uppercase" 
                checked={uppercase}
                onChange={() => setUppercase(!uppercase)}
            />
        </div>

        <div className="form-check">
          <label htmlFor="specialChars" className='form-check-label'>Special Characters</label>
          <input type="checkbox" className='form-check-input' name="specialChars" id="specialChars" 
              checked={special}
              onChange={() => setSpecial(!special)}
          />
        </div>

      </div>
    
    </div>
  )
}


