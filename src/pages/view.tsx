
import { useAppDispatch,useAppSelector } from '../components/hooks'

const View=()=>{
    
    const user=useAppSelector((state)=>state.login)



  return (
    <div>
    
      <h2>Name:{user.name}</h2>
      <h2>Email:{user.email}</h2>
      <h2>Password:{user.password}</h2>

    </div>
  )
}

export default View;
