import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../firebase-config";

const FileUploadForm = () => {
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file!");
      return;
    }

    setIsUploading(true);

    try {
      // Upload file to Firebase Storage
      const storageRef = ref(storage, `uploads/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      setFileURL(downloadURL);

      // (Optional) Save form data and file URL to Firestore
      await addDoc(collection(db, "uploads"), {
        ...formData,
        fileURL: downloadURL,
        timestamp: new Date(),
      });

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form!");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label>File:</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Submit"}
        </button>
      </form>

      {fileURL && (
        <p>
          File uploaded successfully! View it{" "}
          <a href={fileURL} target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </p>
      )}
    </div>
  );
};

export default FileUploadForm;
