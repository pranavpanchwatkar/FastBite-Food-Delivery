import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check local storage for persistent login (simulated)
        const storedUser = localStorage.getItem('fastbite_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email, password) => {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === "user@example.com" && password === "password") {
                    const dummyUser = { id: 1, name: "Test User", email: email };
                    setUser(dummyUser);
                    localStorage.setItem('fastbite_user', JSON.stringify(dummyUser));
                    resolve(dummyUser);
                } else {
                    reject(new Error("Invalid credentials. Try user@example.com / password"));
                }
            }, 1000);
        });
    };

    const signup = async (name, email, password) => {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const dummyUser = { id: Date.now(), name, email };
                setUser(dummyUser);
                localStorage.setItem('fastbite_user', JSON.stringify(dummyUser));
                resolve(dummyUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('fastbite_user');
    };

    const value = {
        user,
        login,
        signup,
        logout,
        isLoading
    };

    return (
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
};
