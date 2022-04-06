import React from 'react'
import '../../styles/Main.css'
// import ThingSpeakClient from 'thingspeakclient';
import axios from 'axios';

function Main(props) {

    const [moisture,setMoisture] = React.useState();
    const [temp,setTemp] = React.useState();
    const [sunLight,setSunLight] = React.useState();
    const [airQuality,setAirQuality] = React.useState();
    const [humidity,setHumidity] = React.useState();


    const sendMail = (alertLabel,alertValue)=>{
        const myMail = JSON.parse(localStorage.getItem('myMail'));
         axios.post('http://localhost:4000/sendmail/',{alertLabel,alertValue,myMail}).then((res,err)=>{
            console.log(res);
        })
    }
   


    React.useEffect( () => {
        const getLastEntry = axios.get('https://api.thingspeak.com/channels/1679871/feeds/last').then(({data},err)=>{
            setSunLight(data.field1);
            setAirQuality(data.field2);
            setMoisture(data.field5);
            setTemp(data.field3);
            setHumidity(data.field4);
            console.log('data set',data.field5)
        })

        // setSunLight(getLastEntry.data.field1);
        // setAirQuality(getLastEntry.data.field2);
        // setMoisture(getLastEntry.data.field5);
        // setTemp(getLastEntry.data.field3);

        console.log("Sunlight : ",sunLight);
        console.log("Air Quality : ",airQuality);
        console.log("Moisture : ",moisture);
        console.log("Temperature : ",temp);

        return () => {
            console.log('cleared interval')
        };
    }, []);

    console.log("Sunlight : ",sunLight);
    console.log("Air Quality : ",airQuality);
    console.log("Moisture : ",moisture);
    console.log("Temperature : ",temp);



    setInterval(function() {
        // const getLightData = await axios.get('https://api.thingspeak.com/channels/1679871/fields/1.json')
        // const getMoisture = await axios.get('https://api.thingspeak.com/channels/1679871/feeds/last')
        // const getTemp = await axios.get('https://api.thingspeak.com/channels/1679871/fields/3.json')
        // const getAirQuality = await axios.get('https://api.thingspeak.com/channels/1679871/fields/2.json')

        axios.get('https://api.thingspeak.com/channels/1679871/feeds/last').then((res,err)=>{
            setSunLight(res.data.field1);
            setAirQuality(res.data.field2);
            setMoisture(res.data.field5);
           setTemp(res.data.field3);
            setHumidity(res.data.field4);
           console.log(res.data)
        });

    }, 10000);

    React.useEffect(() => {
        if(parseInt(temp) > 45){
            const myMail = JSON.parse(localStorage.getItem('myMail'));

            if(myMail){
                sendMail('TEMPERATURE',temp)
            }
        }
        if((parseInt(moisture) < 10)){
             const myMail = JSON.parse(localStorage.getItem('myMail'));

            if(myMail){
            sendMail('MOISTURE',moisture)
            }
        }

        if((parseInt(airQuality) < 50)){
           const myMail = JSON.parse(localStorage.getItem('myMail'));

            if(myMail){
                sendMail('AIR QUALITY',airQuality)
            }
        }

        if((parseInt(sunLight) < 15)){
           const myMail = JSON.parse(localStorage.getItem('myMail'));

            if(myMail){
                sendMail('Sun Light',airQuality)
            }
        }
    }, [moisture,sunLight,airQuality,temp]);





    return (
        <div className='main'>
            <div className='main-header'>
                <h1>
                    Your agriculture assistant
                </h1>
                <span>Help you to make the right decision and seed your plant</span>
            </div>
            <div>
            </div>
            <h3>Current field parameters</h3>
            <div className='main-cards'>
                <div className='card-1'>
                    <div className='first-half'>
                    </div>
                    <div className='second-half'>
                        <span><h2>{temp ? temp + '° C' : 'loading..'}</h2>Air Temp</span>
                        <span className={(parseInt(temp) <= 45 && parseInt(temp) >= 30 ) ? 'quality-good' : (parseInt(temp) < 30)  ? 'quality-low' :'quality-bad'}>{(parseInt(temp) <= 45 && parseInt(temp) >= 30 ) ? 'Good' : (parseInt(temp) < 30)  ? 'Low' :'Bad'}</span>
                    </div>
                </div>
                <div className='card-2'>
                    <div className='first-half'>

                    </div>
                    <div className='second-half'>
                        <span><h2>{moisture ? moisture + '%' :'loading..'}</h2>Soil Moisture</span>
                        <span className={parseInt(moisture) > 10 ? 'quality-good' :'quality-bad'}>{parseInt(moisture) > 10 ? 'Good' :'Bad'}</span>
                    </div>
                </div>
                <div className='card-3'>
                    <div className='first-half'>

                    </div>
                    <div className='second-half'>
                        <span><h2>{airQuality ? airQuality : "loading.."}</h2>Air Quality</span>
                        <span className={ parseInt(airQuality) > 80 ? 'quality-good' : ((parseInt(airQuality) < 80) && (parseInt(airQuality) > 50) ) ? 'quality-low' :'quality-bad'}>{ (parseInt(airQuality) > 80 )? 'Good' : (parseInt(airQuality) > 80 && parseInt(airQuality) > 50 ) ? 'Low' :'Bad'}</span>
                    </div>
                </div>
                <div className='card-4'>
                    <div className='first-half'>

                    </div>
                    <div className='second-half'>
                        <span><h2>{sunLight ? sunLight : "loading.."}</h2>Sun Light</span>
                        <span className={ parseInt(sunLight) > 15 ? 'quality-good' : ((parseInt(sunLight) > 10) && (parseInt(sunLight) < 15) ) ? 'quality-low' :'quality-bad'}>{ parseInt(sunLight) > 15 ? 'Good' : ((parseInt(sunLight) > 10) && (parseInt(sunLight) < 15) ) ? 'Low' :'Bad'}</span>
                    </div>
                </div>
                <div className='card-5'>
                    <div className='first-half'>

                    </div>
                    <div className='second-half'>
                        <span><h2>{humidity ? humidity : "loading.."}</h2>Humidity</span>
                        {/* <span className={ parseInt(sunLight) > 15 ? 'quality-good' : ((parseInt(sunLight) > 10) && (parseInt(sunLight) < 15) ) ? 'quality-low' :'quality-bad'}>{ parseInt(sunLight) > 15 ? 'Good' : ((parseInt(sunLight) > 10) && (parseInt(sunLight) < 15) ) ? 'Low' :'Bad'}</span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main