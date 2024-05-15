import { useState } from "react"

export const Addfriends =({setAddFriend, cardsData ,setCardsData})=>{
    console.log('cardsData before update:', cardsData);
const [addusername,setaddusername]  = useState("")
const [addImg,setaddImg]  = useState("")
const addingdata = ()=>{
    const carddata2 = [...cardsData]
    carddata2.push(
    {
        userImg:  addImg,
        userName: addusername,
        desc:"",
        price: 20,
        isActive: true
    }
    
    )
    setAddFriend(false)
    setCardsData(carddata2)
}
    return(
        <div style={{padding:"18px", backgroundColor:"#fcf2e0",width:"370px", height:"100px", display:"flex", flexDirection:"column", justifyContent:"space-between", marginLeft:"110px",marginTop:" 20px " , borderRadius:"20px"}}>
        <div style={{display:'flex', justifyContent:"space-between"}}>
        <label style={{fontFamily:"cursive"}}>👫 Friend name</label>
        <input onChange={(e) => setaddusername(e.target.value)}  style={{width:"180px", height:"20px", padding:"3px 4px", borderRadius:"7px",borderStyle:"none", }} type="text" />
      </div>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <label style={{fontFamily:"cursive"}}>🖼️ Image URL</label>
        <input onChange={(e) => setaddImg(e.target.value)}  style={{width:"180px", height:"20px", padding:"3px 4px",  borderRadius:"7px",borderStyle:"none",}} type="text" />
      </div>
      <div style={{display:'flex', justifyContent:"flex-end"}}>
      <button onClick={() => addingdata()} style={{backgroundColor:"#fd9e40", fontFamily:"cursive", width:"132px", height:"30px", fontWeight:"600", border:"none", padding:"4px 0", cursor:'pointer', borderRadius:"7px" }}>Add</button>
      </div>
      </div>
    )
}