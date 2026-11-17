import { ClipLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <ClipLoader
        color="#36d7b7"
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
      />
    </div>
  );
}

export default Spinner
