import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import HeaderBg from '../../assets/pattern-bg.png';
import './Header.css';

const Header = (props) => {
  const [ search, setSearch ] = useState('');
  const { setPosition } = props;

  const handleSearch = () => {
    if (search.startsWith('www.')) {
      fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_l5Gt8b7a67zDPs2QcuUnGfYu94fmw&domain=${search}`)
      .then((jsonData) => jsonData.json())
      .then((data) => {
        console.log(data);
        setPosition((prevState) => [ data.location.lat, data.location.lng ]);
      })
      .catch((err) => console.log(err));
      return;
    }
    fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_l5Gt8b7a67zDPs2QcuUnGfYu94fmw&ipAddress=${search}`)
      .then((jsonData) => jsonData.json())
      .then((data) => {
        console.log(data);
        return setPosition([ data.location.lat, data.location.lng ]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <header className="header" style={{backgroundImage: `url(${HeaderBg})`}}>
      <h1 className='title'>IP Address Tracker</h1>
      <section className="search-box">
        <input
          type="text"
          className="search"
          id="search"
          name="search"
          placeholder='Search for any API address or domain'
          onInput={(e) => setSearch(e.target.value)}
        />
        <section className='icon' onClick={handleSearch}>
          <FaAngleRight className="right-arrow-icon" />
        </section>
      </section>
    </header>
  );
}

export default Header;
