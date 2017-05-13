import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine }  from 'react-sparklines';

export default (props) => {
  const average = (data) => {
    return (data.reduce((last, next) => last + next)/data.length).toFixed();
  }

  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
