import React from 'react';

const IconInfo = (props) => {
    const srcImg = props.srcImg;
    const data = props.data;
    const team = props.team;

    const switchColorTeam = (team) => {
        switch (team) {
          case 'Éducative': {
            return ( "border border-primary rounded-circle" )
          }
          case 'Médical': {
            return ( "border border-success rounded-circle" )
          }
          case '': {
            return { "backgroundColor": "#e826b1" }
          }
          default:
            return { "backgroundColor": "#e826b1" }
        }
      }

    return (
        <>
            <div class="container">
                <div class="tooltip--right" data-tooltip={data}>
                    <img
                        // style={{marginLeft:"-10px"}}
                        alt=""
                        src={srcImg}
                        width="40"
                        height="40"
                        
                        class={switchColorTeam(team)}
                    />
                </div>
            </div>
        </>
    );
};

export default IconInfo;