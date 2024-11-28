import Folder from './components/Folder';

const App = () => {
  const directoryStructure = {
    name: 'root',
    files: ['file1.txt', 'file2.jpg', 'file3.pdf'],
    folders: [
      {
        name: 'Documents',
        files: ['doc1.docx', 'doc2.pdf']
      },
      {
        name: 'Music',
        files: ['song1.mp3', 'song2.wav']
      }
    ]
  };

  return (
    <div>
      <Folder name={directoryStructure.name} files={directoryStructure.files} />
      {directoryStructure.folders.map((folder) => (
        <Folder key={folder.name} name={folder.name} files={folder.files} />
      ))}
    </div>
  );
};

export default App;
