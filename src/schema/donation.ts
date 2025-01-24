import { z } from 'zod';

class DonationSchemas {
  static makeDonation = z.object({
    title: z.string().min(3, 'title must be provided'),
    description: z.string().min(5, 'description must be provided'),
    location: z.string().min(5, 'location must be provided'),
  });
}

export default DonationSchemas;
