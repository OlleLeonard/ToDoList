
import Duck from './Duck.webp';

function Home() {
  return (
    
    <div className="Center">
      <div className="App-Body">
        <h1>Welcome!</h1>
        <img src={Duck} className="Duck-logo"/>
        <h2>To the list site</h2>
        <p> Here you can create lists such as: "to do lists, shopping lists, bucket lists" or whatever you can think of!</p>
      </div>
    </div>
  );
}

export default Home;