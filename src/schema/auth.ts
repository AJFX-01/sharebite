import { z } from 'zod';

class AuthSchemas {
  static loginSchema = z.object({
    username: z
      .string()
      .min(3, 'Username must be provided')
      .max(30, 'Username must not exceed 30 characters'),
    password: z
      .string()
      .min(5, 'Password must be provided')
      .max(50, 'Password must not exceed 50 characters'),
  });

  static signupSchema = z
    .object({
      first_name: z
        .string()
        .min(2, 'First name is required and must have at least 2 characters')
        .max(30, 'First name must not exceed 30 characters'),
      last_name: z
        .string()
        .min(2, 'Last name is required and must have at least 2 characters')
        .max(30, 'Last name must not exceed 30 characters'),
      username: z
        .string()
        .min(3, 'Username is required and must have at least 3 characters')
        .max(30, 'Username must not exceed 30 characters'),
      is_donor: z.union([z.string(), z.boolean()]),
      is_receiver: z.union([z.string(), z.boolean()]),
      role: z.union([
        z.string().min(1, 'must select at least an option'),
        z.undefined(),
      ]),
      email: z.string().email('Invalid email address'),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters long')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/\d/, 'Password must contain at least one number')
        .regex(
          /[@$!%*?&]/,
          'Password must contain at least one special character',
        ),
      confirmpassword: z.string(),
    })
    .refine((data) => data.password === data.confirmpassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    });

  static setupOrganizationSchema = z.object({
    name: z
      .string()
      .min(
        2,
        'Organization name is required and must have at least 2 characters',
      )
      .max(30, 'Organization name must not exceed 30 characters'),
    domain: z
      .string()
      .min(2, 'Domain is required and must have at least 2 characters')
      .max(30, 'Domain must not exceed 30 characters'),
    description: z
      .string()
      .min(2, 'Description is required and must have at least 2 characters')
      .max(255, 'Description must not exceed 255 characters'),
  });

  static editprofileSchema = z.object({
    first_name: z
      .string()
      .min(2, 'First name is required and must have at least 2 characters')
      .max(30, 'First name must not exceed 30 characters'),
    last_name: z
      .string()
      .min(2, 'Last name is required and must have at least 2 characters')
      .max(30, 'Last name must not exceed 30 characters'),
    username: z
      .string()
      .min(3, 'Username is required and must have at least 3 characters')
      .max(30, 'Username must not exceed 30 characters'),
    email: z.string().email('Invalid email address'),
  });
}

export default AuthSchemas;
