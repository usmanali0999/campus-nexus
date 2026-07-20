import { useAuthStore } from "@/store/useAuthStore";

export function useAuth() {
  const { user, isAuthenticated, isLoading, login, logout, setLoading } =
    useAuthStore();

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    setLoading,
    isAdmin: user?.role === "admin",
    isFaculty: user?.role === "faculty",
    isStudent: user?.role === "student",
  };
}