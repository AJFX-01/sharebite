import React, { useState, useRef } from 'react';
import { Card } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import ApiRequests from 'api';
import toast from 'react-hot-toast';

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageUpload,
  id,
  userid,
  mode,
}) => {
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadProofMutation = useMutation({
    mutationFn: ApiRequests.uploadFile,
    onSuccess() {
      toast.success('Upload successful!', { id: 'asyntoast' });
    },
    onError(error) {
      toast.error(error.message, { id: 'asyntoast' });
    },
  });

  const uploadRecieptMutation = useMutation({
    mutationFn: ApiRequests.uploadFileReceipt,
    onSuccess() {
      toast.success('Upload successful!', { id: 'asyntoast' });
    },
    onError(error) {
      toast.error(error.message, { id: 'asyntoast' });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const url = reader.result as string;
        setLogo(url); // Update the state with the image URL
        if (onImageUpload) onImageUpload(url); // Trigger callback if passed
      };
      reader.readAsDataURL(file); // Convert the image to a data URL
      toast.loading('Uploading...', { id: 'asyntoast' });
      if (mode === 'proof') {
        uploadProofMutation.mutate({
          proof_image: file,
          donation: id,
          uploaded_by: userid,
        });
      } else {
        uploadRecieptMutation.mutate({
          user: userid,
          proof_image: file,
          donation: id,
        });
      }
    } else {
      toast.error('No file was selected');
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click(); // Trigger the hidden file input
  };

  return (
    <div style={styles.container}>
      {/* Upload Button */}
      <div style={styles.uploadSection} onClick={handleUploadClick}>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={styles.fileInput}
        />
        <p style={styles.uploadText}>
          {mode === 'proof'
            ? 'Click to upload your donation proof'
            : 'Click to upload your pickup proof'}
        </p>
      </div>

      <Card
        sx={{
          border: 1,
          borderColor: 'action.focus',
          padding: '15px',
          width: '30%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* Logo Preview Section */}
        <div style={styles.previewSection}>
          {logo ? (
            <img src={logo} alt="Uploaded Logo" style={styles.logoPreview} />
          ) : (
            <p style={styles.placeholder}>No proof uploaded yet</p>
          )}
        </div>
      </Card>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
  },
  uploadSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px dashed #c7ebfc',
    padding: '15px',
    borderRadius: '10px', // Space between button and preview
    cursor: 'pointer',
    color: '#c7ebfc',
  },
  fileInput: {
    display: 'none', // Hide the default file input
  },
  uploadText: {
    fontSize: '14px',
    cursor: 'pointer',
    color: '#c7ebfc',
  },
  previewSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '150px',
    backgroundColor: '#f4f4f4',
    borderRadius: '100%',
    minHeight: '150px',
  },
  placeholder: {
    color: '#888',
    fontSize: '16px',
    textAlign: 'center',
  },
  logoPreview: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    // borderRadius: '100%',
  },
};

export default ImageUpload;
