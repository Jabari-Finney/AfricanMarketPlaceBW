import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  


    return (
      <div className = 'HomePage'>
          <div className = 'Logo'> </div>
              <div className = 'container'>

                  <div className = 'Owner'>
                      <img className = 'ownerAvatar' src = '#'/>
                      <button className = 'selectOwner'></button>
                  </div>

                  <div className = 'Consumer'>
                      <img className = 'consumerAvatar' src = '#'/>
                      <button className = 'selectConsumer'></button>
                  </div>
                  
                  <div className = 'Login'>
                      <button onClick={LoginForm}>
                      Login
                      </button>
                  </div>

                  <div className = 'SignUp'>
                      <button onClick={SignupForm}>
                        Sign Up
                      </button>
                  </div>
              </div>
          
      </div>
  )
}


export default App;
