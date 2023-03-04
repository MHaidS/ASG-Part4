const AuthPage = (props) => {
  // 2. onSubmit function triggered once form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    // 3. sets a user in a userState w/ the on/off callback w/c is in App.jsx
    props.onAuth({ username: value, secret: value });
  };

  // 1. set up an html form that will take 'username' as input & btn to submit;
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
