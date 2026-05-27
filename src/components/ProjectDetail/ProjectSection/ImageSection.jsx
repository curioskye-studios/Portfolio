export default function ImageSection({ data, otherClasses="" }) {
  
  return (
    <>
      <div className='separator-small' />

      <div className={'detail-img-wrap ' + otherClasses}>
        <img className='detail-img ' src={data.link} alt={data.alt ? data.alt : ""} />        
      </div>  

      { 
        data.caption ? (
          <p className="img-caption text-center mt-3" > 
            {data.caption}  
          </p> 
        ) : null        
      }
      
      <div className='separator' />
    </>
  );
}