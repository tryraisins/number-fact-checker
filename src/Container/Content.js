import { useState } from "react";
import Button from "../Components/Button";
import RandomButton from "../Components/RandomButton";

const Content = () => {
  const [text, setText] = useState("");
  const getData = async () => {
    const numberData = Math.round(document.getElementById("input").value);

    if (numberData > 9999) {
      console.log("works path 1");

      setText(
        `${numberData} is too large to work here. This only works with numbers between 0 and 9999`,
      );
    } else if (numberData < 0) {
      console.log("works path 2");
      setText(
        `Sadly, ${numberData} is too small and can't work here. Try picking a number between 0 and 9999`,
      );
    } else {
      const fetchData = await fetch(` http://numbersapi.com/${numberData}`);
      const respText = await fetchData.text();
      setText(await respText);
      console.log("works path main");
    }
  };

  const RandomNumber = () => {
    document.getElementById("input").value = Math.floor(Math.random() * 10000);
  };
  return (
    <div className='col-12  rounded bg-secondary  bg-gradient bg-opacity-50 text-center'>
      <h2 className=' text-uppercase fw-bolder'>number fact checker</h2>
      <input type='text' className='p-1 pb-2' id='input' />
      <Button launch={getData} />
      <RandomButton rando={RandomNumber} />
      <h5 className='fw-bolder fs-4 marmalade'>{text}</h5>
    </div>
  );
};

export default Content;
