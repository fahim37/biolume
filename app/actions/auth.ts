"use server"

const API_BASE_URL = "http://localhost:5000/api/v1"

export async function registerUser(userData: {
  name: string
  email: string
  password: string
}) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    const data = await response.json()

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Registration failed",
      }
    }

    return {
      success: true,
      data: data.user,
    }
  } catch (error) {
    console.error("Registration error:", error)
    return {
      success: false,
      message: "An error occurred during registration",
    }
  }
}

export async function loginUser(credentials: {
  email: string
  password: string
}) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
      return {
        success: false,
        message: data.message || "Login failed",
      }
    }

    return {
      success: true,
      data: data.user,
      token: data.token,
    }
  } catch (error) {
    console.error("Login error:", error)
    return {
      success: false,
      message: "An error occurred during login",
    }
  }
}

export async function changePassword(userData: {
  userId: string
  oldPassword: string
  newPassword: string
}) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
      return {
        success: false,
        message: data.message || "Password change failed",
      }
    }

    return {
      success: true,
      message: "Password changed successfully",
    }
  } catch (error) {
    console.error("Password change error:", error)
    return {
      success: false,
      message: "An error occurred during password change",
    }
  }
}
