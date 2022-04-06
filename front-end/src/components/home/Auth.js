import React from 'react'
import '../../styles/Auth.css'
import axios from 'axios'


function Auth({ option }) {

  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');
  const [rePassword,setRePassword] = React.useState('');

  React.useEffect(()=>{

      setEmail('')
      setPassword('')
      setRePassword('')

  },[option]);


  React.useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'));
    if(token){
       window.location.pathname = "home"
    }
  });


  function ValidateEmail(email) 
  {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }



  const handleSubmit = ()=>{

    if(option === 1){
      console.log('sign in');

      if(ValidateEmail(email) && password.length > 6){
          axios.post('http://localhost:4000/user/login/',{
          email:email,
          password:password
        }).then((res,err)=>{
          console.log(res);
          console.log(err);
           if(res.status === '200' || res.status === 200){
            localStorage.setItem('myMail',JSON.stringify(email))
            localStorage.setItem('token',JSON.stringify(res.data));
            window.location.pathname = '/home';
          }
        });
      }else {
        if(password.length <= 6 ){
            alert("password should be longer than 6 characters !");
        }
      }
      

    }else if(option === 2){

      console.log('signup')

      if(password !== rePassword){
        alert("Password do not match");
      }

      if(ValidateEmail(email) && password.length > 6){
          axios.post('http://localhost:4000/user/signup/',{
          email:email,
          password:password
        }).then((res)=>{
           console.log(res);
          
          if(res.status === '200' || res.status === 200){
            localStorage.setItem('myMail',JSON.stringify(email))
            localStorage.setItem('token',JSON.stringify(res.data));
            window.location.pathname = '/home';
          }
        });
      }else {
        if(password.length <= 6 ){
            alert("password should be longer than 6 characters !");
        }
      }

    }else if (option === 3){
      console.log('forgot')

    }
    console.log(email)
    console.log(password)
    console.log(option)

  }

  
  return (
    <form className='account-form' onSubmit={(evt) => evt.preventDefault()}>
			<div className={'account-form-fields ' + (option === 1 ? 'sign-in' : (option === 2 ? 'sign-up' : 'forgot')) }>
				<input value={email} onChange={(e)=>setEmail(e.target.value)} id='email' name='email' type='email' placeholder='E-mail' required />
				<input value={password} onChange={(e)=>setPassword(e.target.value)} id='password' name='password' type='password' placeholder='Password' required={option === 1 || option === 2 ? true : false} disabled={option === 3 ? true : false} />
				<input value={rePassword} onChange={(e)=>setRePassword(e.target.value)} id='repeat-password' name='repeat-password' type='password' placeholder='Repeat password' required={option === 2 ? true : false} disabled={option === 1 || option === 3 ? true : false} />
			</div>
			<button onClick={()=>handleSubmit()} className='btn-submit-form' type='submit'>
				{ option === 1 ? 'Sign in' : (option === 2 ? 'Sign up' : 'Reset password') }
			</button>
		</form>
  )
}

export default Auth;