import { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import Photos from './components/Photos';

function App() {
  const [photos, setPhotos] = useState([])

  function fetchPhotos(value) {
  console.log(value);
  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const api = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${value}&per_page=24&format=json&nojsoncallback=1`;

  fetch(api).then(response => response.json()).then(result => setPhotos(result.photos.photo))
  }

  return (
    <div className="App">
      <InputForm fetchPhotos={fetchPhotos}/>
      {photos.length?<Photos photos={photos}/>:null}
    </div>
  );
}

export default App;
