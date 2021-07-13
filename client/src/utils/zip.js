import React, {useState, useEffect} from 'react';
import axios from 'axios';


function Zip() {

    const [members, setMembers] = useState([]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error));
    }, []);
  
    const handleChange = e => {
      setSearch(e.target.value)
    };
  
    const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search for currency</h1>
          <form>
            <input type="text" placeholder="Search" className="coin-search" onChange={handleChange} />
          </form>
        </div>
        {filteredCoins.map(coin => {
          return <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.market_cap}
          price={coin.current_price} 
          />;
        })} 
      </div>  
    );  
  } 