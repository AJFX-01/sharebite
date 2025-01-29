# Sharebitee Frontend 

# Project Name - ShareBite Management Frontend

This is the frontend for the Donation Management System, built using **React (Vite)**, **TypeScript**, and **Material UI**. It provides separate dashboards for **Donors, Admins, and Receivers** to manage donations efficiently.

## 🚀 Features
- Donor Dashboard: Manage donations, view history, and upload proofs.
- Admin Dashboard: Oversee donations, users, and manage site settings.
- Receiver Dashboard: Reserve donations, track receipts, and confirm deliveries.
- Authentication: Secure login and registration.
- API Integration: Communicates with the backend Django API.
- Responsive UI: Material UI components for a clean and professional design.

## 🛠 Tech Stack
- **React** (Vite for fast development)
- **TypeScript** (for type safety)
- **Material UI** (for styling and UI components)
- **React Router** (for navigation)
- **Axios** (for API requests)

## 📦 Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/frontend.git
   cd frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory with:
   ```env
   VITE_API_BASE_URL=http://localhost:8000/api
   ```
4. **Start the development server:**
   ```sh
   npm run dev
   ```

## 🔧 Project Structure
```
frontend/
│-- src/
│   │-- components/   # Reusable UI components
│   │-- helpers/      # Reusable functions
│   │-- layouts/      # Layouts
│   │-- providers/    # context providers 
│   │-- router/       # Routes setup
│   │-- schema/       # Zod Validation schemas
│   │-- themes/       # Material UI components
│   │-- types/        # Global types declaring
│   │-- pages/        # Page components (Dashboards, Auth, etc.)
│   │-- hooks/        # Custom React hooks
│   │-- context/      # Global state management
│   │-- services/     # API request functions
│   │-- utils/        # Helper functions
│-- public/           # Static assets
│-- .env              # Environment variables
│-- vite.config.ts    # Vite configuration
│-- tsconfig.json     # TypeScript configuration
```

## 📌 Available Pages
### 🔹 Donor Dashboard
- View & create donations
- Upload proof of donation
- Track donation status

### 🔹 Admin Dashboard
- Manage donations
- Approve or reject donations
- Manage users

### 🔹 Receiver Dashboard
- View available donations
- Reserve a donation
- Upload receipt after pickup

## 🔗 API Integration
- Uses Axios to fetch data from the Django backend.
- Authentication via JWT tokens stored in **localStorage**.
- Uses React Query (optional) for caching API responses.

## 🚀 Deployment
To build for production:
```sh
npm run build
```
For deployment, upload the `dist/` folder to your hosting service.

## 📄 License
This project is licensed under the MIT License.

## 📞 Contact
For support or contributions, contact [Your Name] at [opeyemi.ajegbomogun@yahoo.com].


