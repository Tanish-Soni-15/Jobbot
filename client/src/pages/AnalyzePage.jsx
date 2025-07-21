import React from 'react'
import SideHeader from '../components/SideHeader'
import Analyze from '../components/Analyze/Analyze.jsx'
import { useEffect ,useState} from 'react'
const AnalyzePage = ({setuser}) => {
  const checkUser = async () => {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/checkUser`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      setuser(data);
    }
    else{
      setuser({name:"Guest"});
    }
  };
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    checkUser();
  }, []);
  return (
<div className="sm:flex">
      <SideHeader setIsMenuopen={setIsMenuOpen}/>
      <Analyze isMenuOpen={isMenuOpen}/>
      </div>
  )
}

export default AnalyzePage
