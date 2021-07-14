import React, {useState, useEffect,} from 'react';
import axios from 'axios';
import {useQuery} from "@apollo/client"
import {QUERY_USER} from "../utils/queries.js"



function Zip() {
//useQuery to get zip from database
  const {data} = useQuery (QUERY_USER)
  console.log(data)
//begin axios call using usequery 
    const [members, setMembers] = useState([]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      axios.get("https://whoismyrepresentative.com/getall_mems.php?zip=07071&output=json")
      .then(res => {
        setMembers(res.data);
      }).catch(error => console.log(error));
    }, []);
  
    const handleChange = e => {
      setSearch(e.target.value)
    };
  
    // const filteredCoins = coins.filter(coin => 
    //   coin.name.toLowerCase().includes(search.toLowerCase())
    // );
  
    return (
      <div className="zip-app">
        <div className="zip-search">
          <h1 className="zip-text">Search for currency</h1>
          <form>
            <input type="text" placeholder="Search" className="zip-search" onChange={handleChange} />
          </form>
        </div>
        {filteredZip.map(zip => {
          return <Zip
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.market_cap}
          price={coin.current_price} 
          />;
          console.log(zip)
        })} 
      </div>  
    );  
  } 

  export default Zip