import React,{useEffect, useState} from 'react';
function DropDown() {
    const[aimguud, setAimguud] = useState([
                    { name: 'Архангай', sumduud: [ 
                    {name: 'Батцэнгэл', baguud: [{name: 'Батцэнбаг1'},{name: 'Батцэнбаг2'},{name: 'Батцэнбаг3'}]},
                    {name: 'Булган', baguud: [{name:'Булбаг2'}, {name:'Булбаг3'},{name:'Булбаг1'}]},
                    {name: 'Жаргалант', baguud: [{name: 'Жарбаг1'},{name: 'Жарбаг2'},{name: 'Жарбаг3'}]},
                    {name: 'Ихтамир', baguud: [{name: 'Ихбаг1'},{name: 'Ихбаг2'},{name: 'Ихбаг3'}]},
                    {name: 'Өлзийт', baguud: [{name: 'Өлзийбаг1'},{name: 'Өлзийбаг2'},{name: 'Өлзийбаг3'}]}
                ]},
                    { name: 'Завхан', sumduud: [ 
                    {name: 'Асгат', baguud: [{name: 'Асбаг1'},{name: 'Асбаг2'},{name: 'Асбаг3'}]},
                    {name: 'Баянтэс', baguud: [{name: 'Баянбаг1'},{name: 'Баянбаг2'},{name: 'Баянбаг3'}]},
                    {name: 'Идэр', baguud: [{name: 'Идэрбаг1'},{name: 'Идэрбаг2'},{name: 'Идэрбаг3'}]},
                    {name: 'Отгон', baguud: [{name: 'Отгонбаг1'},{name: 'Отгонбаг2'},{name: 'Отгонбаг3'}]},
                    {name: 'Яруу', baguud: [{name: 'Яруубаг1'},{name: 'Яруубаг2'},{name: 'Яруубаг3'}]}
                ]},
                    { name: 'Өвөрхангай', sumduud: [ 
                    {name: 'Богд', baguud: [{name: 'Богдбаг1'},{name: 'Богдбаг2'},{name: 'Богдбаг3'}]},
                    {name: 'Бүрд', baguud: [{name: 'Бүрдбаг1'},{name: 'Бүрдбаг2'},{name: 'Бүрдбаг3'}]},
                    {name: 'Сант', baguud: [{name: 'Сантбаг1'},{name: 'Сантбаг2'},{name: 'Сантбаг3'}]},
                    {name: 'Төгрөг', baguud: [{name: 'Төгбаг1'},{name: 'Төгбаг2'},{name: 'Төгбаг3'}]},
                    {name: 'Уянга', baguud: [{name: 'Уянгабаг1'},{name: 'Уянгабаг2'},{name: 'Уянгабаг3'}]}
                ]},
                    {name: 'Сэлэнгэ', sumduud: [ 
                    {name: 'Баянгол', baguud: [{name: 'Баянбаг1'},{name: 'Баянбаг2'},{name: 'Баянбаг3'}]},
                    {name: 'Ерөө', baguud: [{name: 'Ерөөбаг1'},{name: 'Ерөөбаг2'},{name: 'Ерөөбаг3'}]},
                    {name: 'Мандал', baguud:[{name: 'Манбаг1'},{name: 'Манбаг2'},{name: 'Манбаг3'}]},
                    {name: 'Сайхан', baguud: [{name: 'Сайханбаг1'},{name: 'Сайханбаг2'},{name: 'Сайханбаг3'}]},
                    {name: 'Хүдэр', baguud: [{name: 'Хүдбаг1'},{name: 'Хүдбаг2'},{name: 'Хүдбаг3'}]}
                ]},
                    { name: 'Ховд', sumduud: [ 
                    {name: 'Дуут', baguud: [{name: 'Дуутбаг1'},{name: 'Дуутбаг2'},{name: 'Дуутбаг3'}]},
                    {name: 'Мөст', baguud: [{name: 'Мөстбаг1'},{name: 'Мөстбаг2'},{name: 'Мөстбаг3'}]},
                    {name: 'Үенч', baguud: [{name: 'Үенчбаг1'},{name: 'Үенчбаг2'},{name: 'Үенчбаг3'}]},
                    {name: 'Цэцэг', baguud: [{name: 'Цэцбаг1'},{name: 'Цэцбаг2'},{name: 'Цэцбаг3'}]},
                    {name: 'Буянт', baguud: [{name: 'Буянбаг1'},{name: 'Буянбаг2'},{name: 'Буянбаг3'}]}
                ]},
            ])
    const[sumduud, setSumduud] = useState([])
    const[baguud, setBaguud] = useState([])
    const[selectedAimag, setSelectedAimag] = useState('')
    const[selectedSum, setSelectedSum] = useState('')
    const[selectedBag, setSelectedBag] = useState('')
    const[result, setResult] = useState('Таны сонгосон газар гарч ирнэ')

function changeAimag(event){
    setSelectedAimag(event.target.value);
    setSumduud(aimguud.find(x => x.name === event.target.value)?.sumduud)
}   

function changeSum(event){
    setSelectedSum(event.target.value);
}

useEffect(()=>{
    const stats = aimguud.find(x => x.name === selectedAimag)?.sumduud
        setBaguud(stats?.find((item) => item.name === selectedSum)?.baguud)
},[selectedSum])

function changeBag(event){
    setSelectedBag(event.target.value);
}

function getResult(){
    setResult('Taны сонголт бол ' + selectedAimag + " аймгийн " + selectedSum + ' сумын ' + selectedBag + ' гэх газрыг сонгосон байна.')
}

    return ( 
        <div style={styles.container}>
            <h1>
                ARYNINJA DROPDOWN
            </h1>
            <div className = 'form-group'>
                <label style={styles.lbl}>Аймаг</label>
                <select className='form-select' onChange={changeAimag} defaultValue="u">
                    <option></option>
                    {aimguud.map((e, i) => (
                        <option key = {i}>{e.name}</option>
                    ))}
                </select>
            </div>
               <div className = 'form-group'>
                <label style={styles.lbl}>Сум</label>
                <select className='form-select' onChange={changeSum}>
                    <option></option>
                    {sumduud.map((e, i) => (
                        <option key = {i}>{e.name}</option>
                    ))}
                </select>
            </div>
            <div className = 'form-group'>
                <label style={styles.lbl}>Баг</label>
                <select className='form-select' onChange={changeBag}>
                    {baguud?.map((e,i)=>(
                        <option key={i}>{e.name}</option>
                    ))}
                </select>
            </div>
    
                <button onClick={getResult} type="submit" className="btn btn-success" style={styles.btn}>Илгээх</button>
            <h1 className  = {styles.Result}>{result}</h1>
        </div>
     );
}

export default DropDown;

const styles = {
    container:{
        width: '50%',
        height: '50%',
        margin: '10% 10% 10% 20%'
    },
  lbl: {
    marginTop: 5,
    marginBottom: '0.5rem',
  },  
  btn: {
    width:250,
    marginLeft:15,
    marginTop: 15,
  }
};