import { FaFileAlt } from 'react-icons/fa';

const File = ({ name }) => {
  return (
    <div className="file">
      <FaFileAlt /> <span>{name}</span>
    </div>
  );
};

export default File;
