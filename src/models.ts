
export interface User {
  id: number; // Primary key, auto-increment
  username: string; // Unique username
  password: string; // Hashed password
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
}

export interface Machine {
  id: number; // Primary key, auto-increment
  location: string; // Location of the machine
  status: "active" | "inactive"; // Enum for machine status
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
}

export interface Session {
  id: number; // Primary key, auto-increment
  userId: number; // Foreign key to User
  machineId: number; // Foreign key to Machine
  startTime: Date; // Start time of the session
  endTime: Date; // End time of the session
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
}

export interface Treatment {
  id: number; // Primary key, auto-increment
  machineId: number; // Foreign key to Machine
  userId: number; // Foreign key to User
  settings: Record<string, unknown>; // JSON object for settings
  treatmentDate: Date; // Date of the treatment
  treatmentTime: string; // Time of the treatment (HH:mm:ss format)
  active: boolean; // Indicates if the treatment is active
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
}

export interface Payment {
  id: number; // Primary key, auto-increment
  userId: number; // Foreign key to User
  amount: number; // Decimal amount for the payment
  paymentMethod: "credit card" | "paypal" | "other"; // Enum for payment method
  paymentStatus: "pending" | "completed" | "failed"; // Enum for payment status
  createdAt: Date; // Timestamp for creation
  updatedAt: Date; // Timestamp for updates
}

export interface MachineError {
  id: number; // Primary key, auto-increment
  machineId: number; // Foreign key to Machine
  errorDetails: Record<string, unknown>; // JSON object for error details
  loggedAt: Date; // Timestamp for when the error was logged
}
