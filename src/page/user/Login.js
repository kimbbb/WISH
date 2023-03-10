import * as L from "../../style/login";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate=useNavigate();
  return (
    <L.bg>
      <L.box>
        <L.user>
          <L.logo>LOGIN</L.logo>
          <L.id placeholder="아이디"/>
          <L.id placeholder="비밀번호"/>
          <L.go onClick={()=>{navigate('/main')}}>Login</L.go>
          <L.nav>아직 회원가입 전이라면? <L.a href="/sign">회원가입</L.a></L.nav>
        </L.user>
      </L.box>
    </L.bg>
  );
}

export default Login;