import React from 'react';
import Header from './Header';
export default function OnlyRender(props) {
  const names = props.match.path;
  const renderName = () => {
    if (names === '/e3/ventilation') {
      return 'Ventilation';
    } else if (names === '/e3/cooling') {
      return 'Cooling';
    } else if (names === '/e3/ooh') {
      return 'Out Of Hours';
    } else if (names === '/e3/evcharging') {
      return 'Ev Charging';
    } else if (names === '/e3/looadshifting') {
      return 'Load Shifting';
    } else if (names === '/Demand') {
      return 'Demand Response';
    } else if (names === '/insights') {
      return 'Insights';
    } else if (names === '/versionhistory') {
      return 'Version History';
    } else if (names === '/e3') {
      return 'E3-Apps';
    } else if (names === '/dashboard') {
      return 'Dashboard';
    }
  };
  return <Header name={renderName()} />;
}
