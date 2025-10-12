const useAuth = () => {
  const user = localStorage.getItem('token'); // Replace with your actual auth logic
  return { isAuthenticated: !!user };
};

export default useAuth;
