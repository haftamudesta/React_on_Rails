import ReactQuill from "react-quill"
const RitchTextViewer = ({content}) => {
  return (
        <>
        {/* <div dangerouslySetInnerHTML={{__html: content}}/> */}
        <ReactQuill
        value={content}
        readOnly={true}
        theme="bubble"
        />
      
        </>
  )
}

export default RitchTextViewer