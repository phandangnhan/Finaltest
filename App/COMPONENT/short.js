import React,{useState} from 'react';
import axios from 'axios';
import "./style.css"
const Short = () => {
    const [userInput, setUserInput] = useState("");
    const [url,setUrl]=useState('srthco.de')
    const [shortenedLink, setShortenedLink] = useState("")
    const getvalue = ()=>{
        const url = document.getElementById("inputurl")
        console.log(url.value);
        setUserInput(url.value)
        url.value=''
        fetchData()
        console.log(url);
    }
    const fetchData = async () => {
        try {
          const response = await axios(
            `https://api.shrtco.de/v2/shorten?url=${userInput}`
          );
          if(url == 'srthco.de'){
            setShortenedLink(response.data.result.full_short_link);
          }else if (url == '9qr.de') {
            setShortenedLink(response.data.result.full_short_link2);
          }else{
            setShortenedLink(response.data.result.full_short_link3);
          }
        } catch (e) {
          console.log(e);
        }
        
      };
      const color = (e) =>{
        var divs = document.getElementsByTagName("input");
        for(var i = 0; i < divs.length; i++){
            divs[i].style.backgroundColor = '';
        }
        e.target.style.backgroundColor = 'green';
        setUrl(e.target.value)
        console.log(e.target.value);
      }
    return (
        <div>
            <div className="header">
                <h1>The <span className="textcolor">privacy-friendly</span> URL Shortener</h1>
            </div>
            <div className="content">
                <div className="tittle"><h1>Link Shortener</h1></div>
                <div className="search">
                    <p >Enter a Link: </p> 
                    <input type="text" id='inputurl' />
                    <input type="button" value="OK" onClick={getvalue}/>
                    <div className='shorturl'>
                        <input type="button" value="srthco.de" style={{backgroundColor: "green"}} className='srthco' onClick={color} />
                        <input type="button" value="9qr.de" className='qr'  onClick={color} />
                        <input type="button" value="shiny.link" className='shiny'  onClick={color}/>
                    </div>
                    <h1 className='result'>{shortenedLink}</h1>
                </div>
            </div>
        </div>
    );
};

export default Short;