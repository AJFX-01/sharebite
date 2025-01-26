import { Card } from '@mui/material';

interface ImagePreProps {
  logo?: string;
}
const ImagePreview = ({ logo }: ImagePreProps) => {
  return (
    <Card
      sx={{
        border: 1,
        borderColor: 'action.focus',
        padding: '15px',
        width: '70%',
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
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  previewSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
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
    height: '200px',
    objectFit: 'cover',
    // borderRadius: '100%',
  },
};

export default ImagePreview;
