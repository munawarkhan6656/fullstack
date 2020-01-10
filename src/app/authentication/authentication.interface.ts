// Login Test Case Interfaces

export interface AuthRequest {
    username: string;
    password: string;
  }

export interface AuthResponse {
    access_token: string;
}
