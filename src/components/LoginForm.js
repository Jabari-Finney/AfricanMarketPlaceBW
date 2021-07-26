const LoginForm = (props) => {
  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Username</label>
        <input type='text' id='name' />
        <label htmlFor='name'>Password</label>
        <input type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
