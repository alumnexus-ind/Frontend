// This is a placeholder service. 
// In the future, this will call endpoints from api.js

const authService = {
    login: async (email, password) => {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Simulate successful login
        if (email && password) {
            const mockToken = "mock-jwt-token-xyz-123";
            const mockUser = {
                id: 1,
                name: "Test User",
                email: email,
                role: "student" // or 'admin', 'instructor'
            };

            localStorage.setItem('token', mockToken);
            localStorage.setItem('user', JSON.stringify(mockUser));

            return { user: mockUser, token: mockToken };
        } else {
            throw new Error("Invalid credentials");
        }
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        if (userStr) return JSON.parse(userStr);
        return null;
    },

    getToken: () => {
        return localStorage.getItem('token');
    }
};

export default authService;
