import '../styles/Header.scss';

function Header() {
  function submit(e) {
      e.preventDefault();
  }

  return (
    <>
    <header>
        <div className='header'>
            <h1>Where legends are born</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, maiores?</h3>\
            <button>MAGIC BUTTON</button>
        </div>
    </header>
    <div className='start'>
        <h2>Start your journey</h2>
        <form>
          <input type="text" autoComplete='off' placeholder='Email address'></input>
          <input type="password" autoComplete='off' placeholder='Password'></input>
          <button type='submit' onClick={e => submit(e)}>Sign up</button>
        </form>
    </div>
    <div className='container'>
      <div className='content'>
        <div className='text'>
          <h3>Share what you love</h3>
          <p>Lorem ipsum tur adipisicing elit.  amet consectetur, adipisicing elit. Beatae, qui exercitationem. Iste voluptatum atque sequi maiores consectetur tenetur porro!</p>
        </div>
        <div className='image1' />
      </div>
      <div className='content'>
        <div className='image2' />
          <div className='text'>
            <h3>How we support you</h3>
            <p>Lorem ipsum tur adipisicing elit.  amet consectetur, adipisicing elit. Beatae, qui exercitationem. Iste voluptatum atque sequi maiores consectetur tenetur porro!</p>
          </div>
      </div>
    </div>
    </>
  );
}

export default Header;
