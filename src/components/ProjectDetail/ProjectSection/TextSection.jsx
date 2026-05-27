import ToggleButton from "../../ToggleButton/ToggleButton";
import { useState, useRef, useContext } from "react";

import { SectionRefsContext } from '../../../pages/ProjectDetail/SectionRefsContext';

export default function TextSection({ data }) {
  const [summaryOn, setSummaryOn] = useState(true);
  const sectionRefs = useContext(SectionRefsContext);

  const hasSummary = Boolean(data.summary);
  const hasReference = Boolean(data.reference);

  const summary = hasSummary ? 
    data.summary : (
      <div className="padded-fully">
        No summary available yet.      
      </div>       
    );

  return (
    <>
      {
        hasReference && (
          <div 
            className="hidden" 
            ref={(el) => sectionRefs.current[data.reference] = el} 
          />
        )
      }

      {
        hasSummary ? (
          <ToggleButton 
            label="Summarized" 
            isOn={summaryOn} 
            onChange={setSummaryOn} 
            style={{marginRight: "25px"}}
          />
        )
        : null
      }      

      <div className='separator-small' style={{marginTop:"15px"}} />

      <h3 className="detail-heading">{data.heading}</h3>
      
      <div className='separator-small' />

      {
        hasSummary ? (
          <div className="detail-content bigger-text">
            { 
              summaryOn ? 
                summary : data.body 
            }          
          </div> 
        ) : (          
          <div className="detail-content bigger-text">
            { data.body }
          </div> 
        )       
      }
            
      <div className='green-line' style={{marginTop:"-15px"}} />

      <div className='separator' />
    </>
  );
}