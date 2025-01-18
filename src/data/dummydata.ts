const users: User[] = [
  {
    id: 1,
    username: 'john_doe',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@example.com',
    is_donor: true,
    is_reciever: false,
  },
  {
    id: 2,
    username: 'jane_smith',
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'jane@example.com',
    is_donor: false,
    is_reciever: true,
  },
  {
    id: 3,
    username: 'mike_jones',
    first_name: 'Mike',
    last_name: 'Jones',
    email: 'mike@example.com',
    is_donor: true,
    is_reciever: false,
  },
  {
    id: 4,
    username: 'susan_lee',
    first_name: 'Susan',
    last_name: 'Lee',
    email: 'susan@example.com',
    is_donor: true,
    is_reciever: true,
  },
  {
    id: 5,
    username: 'alex_kim',
    first_name: 'Alex',
    last_name: 'Kim',
    email: 'alex@example.com',
    is_donor: false,
    is_reciever: true,
  },
];

const donations: Donation[] = [
  {
    id: 1,
    donor: users[0],
    title: 'Canned Food Pack',
    description: 'A box of canned food for families in need.',
    location: 'New York, NY',
    is_reserved: true,
    is_deleivered: false,
    created_at: '2025-01-15T14:30:00Z',
    reserved_by: users[1],
    proof: undefined,
  },
  {
    id: 2,
    donor: users[2],
    title: 'Winter Clothes',
    description: 'Warm clothes suitable for children and adults.',
    location: 'San Francisco, CA',
    is_reserved: false,
    is_deleivered: false,
    created_at: '2025-01-10T10:15:00Z',
    reserved_by: users[3],
    proof: undefined,
  },
  {
    id: 3,
    donor: users[4],
    title: 'Bags of Rice',
    description: '20kg bags of rice available for donation.',
    location: 'Chicago, IL',
    is_reserved: true,
    is_deleivered: true,
    created_at: '2025-01-01T12:00:00Z',
    reserved_by: users[1],
    proof: {
      id: 1,
      donation: undefined as any, // Placeholder to avoid circular reference
      proof_image: 'https://example.com/proof_image1.jpg',
      uploaded_by: users[0],
    },
  },
];

donations[2].proof!.donation = donations[2]; // Resolve circular reference

const proofs: Proof[] = [
  {
    id: 1,
    donation: donations[2],
    proof_image: 'https://example.com/proof_image1.jpg',
    uploaded_by: users[0],
  },
];

console.log(users, donations, proofs);
