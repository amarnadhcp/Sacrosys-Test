//  utility for authentication
export const isAuthenticated = () => {
    const authToken = localStorage.getItem("authToken");
    const expirationTime = localStorage.getItem("authTokenExpiration");
    const currentTime = Date.now();
  
    // Checking if the authToken, expirationTime, and within the 4-minute limit
    return authToken && expirationTime && currentTime < parseInt(expirationTime, 10);
  };
  