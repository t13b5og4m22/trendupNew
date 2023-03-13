import './Content.css';
import { useState } from 'react';

function Content() {

  // const url = "https://example.com";

  const [isRun, setIsRun] = useState(false);
  const [data, setData] = useState('');
  const [ar, setAr] = useState([]);

  const runFunc = () => {
    setData(document.getElementById("code").value);
    const array = JSON.parse(data);
    setAr(array);
    setIsRun(true);
  }

  /*
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(ar)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Something wrong");
    }
    return response.json();
  })
  .then(() => {
    console.log('"status" : "success"');
  })
  .catch(error => {
    console.error(error);
    console.log('"status" : "failed"');
  });
  */
  
  // Here we can do some fetch to send data and get something from server, here is only console.log, but we can change it and get some objects
 

  return (
    <div className="Content">
      <div className={isRun ? "content__left w-50" : "content__left"}>
        <h2>Write your code here : </h2>
        <textarea name="code" id="code" placeholder='your code'></textarea>
        <div className="runcode-btn" onClick={runFunc}>
            run code ▶
        </div>
      </div>
      <div className={isRun ? "content__right w-50" : "content__right"}>
        <h2>Your Data : </h2>
        <h6>{ar.map((text, index) => (
            <div key={text.id}>
                <h6>Payment {index + 1} :</h6><br/>
                <ul>
                    <li><h6>ID : {text.id}</h6></li>
                    <li><h6>Price : {text.sum}</h6></li>
                    <li><h6>Signature value : {text.signature_value}</h6></li><br/>
                </ul>
            </div>
        ))}</h6>
      </div>
    </div>
  );
}

export default Content;
