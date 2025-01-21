// import { Button, Grid, TextField, Typography } from '@mui/material';
// import { useFormValidation } from 'hooks/useFormValidation';
// import { useBreakpoints } from 'providers/useBreakpoints';
// import { useState } from 'react';
// import AuthSchemas from 'schema/auth';

// const ProfileForm = () => {
//   const { up } = useBreakpoints();
//   const upSM = up('sm');
//   const [formData, setFornData] = useState<SignupFormData>({
//     username: '',
//     first_name: '',
//     last_name: '',
//     email: '',
//     password: '',
//     confirmpassword: '',
//   });

//   const { errors, validate } = useFormValidation(AuthSchemas.signupSchema);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setFornData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   return (
//     <>
//       <Grid container spacing={3} sx={{ mb: 2.5 }}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             size={upSM ? 'medium' : 'small'}
//             name="first_name"
//             label="First Name"
//             value={formData.first_name}
//             onChange={handleChange}
//           />
//           {errors.firstname && (
//             <Typography sx={{ color: 'red', fontSize: '10px' }}>
//               {errors.firstname}
//             </Typography>
//           )}
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             size={upSM ? 'medium' : 'small'}
//             name="last_name"
//             label="Last Name"
//             value={formData.last_name}
//             onChange={handleChange}
//           />
//           {errors.lastname && (
//             <Typography sx={{ color: 'red', fontSize: '10px' }}>
//               {errors.lastname}
//             </Typography>
//           )}
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             size={upSM ? 'medium' : 'small'}
//             name="email"
//             label="Email address"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && (
//             <Typography sx={{ color: 'red', fontSize: '10px' }}>
//               {errors.email}
//             </Typography>
//           )}
//         </Grid>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             size={upSM ? 'medium' : 'small'}
//             name="username"
//             label="Username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//           {errors.username && (
//             <Typography sx={{ color: 'red', fontSize: '10px' }}>
//               {errors.username}
//             </Typography>
//           )}
//         </Grid>
//       </Grid>
//       <Button
//         fullWidth
//         size={upSM ? 'large' : 'medium'}
//         sx={{
//           fontSize: 12,
//         }}
//         type="submit"
//         variant="contained"
//         color="primary"
//         onClick={() => {}}
//       >
//         Edit Profile
//       </Button>
//     </>
//   );
// };

// export default ProfileForm;
