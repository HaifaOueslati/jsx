
import './style.css';
import imagesrc from './imageInSrc.jpg'

function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Your name here</h1>

<br/> 

<img src={imagesrc} alt="src" className='img1'/> 

<br/> 

<img src="/imageInPublic.jpg"  alt="public" className='img2'/>

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4"/>

</video>
    </div>
  );
}

export default App;
