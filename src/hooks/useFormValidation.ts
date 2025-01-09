import { z } from 'zod';
import { useState } from 'react';

type ValidationError = { [key: string]: string };

export const useFormValidation = <T extends Record<string, unknown>>(
  schema: z.ZodSchema<T>,
) => {
  const [errors, setErrors] = useState<ValidationError>({});

  const validate = (formData: T): boolean => {
    const result = schema.safeParse(formData);
    if (!result.success) {
      const newErrors: ValidationError = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path.join('.');
        newErrors[path] = issue.message;
      });
      // result.error.errors.forEach((err) => {
      //   if (err.path[0]) {
      //     newErrors[err.path[0] as string] = err.message;
      //   }
      // });
      setErrors(newErrors);
      return false;
    }
    setErrors({}); // Clear errors if validation succeeds
    return true;
  };

  return {
    errors,
    validate,
  };
};
