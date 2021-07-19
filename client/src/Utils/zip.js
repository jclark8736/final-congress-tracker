import axios from 'axios';



export async function getZip() {
  const rawResponse = await fetch('/ext/zip', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ url: saveZip})
});
const content = await rawResponse.json();
console.log("RAW RESPONSE")
console.log(rawResponse)
firstCongName = content.results[0].name
firstCongParty = content.results[0].party
console.log(content.results[0].party)
firstCongLink = content.results[0].link
secondCongName = content.results[1].name
secondCongParty = content.results[1].party
secondCongLink = content.results[1].link
thirdCongName = content.results[2].name
thirdCongParty = content.results[2].party
thirdCongLink = content.results[2].link

console.log(content);
}



export default {
  getZip
}




// function Zip() {
// //useQuery to get zip from database
//   const {data} = useQuery (QUERY_USER)
//   console.log(data)
// //begin axios call using usequery 
//     const [members, setMembers] = useState([]);
  
//     useEffect(() => {
//       axios.get("https://whoismyrepresentative.com/getall_mems.php?zip=07071&output=json")
//       .then(res => {
//         setMembers(res.data);
//       }).catch(error => console.log(error));
//     }, []);
//     };
    

//   export default Zip

