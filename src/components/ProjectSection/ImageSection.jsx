export default function ImageSection({ data }) {
  
  return (
    <>
      <div className='separator-small' />

      <div className='detail-img-wrap'>
        <img className='detail-img' src={data.link} />        
      </div>  

      <p class="img-caption text-center mt-3 mb-5" > 
        {data.caption}  
      </p>
    </>
  );
}