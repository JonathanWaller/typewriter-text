import { useEffect, useState } from 'react';
import TypedText from './components/TypedText';

const App = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [flag, setFlag] = useState('')

  const delay = 500;

  useEffect( () => {

    const fetchData = async() => {
      try {
        // setFlag(await fetch(url).then( data => data.text())); // fetches api, converts response to text, sets to state
        setFlag('typewriter')
      } catch (e) {
        console.log(`Error fetching flag - ${e.message}`)
        setError('Error capturing the flag!');
      } finally {
        setLoading( false );
      }
    }

    // setting a slight timeout to mimic an API call that takes a moment to return
    // *this is just for visualization purposes of this exercise, so the loading text has a moment to display
    setTimeout( () => {
      fetchData();
    }, 1500)
  },[error])

  return (
    <div style={{height: '100vh', width: '100%', textAlign: 'center'}}>
      <h3>Ramp - Challenge</h3>
      <h4>Jonathan Waller</h4>
      <h4>Capture The Flag</h4>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div 
            style={{ 
                height: '300px', 
                width: '60%', 
                display: 'flex', 
                paddingTop: '50px',
                justifyContent: 'center', 
                borderRadius: '11px',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.07)',
            }}
        >
          {
            error ? <span style={{color: 'red'}}>{error}</span>
            : loading ? <span>Loading...</span>
            : !flag ? <div>The flag is missing</div>
            : <TypedText str={flag} delay={delay} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
