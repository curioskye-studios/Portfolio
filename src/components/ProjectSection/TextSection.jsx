export default function TextSection({ data }) {
  
  return (
    <>
      <div className='separator-small' />
      <h3 className="detail-heading">{data.heading}</h3>

      <div className='separator-small' />
      
      <div className="detail-content bigger-text">
        {data.body}
      </div>     

      <div className='green-line' style={{marginTop:"-15px"}} />
      <div className='separator' />
    </>
  );
}