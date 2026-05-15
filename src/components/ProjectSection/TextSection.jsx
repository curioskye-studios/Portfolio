export default function TextSection({ data }) {
  return (
    <>
      <h3>{data.heading}</h3>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
    </>
  );
}