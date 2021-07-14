

function Zip() {
//useQuery to get zip from database
  const {data} = useQuery (QUERY_USER)
  console.log(data)
//begin axios call using usequery 
    const [members, setMembers] = useState([]);
  
    useEffect(() => {
      axios.get("https://whoismyrepresentative.com/getall_mems.php?zip=07071&output=json")
      .then(res => {
        setMembers(res.data);
      }).catch(error => console.log(error));
    }, []);
    };
    

  export default Zip