import React, { Fragment, useState } from 'react';
import { Label, Input, Row, Col, Container } from 'reactstrap';
import moment from 'moment-timezone';
import "../assets/style.css";
import ct from 'countries-and-timezones';

const LanguageSelectionComponent = (props) => {
    const { localeList } = props; 
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countryName,setCountryName] = useState('');
    const [timeZones, setTimeZones] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedTimeZone, setSelectedTimeZone] = useState('');


    function handleChangeTimeZone(event) {
        event.preventDefault();
        const timezone = ct.getCountryForTimezone(event.target.value);
        setSelectedTime(moment(new Date()).tz(event.target.value).format('MM/DD/YYYY hh:mm:ss A'));
        setCountryName(timezone.name);
    }

    function handleOnChangeCountry(event) {
        event.preventDefault();
        let str = event.target.value.split("-");
        
        if (event.target.value) {
            setSelectedCountry(event.target.value);
            var timeZonesCountryWiseList = moment.tz.zonesForCountry(str[1].toString());
           
            setTimeZones(timeZonesCountryWiseList);
        } else {
            setSelectedCountry('');
        }
        setSelectedTimeZone('');
        setSelectedTime('');
        setCountryName('');
    }

    return (
        <>
            <Container>
                <div className="main-wrapper">
                    <p className="main-title">Please Select Language and then time zone for getting specific time of selected time Zone.</p>
                    <Row>
                        <Col sm="6">
                            <Label for="countryList" className='sub-title'>Select language</Label>
                            <Input
                                onChange={handleOnChangeCountry}
                                type="select"
                                name="countryList"
                                id="countryList"
                                className='input-select'
                                value={selectedCountry}
                            >
                                <option value={''}>Select</option>
                                {localeList.map((country,index) => {
                                    return <option key={index} value={country}>{country}</option>;
                                })}
                            </Input>
                        </Col>
                        <Col sm="6">
                            <Label for="timeZone " className='sub-title'>Select TimeZone</Label>
                            <Input
                                onChange={handleChangeTimeZone}
                                type="select"
                                name="timeZone"
                                id="timeZone"
                                disabled={!selectedCountry}
                                value={selectedTimeZone}
                                className='input-select'
                            >
                                <option value={''}>Select</option>
                                {timeZones && timeZones.map((timeZone,index) => {
                                    return <option key={index} value={timeZone}>{timeZone}</option>;
                                })}
                            </Input>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col sm="6">
                            {selectedTime && <p className="sub-title">TimeZone Date & Time :</p>}
                        </Col>
                        <Col sm="6">
                            {selectedTime && <p className="sub-title">{selectedTime}</p> }
                        </Col>
                        <Col sm="6">
                            {countryName && <p className="sub-title">Country :</p>}
                        </Col>
                        <Col sm="6">
                            {countryName && <p className="sub-title">{countryName}</p>}
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}
export default LanguageSelectionComponent;