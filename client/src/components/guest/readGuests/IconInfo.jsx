import React from 'react';

const IconInfo = (props) => {
    const propsData = {...props};

    const switchColorTeam = (team) => {
        switch (team) {
          case 'Éducative': {
            return ( "border border-primary rounded-circle" )
          }
          case 'Médical': {
            return ( "border border-success rounded-circle" )
          }
          default:
            return null
        }
      }

    return (
        <>
            <div class="container">
                <div class="tooltip--right" data-tooltip={propsData.data}>
                    <img
                        alt=""
                        src={propsData.srcImg}
                        width="40"
                        height="40"
                        class={switchColorTeam(propsData.team)}
                    />
                </div>
            </div>
        </>
    );
};

export default IconInfo;