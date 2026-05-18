import Toggle from "../Toggle/Toggle";
import { useState } from "react";

export default function TextSection({ data }) {
  const [summaryOn, setSummaryOn] = useState(true);

  const summary = data.summary ? 
    data.summary : (
      <div className="padded-fully">
        No summary available yet.      
      </div>       
    );

  return (
    <>

      <h3 className="detail-heading">{data.heading}</h3>

      <div className='separator-small' />

      <Toggle label="Summarized" on={summaryOn} onChange={setSummaryOn} />
      
      <div className='separator-small' style={{marginTop:"15px"}} />
            
      <div className="detail-content bigger-text">
        { 
          summaryOn ? 
            summary : data.body 
        }          
      </div> 
      
      <div className='green-line' style={{marginTop:"-15px"}} />
      <div className='separator' />
    </>
  );
}