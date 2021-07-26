import SimpleInput from './components/LoginForm';
import BasicForm from './components/SignupForm';

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
                      < SimpleInput />
                  </div>

                  <div className = 'SignUp'>
                      < BasicForm />
                  </div>
              </div>
          
      </div>
  )
}


export default App;
