import './Login.css'
import LoginForm from '../Login/Form'


const Login = () => (
    <div className="login_content">
      <header className="login_form">
        <h5 className="login_title"> Olá, seja bem vindo!</h5>
        <p className="login_legend"> Para acessar a plataforma, faça seu login.</p>
      </header>

      <LoginForm/>

      <footer>
        <p className="login_footer"> Esqueceu seu login ou senha? Clique <span>aqui</span></p>
      </footer>

    </div>
);

export default Login;