import { useState } from 'react';
import File from './File';

const Folder = ({ name, files }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="folder">
      <div onClick={() => setIsOpen(!isOpen)}>
        <strong>{isOpen ? '📂' : '📁'} {name}</strong>
      </div>
      {isOpen && (
        <div className="folder-contents">
          {files.map((file) => (
            <File key={file} name={file} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
