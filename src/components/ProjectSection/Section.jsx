import TextSection from "./TextSection";

export default function Section({ data }) {
  return (
    <>
      <div className='separator-small' />
      <h3 className="detail-heading">{data.heading}</h3>

      <div className='separator-small' />
      
      <div className="detail-content bigger-text">
        {data.body}
      </div>
    </>
  );
}

// export default function Section({ data }) {
//   switch (data.type) {
//     case 'text':       return <TextSection data={data} />;
//     case 'image':      return <ImageSection data={data} />;
//     case 'image-text': return <ImageTextSection data={data} />;
//     case 'list':       return <ListSection data={data} />;
//     default:           return null;
//   }
// }