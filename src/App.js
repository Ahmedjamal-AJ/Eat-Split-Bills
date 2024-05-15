import { useState } from 'react';
import './App.css';
import { Card } from './Components/billing';




function App() {
  const [addingFriend, setAddingFriend] = useState(false);
  const [naam , setNaam]  = useState("");
  const [totalBill, setTotalBill] = useState(0)
  const [myExpense, setMyExpense] = useState(0)
  const [userExpense, setUserExpense] = useState(0)
  const [payBill, setPayBill] = useState(0);
  const [cardsData, setCardsData] = useState([
    {
      userImg: "https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/343946156_5858554074254228_974920192620986195_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEtB_8Ygb6DYMEiDwvbtE_cU9fpvLlTgrtT1-m8uVOCuxu_GjmpuKbiqIOPWU41CaYAXiR6wjyi-dl42RBaFuda&_nc_ohc=-N3LHHR3vTAAX8sSg3y&_nc_ht=scontent.fkhi6-2.fna&oh=00_AfCzM4_4es-yR2N7iKntcknzcbg42oD_SjjTk4R4fcHZ5g&oe=65F24AA3",
      userName: "Syed Sibghat Ullah",
      desc: "",
      price: 20,
      isActive: false
    },{
      userImg: "https://scontent.fkhi6-2.fna.fbcdn.net/v/t1.6435-9/136085769_3816272198395714_8057930203679572645_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE4zW_Uwn3AILj3n3gAH8eAIcLi_njwt4whwuL-ePC3jHpZxo6J_0VzLVYX6dIjaglIFgfloBCYzsO9xyyNlVHp&_nc_ohc=TRL_meFWz_0AX9USipX&_nc_ht=scontent.fkhi6-2.fna&oh=00_AfCrNx9yg8-_ZUpjZgoqZS3rmENKOWLjyBEQiX0yQCrLpw&oe=66150D83",
      userName: "Syed Daniyal Ahmed",
      desc: "",
      price: 20,
      isActive: false
    }, {
      userImg: "https://scontent.fkhi6-2.fna.fbcdn.net/v/t1.18169-9/16730341_1304113636293634_704866867345636761_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCENps8lI8rQ1zBDD1K2dmMrZizaRgQyIytmLNpGBDIoRWzI6WicJAbqFIRb9UV69o3gl8GsQeYMH_T6WSyRCO&_nc_ohc=Xly5CZtxxwQAX9Hifvc&_nc_ht=scontent.fkhi6-2.fna&oh=00_AfCsP-0WEgmBVbytc8hK67coUfxK5xgbnvYXapcFI5td0g&oe=6614FFD5",
     userName:"Muhammad Bilal Iqbal",
      desc: "",
      price: 20,
      isActive: false
    }, {
      userImg: "https://scontent.fkhi6-2.fna.fbcdn.net/v/t39.30808-6/298217503_10166545856705371_4658265780448631888_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHjjI7EvoEG7hPclrPZxHrYtHjQJDqtW6S0eNAkOq1bpBBtcYsgbU85way5rApOOu4p8tAhfO5CnXisbyqsDDFx&_nc_ohc=1W-UBNjBjEQAX9wmR-V&_nc_ht=scontent.fkhi6-2.fna&oh=00_AfCajLgzh12evu6hKjPGRCtN2-b1EsEPKOlYZ_jlxUEjHw&oe=65F211D1",
     userName:"Sheeraz Shah ",
      desc: "",
      price: 20,
      isActive: false
    }, 
  
  
  ])
  return (
<>
<div style={{display:"flex",backgroundColor:"white", justifyContent:"center", }}>
  <div className='abuu'>
  <Card key={Date.now} setAddingFriend={setAddingFriend} addingFriend={addingFriend} naam={naam} setNaam={setNaam} totalBill={totalBill} setTotalBill={setTotalBill} myExpense={myExpense} setMyExpense={setMyExpense} userExpense={userExpense} setUserExpense={setUserExpense} payBill={payBill} setPayBill={setPayBill} cardsData={cardsData} setCardsData={setCardsData} />
  </div>


</div>

</>
  );
}

export default App;
