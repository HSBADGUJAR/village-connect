import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Add your login logic here (authentication, API calls, etc.)
        
        // After successful login, redirect to home
        navigate('/'); // Redirects to home page
      };
      return (
        <div className="flex justify-center items-center h-screen bg-green-50">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input 
              type="email" 
              placeholder="Email" 
              className="border p-2 w-full mb-4" 
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="border p-2 w-full mb-4" 
              required
            />
            <button 
              type="submit" 
              className="bg-green-700 text-white p-2 w-full hover:bg-green-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      );
  }
  