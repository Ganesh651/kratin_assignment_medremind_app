import {useState} from  'react'
import './index.css'

const MedicationList = props => {
      const [isTaken, setIsTaken] = useState("Mark as taken")
      const {eachItem,markMedicationTaken} = props
      const { name,schedule,dosageCount} = eachItem 

      const onTakenMedicine = ()=>{
            setIsTaken(`${name} Taken`)
            markMedicationTaken(name)
      }

      return (
            <li className='medicine-card'>
                  <h1>{name}</h1>
                  <p>{schedule}</p>
                  <p>{dosageCount}</p>
                  <button className='is-taken' type="button" onClick={onTakenMedicine}>{isTaken}</button>
            </li>

      )
}


export default MedicationList