import React from 'react';
import styled from 'styled-components';

export default function Title({ name, title }) {
  return (
    <TitleWrapper>
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
.text-blue {
  color: orange;
}
`
