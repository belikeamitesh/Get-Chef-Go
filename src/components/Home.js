import React from 'react'
import { useHistory } from "react-router-dom";
import Pizza from '../assets/pizza-removebg-preview.png';
import Sandwich from '../assets/sandwich-removebg-preview.png'
import Noodles from '../assets/noodle.png';
import Drinks from '../assets/drink.png';
import Burger from '../assets/burger.png';
function Home() {
    let history = useHistory();
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Welcome to GET CHEF GO</h1>
            <p style={{textAlign: 'center',fontSize:"20px"}}>Here you can choose your own food change it yourself and buy it</p>
            <div className="button" style={{ marginTop:"100px",display: 'flex',textAlign: 'center',justifyContent:"center"}}>
                <div style={{ border:"1px solid black",height:"180px",width:"300px"}}>
                <img src={Pizza} alt="Pizza" style={{height:"150px"}}/>
            <button style={{fontSize:"30px",borderRadius:"10px",background:"yellow",boxShadow:"5px 5px"}} onClick={() => history.push("/pizza")}>Buy a Pizza</button>
            </div>
            <div style={{ border:"1px solid black",height:"180px",width:"300px",margin:"auto"}}>
            <img src={Sandwich} alt="Pizza" style={{height:"150px"}}/>
            <button style={{fontSize:"30px",borderRadius:"10px",background:"yellow",boxShadow:"5px 5px"}} onClick={() => history.push("/sandwich")}>Buy a Sandwich</button>
            </div>
            <div style={{ border:"1px solid black",height:"180px",width:"300px",margin:"auto"}}>
            <img src={Noodles} alt="Pizza" style={{height:"150px",width:"180px"}}/>
            <button style={{fontSize:"30px",borderRadius:"10px",background:"yellow",boxShadow:"5px 5px"}} onClick={() => history.push("/noodles")}>Buy Noodles</button>
            </div>
            
            <div style={{ border:"1px solid black",height:"180px",width:"300px",margin:"auto"}}>
            <img src={Drinks} alt="Pizza" style={{height:"150px",width:"180px"}}/>
            <button style={{fontSize:"30px",borderRadius:"10px",background:"yellow",boxShadow:"5px 5px"}} onClick={() => history.push("/drinks")}>Buy a Drink</button>
            </div>

            <div style={{ border:"1px solid black",height:"180px",width:"300px",margin:"auto"}}>
            <img src={Burger} alt="Pizza" style={{height:"150px"}} />
            <button style={{fontSize:"30px",borderRadius:"10px",background:"yellow",boxShadow:"5px 5px"}} onClick={() => history.push("/burger")}>Buy a Burger</button>
            </div>
            </div>
        </div>
    )
}

export default Home
