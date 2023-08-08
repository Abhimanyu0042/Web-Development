import React, { useEffect, useState } from 'react'
import { Card, Dropdown, Form, Input, Select } from 'antd'
import { RiCoinsFill } from 'react-icons/ri';

function Convert() {
    const apiUrl = `https://api.coingecko.com/api/v3/exchange_rates`; 
    const [cryptoList, setcryptoList] = useState([]);
    const defaultFirstSelectValue = "Bitcoin";
    const defaultSecondSelectValue = "Ether";
    const [inputValue, setinputValue] = useState("0");
    const [firstSelect, setfirstSelect] = useState(defaultFirstSelectValue);
    const [secondSelect, setsecondSelect] = useState(defaultSecondSelectValue)
    const [result,setresult] = useState("0");

    const names = [
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled' }
    ];

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData(){
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        const data = jsonData.rates;
 //object.enteries covert the data into array


    const tempArray = Object.entries(data).map(item => {
        return {
            value: item[1].name,
            label: item[1].name,
            rate: item[1].value
        }   
    })

    setcryptoList(tempArray);

}

useEffect(() => {
    if(cryptoList.length === 0) return;

    const firstSelectRate = cryptoList.find((item) => {
        return item.value === firstSelect
    }).rate

    const secondSelectRate = cryptoList.find((item) => {
        return item.value === secondSelect
    }).rate

    const resultValue = (inputValue * secondSelectRate) / firstSelectRate;

    setresult(resultValue.toFixed(6));
},[inputValue,firstSelect,secondSelect])

  return (
    <div className='container'>
      <Card className='crypto-card' title={<h1 style={{display: 'flex', justifyContent: 'center'}}>< RiCoinsFill style={{fontSize: '2rem',padding:'10px 10px 0px 0px'}}/>Crypto Converter</h1>}>
        <Form>
            <Form.Item>
                <Input onChange={(event) => setinputValue(event.target.value)}/>
            </Form.Item>
        </Form>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Select onChange={(value) => setfirstSelect(value)} style={{width: '45%'}} defaultValue={defaultFirstSelectValue} options={cryptoList}/>
        <Select onChange={(value) => setsecondSelect(value)} style={{width: '45%'}} defaultValue={defaultSecondSelectValue} options={cryptoList}/></div>
        <p>{inputValue} {firstSelect} = {result} {secondSelect}</p>
      </Card>
      
    </div>
  )
}

export default Convert
