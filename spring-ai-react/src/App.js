import './App.css';
import React, {useState} from 'react';
import ImageGenerator from './components/ImageGenerator';
import Chat from './components/Chat';
import RecipeGenerator from './components/RecipeGenerator';

function App() {

  const[activeTab, setActivetab] = useState('image-generator') ;

  const handleTabChange = (tab) => {
    alert(tab)
    setActivetab(tab) ;
  } ;

  return (
    <div className="App">
      <button className={activeTab==='image-generator' ? 'active': ''} onClick={() => handleTabChange('image-generator')}>Image Generator</button>
      <button className={activeTab==='chat' ? 'active': ''}  onClick={() => handleTabChange('chat')}>Talk to AI</button>
      <button  className={activeTab==='recipe-generator' ? 'active': ''}  onClick={() => handleTabChange('recipe-generator')}>Recipe Generator</button>

      <div>
        {activeTab === 'image-generator' && <ImageGenerator />}
        {activeTab === 'chat' && <Chat />}
        {activeTab === 'recipe-generator' && <RecipeGenerator />}
      </div>

    </div>
  );
}

export default App;
