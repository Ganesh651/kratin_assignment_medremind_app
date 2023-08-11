import React, { useState } from 'react';
import MedicationList from './components/MedicationList';
import {v4 as uuidv4} from 'uuid'
import './App.css';

function App() {
  const [medications, setMedications] = useState([]);
  const [name, setName] = useState('');
  const [dosageCount, setDosageCount] = useState('');
  
  const [schedule, setSchedule] = useState('');
  const [takenMedication, setTakenMedication] = useState('');

  const addMedication = e => {
    e.preventDefault()
    if (name === "" || dosageCount === ""){
        alert("Enter input values")
    }else{
    const newMedication = {
      id: uuidv4(), 
      name, 
      dosageCount,
      schedule 
    }
    setMedications([...medications, newMedication]);
    setName('');
    setDosageCount('');
    setSchedule('');
    };
  }
  const markMedicationTaken = (name) => {
    setTakenMedication(name);
  
  };

  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="app-container">
      <h1 className='main-heading'>MedRemind - Medication Tracking App</h1>
      <div>
        <h2>Add Medication</h2>
        <form onSubmit={addMedication}>
        <input
          type="text"
          placeholder="Medication Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dosage"
          value={dosageCount}
          onChange={(e) => setDosageCount(e.target.value)}
        />
        <input
          type="date"
          value={schedule}
          min={today}
          onChange={(e) => setSchedule(e.target.value)}
        />
        <button type="submit" className='add-button'>Add Medication</button>
        </form>
      </div>
      <div>
        <h2>Medication Reminders</h2>
        <ul className='medication-list-container'>
          {medications.map((eachItem) => (
           <MedicationList 
           eachItem={eachItem} 
           key={eachItem.id} 
           markMedicationTaken={markMedicationTaken}
           takenMedication={takenMedication}
           />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
