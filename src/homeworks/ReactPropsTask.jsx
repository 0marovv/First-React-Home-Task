import React from 'react';

function ReactPropsTask({adi, muellif, sehife}) {
  return (
    <>
      <div>
        <h3>Kitabın adı: {adi}</h3>
        <p>Müəllif: {muellif}</p>
        <p>Səhifə: {sehife}</p>
      </div>
    </>
  );
}

export default ReactPropsTask;
